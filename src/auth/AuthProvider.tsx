'use client'

import { createContext, useState, useEffect } from 'react'
import { supabase } from '@/lib/auth'

export const AuthContext = createContext<any | null>(null)

type Props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(true)
  // fetch the user type from local storage and sign out if not found or null

  async function checkUserType() {
    if (typeof window !== 'undefined' && window.localStorage) {
      !JSON.parse(localStorage.getItem('user_type')!) ??
        (await supabase.auth.signOut())
    }
  }

  checkUserType()

  useEffect(() => {
    setLoading(true)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(
          'session_key',
          JSON.stringify({
            access_token: session?.access_token,
            email: session?.user.email,
          })
        )
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem(
          'session_key',
          JSON.stringify({
            access_token: session?.access_token,
            email: session?.user.email,
          })
        )
      }
    })

    setLoading(false)

    return () => subscription.unsubscribe()
  }, [])

  let session, userType

  if (typeof window !== 'undefined' && window.localStorage) {
    session = JSON.parse(localStorage.getItem('session_key')!)
    userType = JSON.parse(localStorage.getItem('user_type')!)

    session = { ...session, userType }
  }

  return (
    <AuthContext.Provider value={session}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
