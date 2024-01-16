'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, KeyRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { FormEvent, useRef } from 'react'
import { supabase } from '@/lib/auth'

export function LoginForm({ userType }: { userType: string }) {
  const router = useRouter()

  const emailRef = useRef<any>(null)
  const passwordRef = useRef<any>(null)

  async function signInWithEmail() {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: emailRef?.current?.value,
      password: passwordRef?.current?.value,
    })

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('user_type', JSON.stringify(userType))
    }

    router.replace('/dashboard')
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    await signInWithEmail()
  }
  return (
    <form className="flex flex-col p-6 gap-5 w-full" onSubmit={onSubmit}>
      <span className="flex items-center gap-3">
        <User className="max-[530px]:hidden" />
        <Input placeholder="email" ref={emailRef} />
      </span>
      <span className="flex items-center gap-3">
        <KeyRound className="max-[530px]:hidden" />
        <Input placeholder="password" type="password" ref={passwordRef} />
      </span>
      <Button className="flex items-center gap-3 mt-2 rounded-xl" type="submit">
        Sign in
      </Button>
    </form>
  )
}
