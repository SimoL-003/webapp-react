import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const navigate = useNavigate();
  const initialMovieData = {
    title: "",
    director: "",
    genre: "",
    release_year: 1900,
    abstract: "",
  };
  const [movieData, setMovieData] = useState(initialMovieData);

  function handleInputChange(e) {
    const key = e.target.name;
    const value = e.target.value;
    setMovieData({
      ...movieData,
      [key]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/api/movies", movieData).then((res) => {
      (setMovieData(initialMovieData), navigate("/movies"));
    });
  }

  return (
    <section className="bg-slate-100 min-h-screen py-8">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          onReset={() => setMovieData(initialMovieData)}
          className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm"
        >
          <h1 className="text-2xl font-semibold text-slate-900 mb-6">
            Add new movie
          </h1>

          {/* Title */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm text-slate-700 mb-1"
            >
              Title*
            </label>
            <input
              type="text"
              id="title"
              name="title"
              required
              placeholder="Dead Poets Society"
              value={movieData.title}
              onChange={(e) => handleInputChange(e)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Director */}
          <div className="mb-4">
            <label
              htmlFor="director"
              className="block text-sm text-slate-700 mb-1"
            >
              Director*
            </label>
            <input
              type="text"
              id="director"
              name="director"
              required
              placeholder="Peter Weir"
              value={movieData.director}
              onChange={(e) => handleInputChange(e)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Genre */}
          <div className="mb-4">
            <label
              htmlFor="genre"
              className="block text-sm text-slate-700 mb-1"
            >
              Genre
            </label>
            <input
              type="text"
              id="genre"
              name="genre"
              list="genre-list"
              placeholder="Drama"
              autoComplete="off"
              value={movieData.genre}
              onChange={(e) => handleInputChange(e)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <datalist id="genre-list">
              <option value="Action" />
              <option value="Adventure" />
              <option value="Animation" />
              <option value="Biography" />
              <option value="Comedy" />
              <option value="Crime" />
              <option value="Documentary" />
              <option value="Drama" />
              <option value="Family" />
              <option value="Fantasy" />
              <option value="Film Noir" />
              <option value="History" />
              <option value="Horror" />
              <option value="Music" />
              <option value="Musical" />
              <option value="Mystery" />
              <option value="Romance" />
              <option value="Science Fiction" />
              <option value="Sport" />
              <option value="Thriller" />
              <option value="War" />
              <option value="Western" />
            </datalist>
          </div>

          {/* Release year */}
          <div className="mb-4">
            <label
              htmlFor="release_year"
              className="block text-sm text-slate-700 mb-1"
            >
              Release Year
            </label>
            <input
              type="number"
              min={1901}
              max={2151}
              id="release_year"
              name="release_year"
              value={movieData.release_year}
              onChange={(e) => handleInputChange(e)}
              className={`w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 ${movieData.release_year === 1900 ? "text-slate-400" : "text-slate-800"}`}
            />
          </div>

          {/* Abstract */}
          <div className="mb-4">
            <label
              htmlFor="abstract"
              className="block text-sm text-slate-700 mb-1"
            >
              Abstract
            </label>
            <textarea
              name="abstract"
              id="abstract"
              placeholder="Write some line about the movie..."
              rows={6}
              value={movieData.abstract}
              onChange={(e) => handleInputChange(e)}
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 hover:cursor-pointer transition"
            >
              Confirm
            </button>

            <button
              type="reset"
              className="border border-slate-300 bg-white text-slate-700 px-4 py-2 rounded-md hover:bg-slate-100 hover:text-indigo-600 hover:cursor-pointer transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
