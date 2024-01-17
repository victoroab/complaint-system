'use client'
import { usePreventDoubleSignIn } from '@/auth/useAuth'

export function ReturnGuardProvider({
  children,
}: {
  children: React.ReactNode
}) {
  usePreventDoubleSignIn()
  return <div>{children}</div>
}
