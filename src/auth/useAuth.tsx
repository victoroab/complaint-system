'use client'

import { redirect } from 'next/navigation'
import { useContext } from 'react'
import { AuthContext } from '@/auth/AuthProvider'
import type { Session } from '@/auth/types'
import { usePathname } from 'next/navigation'

export function useAuth() {
  const session: Session = useContext(AuthContext)

  if (!session.userType) {
    redirect('/')
  }
}

export function usePreventDoubleSignIn() {
  const session: Session = useContext(AuthContext)
  const pathname = usePathname()
  if (session.access_token) {
    redirect('/dashboard')
  }

  if (session.access_token && pathname === '/') redirect('/dashboard')
}

export function useGetEmail() {
  const session: Session = useContext(AuthContext)
  return session?.email
}

export function useGetUserType() {
  const session: Session = useContext(AuthContext)
  return session?.userType?.toUpperCase() as 'STUDENT' | 'STAFF' | 'PERSONNEL'
}
