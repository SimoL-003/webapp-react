import { useEffect, useState } from "react";
import MoviesGrid from "./MoviesGrid";
import axios from "axios";
import SearchForm from "./SearchForm";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchData, setSearchData] = useState("");

  // Initial API call (all movies)
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then(
        (res) => (setMovies(res.data.data), setFilteredMovies(res.data.data)),
      )
      .finally(() => setLoading(false));
  }, []);

  // API call with search filter (on typing)
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

  // API call with search filter (on submit)
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

        {/* SEARCH FORM */}
        <SearchForm
          handleSubmit={handleSubmit}
          searchData={searchData}
          setSearchData={setSearchData}
        />

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
