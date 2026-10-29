import React from 'react';

interface CallToActionProps {
  onOpenGetRated: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onOpenGetRated }) => {
  return (
    <section className="relative bg-[#070914] text-white overflow-hidden py-28 sm:py-36 border-t border-slate-900">
      
      {/* 3D Crystalline Cubes Image in lower right corner matching screenshot */}
      <div className="absolute right-0 bottom-0 w-full sm:w-2/3 lg:w-1/2 h-full pointer-events-none opacity-40 sm:opacity-70 lg:opacity-85 mix-blend-screen flex items-end justify-end">
        <img
          src="/src/assets/images/cta_crystalline_cubes_1793294809260.jpg"
          alt="ACER Financial Crystals & Transparency"
          className="w-full h-full object-cover object-bottom-right"
          referrerPolicy="no-referrer"
        />
        {/* Soft edge masking gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070914] via-[#070914]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070914] via-transparent to-[#070914]" />
      </div>

      {/* Central Content */}
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          Looking to <br />
          Obtain a <span className="gradient-text-purple-pink">Credit Rating?</span>
        </h2>

        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed font-normal">
          Whether you are raising capital, seeking banking facilities, or strengthening stakeholder confidence, ACER's team is ready to support your rating requirements
        </p>

        <div className="pt-4">
          <button
            onClick={onOpenGetRated}
            className="bg-[#786CF0] hover:bg-[#685BD8] text-white text-xs font-semibold px-8 py-3.5 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-200 tracking-wider uppercase cursor-pointer"
          >
            GET RATED
          </button>
        </div>
      </div>

    </section>
  );
};
