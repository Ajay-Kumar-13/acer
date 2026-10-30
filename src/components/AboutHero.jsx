import React from 'react';

export const AboutHero = () => {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-16 lg:pb-20">
      {/* Ambient background glows matching screenshot */}
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] ambient-glow-purple -z-10 blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute top-12 right-6 w-96 h-96 ambient-glow-peach -z-10 blur-3xl opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Mission Narrative */}
          <div className="lg:col-span-6 space-y-6 pr-0 lg:pr-8">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] text-slate-900">
              <span className="text-pink-500">About</span>{' '}
              <span className="text-[#6C5CE7]">Acer</span>
            </h1>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal max-w-xl">
              ACER is India's newest SEBI-registered credit rating agency, established to provide independent, transparent, and reliable credit opinions. Our objective is to strengthen confidence across India's financial markets through analytical excellence, robust governance, and trusted ratings.
            </p>
          </div>

          {/* Right Column: High-Tech Glowing Acrylic Glass Card Image */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end">
            {/* Ambient aura bleeding behind image */}
            <div className="absolute -top-10 -right-10 w-72 h-72 ambient-glow-peach rounded-full blur-2xl opacity-60 pointer-events-none" />

            <div className="relative w-full max-w-[540px] rounded-[32px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-950 group">
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src="/src/assets/images/about_hero_glass_card_1793333312768.jpg"
                  alt="ACER Financial Transparency and Innovation"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
