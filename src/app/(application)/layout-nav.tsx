'use client'

import Image from 'next/image'
import logo from '../../../public/logo.webp'
import { Settings, LogOutIcon, LockKeyhole } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/auth'
import { useAuth } from '@/auth/useAuth'
import { Button } from '@/components/ui/button'

export function LayoutNav({ children }: { children: React.ReactNode }) {
  // use .env to determine the behaviour of the useAuth() hook
  useAuth()
  const router = useRouter()

  async function signOut() {
    await supabase.auth.signOut()

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('session_key')
      localStorage.removeItem('user_type')
    }

    router.refresh()
  }

  return (
    <>
      <header className="shadow-xl w-full items-center py-4 px-8 justify-between flex sm:hidden bg-muted">
        <Link href="/dashboard" className="cursor-pointer">
          <Image
            src={logo}
            alt="logo"
            width={35}
            height={35}
            className="rounded-3xl"
          />
        </Link>

        <div className="flex gap-3 flex-wrap items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Drawer>
                  <DrawerTrigger asChild>
                    <Settings className="cursor-pointer" />
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader>Settings</DrawerHeader>
                    <div className="h-96 p-12 flex gap-12 items-start">
                      <span className="flex gap-4 items-center justify-center cursor-pointer">
                        <LockKeyhole />
                        <Label>Change Password</Label>
                      </span>
                      <span className="flex gap-4 items-center justify-center cursor-pointer">
                        <LogOutIcon />
                        <Label>Sign Out</Label>
                      </span>
                    </div>
                  </DrawerContent>
                </Drawer>
              </TooltipTrigger>
              <TooltipContent>
                <p>Settings</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </header>
      <section className="min-h-screen flex w-full">
        <nav className="min-h-screen hidden flex-col justify-between items-center py-8 px-4 sm:flex sm:flex-wrap bg-muted border-r">
          <div className="py-3 flex items-center justify-center w-full cursor-pointer">
            <Link href="/dashboard">
              <Image
                src={logo}
                alt="logo"
                width={45}
                height={45}
                className="rounded-3xl"
              />
            </Link>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <ModeToggle />
              </TooltipTrigger>
              <TooltipContent>
                <p>Theme</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <div className="flex flex-col gap-6 justify-center items-center">
            {/* <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Settings className="cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider> */}

            <Dialog>
              <DialogTrigger>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <Button className="rounded-xl" variant="outline">
                        <LogOutIcon className="cursor-pointer" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Sign Out</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </DialogTrigger>
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
                  <Button
                    className="w-full rounded-xl"
                    onClick={() => signOut()}
                  >
                    Yes
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </nav>
        {children}
      </section>
    </>
  )
}
