import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return <div className="flex flex-col space-y-3">
  <Skeleton className="h-1/2 w-1/2 rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
  </div>
</div>
}
