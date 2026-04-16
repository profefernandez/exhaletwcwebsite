import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { AccessibilityWidget } from '../AccessibilityWidget';

export const Layout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
      <AccessibilityWidget />
    </div>
  );
};
