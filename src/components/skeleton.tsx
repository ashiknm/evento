import { cn } from "@/lib/utils";

type SkeletonPeops  =  {
    className ?: string;
}

export default function Skeleton({className}: SkeletonPeops) {
  return (
    <div className={cn("animate-pulse h-4 w-[550px] rounded-md bg-white/5 ", className)} />
  )
}
