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
import {
  BellIcon,
  EnvelopeClosedIcon,
  GearIcon,
  PersonIcon,
} from '@radix-ui/react-icons'

export default function Page() {
  const session: Session = useContext(AuthContext)

  return (
    <section className="w-full min-h-full py-12 px-24">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 text-primary font-bold text-2xl border-b-4 flex">
          {/* Dashboard */}
          {/* <UserDetails /> */}
        </div>

        <Card className="w-full rounded-2xl mb-8 bg-muted h-full">
          <CardHeader className="">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center justify-start">
                <div className="w-8 h-8 rounded-full bg-muted-foreground"></div>
                <span className="text-primary text-md">
                  <UserDetails />
                </span>
              </div>
              <div className="font-normal cursor-pointer text-lg flex items-center gap-3 justify-center hover:text-muted-foreground">
                {/* Settings
                <GearIcon className="w-7 h-7" /> */}
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent className="h-auto p-4 flex flex-col gap-16 justify-between">
            <div className="w-full flex items-center justify-between border-b-4 pb-6">
              <Card className="w-1/3 hover:bg-secondary cursor-pointer rounded-2xl">
                {/* <CardContent className="mt-4">Notifications</CardContent> */}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between font-normal text-md">
                    <div className="flex items-center justify-center gap-3">
                      <PersonIcon className="w-8 h-8" />
                      <span>Profile</span>
                    </div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>{' '}
                  </CardTitle>
                </CardHeader>
              </Card>
              <Card className="w-1/3 hover:bg-secondary cursor-pointer rounded-2xl">
                {/* <CardContent className="mt-4">Notifications</CardContent> */}
                <CardHeader>
                  <CardTitle className="flex items-center justify-between font-normal text-md">
                    <div className="flex items-center justify-center gap-3">
                      <GearIcon className="w-8 h-8" />
                      <span>Settings</span>
                    </div>
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>{' '}
                  </CardTitle>
                </CardHeader>
              </Card>
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

        {/* {session.userType === 'student' ? (
          <StudentDashboardData />
        ) : session.userType === 'staff' ? (
          <StaffDashboardData />
        ) : session.userType === 'personnel' ? (
          <PersonnelDashboardData />
        ) : (
          ''
        )} */}
      </div>
    </section>
  )
}
