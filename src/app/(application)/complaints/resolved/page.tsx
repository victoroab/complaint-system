'use client'

import { ResolvedTableData } from '../table-data'
import { BackButton } from '../../back-button'

export default function Page() {
  return (
    <section className="w-full min-h-full p-14 max-[450px]:p-6">
      <div className="w-full h-full flex flex-col flex-wrap">
        <div className="mb-5 pb-2 text-muted-foreground text-xl border-b flex justify-between">
          Resolved Complaints
          <BackButton />
        </div>
        <ResolvedTableData user="STUDENT" />
      </div>
    </section>
  )
}
