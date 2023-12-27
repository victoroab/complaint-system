import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from '@/components/ui/card'
import { LockKeyhole } from 'lucide-react'
import { BackButton } from './back-button'

export function FormShell({
  user,
  children,
}: {
  user: string
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="border rounded-xl h-auto p-12">
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
