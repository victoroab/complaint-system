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

type User = 'STUDENT' | 'PERSONNEL' | 'STAFF'

export function PendingTableData({ user }: { user: User }) {
  if (user === 'STUDENT') {
    return (
      <div className="flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S/N</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Issue</TableHead>
              <TableHead>Room</TableHead>
              <TableHead>Personnel</TableHead>
              <TableHead>Fixed</TableHead>
              <TableHead>Inspected</TableHead>
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
              <TableCell>Arike Preorder</TableCell>
              <TableCell>false</TableCell>
              <TableCell>false</TableCell>
              <TableCell>28/12/2023</TableCell>
              <TableCell>
                <Button className="rounded-xl" size="sm">
                  Notify Hall Officer
                </Button>
              </TableCell>
            </TableRow>
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
  if (user === 'STUDENT') {
    // make api request to student endpoint
    return (
      <div className="flex">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>S/N</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Issue</TableHead>
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
              <TableCell>D107</TableCell>
              <TableCell>Arike Preorder</TableCell>
              <TableCell>28/12/2023</TableCell>
            </TableRow>
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
