'use client'

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

import { UploadParams } from './functions'
import { getUserData } from '../dashboard/functions'
import { useGetEmail, useGetUserType } from '@/auth/hooks'
import { useQuery } from '@tanstack/react-query'
import { Skeleton } from '@/components/ui/skeleton'

export function DataSection() {
  const email = useGetEmail()
  const userType = useGetUserType()?.toLowerCase() as UploadParams['usertype']

  const userData = useQuery({
    queryKey: ['userData'],
    queryFn: () => getUserData({ email, userType }),
  })

  console.log(userData.data)

  return (
    <div className="flex flex-col gap-5">
      <div className="w-full sm:w-3/4 md:w-full  flex justify-start gap-7">
        <div className="w-full h-full space-y-2">
          <Label>First name</Label>
          {userData.isLoading ? (
            <Skeleton className="w-64 h-4 bg-muted-foreground dark:bg-primary-foreground rounded-xl" />
          ) : (
            <Input
              className="bg-primary-foreground rounded-xl"
              disabled
              value={userData.data.firstname}
            />
          )}
        </div>
        <div className="w-full h-full space-y-2">
          <Label>Last name</Label>
          {userData.isLoading ? (
            <Skeleton className="w-64 h-4 bg-muted-foreground dark:bg-primary-foreground rounded-xl" />
          ) : (
            <Input
              className="bg-primary-foreground rounded-xl"
              disabled
              value={userData.data.lastname}
            />
          )}
        </div>
      </div>

      <div className="w-full sm:w-3/4 md:w-1/2 h-full space-y-2">
        <Label>Email address</Label>
        <Input
          className="bg-primary-foreground rounded-xl"
          disabled
          value={email}
        />
      </div>
      <div className="w-full flex justify-start gap-7">
        <div className="w-full h-full space-y-2">
          <Label>Hall</Label>
          {userData.isLoading ? (
            <Skeleton className="w-64 h-4 bg-muted-foreground dark:bg-primary-foreground rounded-xl" />
          ) : (
            <Input
              className="bg-primary-foreground rounded-xl"
              disabled
              value={userData.data.hall}
            />
          )}
        </div>
        <div className="w-full h-full space-y-2">
          <Label>Room</Label>
          {userData.isLoading ? (
            <Skeleton className="w-64 h-4 bg-muted-foreground dark:bg-primary-foreground rounded-xl" />
          ) : (
            <Input
              className="bg-primary-foreground rounded-xl"
              disabled
              value={userData.data.room}
            />
          )}
        </div>
      </div>
      <div className="w-full flex justify-start gap-7">
        <div className="w-full h-full space-y-2">
          <Label>Complaints Created</Label>
          <Input
            className="bg-primary-foreground rounded-xl"
            disabled
            value={12}
          />
        </div>
        <div className="w-full h-full space-y-2">
          <Label>Complints Resolved</Label>
          <Input
            className="bg-primary-foreground rounded-xl"
            disabled
            value={10}
          />
        </div>
      </div>
    </div>
  )
}
