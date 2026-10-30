/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { GetRatedModal } from './components/GetRatedModal.jsx';
import { RatingsSearchModal } from './components/RatingsSearchModal.jsx';
import { HomePage } from './pages/HomePage.jsx';
import { AboutPage } from './pages/AboutPage.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('about'); // Defaulting to the requested About page or based on hash
  const [getRatedModalOpen, setGetRatedModalOpen] = useState(false);
  const [ratingsSearchModalOpen, setRatingsSearchModalOpen] = useState(false);

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#about' || hash.startsWith('#about/')) {
        setCurrentPage('about');
      } else if (hash === '#home' || hash === '' || hash === '#') {
        // keep current or default to about/home
      }
    };

    if (window.location.hash.toLowerCase() === '#home') {
      setCurrentPage('home');
    } else if (window.location.hash.toLowerCase() === '#about') {
      setCurrentPage('about');
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '#home' : '#about';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      {/* Sticky Header with Navigation and Dropdowns */}
      <Header
        currentPage={currentPage}
        onNavigate={navigateTo}
        onOpenGetRated={() => setGetRatedModalOpen(true)}
        onOpenRatingsSearch={() => setRatingsSearchModalOpen(true)}
      />

      {/* Page switcher quick pill banner for convenient review */}
      <div className="bg-slate-100/90 border-b border-slate-200/70 py-1.5 px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs">
          <div className="flex items-center gap-2 text-slate-500">
            <span className="font-medium text-slate-700">Viewing Page:</span>
            <span className="bg-purple-100 text-purple-800 font-semibold px-2 py-0.5 rounded text-[11px] uppercase">
              {currentPage === 'about' ? 'About ACER' : 'Home'}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateTo('home')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              Home Page
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`px-3 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
              }`}
            >
              About ACER Page
            </button>
          </div>
        </div>
      </div>

      <main>
        {currentPage === 'about' ? (
          <AboutPage onOpenGetRated={() => setGetRatedModalOpen(true)} />
        ) : (
          <HomePage
            onOpenGetRated={() => setGetRatedModalOpen(true)}
            onOpenRatingsSearch={() => setRatingsSearchModalOpen(true)}
          />
        )}
      </main>

      {/* Footer with Links and Regulatory Disclaimers */}
      <Footer
        onNavigate={navigateTo}
        onOpenRatingsSearch={() => setRatingsSearchModalOpen(true)}
        onOpenDisclosures={() => setRatingsSearchModalOpen(true)}
      />

      {/* Interactive Modals */}
      <GetRatedModal
        isOpen={getRatedModalOpen}
        onClose={() => setGetRatedModalOpen(false)}
      />

      <RatingsSearchModal
        isOpen={ratingsSearchModalOpen}
        onClose={() => setRatingsSearchModalOpen(false)}
      />
    </div>
  );
}
