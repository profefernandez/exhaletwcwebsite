import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on Escape key
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

  // Trap focus inside mobile menu when open
  useEffect(() => {
    if (isMenuOpen && menuRef.current) {
      const firstFocusable = menuRef.current.querySelector<HTMLElement>('a, button');
      firstFocusable?.focus();
    }
  }, [isMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/97 backdrop-blur-md shadow-md border-b border-purple-100'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      role="banner"
    >
      {/* Skip navigation link — visible on focus for keyboard users */}
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>

      <nav
        className="max-w-7xl mx-auto px-6 lg:px-10 h-24 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Logo — larger, transparent background */}
        <Link
          to="/"
          className="flex items-center"
          aria-label="Exhale Therapy, Wellness and Consulting — Home"
        >
          <img
            src="/images/logo_transparent.png"
            alt="Exhale Therapy, Wellness & Consulting logo"
            className="h-20 w-auto object-contain"
            width="80"
            height="80"
          />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8" role="navigation" aria-label="Desktop navigation">
          <ul className="flex items-center gap-6 list-none" role="list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-base font-semibold tracking-wide transition-colors duration-200 no-underline px-1 py-1 rounded ${
                      isActive
                        ? 'text-[#4A1A7A] underline underline-offset-4 decoration-2'
                        : 'text-[#2D2040] hover:text-[#4A1A7A]'
                    }`
                  }
                  aria-current={undefined}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/schedule"
            className="inline-flex items-center px-7 py-3 rounded-full text-base font-bold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg no-underline min-h-[48px]"
            style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
            aria-label="Book a consultation with Exhale TWC"
          >
            Book a Consultation
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          ref={hamburgerRef}
          className="md:hidden w-12 h-12 flex flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-transparent hover:border-purple-200 transition-all"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          style={{ minWidth: 48, minHeight: 48 }}
        >
          <span
            className={`block w-6 h-0.5 bg-[#0F0A1A] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-[#0F0A1A] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}
            aria-hidden="true"
          />
          <span
            className={`block w-6 h-0.5 bg-[#0F0A1A] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
            aria-hidden="true"
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`md:hidden bg-white border-t-2 border-purple-100 px-6 py-8 shadow-2xl transition-all duration-300 ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <ul className="flex flex-col gap-2 list-none" role="list">
          {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `block text-lg font-semibold py-3 px-2 rounded-lg transition-colors no-underline ${
                    isActive
                      ? 'text-[#4A1A7A] bg-purple-50'
                      : 'text-[#2D2040] hover:text-[#4A1A7A] hover:bg-purple-50'
                  }`
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="pt-4">
            <Link
              to="/schedule"
              className="block text-center px-6 py-4 rounded-full text-base font-bold text-white no-underline min-h-[48px] flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #4A1A7A 0%, #7B2FBE 100%)' }}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Book a consultation with Exhale TWC"
            >
              Book a Consultation
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};
