import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer
      style={{ background: 'linear-gradient(135deg, #1C0A3A 0%, #2D1B4E 100%)' }}
      className="text-white pt-20 pb-10 mt-auto"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-14 mb-14">

          {/* Brand column */}
          <div>
            <Link to="/" aria-label="Exhale Therapy, Wellness and Consulting — Home">
              <img
                src="/images/logo_transparent.png"
                alt="Exhale Therapy, Wellness & Consulting"
                className="h-24 w-auto object-contain mb-5"
                width="96"
                height="96"
              />
            </Link>
            <p
              className="leading-relaxed max-w-xs"
              style={{ color: '#E8E0F0', fontSize: '1rem' }}
            >
              Holistic wellness therapy built on cultural affirmation, evidence-based care, and deep healing for Black and Brown communities.
            </p>
            <span className="divider-gold mt-6" />
          </div>

          {/* Navigation column */}
          <nav aria-label="Footer navigation">
            <h2
              className="font-bold mb-6 uppercase tracking-widest"
              style={{ color: '#FFFFFF', fontSize: '0.875rem' }}
            >
              Navigate
            </h2>
            <ul className="space-y-4 list-none">
              {[
                { label: 'Home',               path: '/' },
                { label: 'About',              path: '/about' },
                { label: 'Services',           path: '/services' },
                { label: 'Book a Consultation',path: '/schedule' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="transition-colors duration-200 no-underline hover:underline"
                    style={{ color: '#E8E0F0', fontSize: '1rem' }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect column */}
          <div>
            <h2
              className="font-bold mb-6 uppercase tracking-widest"
              style={{ color: '#FFFFFF', fontSize: '0.875rem' }}
            >
              Connect
            </h2>
            <ul className="space-y-4 list-none mb-8">
              <li>
                <a
                  href="mailto:hello@exhaletwc.com"
                  className="transition-colors duration-200 hover:underline"
                  style={{ color: '#E8E0F0', fontSize: '1rem' }}
                  aria-label="Email Exhale TWC at hello@exhaletwc.com"
                >
                  hello@exhaletwc.com
                </a>
              </li>
              <li>
                <a
                  href="https://exhaletwc.com"
                  className="transition-colors duration-200 hover:underline"
                  style={{ color: '#E8E0F0', fontSize: '1rem' }}
                  aria-label="Visit the Exhale TWC website"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  exhaletwc.com
                </a>
              </li>
            </ul>
            <div
              className="p-5 rounded-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)' }}
              role="note"
              aria-label="Confidentiality notice"
            >
              <p style={{ color: '#E8E0F0', fontSize: '0.9375rem', lineHeight: '1.7' }}>
                <span style={{ color: '#EDD2FF', fontWeight: 700 }}>Confidential &amp; Secure.</span>{' '}
                All communications are protected. We are HIPAA-aware and committed to your privacy.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}
        >
          <p style={{ color: '#C4B8D8', fontSize: '0.9375rem' }}>
            &copy; {currentYear} Exhale TWC. All rights reserved.
          </p>
          <p
            className="italic"
            style={{ fontFamily: 'var(--font-serif)', color: '#EDD2FF', fontSize: '1.0625rem' }}
          >
            &ldquo;Healing is not a luxury — it is a necessity.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
};
