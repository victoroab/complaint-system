'use client'
import { usePreventDoubleSignIn } from '@/auth/hooks'

export function ReturnGuardProvider({
  children,
}: {
  children: React.ReactNode
}) {
  usePreventDoubleSignIn()
  return <div>{children}</div>
}
