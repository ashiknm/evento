import Skeleton from "./skeleton";

export default function SkeletonCard() {
  return (
    <div className="space-y-4">
        <Skeleton className="h-12 w-12 rounded-full"></Skeleton>
        <Skeleton className="w-[240px]"></Skeleton>
        <Skeleton className="w-[200px]"></Skeleton>
    </div>
  )
}
