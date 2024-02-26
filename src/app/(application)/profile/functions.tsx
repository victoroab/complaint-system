import { supabase } from '@/lib/auth'
export async function uploadImage(image: File) {
  const { data, error } = await supabase.storage
    .from('profile-pictures')
    .upload('foldername/uniqueid', image, {
      upsert: true,
    })
  return { data, error }
}
