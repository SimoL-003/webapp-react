import MoviesGrid from "./MoviesGrid";

export default function MoviesPage() {
  return (
    <section className="bg-slate-100 min-h-screen">
      <div className="container py-6">
        {/* TITLE */}
        <section className="mb-6">
          <h1 className="text-2xl font-semibold text-slate-800">
            Film catalogue
          </h1>
          <p className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            minima.
          </p>
        </section>

        {/* CARD GRID */}
        <MoviesGrid />
      </div>
    </section>
  );
}
