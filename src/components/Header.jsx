import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Search } from 'lucide-react';

export const Header = ({ currentPage = 'home', onNavigate, onOpenGetRated, onOpenRatingsSearch }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ratingsDropdownOpen, setRatingsDropdownOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all duration-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        
        {/* Brand Zone */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group shrink-0 cursor-pointer text-left"
        >
          <div className="relative flex items-center">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 24L12 8L16 16L12 24H4Z" fill="#9381FF" fillOpacity="0.85" />
              <path d="M16 16L20 8L28 24H20L16 16Z" fill="#6C5CE7" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#1E1B4B] group-hover:text-purple-600 transition-colors">
            ACER
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] font-medium tracking-wider text-slate-700">
          
          {/* ABOUT LINK */}
          <button
            onClick={() => onNavigate('about')}
            className={`transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer py-2 ${
              currentPage === 'about'
                ? 'text-purple-600 font-semibold border-b-2 border-purple-600'
                : 'hover:text-purple-600'
            }`}
          >
            ABOUT
          </button>

          {/* RATINGS with dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setRatingsDropdownOpen(true)}
            onMouseLeave={() => setRatingsDropdownOpen(false)}
          >
            <button
              onClick={onOpenRatingsSearch}
              className="flex items-center gap-1 hover:text-purple-600 transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer py-2"
            >
              <span>RATINGS</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${ratingsDropdownOpen ? 'rotate-180 text-purple-600' : ''}`} />
            </button>

            {ratingsDropdownOpen && (
              <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-slate-100 py-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Rating Verticals</p>
                </div>
                <button
                  onClick={() => {
                    setRatingsDropdownOpen(false);
                    onOpenRatingsSearch();
                  }}
                  className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center justify-between cursor-pointer"
                >
                  <span>Bank Loan Ratings</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </button>
                <button
                  onClick={() => {
                    setRatingsDropdownOpen(false);
                    onOpenRatingsSearch();
                  }}
                  className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center justify-between cursor-pointer"
                >
                  <span>Bond & Debenture Ratings</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </button>
                <button
                  onClick={() => {
                    setRatingsDropdownOpen(false);
                    onOpenRatingsSearch();
                  }}
                  className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center justify-between cursor-pointer"
                >
                  <span>Issuer Ratings</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </button>
                <button
                  onClick={() => {
                    setRatingsDropdownOpen(false);
                    onNavigate('home');
                    setTimeout(() => {
                      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full text-left px-4 py-2.5 text-xs text-slate-700 hover:bg-purple-50 hover:text-purple-700 flex items-center justify-between cursor-pointer"
                >
                  <span>Rating Scale & Methodologies</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (currentPage !== 'home') {
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              } else {
                document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="hover:text-purple-600 transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer"
          >
            RESEARCH & INSIGHTS
          </button>

          <button
            onClick={() => {
              document.getElementById('disclosures')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="hover:text-purple-600 transition-colors uppercase whitespace-nowrap shrink-0 cursor-pointer"
          >
            DISCLOSURES
          </button>
        </nav>

        {/* Primary Action Button */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={onOpenGetRated}
            className="bg-[#786CF0] hover:bg-[#685BD8] text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 tracking-wider uppercase cursor-pointer"
          >
            GET RATED
          </button>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-slate-700">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home');
              }}
              className={`py-1 text-left ${currentPage === 'home' ? 'text-purple-600 font-bold' : 'hover:text-purple-600'}`}
            >
              Home
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('about');
              }}
              className={`py-1 text-left ${currentPage === 'about' ? 'text-purple-600 font-bold' : 'hover:text-purple-600'}`}
            >
              About ACER
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRatingsSearch();
              }}
              className="py-1 text-left hover:text-purple-600 flex items-center justify-between"
            >
              <span>Ratings & Rationales</span>
              <Search className="w-4 h-4 text-slate-400" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigate('home');
                setTimeout(() => {
                  document.getElementById('research')?.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              className="py-1 text-left hover:text-purple-600"
            >
              Research & Insights
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                document.getElementById('disclosures')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="py-1 text-left hover:text-purple-600"
            >
              Disclosures & Governance
            </button>
          </nav>
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGetRated();
              }}
              className="w-full bg-[#786CF0] hover:bg-[#685BD8] text-white text-xs font-semibold py-3 rounded-lg text-center uppercase tracking-wider cursor-pointer"
            >
              Get Rated Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
