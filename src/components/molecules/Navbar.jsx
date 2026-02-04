import { NavLink } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { pageTitle: "Home", path: "/" },
    { pageTitle: "Movies", path: "/movies" },
  ];

  return (
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
  );
}
