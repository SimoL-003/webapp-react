export default function MovieCardSkeleton() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 flex gap-4 animate-pulse">
      {/* Poster */}
      <div className="w-20 h-28 bg-slate-300 rounded-md"></div>

      {/* Info */}
      <div className="flex flex-col justify-between flex-1">
        <div>
          {/* Titolo */}
          <div className="h-6 bg-slate-300 rounded w-3/4 mb-2"></div>
          {/* Director */}
          <div className="h-4 bg-slate-200 rounded w-1/2"></div>
        </div>

        {/* Year and Rating */}
        <div className="flex flex-col gap-1 mt-2">
          <div className="h-4 bg-slate-200 rounded w-1/4"></div>
          <div className="h-4 bg-slate-300 rounded w-1/6"></div>
        </div>
      </div>
    </div>
  );
}
