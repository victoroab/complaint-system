'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeft } from 'lucide-react'

import { cn } from '@/lib/utils'

export function BackButton({ className }: { className?: string }) {
  const router = useRouter()
  return (
    <span
      className={cn(
        'cursor-pointer flex items-center justify-center gap-2 hover:text-primary',
        className
      )}
      onClick={() => {
        router.back()
      }}
    >
      <ArrowLeft />
      back
    </span>
  )
}
