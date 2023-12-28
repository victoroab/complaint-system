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
import { getStudentPending } from './pending/functions'
import { getStudentResolved } from './resolved/functions'

type User = 'STUDENT' | 'PERSONNEL' | 'STAFF'

export function PendingTableData({ user }: { user: User }) {
  const studentPending = useQuery({
    queryKey: ['studentPending'],
    queryFn: getStudentPending,
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
              <TableHead>Room</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Matric No</TableHead>
              <TableHead>Personnel</TableHead>
              <TableHead>Fixed</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>Spoilt Sockets</TableCell>
              <TableCell>D107</TableCell>
              <TableCell>Victor Balogun</TableCell>
              <TableCell>19CH026505</TableCell>
              <TableCell>Arike Preorder</TableCell>
              <TableCell>false</TableCell>
              <TableCell>false</TableCell>
              <TableCell>28/12/2023</TableCell>
              <TableCell>
                <Button className="rounded-xl" size="sm">
                  Mark Inspected
                </Button>
              </TableCell>
            </TableRow>
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
              <TableHead>Category</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Hall</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Student Name</TableHead>
              <TableHead>Matric No</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>Spoilt Sockets</TableCell>
              <TableCell>Hall</TableCell>
              <TableCell>D107</TableCell>
              <TableCell>Victor Balogun</TableCell>
              <TableCell>19CH026505</TableCell>
              <TableCell>28/12/2023</TableCell>
              <TableCell>
                <Button className="rounded-xl" size="sm">
                  Mark Fixed
                </Button>
              </TableCell>
            </TableRow>
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
              <TableHead>Room</TableHead>
              <TableHead>Personnel</TableHead>
              <TableHead>CreatedAt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Electrical</TableCell>
              <TableCell>Spoilt Sockets</TableCell>
              <TableCell>Victor Balogun</TableCell>
              <TableCell>19CH026505</TableCell>
              <TableCell>D107</TableCell>
              <TableCell>Arike Preorder</TableCell>
              <TableCell>28/12/2023</TableCell>
            </TableRow>
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
            <TableHead>Room</TableHead>
            <TableHead>Student Name</TableHead>
            <TableHead>Matric No</TableHead>
            <TableHead>CreatedAt</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Spoilt Sockets</TableCell>
            <TableCell>DANIEL</TableCell>
            <TableCell>D107</TableCell>
            <TableCell>Victor Balogun</TableCell>
            <TableCell>19CH026505</TableCell>
            <TableCell>28/12/2023</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
  }
}
