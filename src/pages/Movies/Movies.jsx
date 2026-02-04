import { useEffect, useState } from "react";
import MoviesGrid from "./MoviesGrid";
import axios from "axios";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then(
        (res) => (setMovies(res.data.data), setFilteredMovies(res.data.data)),
      )
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!searchData) {
      setFilteredMovies(movies); /* FIXME perché segna erroreeee */
      return;
    }

    const timeout = setTimeout(() => {
      axios
        .get(`http://localhost:3000/api/movies?search=${searchData}`)
        .then((res) => setFilteredMovies(res.data.data));
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchData]);

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(`http://localhost:3000/api/movies?search=${searchData}`)
      .then((res) => setFilteredMovies(res.data.data));
  }

  return (
    <section className="bg-slate-100 min-h-screen">
      <div className="container py-6">
        {/* TITLE */}
        <section className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">
            Film catalogue
          </h1>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            minima.
          </p>
        </section>

        {/* Search form */}
        <form onSubmit={handleSubmit} className="pb-6 flex items-center gap-2">
          <label htmlFor="search" className="invisible absolute">
            Search
          </label>
          <input
            id="search"
            type="text"
            onChange={(e) => setSearchData(e.target.value)}
            placeholder="Cerca un film..."
            className="w-ful bg-white border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button
            type="submit"
            className="px-4 py-2 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600 transition"
          >
            Search
          </button>
        </form>

        {/* CARD GRID */}
        {filteredMovies.length > 0 ? (
          <MoviesGrid movies={filteredMovies} loading={loading} />
        ) : (
          <h4 className="text-slate-700 font-semibold">No results</h4>
        )}
      </div>
    </section>
  );
}
