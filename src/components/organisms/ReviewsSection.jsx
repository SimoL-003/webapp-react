import { useState } from "react";
import ReviewCard from "../molecules/ReviewCard";
import axios from "axios";

export default function ReviewsSection({ reviews, movieId, getMovieData }) {
  const initialReviewData = {
    name: "",
    vote: 0,
    text: "",
  };
  const [reviewData, setReviewData] = useState(initialReviewData);

  function handleInputChange(e) {
    const value = e.target.value;
    const key = e.target.name;
    setReviewData({ ...reviewData, [key]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post(`http://localhost:3000/api/movies/${movieId}/reviews`, reviewData)
      .then((res) => {
        setReviewData(initialReviewData);
        getMovieData();
      });
  }

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

        {/* ADD REVIEW */}
        <form onSubmit={handleSubmit} className="w-1/2 mx-auto my-8">
          <div className="flex gap-4 border p-2 mb-2">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleInputChange}
              value={reviewData.name}
              className="border"
            />
          </div>
          <div className="flex gap-4 border p-2 mb-2">
            <label htmlFor="vote">Vote</label>
            <input
              type="number"
              id="vote"
              name="vote"
              min={1}
              max={5}
              onChange={handleInputChange}
              value={reviewData.vote}
              className="border"
            />
          </div>
          <div className="flex gap-4 border p-2 mb-2">
            <label htmlFor="text">Text</label>
            <textarea
              name="text"
              id="text"
              onChange={handleInputChange}
              value={reviewData.text}
              className="border"
            ></textarea>
          </div>
          <button type="submit" className="border p-2 hover:cursor-pointer">
            Confirm
          </button>
        </form>
      </div>
    </section>
  );
}
