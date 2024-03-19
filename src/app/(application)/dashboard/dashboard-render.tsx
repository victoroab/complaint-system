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

  switch (session.userType) {
    case 'student': {
      return <StudentDashboardData />
    }
    case 'staff': {
      return <StaffDashboardData />
    }
    case 'personnel': {
      return <PersonnelDashboardData />
    }
  }
}
