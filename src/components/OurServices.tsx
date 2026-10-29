import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, FileText, Layers, RefreshCw } from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: {
    overview: string;
    highlights: string[];
    instruments: string[];
  };
}

const servicesData: ServiceItem[] = [
  {
    id: 'ratings',
    title: 'Ratings',
    description: 'Comprehensive credit assessments across eligible issuers, instruments, and borrowing programs.',
    details: {
      overview: 'Rigorous assessment of credit risk that reflects the likelihood of timely debt servicing and default probability over market cycles.',
      highlights: [
        'Issuer & Corporate Credit Ratings',
        'Long-term and Short-term Bank Facilities',
        'Non-Convertible Debentures (NCDs) & Commercial Paper',
        'Structured Debt & Securitization Instruments'
      ],
      instruments: ['Bank Loans', 'NCDs / Bonds', 'Commercial Paper', 'Structured Finance']
    }
  },
  {
    id: 'surveillance',
    title: 'Surveillance',
    description: 'Continuous monitoring of assigned ratings to reflect evolving credit profiles.',
    details: {
      overview: 'Active ongoing tracking of operational performance, liquidity covenants, regulatory events, and industry headwinds for timely rating actions.',
      highlights: [
        'Annual comprehensive surveillance reviews',
        'Event-driven rating watchlist and outlook revisions',
        'Quarterly financial monitoring against financial covenants',
        'Real-time material development notifications'
      ],
      instruments: ['Quarterly Triggers', 'Watchlist Alerts', 'Covenant Tracking', 'Rating Actions']
    }
  },
  {
    id: 'methodologies',
    title: 'Methodologies',
    description: 'Transparent frameworks and analytical criteria underpinning ACER\'s rating process.',
    details: {
      overview: 'Standardized and back-tested analytical criteria adhering strictly to SEBI regulations and global rating committee benchmarks.',
      highlights: [
        'Published sector-specific rating methodologies',
        'Quantitative scoring engines & peer benchmark matrices',
        'ESG integration into corporate credit risk profiling',
        'Default study and transition rate analytics'
      ],
      instruments: ['Sector Criteria', 'Financial Risk Models', 'Governance Rubrics', 'Default Matrix']
    }
  }
];

export const OurServices: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);

  return (
    <section id="services" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Services
          </h2>
        </div>

        {/* 3 Pillars matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {servicesData.map((service) => {
            const isSelected = activeService === service.id;
            return (
              <div
                key={service.id}
                onClick={() => setActiveService(isSelected ? null : service.id)}
                className="group cursor-pointer flex flex-col justify-between transition-all duration-300"
              >
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-[28px] font-semibold text-[#6C5CE7] group-hover:text-purple-700 transition-colors tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed font-normal">
                    {service.description}
                  </p>
                </div>

                {/* Distinctive pink/magenta underline indicator seen in screenshot */}
                <div className="mt-8 pt-4">
                  <div className="h-[2px] w-full bg-gradient-to-r from-pink-400 via-purple-300 to-pink-200 group-hover:from-pink-500 group-hover:via-purple-500 group-hover:to-purple-300 transition-all duration-300" />
                  
                  <div className="flex items-center justify-between text-xs text-purple-600 font-medium pt-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>{isSelected ? 'Hide details' : 'Explore criteria'}</span>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90' : ''}`} />
                  </div>
                </div>

                {/* Expandable details when clicked */}
                {isSelected && (
                  <div className="mt-4 p-4 rounded-xl bg-purple-50/70 border border-purple-100/80 animate-in fade-in slide-in-from-top-2 duration-200">
                    <p className="text-xs text-slate-700 mb-3 leading-relaxed">
                      {service.details.overview}
                    </p>
                    <div className="space-y-1.5">
                      {service.details.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
