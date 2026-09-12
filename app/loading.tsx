import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="container grid min-h-[70dvh] content-center gap-5" aria-label="Loading page">
      <Skeleton className="h-5 w-36" />
      <Skeleton className="h-12 max-w-2xl" />
      <Skeleton className="h-6 max-w-xl" />
      <div className="mt-5 flex gap-3"><Skeleton className="h-11 w-36" /><Skeleton className="h-11 w-32" /></div>
    </div>
  );
}
