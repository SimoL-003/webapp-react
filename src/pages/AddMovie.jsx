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
    <section>
      <div className="container">
        <form onSubmit={handleSubmit} className="py-4">
          <div className="border w-fit flex gap-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={movieData.title}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="border w-fit flex gap-2">
            <label htmlFor="director">director</label>
            <input
              type="text"
              id="director"
              name="director"
              value={movieData.director}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="border w-fit flex gap-2">
            <label htmlFor="genre">genre</label>
            <input
              type="text"
              id="genre"
              name="genre"
              value={movieData.genre}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="border w-fit flex gap-2">
            <label htmlFor="release_year">Release Year</label>
            <input
              type="number"
              min={1901}
              max={2151}
              id="release_year"
              name="release_year"
              value={movieData.release_year}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="border w-fit flex gap-2">
            <label htmlFor="abstract">abstract</label>
            <textarea
              name="abstract"
              id="abstract"
              value={movieData.abstract}
              onChange={(e) => handleInputChange(e)}
            ></textarea>
          </div>
          <button type="submit" className="border">
            Confirm
          </button>
        </form>
      </div>
    </section>
  );
}
