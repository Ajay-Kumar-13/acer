import React from 'react';

interface FooterProps {
  onOpenRatingsSearch: () => void;
  onOpenDisclosures?: (type: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRatingsSearch, onOpenDisclosures }) => {
  return (
    <footer id="disclosures" className="bg-white text-slate-700 pt-16 pb-12 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Main Footer Navigation Grid matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-3 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <svg width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 24L12 8L16 16L12 24H4Z" fill="#9381FF" fillOpacity="0.85" />
                <path d="M16 16L20 8L28 24H20L16 16Z" fill="#6C5CE7" />
              </svg>
              <span className="text-xl font-bold tracking-tight text-[#1E1B4B]">
                ACER
              </span>
            </a>
            <p className="text-xs text-slate-500 max-w-xs leading-relaxed">
              India's New-Age Credit Rating Agency. Promoted by Indian Overseas Bank & supported by Central Bank of India.
            </p>
          </div>

          {/* 4 Link Columns matching screenshot */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-8">
            
            {/* ABOUT */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                ABOUT
              </h4>
              <ul className="space-y-2 text-xs text-slate-500 font-normal">
                <li><a href="#about" className="hover:text-purple-600 transition-colors">Company Overview</a></li>
                <li><a href="#why-acer" className="hover:text-purple-600 transition-colors">Vision</a></li>
                <li><a href="#why-acer" className="hover:text-purple-600 transition-colors">Mission</a></li>
                <li><a href="#about" className="hover:text-purple-600 transition-colors">Members</a></li>
              </ul>
            </div>

            {/* RATINGS */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                RATINGS
              </h4>
              <ul className="space-y-2 text-xs text-slate-500 font-normal">
                <li>
                  <button onClick={onOpenRatingsSearch} className="hover:text-purple-600 transition-colors cursor-pointer text-left">
                    Search
                  </button>
                </li>
                <li>
                  <button onClick={onOpenRatingsSearch} className="hover:text-purple-600 transition-colors cursor-pointer text-left">
                    Rationales
                  </button>
                </li>
                <li><a href="#services" className="hover:text-purple-600 transition-colors">Definitions</a></li>
                <li><a href="#services" className="hover:text-purple-600 transition-colors">Methodologies</a></li>
              </ul>
            </div>

            {/* RESEARCH & INSIGHTS */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                RESEARCH & INSIGHTS
              </h4>
              <ul className="space-y-2 text-xs text-slate-500 font-normal">
                <li><a href="#research" className="hover:text-purple-600 transition-colors">Sector Reports</a></li>
                <li><a href="#research" className="hover:text-purple-600 transition-colors">Economic Research</a></li>
                <li><a href="#research" className="hover:text-purple-600 transition-colors">Thematic Research</a></li>
                <li><a href="#research" className="hover:text-purple-600 transition-colors">Research Archive</a></li>
              </ul>
            </div>

            {/* DISCLOSURES */}
            <div className="space-y-3">
              <h4 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">
                DISCLOSURES
              </h4>
              <ul className="space-y-2 text-xs text-slate-500 font-normal">
                <li>
                  <a href="#disclosures" onClick={() => onOpenDisclosures?.('sebi')} className="hover:text-purple-600 transition-colors">
                    SEBI Disclosures
                  </a>
                </li>
                <li>
                  <a href="#disclosures" onClick={() => onOpenDisclosures?.('fsr')} className="hover:text-purple-600 transition-colors">
                    FSR Disclosures
                  </a>
                </li>
              </ul>
            </div>

          </div>

        </div>

        {/* Separator line */}
        <div className="border-t border-slate-200/80 pt-6 pb-6">
          <p className="text-xs text-slate-500">
            ©2026 All rights reserved
          </p>
        </div>

        {/* Legal Regulatory Disclaimer matching screenshot */}
        <div className="space-y-3 text-[10px] text-slate-400 leading-relaxed text-justify">
          <p>
            ACER is engaged in the business of providing credit ratings and other permitted services and does not provide investment advice or recommendations, directly or indirectly, with respect to any securities. Ratings are subject to ongoing surveillance, revision or withdrawal, as and when warranted.
          </p>
          <p>
            Information used in assigning ratings has been obtained from sources believed to be reliable, including the rated entity; however, such information has not been independently audited or verified by ACER. While reasonable care has been exercised to ensure that the information contained herein is true and fair, it is provided "as is". ACER does not make any representation, warranty of any kind, or guarantee the accuracy, adequacy, suitability or completeness of any information or its fitness for a particular purpose.
          </p>
          <p>
            All ratings and related analyses are statements of opinion, and ACER is not liable for any losses, direct or indirect, arising from use of this publication or its contents. Users are advised to exercise their own judgment and due diligence before making any decision based on the ratings.
          </p>
        </div>

      </div>
    </footer>
  );
};
