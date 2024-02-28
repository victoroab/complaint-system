'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import {
  uploadImage,
  constructUrl,
  updateImageUrl,
  fetchImageUrl,
  UploadParams,
} from './functions'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useGetEmail, useGetUserType } from '@/auth/hooks'

export function ImageSection() {
  const email = useGetEmail()
  const usertype = useGetUserType()?.toLowerCase() as UploadParams['usertype']

  const qc = useQueryClient()

  const imageUrlQuery = useQuery({
    queryKey: ['image'],
    queryFn: () => fetchImageUrl({ email, usertype }),
  })

  const updateUrlMutation = useMutation({
    mutationFn: updateImageUrl,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['image'] })
    },
  })

  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.files) {
      throw new Error('No file Uploaded')
    }
    const { data, error } = await uploadImage(e.target.files[0]!)

    if (!data) {
      throw new Error('No data from request')
    }

    const publicUrl = constructUrl(data.path.slice(11))

    if (imageUrlQuery.data.id) {
      updateUrlMutation.mutate({
        id: imageUrlQuery.data.id,
        publicUrl,
        usertype,
      })
    }
  }

  return (
    <div className="w-full h-full flex flex-wrap items-center justify-start gap-6">
      <Avatar className="size-52 border rounded-2xl">
        <AvatarImage src={imageUrlQuery.data?.picture?.url} />
        <AvatarFallback>Image</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start gap-3">
        <Label
          htmlFor="file"
          className={`cursor-pointer ${
            imageUrlQuery.isLoading ? 'hidden' : ''
          } bg-primary p-3 rounded-xl hover:bg-primary-foreground text-white`}
        >
          Change Picture
        </Label>
        <input
          className="hidden"
          type="file"
          id="file"
          onChange={(e) => handleChange(e)}
          disabled={imageUrlQuery.isLoading}
        />
        <span className="text-sm text-muted-foreground">
          JPG, JPEG or PNG, 2MB max.
        </span>
      </div>
    </div>
  )
}
