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

export default function Page() {
  return (
    <section className="w-full min-h-full p-14">
      <div className="w-full h-full flex flex-col">
        <div className="mb-5 pb-2 text-muted-foreground text-xl border-b flex justify-between">
          Create a Complaint
        </div>

        <div className="flex items-center justify-center w-full">
          <Card className="rounded-xl">
            <CardHeader>
              <CardTitle>Complaint Form</CardTitle>
              <CardDescription>Fill the appropriate data</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-4 flex-wrap">
              <div className="w-full flex flex-col gap-3 mb-4">
                <Label>Room Number</Label>
                <Input />
              </div>
              <div className="w-full flex flex-col gap-3 mb-4">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="ELECTRICAL">Electrical</SelectItem>
                      <SelectItem value="FURNITURE">Furniture</SelectItem>
                      <SelectItem value="PLUMBING">Plumbing</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full flex flex-col gap-3 mb-4">
                <Label>Issue</Label>
                <Textarea className="h-48" />
              </div>
            </CardContent>
            <CardFooter className="w-full">
              <Button className="w-full rounded-xl">Submit</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
