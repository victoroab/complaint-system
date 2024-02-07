import { BackButton } from '../../back-button'
import { ComplaintForm } from './complaint-form'

export default function Page() {
  return (
    <section className="w-full min-h-full p-8">
      <div className="w-full h-full flex flex-col bg-muted p-4">
        <div className="mb-5 pb-2 text-muted-foreground text-xl border-b flex justify-between">
          Create a Complaint
          <BackButton />
        </div>

        <div className="flex items-center justify-center w-full bg-muted">
          <ComplaintForm />
          {/* <ComplaintFormTwo /> */}
        </div>
      </div>
    </section>
  )
}
