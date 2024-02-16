import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BackButton } from '../../back-button'
import { FormFields } from './complaint-form'

export default function Page() {
  return (
    <section className="w-full min-h-full p-8 dark:bg-primary-foreground">
      <div className="w-full h-full flex flex-col bg-muted py-4 px-8 rounded-xl">
        <div className="mb-5 pb-2 text-muted-foreground text-xl border-b-4 flex justify-between">
          Create a Complaint
          <BackButton />
        </div>

        <div className="flex items-center justify-center w-full bg-muted">
          <Card className="rounded-3xl w-full md:w-3/4">
            <CardHeader>
              <CardTitle>Complaint Form</CardTitle>
              <CardDescription>Fill the appropriate data</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <FormFields />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
