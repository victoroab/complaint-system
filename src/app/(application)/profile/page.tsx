import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BackButton } from '../back-button'
import { ImageSection } from './image-section'
import { DataSection } from './data-section'

export default function Page() {
  return (
    <section className="w-full min-h-full pb-0 lg:py-12 p-6 xl:px-24 dark:bg-primary-foreground">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 text-primary font-bold text-2xl border-b-4 flex"></div>
        <BackButton />
        <Card className="w-full rounded-2xl mb-8 bg-muted h-full">
          <CardHeader>
            <CardTitle className="flex justify-between">
              <span>Personal Information</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-full flex flex-col gap-4 justify-start">
              <ImageSection />
              <DataSection />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
