import React from 'react';

export const AboutVisionMission = () => {
  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Two Pods: Vision & Mission matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          
          {/* VISION */}
          <div className="rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 text-white bg-gradient-to-r from-[#080E2E] via-[#2D1658] to-[#921466] shadow-xl relative overflow-hidden flex flex-col justify-center transition-transform duration-300 hover:brightness-105">
            <h3 className="text-sm sm:text-base font-bold tracking-widest uppercase text-white mb-3">
              VISION
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-lg">
              To become India's most trusted and respected credit rating agency, recognised for transparency, innovation, and analytical excellence.
            </p>
          </div>

          {/* MISSION */}
          <div className="rounded-[28px] sm:rounded-[32px] p-8 sm:p-10 text-white bg-gradient-to-r from-[#0A1236] via-[#1E195C] to-[#7B1358] shadow-xl relative overflow-hidden flex flex-col justify-center transition-transform duration-300 hover:brightness-105">
            <h3 className="text-sm sm:text-base font-bold tracking-widest uppercase text-white mb-3">
              MISSION
            </h3>
            <p className="text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-lg">
              To empower investors, lenders, businesses, and market participants through independent credit opinions and research-driven insights that support informed financial decisions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
