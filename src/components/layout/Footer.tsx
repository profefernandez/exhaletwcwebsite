import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{ background: 'linear-gradient(135deg, #1C0A3A 0%, #2D1B4E 100%)' }}
      className="text-gray-300 pt-16 pb-8 mt-auto"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">

          {/* Brand */}
          <div>
            <Link to="/" aria-label="Exhale TWC — Home">
              <img
                src="/images/logo_transparent.png"
                alt="Exhale Therapy, Wellness & Consulting"
                className="h-16 w-auto object-contain mb-4"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Holistic wellness therapy built on cultural affirmation, evidence-based care, and deep healing for Black and Brown communities.
            </p>
            <span className="divider-gold mt-6" />
          </div>

          {/* Navigate */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Navigate</h3>
            <ul className="space-y-3 list-none">
              {[
                { label: 'Home',                path: '/' },
                { label: 'About',               path: '/about' },
                { label: 'Services',            path: '/services' },
                { label: 'Book a Consultation', path: '/schedule' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-purple-200 transition-colors duration-200 no-underline hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-xs uppercase tracking-widest">Connect</h3>
            <ul className="space-y-3 list-none mb-6">
              <li>
                <a
                  href="mailto:hello@exhaletwc.com"
                  className="text-sm text-gray-400 hover:text-purple-200 transition-colors duration-200 no-underline hover:underline"
                  aria-label="Email Exhale TWC"
                >
                  hello@exhaletwc.com
                </a>
              </li>
              <li>
                <a
                  href="https://exhaletwc.com"
                  className="text-sm text-gray-400 hover:text-purple-200 transition-colors duration-200 no-underline hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  exhaletwc.com
                </a>
              </li>
            </ul>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5" role="note">
              <p className="text-xs text-gray-400 leading-relaxed">
                <span className="text-purple-200 font-medium">Confidential &amp; Secure.</span>{' '}
                All communications are protected. We are HIPAA-aware and committed to your privacy.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">&copy; {currentYear} Exhale TWC. All rights reserved.</p>
          <p
            className="italic text-sm"
            style={{ fontFamily: 'var(--font-serif)', color: '#9B59D0' }}
          >
            &ldquo;Healing is not a luxury — it is a necessity.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
};
