import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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

  console.log(movie);

  return (
    <section className="bg-slate-50 py-6">
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

          {/* REVIEWS */}
          <section className="py-6">
            <div className="container">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">
                Reviews
              </h2>

              {movie.reviews ? (
                <div className="grid grid-cols-3 gap-4">
                  {movie.reviews.map((review) => (
                    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-slate-800 font-medium">
                          {review.name}
                        </span>
                        <span>⭐ {review.vote}</span>
                      </div>
                      <p className="text-slate-600 text-sm">{review.text}</p>
                      <p className="text-slate-500 text-xs text-end pt-4">
                        {review.created_at}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <h3 className="text-slate-700">No reviews yet</h3>
              )}
            </div>
          </section>
        </>
      )}
    </section>
  );
}
