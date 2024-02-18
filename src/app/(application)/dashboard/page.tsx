'use client'

import { useContext } from 'react'
import { AuthContext } from '@/auth/AuthProvider'

import {
  StudentDashboardData,
  StaffDashboardData,
  PersonnelDashboardData,
} from './dashboard-data'
import type { Session } from '@/auth/types'
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
import { LockKeyhole, LogOutIcon } from 'lucide-react'

export default function Page() {
  const session: Session = useContext(AuthContext)

  return (
    <section className="w-full min-h-full pb-0 lg:py-12 p-6 sm:px-24 dark:bg-primary-foreground">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 text-primary font-bold text-2xl border-b-4 flex"></div>

        <Card className="w-full rounded-2xl mb-8 bg-muted h-full">
          <CardHeader className="">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <div className="w-8 h-8 rounded-full bg-muted-foreground"></div>
                <span className="text-primary text-md">
                  <UserDetails />
                </span>
              </div>
              <div className="font-normal cursor-pointer text-lg flex items-center gap-3 justify-center hover:text-muted-foreground"></div>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-auto p-4 flex flex-col gap-16 justify-between">
            <div className="w-full flex items-center justify-between border-b-4 pb-6">
              <Card className="w-full sm:w-1/3 hover:bg-secondary cursor-pointer rounded-2xl dark:hover:bg-primary-foreground">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between font-normal text-md">
                    <div className="flex items-center justify-center gap-3">
                      <PersonIcon className="w-8 h-8" />
                      <span className="block">Profile</span>
                    </div>
                    <div className="hidden lg:block w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                  </CardTitle>
                </CardHeader>
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
                      <LogOutIcon />
                      <Label>Sign Out</Label>
                    </span>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            {session.userType === 'student' ? (
              <StudentDashboardData />
            ) : session.userType === 'staff' ? (
              <StaffDashboardData />
            ) : session.userType === 'personnel' ? (
              <PersonnelDashboardData />
            ) : (
              ''
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
