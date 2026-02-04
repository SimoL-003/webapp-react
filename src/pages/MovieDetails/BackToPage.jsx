import { Link } from "react-router-dom";

export default function BackToPage() {
  return (
    <div className="bg-slate-50 py-6">
      <div className="ml-8">
        <Link
          to="/movies"
          className="text-slate-500 hover:text-indigo-500 text-sm transition-all py-2 flex items-center w-fit"
        >
          <span>
            <svg
              className="w-4 h-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
              fill="currentColor"
            >
              {/* <!--!Font Awesome Free v7.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2026 Fonticons, Inc.--> */}
              <path d="M201.4 297.4C188.9 309.9 188.9 330.2 201.4 342.7L361.4 502.7C373.9 515.2 394.2 515.2 406.7 502.7C419.2 490.2 419.2 469.9 406.7 457.4L269.3 320L406.6 182.6C419.1 170.1 419.1 149.8 406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3L201.3 297.3z" />
            </svg>
          </span>{" "}
          Back to page
        </Link>
      </div>
    </div>
  );
}
