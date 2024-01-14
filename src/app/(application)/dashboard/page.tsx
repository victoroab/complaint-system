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

export default function Page() {
  const session: Session = useContext(AuthContext)

  return (
    <section className="w-full min-h-full p-14">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 text-muted-foreground text-xl border-b flex justify-between">
          Dashboard <UserDetails />
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
      </div>
    </section>
  )
}
