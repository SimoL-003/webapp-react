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
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto my-8 bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold text-slate-900 mb-4">
            Add a review
          </h3>

          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm text-slate-700 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your name"
              onChange={handleInputChange}
              value={reviewData.name}
              required
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
            />
          </div>

          {/* Vote */}
          <div className="mb-4">
            <label htmlFor="vote" className="block text-sm text-slate-700 mb-1">
              Vote
            </label>
            <input
              type="number"
              id="vote"
              name="vote"
              min={1}
              max={5}
              required
              onChange={handleInputChange}
              value={reviewData.vote}
              className={`w-full border border-slate-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition ${reviewData.vote === 0 ? "text-slate-400" : "text-slate-800"}`}
            />
          </div>

          {/* Text */}
          <div className="mb-4">
            <label htmlFor="text" className="block text-sm text-slate-700 mb-1">
              Text
            </label>
            <textarea
              name="text"
              id="text"
              onChange={handleInputChange}
              value={reviewData.text}
              placeholder="Write your review..."
              className="w-full border border-slate-300 rounded-md px-3 py-2 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition resize-none"
              rows={4}
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition hover:cursor-pointer"
          >
            Confirm
          </button>
        </form>
      </div>
    </section>
  );
}
