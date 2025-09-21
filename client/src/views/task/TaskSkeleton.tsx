import { Skeleton } from "@/components/ui/skeleton";

export default function TaskSkeleton() {
    return (
        <div className="space-y-2">
            {/* Title */}
            <Skeleton className="h-8 w-1/3" />

            {/* Subtitle */}
            <Skeleton className="h-4 w-1/4" />

            {/* Tabs + Button */}
            <div className="flex w-full justify-between mt-5">
                <ul className="flex justify-center space-x-2">
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton key={i} className="h-6 w-20 rounded-sm" />
                    ))}
                </ul>
                <Skeleton className="h-8 w-24 rounded-md" />
            </div>

            {/* Table placeholder */}
            <div className="space-y-2 mt-4">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="h-10 w-full rounded-md" />
                ))}
            </div>
        </div>
    );
}
