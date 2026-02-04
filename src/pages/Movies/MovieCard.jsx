export default function MovieCard({ movie }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 flex gap-4">
      {/* Poster */}
      <img
        src={movie.image}
        alt={movie.title}
        className="w-20 h-28 object-cover rounded-md"
      />

      {/* Info */}
      <div className="flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-800">
            {movie.title}
          </h2>
          <p className="text-slate-600 text-sm">{movie.director}</p>
        </div>

        <div className="flex flex-col gap-0.5 text-sm">
          <span className="text-slate-500">{movie.release_year}</span>
          <span className="text-indigo-500 font-semibold">
            ⭐ {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
