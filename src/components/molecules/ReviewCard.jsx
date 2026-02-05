export default function ReviewCard({ review }) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-slate-800 font-medium">{review.name}</span>
        <span>⭐ {review.vote}</span>
      </div>
      <p className="text-slate-600 text-sm">{review.text}</p>
      <p className="text-slate-500 text-xs text-end pt-4">
        {review.created_at}
      </p>
    </div>
  );
}
