import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Exhale TWC</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <section
        className="py-24 sm:py-32 flex items-center justify-center"
        style={{ background: 'linear-gradient(135deg, #953fcf 0%, #8b54d7 100%)' }}
        aria-label="Page not found"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-8xl mb-6" aria-hidden="true">
            🌿
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4">404</h1>
          <p className="text-xl text-white/90 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. Let&apos;s get you back on
            track.
          </p>
          <Link to="/">
            <Button
              size="lg"
              className="bg-white text-[#953fcf] hover:bg-[#edd2ff] border-0 shadow-xl focus:ring-white"
            >
              Go Back Home
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
};
