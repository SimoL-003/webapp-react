import axios from "axios";
import { useEffect, useState } from "react";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => setMovies(res.data.data));
  }, []);

  console.log(movies);
  return (
    <>
      {movies && (
        <section className="bg-white grid grid-cols-3 gap-4 items-center rounded-lg p-4">
          {movies.map((movie) => (
            // CARD
            <div
              key={movie.id}
              className="bg-white border border-slate-200 rounded-lg p-4 flex gap-4"
            >
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
          ))}
        </section>
      )}
    </>
  );
}
