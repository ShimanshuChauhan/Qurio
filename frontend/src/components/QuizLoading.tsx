import { Skeleton } from "./ui/skeleton";

export function QuizLoading() {
  return (
    <div className="grid p-4 gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-7xl mx-auto">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="relative w-full min-h-56 sm:min-h-60 md:min-h-64 lg:min-h-72 xl:min-h-80"
        >
          <Skeleton className="w-full h-full bg-white/10 backdrop-blur-md" />
        </div>
      ))}
    </div>
  );
}
