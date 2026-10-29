import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Download, FileText, ExternalLink } from 'lucide-react';

interface RatingCard {
  id: string;
  image: string;
  title: string;
  date: string;
  fileSize: string;
  category: string;
  summary: string;
}

const ratingsList: RatingCard[] = [
  {
    id: 'rate-1',
    image: '/src/assets/images/financial_analyst_stress_1793294807179.jpg',
    title: 'CRISIL ECONOMY FIRST CUT: FINANCIAL CONDITIONS TIGHTEN FURTHER',
    date: 'May 18, 2026',
    fileSize: '1.6 MB',
    category: 'Macroeconomic Commentary',
    summary: 'Systemic liquidity conditions moderated amid seasonal tax outflows and RBI foreign exchange interventions, tightening financial conditions across banking and debt markets.'
  },
  {
    id: 'rate-2',
    image: '/src/assets/images/modern_glass_skyscraper_1793294807340.jpg',
    title: 'INFRASTRUCTURE CREDIT PULSE: COMMERCIAL CAPEX STRENGTHENS',
    date: 'May 18, 2026',
    fileSize: '1.6 MB',
    category: 'Infrastructure & Real Assets',
    summary: 'Commercial real estate and toll road concessions demonstrate resilient debt service coverage ratios supported by robust freight traffic and office pre-leasing.'
  },
  {
    id: 'rate-3',
    image: '/src/assets/images/executive_sunil_mehta_1793294808747.jpg',
    title: 'BANKING SECTOR ASSET QUALITY: NPA RATIOS HIT MULTI-YEAR LOWS',
    date: 'May 18, 2026',
    fileSize: '1.6 MB',
    category: 'Financial Institutions',
    summary: 'Scheduled commercial banks maintain healthy capital adequacy and return on assets, while retail unsecured lending credit costs show mild normalization.'
  },
  {
    id: 'rate-4',
    image: '/src/assets/images/executive_ajay_choudhary_1793294809286.jpg',
    title: 'DIGITAL PAYMENTS & FINTECH CREDIT: SURVEILLANCE OUTLOOK 2026',
    date: 'May 15, 2026',
    fileSize: '2.4 MB',
    category: 'Fintech Surveillance',
    summary: 'Assessment of transaction volumes, merchant discount rate economics, and liquidity backup facilities for emerging payment aggregators and NBFC-P2P entities.'
  },
  {
    id: 'rate-5',
    image: '/src/assets/images/hero_matterhorn_mountain_1793294806349.jpg',
    title: 'SOVEREIGN & STATE FINANCES: SUB-NATIONAL FISCAL HEALTH REPORT',
    date: 'May 12, 2026',
    fileSize: '3.1 MB',
    category: 'Public Finance',
    summary: 'State development loan issuance patterns, off-budget debt liabilities, and capital outlay trends across major Indian state economies.'
  }
];

interface LatestRatingsProps {
  onOpenRatingsSearch: () => void;
  onSelectRating?: (rating: RatingCard) => void;
}

export const LatestRatings: React.FC<LatestRatingsProps> = ({ onOpenRatingsSearch, onSelectRating }) => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const maxIndex = Math.max(0, ratingsList.length - itemsPerPage);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleCards = ratingsList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="ratings" className="py-20 bg-white relative overflow-hidden">
      {/* Subtle purple aura glow over left card as seen in screenshot */}
      <div className="absolute top-16 left-12 w-80 h-80 ambient-glow-purple -z-10 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with Carousel Navigation Buttons */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Latest Ratings
          </h2>

          {/* Carousel Arrows */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              aria-label="Previous ratings"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-purple-500 hover:text-purple-600 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= maxIndex}
              aria-label="Next ratings"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-purple-500 hover:text-purple-600 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Card Carousel Track */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleCards.map((card) => (
            <div
              key={card.id}
              onClick={() => onSelectRating?.(card)}
              className="group cursor-pointer flex flex-col transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 shadow-sm border border-slate-100/80 mb-5">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 to-transparent pointer-events-none" />
              </div>

              {/* Card Title */}
              <h3 className="text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-purple-600 transition-colors uppercase tracking-tight leading-snug line-clamp-2 mb-2">
                {card.title}
              </h3>

              {/* Metadata with unboxed typographic separator */}
              <div className="flex items-center gap-2 text-xs text-slate-500 font-normal">
                <span>{card.date}</span>
                <span aria-hidden="true">·</span>
                <span>Size: {card.fileSize}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Primary CTA button: MORE RATINGS */}
        <div className="mt-12">
          <button
            onClick={onOpenRatingsSearch}
            className="bg-[#786CF0] hover:bg-[#685BD8] text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 tracking-wider uppercase cursor-pointer"
          >
            MORE RATINGS
          </button>
        </div>

      </div>
    </section>
  );
};
