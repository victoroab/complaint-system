'use client'

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
import { Label } from '@/components/ui/label'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/auth'
import { useAuth } from '@/auth/useAuth'

export function LayoutNav({ children }: { children: React.ReactNode }) {
  useAuth()

  const router = useRouter()

  async function signOut() {
    await supabase.auth.signOut()

    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem('session_key')
      localStorage.removeItem('user_type')
    }

    router.replace('/')
  }

  return (
    <>
      <header className="border-b w-full items-center py-6 px-8 justify-between sm:hidden flex h-10">
        <Link href="/dashboard">LOGO</Link>

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
        <nav className="h-screen hidden flex-col justify-between items-center border p-4 sm:flex sm:flex-wrap">
          <div className="py-3 flex items-center justify-center w-full">
            <Link href="/dashboard">LOGO</Link>
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
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Settings className="cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger onClick={() => signOut()}>
                  <LogOutIcon className="cursor-pointer" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Sign Out</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </nav>
        {children}
      </section>
    </>
  )
}
