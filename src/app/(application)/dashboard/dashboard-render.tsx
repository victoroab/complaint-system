'use client'

import { useContext } from 'react'
import { AuthContext } from '@/auth/AuthProvider'
import type { Session } from '@/auth/types'
import {
  StudentDashboardData,
  StaffDashboardData,
  PersonnelDashboardData,
} from './dashboard-data'

export function DashboardRender() {
  const session: Session = useContext(AuthContext)

  return (
    <>
      {session.userType === 'student' ? (
        <StudentDashboardData />
      ) : session.userType === 'staff' ? (
        <StaffDashboardData />
      ) : session.userType === 'personnel' ? (
        <PersonnelDashboardData />
      ) : (
        ''
      )}
    </>
  )
}
