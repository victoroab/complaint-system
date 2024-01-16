'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from '@/components/ui/card'
import { LockKeyhole } from 'lucide-react'
import { BackButton } from './buttons'
import { usePreventDoubleSignIn } from '@/auth/useAuth'

export function FormShell({
  user,
  children,
}: {
  user: string
  children: React.ReactNode
}) {
  usePreventDoubleSignIn()
  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="border rounded-xl h-auto p-5">
        <BackButton />
        <Card className="rounded-xl mt-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              {user} <LockKeyhole />
            </CardTitle>
            <CardDescription className="pt-2">
              Enter your credentials
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">{children}</CardContent>
        </Card>
      </div>
    </main>
  )
}
