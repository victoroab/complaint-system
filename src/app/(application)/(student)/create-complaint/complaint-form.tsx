'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ReloadIcon } from '@radix-ui/react-icons'
import { toast } from 'sonner'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

import { createComplaint, getStudentHall } from '../functions'
import { useMutation, useQuery } from '@tanstack/react-query'

import { useGetEmail } from '@/auth/hooks'
import { useRouter } from 'next/navigation'

const formSchema = z.object({
  room: z.string().min(4, {
    message: 'Room must be at least 4 characters.',
  }),
  category: z.string({
    required_error: 'Category is required',
  }),
  issue: z.string().min(4, {
    message: 'minimum of 4 characters',
  }),
})

export function FormFields() {
  const email = useGetEmail()
  const router = useRouter()

  const studentHall = useQuery({
    queryKey: ['studentHall'],
    queryFn: () => getStudentHall({ email }),
  })

  const complaintMutation = useMutation({
    mutationFn: createComplaint,
    onSuccess: () => {
      toast('Complaint Sent')
      router.push('/complaints/pending')
    },
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    if (!studentHall.data) {
      throw new Error('Invalid Hall name')
    }

    complaintMutation.mutate({
      hall: studentHall.data.hall,
      category: values.category,
      email,
      issue: values.issue,
      roomNumber: values.room,
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-9">
        <FormField
          control={form.control}
          name="room"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Room Number</FormLabel>
              <FormControl>
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Category</FormLabel>
              <Select onValueChange={field.onChange}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="select a category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="ELECTRICAL">Electrical</SelectItem>
                  <SelectItem value="FURNITURE">Furniture</SelectItem>
                  <SelectItem value="PLUMBING">Plumbing</SelectItem>
                  <SelectGroup></SelectGroup>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="issue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Issue</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className="w-full" disabled={complaintMutation.isPending}>
          {complaintMutation.isPending ? (
            <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            'submit'
          )}{' '}
        </Button>
      </form>
    </Form>
  )
}
