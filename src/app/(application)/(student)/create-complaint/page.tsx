import { BackButton } from '../../back-button'
import { ComplaintForm } from './complaint-form'

export default function Page() {
  return (
    <section className="w-full min-h-full p-14">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 text-muted-foreground text-xl border-b flex justify-between">
          Create a Complaint
          <BackButton />
        </div>

        <div className="flex items-center justify-center w-full">
          <ComplaintForm />
          {/* <ComplaintFormTwo /> */}
        </div>
      </div>
    </section>
  )
}
