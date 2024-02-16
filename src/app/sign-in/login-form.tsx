'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { User, KeyRound } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { signIn } from '@/auth/hooks'
import { useMutation } from '@tanstack/react-query'
import { ReloadIcon } from '@radix-ui/react-icons'

export function LoginForm({ userType }: { userType: string }) {
  const router = useRouter()

  const formSchema = z.object({
    email: z.string().min(10, {
      message: 'invalid Email',
    }),
    password: z.string({
      required_error: 'Category is required',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  const signInMutation = useMutation({
    mutationFn: signIn,
  })

  async function onSubmit({ email, password }: z.infer<typeof formSchema>) {
    signInMutation.mutate({
      router,
      email,
      password,
      userType,
    })
  }

  return (
    <>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col p-6 gap-5 w-full"
        >
          <span className="flex justify-center items-center gap-3">
            <User className="max-[530px]:hidden" />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
          <span className="flex justify-center items-center gap-3">
            <KeyRound className="max-[530px]:hidden" />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="password" type="password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
          <Button
            className="flex items-center gap-3 mt-2 rounded-xl"
            disabled={signInMutation.isPending}
          >
            {signInMutation.isPending ? (
              <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              'Sign in'
            )}
          </Button>
        </form>
      </Form>
    </>
  )
}
