export default function SearchForm({
  handleSubmit,
  searchData,
  setSearchData,
}) {
  return (
    <form onSubmit={handleSubmit} className="pb-6 flex items-center gap-2">
      <label htmlFor="search" className="invisible absolute">
        Search
      </label>
      <input
        id="search"
        type="text"
        value={searchData}
        onChange={(e) => setSearchData(e.target.value)}
        placeholder="Search a title..."
        className="w-ful bg-white border border-slate-300 rounded-md px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      />
      <button
        type="submit"
        className="px-4 py-2 rounded-md bg-indigo-500 text-white text-sm hover:bg-indigo-600 transition"
      >
        Search
      </button>
    </form>
  );
}
