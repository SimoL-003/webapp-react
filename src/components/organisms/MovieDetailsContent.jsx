import ReviewsSection from "./ReviewsSection";

export default function MovieDetailsContent({ movie, getMovieData }) {
  return (
    <>
      <div className="container flex gap-10">
        {/* Poster */}
        <img
          src={movie.image || "https://placehold.co/320x400?text=:-("}
          alt={movie.title}
          className="w-80 h-auto rounded-lg shadow-md object-cover"
        />

        {/* Film details */}
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-3">
            {movie.title}
          </h1>
          <p className="text-slate-700 mb-5">
            Director: <span className="font-semibold">{movie.director}</span>
          </p>
          <p className="text-slate-700 mb-3">
            Year: <span className="font-semibold">{movie.release_year}</span>
          </p>
          <p className="text-slate-700 leading-relaxed max-w-prose">
            {movie.abstract}
          </p>
        </div>
      </div>

      {/* REVIEWS SECTION*/}
      <ReviewsSection
        reviews={movie.reviews}
        movieId={movie.id}
        getMovieData={getMovieData}
      />
    </>
  );
}
