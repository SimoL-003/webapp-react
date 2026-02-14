import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="py-12">
      <div className="container">
        <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-r from-slate-50 to-slate-200 px-6 py-12 text-center shadow-sm">
          <h1 className="mb-4 text-4xl font-bold text-slate-900">
            Welcome to MovieCatalogue
          </h1>

          <p className="mx-auto mb-8 max-w-xl text-lg text-slate-700">
            Discover, explore and review your favorite movies. A constantly
            updated catalog with reviews from the community.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/movies">
              <button className="rounded-md bg-indigo-500 px-6 py-3 font-semibold text-white transition hover:bg-indigo-600 hover:cursor-pointer">
                Browse catalog
              </button>
            </Link>

            <Link to="/new-movie">
              <button className="rounded-md border border-indigo-500 px-6 py-3 font-semibold text-indigo-600 transition hover:bg-indigo-50 hover:cursor-pointer">
                Add a movie
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
