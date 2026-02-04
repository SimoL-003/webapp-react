import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

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
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </section>
      )}
    </>
  );
}
