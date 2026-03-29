import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Schedule', path: '/schedule' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[#953fcf] font-bold text-xl hover:opacity-80 transition-opacity"
            aria-label="Exhale TWC - Home"
          >
            <span className="text-2xl">🌿</span>
            <span>Exhale TWC</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors duration-200 hover:text-[#953fcf] ${
                      isActive ? 'text-[#953fcf] border-b-2 border-[#953fcf] pb-1' : 'text-gray-700'
                    }`
                  }
                  end={link.path === '/'}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link
                to="/schedule"
                className="bg-[#953fcf] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#8b54d7] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#953fcf] focus:ring-offset-2"
              >
                Book a Consult
              </Link>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#953fcf] hover:bg-[#edd2ff] transition-colors focus:outline-none focus:ring-2 focus:ring-[#953fcf]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div id="mobile-menu" className="md:hidden py-4 border-t border-gray-100">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `block px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? 'bg-[#edd2ff] text-[#953fcf]'
                          : 'text-gray-700 hover:bg-[#edd2ff] hover:text-[#953fcf]'
                      }`
                    }
                    end={link.path === '/'}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/schedule"
                  className="block text-center bg-[#953fcf] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#8b54d7] transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book a Consult
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
