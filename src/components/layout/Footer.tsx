import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xl">🌿</span>
              <span className="text-white font-bold text-lg">Exhale TWC</span>
            </div>
            <p className="text-sm text-gray-400">
              Your journey to healing starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-[#edd2ff] transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-[#edd2ff] transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-[#edd2ff] transition-colors">Services</Link></li>
              <li><Link to="/schedule" className="hover:text-[#edd2ff] transition-colors">Schedule a Consult</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@exhaletwc.com"
                  className="hover:text-[#edd2ff] transition-colors"
                >
                  hello@exhaletwc.com
                </a>
              </li>
              <li>
                <a
                  href="https://exhaletwc.com"
                  className="hover:text-[#edd2ff] transition-colors"
                >
                  exhaletwc.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p className="text-gray-500">
            &copy; {currentYear} Exhale TWC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-[#edd2ff] transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
