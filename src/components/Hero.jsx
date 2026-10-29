import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero = ({ onOpenGetRated }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-20 lg:pt-14 lg:pb-28">
      {/* Ambient background glow matching the screenshot */}
      <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] ambient-glow-purple -z-10 pointer-events-none transform -translate-y-12 blur-3xl opacity-60" />
      <div className="absolute top-10 left-10 w-96 h-96 ambient-glow-purple -z-10 pointer-events-none blur-3xl opacity-30" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & Call to Actions */}
          <div className="lg:col-span-6 space-y-8 pr-0 lg:pr-6">
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-bold text-slate-900 tracking-tight leading-[1.08] text-balance">
              India's New-Age <br />
              Credit <span className="gradient-text-purple">Rating Agency</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              ACER delivers independent credit ratings, rigorous research, and analytical insights that empower investors, lenders, issuers, and market participants to make informed financial decisions.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-2">
              <button
                onClick={onOpenGetRated}
                className="bg-[#786CF0] hover:bg-[#685BD8] text-white text-xs font-semibold px-7 py-3.5 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 tracking-wider uppercase cursor-pointer"
              >
                GET RATED
              </button>

              <a
                href="#research"
                className="text-xs font-semibold text-slate-700 hover:text-purple-600 transition-colors uppercase tracking-wider py-3.5 flex items-center gap-1.5"
              >
                <span>EXPLORE RESEARCH</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Right Column: Alpine Mountain Card with Institutional Promoters */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            <div className="absolute -top-12 -left-12 w-72 h-72 ambient-glow-purple rounded-full blur-2xl opacity-75 pointer-events-none" />

            <div className="relative w-full max-w-[500px] rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-950 group">
              {/* Alpine Mountain Peak Image */}
              <div className="relative aspect-[4/5] sm:aspect-[3/4] w-full overflow-hidden">
                <img
                  src="/src/assets/images/hero_matterhorn_mountain_1793294806349.jpg"
                  alt="ACER Symbolizing High Standing Financial Integrity"
                  className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-purple-900/10 pointer-events-none" />
              </div>

              {/* Institutional Promoters Glass Banner */}
              <div className="absolute bottom-0 inset-x-0 bg-[#0E1026]/90 backdrop-blur-md border-t border-purple-500/20 px-5 py-4 text-white">
                <div className="grid grid-cols-2 gap-4 items-center relative">
                  
                  {/* Left Sponsor: Indian Overseas Bank */}
                  <div className="relative flex items-center justify-between pr-3 border-r border-slate-700/60">
                    <span className="text-3xl font-light text-slate-500/40 select-none font-mono">
                      01
                    </span>
                    <div className="text-right">
                      <p className="text-[10px] tracking-wider text-purple-300 uppercase font-medium">
                        PROMOTED BY
                      </p>
                      <p className="text-xs font-bold text-white tracking-wide">
                        INDIAN OVERSEAS BANK
                      </p>
                    </div>
                    <div className="ml-2 w-7 h-7 rounded-sm bg-purple-950/60 border border-purple-400/30 flex items-center justify-center shrink-0">
                      <div className="w-3.5 h-3.5 border-2 border-purple-300 rotate-45" />
                    </div>
                  </div>

                  {/* Right Sponsor: Central Bank of India */}
                  <div className="relative flex items-center justify-between pl-1">
                    <div className="mr-2 w-7 h-7 rounded-sm bg-rose-950/60 border border-rose-400/30 flex items-center justify-center shrink-0">
                      <div className="w-3.5 h-3.5 bg-rose-500 rounded-xs flex items-center justify-center">
                        <div className="w-1.5 h-1.5 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="text-left flex-1">
                      <p className="text-[10px] tracking-wider text-purple-300 uppercase font-medium">
                        SUPPORTED BY
                      </p>
                      <p className="text-xs font-bold text-white tracking-wide">
                        CENTRAL BANK OF INDIA
                      </p>
                    </div>
                    <span className="text-3xl font-light text-slate-500/40 select-none font-mono">
                      02
                    </span>
                  </div>

                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
