'use client'
import { useGetEmail, useGetUserType } from '@/auth/useAuth'
import { useQuery } from '@tanstack/react-query'
import { getUserData } from './functions'
import { Skeleton } from '@/components/ui/skeleton'

export function UserDetails() {
  const email = useGetEmail()
  const userType = useGetUserType()?.toLowerCase() as
    | 'student'
    | 'staff'
    | 'personnel'

  const userData = useQuery({
    queryKey: ['userData'],
    queryFn: () => getUserData({ email, userType }),
  })

  return (
    <span className="text-primary ml-6 text-lg">
      {userData.isLoading ? (
        <Skeleton className="w-56 h-4 rounded-sm" />
      ) : (
        `${userData?.data?.firstname} ${userData?.data?.lastname}, ${
          userType === 'student' ? userData?.data?.roomNumber : ''
        } - ${
          userData?.data?.hall?.toLowerCase()
            ? userData?.data?.hall?.toLowerCase()
            : ''
        } Hall`
      )}
    </span>
  )
}
