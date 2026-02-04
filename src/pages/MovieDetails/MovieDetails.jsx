import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReviewsSection from "./ReviewsSection";
import BackToPage from "./BackToPage";

export default function MovieDetailsPage() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/movies/${id}`)
      .then((res) => setMovie(res.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <>
      <BackToPage />

      <section className="bg-slate-50 pb-6">
        {loading ? (
          "Caricamento"
        ) : (
          <>
            <div className="container flex gap-10">
              {/* Poster */}
              <img
                src={movie.image}
                alt={movie.title}
                className="w-80 h-auto rounded-lg shadow-md object-cover"
              />

              {/* Film details */}
              <div>
                <h1 className="text-3xl font-bold text-slate-900 mb-3">
                  {movie.title}
                </h1>
                <p className="text-slate-700 mb-5">
                  Director:{" "}
                  <span className="font-semibold">{movie.director}</span>
                </p>
                <p className="text-slate-700 mb-3">
                  Year:{" "}
                  <span className="font-semibold">{movie.release_year}</span>
                </p>
                <p className="text-slate-700 leading-relaxed max-w-prose">
                  {movie.abstract}
                </p>
              </div>
            </div>

            {/* REVIEWS SECTION*/}
            <ReviewsSection reviews={movie.reviews} />
          </>
        )}
      </section>
    </>
  );
}
