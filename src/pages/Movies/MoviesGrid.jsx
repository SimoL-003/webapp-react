import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import MovieCardSkeleton from "./MovieCardSkeleton";

export default function MoviesGrid() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => setMovies(res.data.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <section className="bg-white grid grid-cols-3 gap-4 items-center rounded-lg p-4">
        {loading
          ? [1, 2, 3].map((num) => <MovieCardSkeleton key={num} />)
          : movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </section>
    </>
  );
}
