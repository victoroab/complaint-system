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
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { EnterIcon } from '@radix-ui/react-icons'
import {
  PersonnelSignInButton,
  StaffSignInButton,
  StudentSignInButton,
} from './sign-in/buttons'
import { ReturnGuardProvider } from './ReturnGuardProvider'
export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center p-4 bg-muted">
      <div className="border-2 rounded-xl h-auto p-6">
        <ReturnGuardProvider>
          <Card className="rounded-xl shadow-md">
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
                  <NavigationMenuItem>
                    <StudentSignInButton />
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <StaffSignInButton />
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <PersonnelSignInButton />
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </CardContent>
          </Card>
        </ReturnGuardProvider>
      </div>
    </main>
  )
}
