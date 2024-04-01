import { Skeleton } from "@/components/ui/skeleton";

export default function ContributionsLoading() {
  return (
    <div className="w-full h-[150px] space-y-2">
      <ul className="flex justify-between">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((_, index) => (
          <li key={index}>
            <Skeleton className="h-2.5 w-5 rounded-sm" />
          </li>
        ))}
      </ul>
      <Skeleton className="h-[100px] w-full rounded-none" />
      <div className="flex items-center justify-between">
        <Skeleton className="h-4 w-[260px] " />
        <Skeleton className="h-3 w-[180px] " />
      </div>
    </div>
  );
}
