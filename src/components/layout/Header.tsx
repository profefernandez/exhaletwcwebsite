import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navLinks = [
  { label: 'Home',     path: '/' },
  { label: 'About',    path: '/about' },
  { label: 'Services', path: '/services' },
];

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-purple-100' : 'bg-white/80 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between" aria-label="Main navigation">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label="Exhale TWC — Home">
          <span
            className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold flex-shrink-0"
            style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
            aria-hidden="true"
          >E</span>
          <span className="text-xl font-semibold tracking-tight" style={{ fontFamily: 'var(--font-serif)', color: '#1C1C2E' }}>
            Exhale <span style={{ color: '#7B2FBE' }}>TWC</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6" role="list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `text-sm font-medium tracking-wide transition-colors duration-200 ${isActive ? 'text-[#7B2FBE]' : 'text-[#3D3D5C] hover:text-[#7B2FBE]'}`
                  }
                >{link.label}</NavLink>
              </li>
            ))}
          </ul>
          <Link
            to="/schedule"
            className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
            style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
          >Book a Consultation</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 rounded-lg"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <span className={`block w-6 h-0.5 bg-[#1C1C2E] transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1C1C2E] transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-[#1C1C2E] transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div id="mobile-menu" className="md:hidden bg-white border-t border-purple-100 px-6 py-6 shadow-xl">
          <ul className="flex flex-col gap-4" role="list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    `block text-base font-medium py-2 transition-colors ${isActive ? 'text-[#7B2FBE]' : 'text-[#3D3D5C] hover:text-[#7B2FBE]'}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >{link.label}</NavLink>
              </li>
            ))}
            <li className="pt-2">
              <Link
                to="/schedule"
                className="block text-center px-6 py-3 rounded-full text-sm font-semibold text-white"
                style={{ background: 'linear-gradient(135deg, #7B2FBE 0%, #9B59D0 100%)' }}
                onClick={() => setIsMenuOpen(false)}
              >Book a Consultation</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
