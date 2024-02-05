'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
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
import { createComplaint } from '../functions'
import { useMutation } from '@tanstack/react-query'
import { toast } from 'sonner'
import { useGetEmail } from '@/auth/useAuth'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { ReloadIcon } from '@radix-ui/react-icons'
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

export function ComplaintForm() {
  return (
    <Card className="rounded-xl w-3/4">
      <CardHeader>
        <CardTitle>Complaint Form</CardTitle>
        <CardDescription>Fill the appropriate data</CardDescription>
      </CardHeader>
      <CardContent className="w-full">
        <FormFields />
      </CardContent>
    </Card>
  )
}

export function FormFields() {
  const email = useGetEmail()
  // const router = useRouter()

  const complaintMutation = useMutation({
    mutationFn: createComplaint,
    onSuccess: () => {
      toast('Complaint Sent')
    },
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    complaintMutation.mutate({
      hall: 'JOHN',
      category: values.category,
      email,
      issue: values.issue,
    })

    // complaintMutation.isSuccess ?? form.reset()
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

// <form
// onSubmit={handleSubmit(onSubmit)}
// className="w-40 h-40 flex flex-col gap-6 items-center justify-center"
// >
// <input {...register('room')} type="text" />
// {errors.room && <div className="text-red-300">{errors.room.message}</div>}
// <select {...register('category')} id="cars">
//   <option value="volvo">Volvo</option>
//   <option value="saab">Saab</option>
//   <option value="mercedes">Mercedes</option>
//   <option value="audi">Audi</option>
// </select>
// <textarea {...register('issue')} />
// <button type="submit">submit</button>
// </form>
