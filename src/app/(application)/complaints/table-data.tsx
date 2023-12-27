import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@/components/ui/table'

export function TableData() {
  return (
    <div className="flex">
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>1</TableHead>
          <TableHead>2</TableHead>
          <TableHead>3</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>a</TableCell>
          <TableCell>b</TableCell>
          <TableCell>c</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
  )
}