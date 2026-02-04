import axios from "axios";
import { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => setMovies(res.data.data));
  }, []);

  console.log(movies);

  return <h1>Movies</h1>;
}
