import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";
import { Link } from "react-router-dom";

export default function MoviesGrid({ movies, loading }) {
  return (
    <>
      <section className="bg-white grid grid-cols-3 gap-4 items-center rounded-lg p-4">
        {loading ? (
          [1, 2, 3].map((num) => <MovieCardSkeleton key={num} />)
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <Link
              to={`/movies/${movie.id}`}
              key={movie.id}
              className="card-link hover:scale-105 transition-all"
            >
              <MovieCard movie={movie} />
            </Link>
          ))
        ) : (
          <h4 className="text-slate-700 font-semibold">No results</h4>
        )}
      </section>
    </>
  );
}
