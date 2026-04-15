import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* AAA Skip Navigation — visible on keyboard focus */}
      <a
        href="#main-content"
        className="skip-to-main"
        aria-label="Skip to main content"
      >
        Skip to main content
      </a>
      <Header />
      <main
        id="main-content"
        className="flex-grow"
        tabIndex={-1}
        aria-label="Main content"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
