import ReviewCard from "./ReviewCard";

export default function ReviewsSection({ reviews }) {
  return (
    <section className="py-6">
      <div className="container">
        <h2 className="text-2xl font-semibold text-slate-900 mb-4">Reviews</h2>

        {reviews ? (
          <div className="grid grid-cols-3 gap-4">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <h3 className="text-slate-700">No reviews yet</h3>
        )}
      </div>
    </section>
  );
}
