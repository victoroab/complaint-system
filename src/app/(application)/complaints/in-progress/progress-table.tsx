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
import { SkeletonTable } from '../skeleton-table'
import { toast } from 'sonner'
import { fix, getInProgress } from './functions'
import { useGetEmail } from '@/auth/hooks'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'

export function ProgressTable() {
  const email = useGetEmail()
  const qC = useQueryClient()

  const inProgress = useQuery({
    queryKey: ['inProgress'],
    queryFn: () => getInProgress(email),
  })

  const fixMutation = useMutation({
    mutationFn: fix,
    onSuccess: () => {
      toast('Success')
      qC.invalidateQueries({ queryKey: ['inProgress'] })
    },
  })

  function fixComplaint(id: string) {
    return fixMutation.mutate({
      id,
    })
  }

  return (
    <div className="flex">
      {inProgress.isLoading ? (
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
                  <Button
                    className="rounded-xl"
                    size="sm"
                    onClick={() => fixComplaint(item.id)}
                  >
                    Mark Fixed
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  )
}
