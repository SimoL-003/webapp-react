import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navLinks = [
    { pageTitle: "Home", path: "/" },
    { pageTitle: "Movies", path: "/movies" },
  ];

  return (
    <header className="h-20 bg-slate-900 border-b border-s-slate-700">
      <div className="container flex justify-between items-center h-full">
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-slate-100 font-semibold text-lg"
          >
            <span className="text-indigo-400 text-xl">ICONA</span>MovieCatalogue
          </Link>
        </div>

        <nav className="text-slate-300">
          <ul className="flex gap-6">
            {navLinks.map((page) => (
              <li
                key={page.path}
                className="hover:text-indigo-300 transition-colors"
              >
                <NavLink to={page.path} className="px-4 py-2 transition-all">
                  {page.pageTitle}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
