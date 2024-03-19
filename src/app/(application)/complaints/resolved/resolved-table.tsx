import type { User } from '../types'
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table'
import { useGetEmail, useGetUserType } from '@/auth/hooks'
import {
  getStaffResolved,
  getStudentResolved,
  getPersonnelResolved,
  getStaffHall,
} from './functions'
import { SkeletonTable } from '../skeleton-table'
import { useQuery } from '@tanstack/react-query'

export function ResolvedTable({ user }: { user: User }) {
  const email = useGetEmail()
  const userType = useGetUserType()

  const studentResolved = useQuery({
    queryKey: ['studentResolved'],
    queryFn: () => getStudentResolved(email),
    enabled: !!(userType === 'STUDENT'),
  })

  const staffHall = useQuery({
    queryKey: ['staffHall'],
    queryFn: () => getStaffHall(email),
    enabled: !!(userType === 'STAFF'),
  })

  const staffResolved = useQuery({
    queryKey: ['staffResolved'],
    queryFn: () => getStaffResolved(staffHall?.data),
    enabled: !!staffHall?.data && !!(userType === 'STAFF'),
  })

  const personnelResolved = useQuery({
    queryKey: ['personnelResolved'],
    queryFn: () => getPersonnelResolved(email),
    enabled: !!(userType === 'PERSONNEL'),
  })

  switch (user) {
    case 'STUDENT': {
      return (
        <div className="flex">
          {studentResolved.isLoading ? (
            <SkeletonTable />
          ) : (
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
                {/* {userType === 'STUDENT' ??}  */}
                {studentResolved?.data?.length === 0 && (
                  <TableRow>No Pending</TableRow>
                )}
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
          )}
        </div>
      )
    }
    case 'STAFF': {
      return (
        <div className="flex">
          {staffResolved.isLoading ? (
            <SkeletonTable />
          ) : (
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
                {staffResolved?.data?.length === 0 && (
                  <TableRow>No Pending</TableRow>
                )}
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
          )}
        </div>
      )
    }
    case 'PERSONNEL': {
      return (
        <div className="flex">
          {personnelResolved.isLoading ? (
            <SkeletonTable />
          ) : (
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
                {personnelResolved?.data?.length === 0 && (
                  <TableRow>No Resolved</TableRow>
                )}
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
          )}
        </div>
      )
    }
  }
}
