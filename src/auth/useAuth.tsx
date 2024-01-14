'use client'

import { redirect } from 'next/navigation'
import { useContext } from 'react'
import { AuthContext } from '@/auth/AuthProvider'
import type { Session } from '@/auth/types'
import type { User } from '@/app/(application)/complaints/table-data'

export function useAuth() {
  const session: Session = useContext(AuthContext)

  if (!session.userType) {
    redirect('/')
  }
}

export function useGetEmail() {
  const session: Session = useContext(AuthContext)
  return session.email
}

export function useGetUserType() {
  const session: Session = useContext(AuthContext)
  return session.userType.toUpperCase() as 'STUDENT' | 'STAFF' | 'PERSONNEL'
}
