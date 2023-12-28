import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Pencil1Icon,
  ReaderIcon,
  ClockIcon,
  PersonIcon,
} from '@radix-ui/react-icons'
import Link from 'next/link'

export function UserDetails({
  firstname,
  lastname,
  hall,
  roomNumber,
}: {
  firstname?: string
  lastname?: string
  hall?: string
  roomNumber?: string
}) {
  return (
    <span className="text-primary ml-6 text-lg">
      Victor Balogun - D107 - Daniel
    </span>
  )
}

export function StudentDashboardData() {
  return (
    <div className="flex gap-4 items-start flex-wrap dark:text-secondary-foreground">
      <Card className="cursor-pointer w-96 rounded-xl hover:bg-primary-foreground">
        <Link href={'/create-complaint'} className="">
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center justify-between gap-4 text-base font-normal">
              Create
              <Pencil1Icon />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className=""></CardContent>
          <CardFooter className="text-muted-foreground">
            Create a new complaint
          </CardFooter>
        </Link>
      </Card>
      <Card className="cursor-pointer w-96 rounded-xl hover:bg-primary-foreground">
        <Link href={'/complaints/pending'} className="">
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center justify-between gap-4 text-base font-normal">
              Pending
              <ClockIcon />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className=""></CardContent>
          <CardFooter className="text-muted-foreground">
            Complaints yet to be resolved
          </CardFooter>
        </Link>
      </Card>
      <Card className="cursor-pointer w-96 rounded-xl hover:bg-primary-foreground">
        <Link href={'/complaints/resolved'} className="">
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center justify-between gap-4 text-base font-normal">
              History
              <ReaderIcon />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className=""></CardContent>
          <CardFooter className="text-muted-foreground">
            View resolved complaints
          </CardFooter>
        </Link>
      </Card>
    </div>
  )
}

export function StaffDashboardData() {
  return (
    <div className="flex gap-4 items-start flex-wrap dark:text-secondary-foreground">
      <Card className="cursor-pointer w-96 rounded-xl hover:bg-primary-foreground">
        <Link href={'/consultations'} className="">
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center justify-between gap-4 text-base font-normal">
              Complaints
              <ClockIcon />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className=""></CardContent>
          <CardFooter className="text-muted-foreground">
            Complaints yet to be resolved
          </CardFooter>
        </Link>
      </Card>
      <Card className="cursor-pointer w-96 rounded-xl hover:bg-primary-foreground">
        <Link href={'/consultations'} className="">
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center justify-between gap-4 text-base font-normal">
              History
              <ReaderIcon />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className=""></CardContent>
          <CardFooter className="text-muted-foreground">
            View all complaints
          </CardFooter>
        </Link>
      </Card>
      <Card className="cursor-pointer w-96 rounded-xl hover:bg-primary-foreground">
        <Link href={'/consultations'} className="">
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center justify-between gap-4 text-base font-normal">
              Personnels
              <PersonIcon />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className=""></CardContent>
          <CardFooter className="text-muted-foreground">
            Notify Personnels
          </CardFooter>
        </Link>
      </Card>
    </div>
  )
}

export function PersonnelDashboardData() {
  return (
    <div className="flex gap-4 items-start flex-wrap dark:text-secondary-foreground">
      <Card className="cursor-pointer w-96 rounded-xl hover:bg-primary-foreground">
        <Link href={'/consultations'} className="">
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center justify-between gap-4 text-base font-normal">
              Complaints
              <ClockIcon />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className=""></CardContent>
          <CardFooter className="text-muted-foreground">
            Complaints yet to be resolved
          </CardFooter>
        </Link>
      </Card>
      <Card className="cursor-pointer w-96 rounded-xl hover:bg-primary-foreground">
        <Link href={'/consultations'} className="">
          <CardHeader>
            <CardTitle className="flex flex-wrap items-center justify-between gap-4 text-base font-normal">
              History
              <ReaderIcon />
            </CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className=""></CardContent>
          <CardFooter className="text-muted-foreground">
            View resolved complaints
          </CardFooter>
        </Link>
      </Card>
    </div>
  )
}
