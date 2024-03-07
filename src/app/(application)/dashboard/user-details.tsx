'use client'
import { useGetEmail, useGetUserType } from '@/auth/hooks'
import { useQuery } from '@tanstack/react-query'
import { getUserData } from './functions'
import { Skeleton } from '@/components/ui/skeleton'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

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
    <span className="text-secondary-foreground ml-6 text-sm sm:text-md md:text-xl">
      {userData.isLoading ? (
        <div className="flex items-center justify-start gap-4">
          <Skeleton className="size-12 rounded-full bg-muted-foreground dark:bg-primary-foreground" />
          <Skeleton className="w-64 h-4 bg-muted-foreground dark:bg-primary-foreground rounded-xl" />
        </div>
      ) : (
        <div className="flex items-center justify-start gap-4">
          <div className="size-12 rounded-full bg-muted-foreground">
            <Avatar className="size-full border rounded-2xl">
              <AvatarImage src={userData.data?.picture?.url} />
              <AvatarFallback>Image</AvatarFallback>
            </Avatar>
          </div>
          <span className="text-md">
            {userData?.data?.firstname} {userData?.data?.lastname}
            {userData?.data?.hall
              ? '- ' + userData?.data?.hall.toLowerCase()
              : ''}{' '}
            {userType !== 'personnel' ? 'hall' : ''}
            {userType === 'personnel' ? `- ${userData?.data?.category}` : ''}
          </span>
        </div>
      )}
    </span>
  )
}
