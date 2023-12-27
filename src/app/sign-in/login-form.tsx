'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { User, KeyRound } from 'lucide-react'

export function LoginForm({ userType }: { userType: string }) {
  return (
    <div className="flex flex-col p-6 gap-5">
      <span className="flex items-center gap-3">
        <User />
        <Input placeholder="email" />
      </span>
      <span className="flex items-center gap-3">
        <KeyRound />
        <Input placeholder="password" type="password" />
      </span>
      <Button className="flex items-center gap-3 mt-2">Sign in</Button>
    </div>
  )
}
