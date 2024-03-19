'use client'

import { useGetUserType } from '@/auth/hooks'
import { BackButton } from '../../back-button'
import { PendingTable } from './pending-table'

export default function Page() {
  const userType = useGetUserType()
  return (
    <section className="w-full max-h-[98vh] p-14 max-[450px]:p-6">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-6 text-muted-foreground text-xl border-b flex justify-between">
          Pending Complaints
          <BackButton />
        </div>
        <div className="h-3/4 overflow-y-scroll">
          <PendingTable user={userType} />
        </div>
      </div>
    </section>
  )
}
