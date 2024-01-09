'use client'

import { createContext, useState, useEffect } from 'react'
import { supabase } from '@/lib/auth'

export const AuthContext = createContext<any | null>(null)

type Props = {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: Props) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('session_key', JSON.stringify(session))
      }
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('session_key', JSON.stringify(session))
      }
    })

    setLoading(false)

    return () => subscription.unsubscribe()
  }, [])

  let session

  if (typeof window !== 'undefined' && window.localStorage) {
    session = JSON.parse(localStorage.getItem('session_key')!)
  }

  return (
    <AuthContext.Provider value={session}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
