'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

export function BackButton() {
  const router = useRouter()
  return (
    <span
      className="cursor-pointer flex items-center justify-center gap-2 hover:text-primary"
      onClick={() => {
        router.back()
      }}
    >
      <ArrowLeft />
      back
    </span>
  )
}
