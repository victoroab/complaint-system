'use client'

import { useContext } from 'react'
import { AuthContext } from '@/auth/AuthProvider'
import type { Session } from '@/auth/types'
import {
  StudentDashboardData,
  StaffDashboardData,
  PersonnelDashboardData,
} from './dashboard-data'
// import dynamic from 'next/dynamic'
// const StudentDashboardData = dynamic(() =>
//   import('../dashboard/dashboard-data').then((mod) => mod.StudentDashboardData)
// )
// const StaffDashboardData = dynamic(() =>
//   import('../dashboard/dashboard-data').then((mod) => mod.StaffDashboardData)
// )
// const PersonnelDashboardData = dynamic(() =>
//   import('../dashboard/dashboard-data').then(
//     (mod) => mod.PersonnelDashboardData
//   )
// )

export default function DashboardRender() {
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

  // return (
  //   <>
  //     {session.userType === 'student' ? (
  //       <StudentDashboardData />
  //     ) : session.userType === 'staff' ? (
  //       <StaffDashboardData />
  //     ) : session.userType === 'personnel' ? (
  //       <PersonnelDashboardData />
  //     ) : (
  //       ''
  //     )}
  //   </>
  // )
}
