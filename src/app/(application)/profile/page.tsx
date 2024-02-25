import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { BackButton } from '../back-button'

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
            {/* <CardDescription>Click on Save to effect changes!</CardDescription> */}
          </CardHeader>
          <CardContent>
            <div className="w-full h-full flex flex-col gap-4 justify-start">
              <div className="w-full h-full flex flex-wrap items-center justify-start gap-6">
                <Avatar className="size-52 border rounded-xl">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>yO</AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start gap-3">
                  <Button className="text-white rounded-xl">
                    Change Picture
                  </Button>
                  <span className="text-sm text-muted-foreground">
                    JPG, JPEG or PNG, 2MB max.
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="w-full sm:w-3/4 md:w-full  flex justify-start gap-7">
                  <div className="w-full h-full space-y-2">
                    <Label>First name</Label>
                    <Input
                      className="bg-primary-foreground rounded-xl"
                      disabled
                      value={'Dell'}
                    />
                  </div>
                  <div className="w-full h-full space-y-2">
                    <Label>Last name</Label>
                    <Input
                      className="bg-primary-foreground rounded-xl"
                      disabled
                      value={'Laptop'}
                    />
                  </div>
                </div>

                <div className="w-full sm:w-3/4 md:w-1/2 h-full space-y-2">
                  <Label>Email address</Label>
                  <Input
                    className="bg-primary-foreground rounded-xl"
                    disabled
                    value={'balogunv50@gmail.com'}
                  />
                </div>
                <div className="w-full flex justify-start gap-7">
                  <div className="w-full h-full space-y-2">
                    <Label>Hall</Label>
                    <Input
                      className="bg-primary-foreground rounded-xl"
                      disabled
                      value={'Dell'}
                    />
                  </div>
                  <div className="w-full h-full space-y-2">
                    <Label>Room</Label>
                    <Input
                      className="bg-primary-foreground rounded-xl"
                      disabled
                      value={'Laptop'}
                    />
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
                {/* <Button className="w-full sm:w-1/2 rounded-xl">Save</Button> */}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
