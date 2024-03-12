'use client'

import { redirect } from 'next/navigation'
import { useContext } from 'react'
import { AuthContext } from '@/auth/AuthProvider'
import type { Session } from '@/auth/types'
import { usePathname } from 'next/navigation'
import { supabase } from '@/lib/auth'
import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime'

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

export async function signOut(router: AppRouterInstance) {
  await supabase.auth.signOut()

  if (typeof window !== 'undefined' && window.localStorage) {
    localStorage.removeItem('session_key')
    localStorage.removeItem('user_type')
  }

  router.refresh()
}

export async function signIn({
  router,
  email,
  password,
  userType,
}: {
  router: AppRouterInstance
  email: string
  password: string
  userType: string
}) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  })

  if (error) {
    throw new Error(error.message)
  }

  if (data.session && typeof window !== 'undefined' && window.localStorage) {
    localStorage.setItem('user_type', JSON.stringify(userType))
  }
  // router.replace('/dashboard')
  router.refresh()
}
