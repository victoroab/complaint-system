'use client'

import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { useQuery } from '@tanstack/react-query'
import {
  getStudentPending,
  getStaffPending,
  getPersonnelPending,
} from './pending/functions'
import {
  getStaffResolved,
  getStudentResolved,
  getPersonnelResolved,
} from './resolved/functions'
import { getInProgress } from './in-progress/function'

type User = 'STUDENT' | 'PERSONNEL' | 'STAFF'

export function ProgressTableData() {
  const inProgress = useQuery({
    queryKey: ['inProgress'],
    queryFn: getInProgress,
  })

  return (
    <div className="flex">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Issue</TableHead>
            <TableHead>Hall</TableHead>
            {/* <TableHead>Room</TableHead> */}
            <TableHead>Student Name</TableHead>
            <TableHead>Matric No</TableHead>
            <TableHead>CreatedAt</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {inProgress?.data?.map((item: any, idx: any) => (
            <TableRow key={idx}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.issue}</TableCell>
              <TableCell>{item.hall}</TableCell>
              {/* <TableCell>D107</TableCell> */}
              <TableCell>{`${item?.student?.firstname ?? ''} ${
                item?.student?.lastname ?? ''
              }`}</TableCell>
              <TableCell>{item?.student?.matricNo}</TableCell>

              <TableCell>{item.createdAt}</TableCell>
              <TableCell>
                <Button className="rounded-xl" size="sm">
                  Mark Fixed
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export function PendingTableData({ user }: { user: User }) {
  const studentPending = useQuery({
    queryKey: ['studentPending'],
    queryFn: getStudentPending,
  })

  const staffPending = useQuery({
    queryKey: ['staffPending'],
    queryFn: getStaffPending,
  })

  const personnelPending = useQuery({
    queryKey: ['personnelPending'],
    queryFn: getPersonnelPending,
  })

  if (user === 'STUDENT') {
    return (
      <div className="flex">
        <Table>
          <TableHeader>
            <TableRow className="h-auto">
              <TableHead className="h-auto">S/N</TableHead>
              <TableHead className="h-auto">Category</TableHead>
              <TableHead className="h-auto">Issue</TableHead>
              {/* <TableHead className="h-auto">Room</TableHead> */}
              <TableHead className="h-auto">Personnel</TableHead>
              <TableHead className="h-auto">Fixed</TableHead>
              <TableHead className="h-auto">Inspected</TableHead>
              <TableHead className="h-auto">CreatedAt</TableHead>
              <TableHead className="h-auto">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentPending?.data?.map((item: any, idx: any) => (
              <TableRow className="h-auto" key={item.id}>
                <TableCell className="h-auto">{idx + 1}</TableCell>
                <TableCell className="h-auto">{item.category}</TableCell>
                <TableCell className="h-auto">{item.issue}</TableCell>
                {/* <TableCell className="h-auto">D107</TableCell> */}
                <TableCell className="h-auto">{`${
                  item?.handler?.firstname ?? ''
                } ${item?.handler?.lastname ?? ''}`}</TableCell>
                <TableCell className="h-auto">
                  {item.fixed ? 'yes' : 'no'}
                </TableCell>
                <TableCell className="h-auto">
                  {item.inspected ? 'yes' : 'no'}
                </TableCell>
                <TableCell className="h-auto">{item.createdAt}</TableCell>
                <TableCell className="h-auto">
                  <Button className="rounded-xl" size="sm">
                    Notify Hall Officer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  if (user === 'STAFF') {
    return (
      <div className="flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S/N</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Issue</TableHead>
              {/* <TableHead>Room</TableHead> */}
              <TableHead>Student Name</TableHead>
              <TableHead>Matric No</TableHead>
              <TableHead>Personnel</TableHead>
              <TableHead>Fixed</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffPending?.data?.map((item: any, idx: any) => (
              <TableRow key={item.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.issue}</TableCell>
                {/* <TableCell>D107</TableCell> */}
                <TableCell>{`${item?.student?.firstname ?? ''} ${
                  item?.student?.lastname ?? ''
                }`}</TableCell>
                <TableCell>{item?.student?.matricNo}</TableCell>
                <TableCell>{`${item?.handler?.firstname ?? ''} ${
                  item?.handler?.lastname ?? ''
                }`}</TableCell>
                <TableCell>{item.fixed === true ? 'yes' : 'no'}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
                <TableCell>
                  <Button
                    className="rounded-xl"
                    size="sm"
                    disabled={item.fixed === false}
                  >
                    Mark Inspected
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  if (user === 'PERSONNEL') {
    return (
      <div className="flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S/N</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Hall</TableHead>
              {/* <TableHead>Room</TableHead> */}
              <TableHead>Student Name</TableHead>
              <TableHead>Matric No</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {personnelPending?.data?.map((item: any, idx: any) => (
              <TableRow key={idx}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{item.issue}</TableCell>
                <TableCell>{item.hall}</TableCell>
                {/* <TableCell>D107</TableCell> */}
                <TableCell>{`${item?.student?.firstname ?? ''} ${
                  item?.student?.lastname ?? ''
                }`}</TableCell>
                <TableCell>{item?.student?.matricNo}</TableCell>

                <TableCell>{item.createdAt}</TableCell>
                <TableCell>
                  <Button className="rounded-xl" size="sm">
                    Handle Complaint
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
}

export function ResolvedTableData({ user }: { user: User }) {
  const studentResolved = useQuery({
    queryKey: ['studentResolved'],
    queryFn: getStudentResolved,
  })

  const staffResolved = useQuery({
    queryKey: ['staffResolved'],
    queryFn: getStaffResolved,
  })

  const personnelResolved = useQuery({
    queryKey: ['personnelResolved'],
    queryFn: getPersonnelResolved,
  })

  if (user === 'STUDENT') {
    return (
      <div className="flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S/N</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Issue</TableHead>
              {/* <TableHead>Room</TableHead> */}
              <TableHead>Personnel</TableHead>
              <TableHead>CreatedAt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentResolved?.data?.map((item: any, idx: any) => (
              <TableRow key={item.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.issue}</TableCell>
                {/* <TableCell>D107</TableCell> */}
                <TableCell className="h-auto">{`${
                  item?.handler?.firstname ?? ''
                } ${item?.handler?.lastname ?? ''}`}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  if (user === 'STAFF') {
    return (
      <div className="flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S/N</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Matric No</TableHead>
              {/* <TableHead>Room</TableHead> */}
              <TableHead>Personnel</TableHead>
              <TableHead>CreatedAt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {staffResolved?.data?.map((item: any, idx: any) => (
              <TableRow key={item.id}>
                <TableCell>{idx + 1}</TableCell>
                <TableCell>{item.category}</TableCell>
                <TableCell>{item.issue}</TableCell>
                <TableCell className="h-auto">{`${
                  item?.student?.firstname ?? ''
                } ${item?.student?.lastname ?? ''}`}</TableCell>
                <TableCell>{item?.student?.matricNo}</TableCell>
                {/* <TableCell>D107</TableCell> */}
                <TableCell className="h-auto">{`${
                  item?.handler?.firstname ?? ''
                } ${item?.handler?.lastname ?? ''}`}</TableCell>
                <TableCell>{item.createdAt}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    )
  }
  if (user === 'PERSONNEL') {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>S/N</TableHead>
            <TableHead>Issue</TableHead>
            <TableHead>Hall</TableHead>
            {/* <TableHead>Room</TableHead> */}
            <TableHead>Student Name</TableHead>
            <TableHead>Matric No</TableHead>
            <TableHead>CreatedAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {personnelResolved?.data?.map((item: any, idx: any) => (
            <TableRow key={item.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{item.issue}</TableCell>
              <TableCell>{item.hall}</TableCell>
              {/* <TableCell>D107</TableCell> */}
              <TableCell className="h-auto">{`${
                item?.student?.firstname ?? ''
              } ${item?.student?.lastname ?? ''}`}</TableCell>
              <TableCell>{item?.student?.matricNo}</TableCell>
              <TableCell>{item.createdAt}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    )
  }
}
