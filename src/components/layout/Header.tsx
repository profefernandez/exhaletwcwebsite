import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home',                 path: '/' },
  { label: 'About',                path: '/about' },
  { label: 'Services',             path: '/services' },
  { label: 'Good Faith Estimate',  path: '/good-faith-estimate' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{ background: '#2D1B4E', borderBottom: '1px solid rgba(201,168,76,0.25)' }}
      role="banner"
    >
      <a href="#main-content" className="skip-to-main">Skip to main content</a>

      <nav
        className="max-w-7xl mx-auto px-6 lg:px-10 h-[120px] flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo — bumped to 110px so it's legible */}
        <Link to="/" aria-label="Exhale Therapy, Wellness and Consulting — Home" className="flex items-center">
          <img
            src="/images/logo_transparent.png"
            alt="Exhale Therapy, Wellness & Consulting"
            style={{ height: '110px', width: '110px', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-sm font-semibold tracking-wide transition-colors duration-200 no-underline pb-1 border-b-2 ${
                      isActive
                        ? 'text-white border-[#C9A84C]'
                        : 'text-white/80 border-transparent hover:text-white hover:border-white/40'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/schedule"
            className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-bold text-white no-underline transition-all duration-200 hover:opacity-95 hover:shadow-lg hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E' }}
            aria-label="Book a consultation"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} aria-hidden="true" />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} aria-hidden="true" />
          <span className={`block w-5 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t px-6 py-6 shadow-xl"
          style={{ background: '#2D1B4E', borderTopColor: 'rgba(201,168,76,0.25)' }}
          role="dialog"
          aria-label="Navigation menu"
        >
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block text-base font-semibold py-2.5 px-2 rounded-lg no-underline transition-colors ${
                      isActive ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/schedule"
                className="block text-center px-6 py-3 rounded-full text-sm font-bold text-white no-underline"
                style={{ background: 'linear-gradient(135deg, #B8860B 0%, #C9A84C 100%)', color: '#1C1C2E' }}
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Consultation
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
