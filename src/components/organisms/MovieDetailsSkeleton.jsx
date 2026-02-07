export default function MovieDetailsSkeleton() {
  return (
    <section className="container flex gap-10 animate-pulse">
      {/* Poster skeleton */}
      <div className="w-80 h-112.5 bg-slate-200 rounded-lg shadow-md" />

      {/* Film details skeleton */}
      <div className="flex-1 space-y-4">
        {/* Title */}
        <div className="h-8 w-2/3 bg-slate-200 rounded" />

        {/* Director */}
        <div className="h-5 w-1/3 bg-slate-200 rounded" />

        {/* Year */}
        <div className="h-5 w-1/4 bg-slate-200 rounded" />

        {/* Abstract */}
        <div className="space-y-2 mt-4">
          <div className="h-4 w-full bg-slate-200 rounded" />
          <div className="h-4 w-full bg-slate-200 rounded" />
          <div className="h-4 w-5/6 bg-slate-200 rounded" />
          <div className="h-4 w-2/3 bg-slate-200 rounded" />
        </div>
      </div>
    </section>
  );
}
