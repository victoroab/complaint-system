'use client'

import { useGetUserType } from '@/auth/useAuth'
import { PendingTableData } from '../table-data'
import { BackButton } from '../../back-button'

export default function Page() {
  const userType = useGetUserType()
  return (
    <section className="w-full min-h-full p-14 max-[450px]:p-6">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-6 text-muted-foreground text-xl border-b flex justify-between">
          Pending Complaints
          <BackButton />
        </div>
        <PendingTableData user={userType} />
      </div>
    </section>
  )
}
