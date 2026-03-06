import { useState } from "react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/blog", label: "Blog" },
  { to: "/about", label: "About" },
];

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive
    ? "text-sm font-medium text-slate-900 underline underline-offset-4"
    : "text-sm font-medium text-slate-500 transition-colors hover:text-slate-900";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
          onClick={() => setOpen(false)}
        >
          Apil Travels
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 sm:flex">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <NavLink to={to} end className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Hamburger button — mobile only */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition-colors hover:bg-slate-100 sm:hidden"
        >
          {open ? (
            // X icon
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-5 w-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-slate-100 bg-white sm:hidden">
          <ul className="mx-auto max-w-5xl divide-y divide-slate-100 px-6">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block py-3.5 text-sm font-medium ${
                      isActive ? "text-slate-900" : "text-slate-500"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
