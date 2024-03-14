import { UserDetails } from './user-details'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { GearIcon, PersonIcon } from '@radix-ui/react-icons'
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Label } from '@/components/ui/label'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'
import { LockKeyhole, LogOutIcon } from 'lucide-react'
import Link from 'next/link'
import { DashboardRender } from './dashboard-render'
import { SignOutDialog } from '@/components/signout-dialog'
import { Suspense } from 'react'

export default function Page() {
  return (
    <section className="w-full min-h-full pb-0 lg:py-12 p-6 xl:px-24 dark:bg-primary-foreground">
      <Suspense fallback={<>Loading...</>}>
        <Content />
      </Suspense>
    </section>
  )
}

function Content() {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="mb-5 pb-2 text-primary font-bold text-2xl border-b-4 flex"></div>
      <Card className="w-full rounded-2xl mb-8 bg-muted h-full">
        <CardHeader className="">
          <CardTitle className="flex items-center justify-between">
            <div className="flex flex-wrap items-center justify-start">
              <UserDetails />
            </div>
            <div className="font-normal cursor-pointer text-lg flex items-center gap-3 justify-center hover:text-muted-foreground"></div>
          </CardTitle>
        </CardHeader>
        <CardContent className="h-auto p-4 flex flex-col gap-16 justify-between">
          <div className="w-full flex items-center justify-between border-b-4 pb-6">
            <Card className="w-full sm:w-1/3 hover:bg-secondary cursor-pointer rounded-2xl dark:hover:bg-primary-foreground">
              <Link href={'/profile'}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between font-normal text-md">
                    <div className="flex items-center justify-center gap-3">
                      <PersonIcon className="w-8 h-8" />
                      <span className="block">Profile</span>
                    </div>
                    <div className="hidden lg:block w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  </CardTitle>
                </CardHeader>
              </Link>
            </Card>
            <Drawer>
              <DrawerTrigger asChild>
                <Card className="hidden sm:block w-1/3 hover:bg-secondary cursor-pointer rounded-2xl dark:hover:bg-primary-foreground">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between font-normal text-md">
                      <div className="flex items-center justify-center gap-3">
                        <GearIcon className="w-8 h-8" />
                        <span className="hidden md:block">Settings</span>
                      </div>
                      <div className="hidden lg:block w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>Settings</DrawerHeader>
                <div className="h-96 p-12 flex gap-12 items-start">
                  <span className="flex gap-4 items-center justify-center cursor-pointer">
                    <LockKeyhole />
                    <Label>Change Password</Label>
                  </span>
                  <span className="flex gap-4 items-center justify-center cursor-pointer">
                    <Dialog>
                      <DialogTrigger className="flex items-center gap-3 justify-center">
                        <LogOutIcon />
                        <Label className="cursor-pointer">Sign Out</Label>
                      </DialogTrigger>
                      <SignOutDialog />
                    </Dialog>
                  </span>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
          <DashboardRender />
        </CardContent>
      </Card>
    </div>
  )
}
