'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
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
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { useGetEmail } from '@/auth/useAuth'

export function ComplaintForm() {
  const email = useGetEmail()

  const roomRef = useRef<any>(null)
  const issueRef = useRef<any>(null)
  const [category, setCategory] = useState<string>('')

  const complaintMutation = useMutation({
    mutationFn: createComplaint,
    onSuccess: () => {
      issueRef.current.value = ''
      toast('Complaint Sent')
    },
  })

  function postData() {
    return complaintMutation.mutate({
      hall: 'DANIEL',
      category: category,
      email,
      issue: issueRef.current.value,
    })
  }

  return (
    <Card className="rounded-xl">
      <CardHeader>
        <CardTitle>Complaint Form</CardTitle>
        <CardDescription>Fill the appropriate data</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-4 flex-wrap">
        <div className="w-full flex flex-col gap-3 mb-4">
          <Label>Room Number</Label>
          <Input ref={roomRef} required />
        </div>
        <div className="w-full flex flex-col gap-3 mb-4">
          <Label>Category</Label>
          <Select onValueChange={(value) => setCategory(value)} required>
            <SelectTrigger>
              <SelectValue placeholder="select a category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ELECTRICAL">Electrical</SelectItem>
              <SelectItem value="FURNITURE">Furniture</SelectItem>
              <SelectItem value="PLUMBING">Plumbing</SelectItem>
              <SelectGroup></SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex flex-col gap-3 mb-4">
          <Label>Issue</Label>
          <Textarea className="h-48" ref={issueRef} required />
        </div>
      </CardContent>
      <CardFooter className="w-full">
        <Button className="w-full rounded-xl" onClick={() => postData()}>
          Submit
        </Button>
      </CardFooter>
    </Card>
  )
}
