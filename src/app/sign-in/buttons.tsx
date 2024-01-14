'use client'

import Link from 'next/link'
import { ArrowLeftSquare } from 'lucide-react'
import {
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

export function BackButton() {
  return (
    <Link href={'/'}>
      <span className="flex items-center gap-3 cursor-pointer hover:text-ring">
        <ArrowLeftSquare />
        Back
      </span>
    </Link>
  )
}

export function StudentSignInButton() {
  return (
    <Link href="/sign-in/student" prefetch={false}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Student
      </NavigationMenuLink>
    </Link>
  )
}

export function StaffSignInButton() {
  return (
    <Link href="/sign-in/staff" prefetch={false}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Staff
      </NavigationMenuLink>
    </Link>
  )
}

export function PersonnelSignInButton() {
  return (
    <Link href="/sign-in/personnel" prefetch={false}>
      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
        Personnel
      </NavigationMenuLink>
    </Link>
  )
}
