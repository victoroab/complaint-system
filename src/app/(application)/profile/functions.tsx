import { supabase } from '@/lib/auth'
import { Axios } from '@/lib/axios'
import { v4 as uuidv4 } from 'uuid'

const BUCKET_NAME = process.env.NEXT_PUBLIC_SUPABASE_BUCKET_NAME as string
const PROJECT_ID = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_ID as string

export type UploadParams = {
  id: string
  publicUrl: string
  usertype: 'student' | 'staff' | 'personnel'
}

export async function uploadImage(image: File) {
  const { data, error } = await supabase.storage
    .from('profile-pictures')
    .upload(`foldername/${uuidv4()}`, image, {
      upsert: true,
    })
  return { data, error }
}

export function constructUrl(assetName: string) {
  return `https://${PROJECT_ID}.supabase.co/storage/v1/object/public/${BUCKET_NAME}/foldername/${assetName}`
}

export async function updateImageUrl({
  id,
  publicUrl,
  usertype,
}: UploadParams) {
  try {
    const res = await Axios.put(
      `/upload?usertype=${usertype}`,
      {
        id,
        publicUrl,
      },
      { withCredentials: true }
    )

    return res.data
  } catch (e) {
    console.error(e)
  }
}

export async function fetchImageUrl({
  email,
  usertype,
}: {
  email: string
  usertype: UploadParams['usertype']
}) {
  try {
    const res = await Axios.get(
      `/image-url?usertype=${usertype}&email=${email}`,
      { withCredentials: true }
    )
    return res.data
  } catch (e) {
    console.error(e)
  }
}
