'use client'

import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Label } from '@/components/ui/label'
import { uploadImage } from './functions'

export function ImageSection() {
  async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files) {
      const { data, error } = await uploadImage(e.target.files[0]!)
      console.log(data)
      if (error) {
        console.error(error)
      }
    }
  }

  return (
    <div className="w-full h-full flex flex-wrap items-center justify-start gap-6">
      <Avatar className="size-52 border rounded-xl">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>Image</AvatarFallback>
      </Avatar>
      <div className="flex flex-col items-start gap-3">
        <Label
          htmlFor="file"
          className="cursor-pointer bg-primary p-3 rounded-xl hover:bg-primary-foreground"
        >
          Change Picture
        </Label>
        <input
          className="hidden"
          type="file"
          id="file"
          onChange={(e) => handleChange(e)}
        />
        <span className="text-sm text-muted-foreground">
          JPG, JPEG or PNG, 2MB max.
        </span>
      </div>
    </div>
  )
}
