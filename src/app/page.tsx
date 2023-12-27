'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from '@/components/ui/card'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { EnterIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <div className="border rounded-xl h-auto p-12">
        <Card className="rounded-xl">
          <CardHeader>
            <CardTitle className="flex items-center flex-wrap justify-start gap-3">
              <span>Sign In</span>
              <EnterIcon className="w-7 h-7" />
            </CardTitle>
            <CardDescription className="pt-2">
              Select the category of user you belong to.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-4">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-7 flex-wrap">
                <NavigationMenuItem>
                  <Link href="/sign-in/student" prefetch={false}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Student
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/sign-in/staff" prefetch={false}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Staff
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/sign-in/personnel" prefetch={false}>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Personnel
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
