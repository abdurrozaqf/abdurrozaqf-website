import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonProjectCard() {
  return (
    <div className="border rounded-xl w-full h-full dark:bg-white/5 backdrop-blur-md transition-all">
      <div className="flex flex-col px-4 py-6 h-[250px] justify-between">
        <div className="space-y-6">
          <div className="flex flex-col space-y-2">
            <Skeleton className="h-5 w-[250px] rounded-full" />
            <Skeleton className="h-2 w-[200px] rounded-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-full" />
          </div>
        </div>
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>
    </div>
  );
}
