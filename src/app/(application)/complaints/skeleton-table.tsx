import { Skeleton } from '@/components/ui/skeleton'

export function SkeletonTable() {
  return (
    <div className="flex w-full flex-col gap-3">
      <Skeleton className="w-full h-8" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
      <Skeleton className="w-full h-14" />
    </div>
  )
}
