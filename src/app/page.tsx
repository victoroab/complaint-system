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
import { useRouter, redirect } from 'next/navigation'
import { useContext } from 'react'
import { AuthContext } from '@/auth/AuthProvider'

export default function Home() {
  const router = useRouter()

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="border rounded-xl h-auto p-6">
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
          <CardContent className="pt-4 cursor-pointer">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-7 flex-wrap">
                <NavigationMenuItem
                  onClick={() => router.replace('/sign-in/student')}
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Student
                  </NavigationMenuLink>
                  {/* <Link href="/sign-in/student">
                  </Link> */}
                </NavigationMenuItem>
                <NavigationMenuItem
                  onClick={() => router.replace('/sign-in/staff')}
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Staff
                  </NavigationMenuLink>
                  {/* <Link href="/sign-in/staff">
                  </Link> */}
                </NavigationMenuItem>
                <NavigationMenuItem
                  onClick={() => router.replace('/sign-in/personnel')}
                >
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Personnel
                  </NavigationMenuLink>
                  {/* <Link href="/sign-in/personnel">
                  </Link> */}
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
