'use client'

import { Button } from './ui/button'
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog'
import { signOut } from '@/auth/hooks'
import { useRouter } from 'next/navigation'

export function SignOutDialog() {
  const router = useRouter()

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Sign Out?</DialogTitle>
        <DialogDescription>
          This will sign you out of the system.
        </DialogDescription>
      </DialogHeader>
      <div className="flex items-center justify-center gap-4">
        <DialogClose asChild>
          <Button className="w-full rounded-xl" variant="secondary">
            Go Back
          </Button>
        </DialogClose>
        <Button className="w-full rounded-xl" onClick={() => signOut(router)}>
          Yes
        </Button>
      </div>
    </DialogContent>
  )
}
