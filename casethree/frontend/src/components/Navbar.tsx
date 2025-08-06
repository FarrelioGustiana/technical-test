import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import LogoutButton from './LogoutButton';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-neutral-200 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16">
        <div className="font-bold text-xl tracking-tight text-neutral-900 capitalize">
          laundry kilat
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center text-sm font-medium text-neutral-700">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`transition-colors duration-200 px-2 pb-1 border-b-2 ${
                location.pathname === link.path
                  ? "border-neutral-900 text-neutral-900"
                  : "border-transparent hover:border-neutral-400 hover:text-neutral-900"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {localStorage.getItem('access') ? (
            <LogoutButton />
          ) : (
            <>
              <Link to="/login" className={`transition-colors duration-200 px-2 pb-1 border-b-2 ${location.pathname === '/login' ? 'border-neutral-900 text-neutral-900' : 'border-transparent hover:border-neutral-400 hover:text-neutral-900'}`}>Login</Link>
              <Link to="/register" className={`transition-colors duration-200 px-2 pb-1 border-b-2 ${location.pathname === '/register' ? 'border-neutral-900 text-neutral-900' : 'border-transparent hover:border-neutral-400 hover:text-neutral-900'}`}>Register</Link>
            </>
          )}
        </div>

        {/* mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle navigation menu"
        >
          <span
            className={`block w-6 h-0.5 bg-neutral-900 mb-1 transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-neutral-900 mb-1 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-neutral-900 transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/95 border-b border-neutral-200 shadow-sm">
          <ul className="flex flex-col items-center gap-2 py-3 text-base font-medium text-neutral-700">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={`block px-4 py-2 rounded transition-colors duration-200 ${
                    location.pathname === link.path
                      ? "bg-neutral-100 text-neutral-900"
                      : "hover:bg-neutral-100 hover:text-neutral-900"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            {localStorage.getItem('access') ? (
              <li>
                <LogoutButton />
              </li>
            ) : (
              <>
                <li>
                  <Link to="/login" className={`block px-4 py-2 rounded transition-colors duration-200 ${location.pathname === '/login' ? 'bg-neutral-100 text-neutral-900' : 'hover:bg-neutral-100 hover:text-neutral-900'}`} onClick={() => setMenuOpen(false)}>Login</Link>
                </li>
                <li>
                  <Link to="/register" className={`block px-4 py-2 rounded transition-colors duration-200 ${location.pathname === '/register' ? 'bg-neutral-100 text-neutral-900' : 'hover:bg-neutral-100 hover:text-neutral-900'}`} onClick={() => setMenuOpen(false)}>Register</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
