'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftSquare } from 'lucide-react'

export function BackButton() {
  const router = useRouter()
  return (
    <span
      className="flex items-center gap-3 cursor-pointer hover:text-ring"
      onClick={() => router.replace('/')}
    >
      <ArrowLeftSquare />
      Back
    </span>
  )
}
