'use client'

import { BackButton } from '../../back-button'
import { ProgressTable } from './progress-table'

export default function Page() {
  return (
    <section className="w-full min-h-full p-14 max-[450px]:p-6">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 text-muted-foreground text-xl border-b flex justify-between">
          In Progress
          <BackButton />
        </div>
        <ProgressTable />
      </div>
    </section>
  )
}
