import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToPage from "../components/atoms/BackToPage";
import MovieDetailsSkeleton from "../components/organisms/MovieDetailsSkeleton";
import MovieDetailsContent from "../components/organisms/MovieDetailsContent";

export default function MovieDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  function getMovieData() {
    axios
      .get(`http://localhost:3000/api/movies/${slug}`)
      .then((res) => setMovie(res.data.data))
      .catch((err) => {
        if (err) {
          navigate("/movies");
        }
      })
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getMovieData();
  }, [slug]);

  return (
    <>
      <BackToPage />

      <section className="bg-slate-50 pb-6">
        {loading ? (
          <MovieDetailsSkeleton />
        ) : (
          <MovieDetailsContent movie={movie} getMovieData={getMovieData} />
        )}
      </section>
    </>
  );
}
