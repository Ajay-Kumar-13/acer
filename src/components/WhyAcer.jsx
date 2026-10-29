import React from 'react';

const pillars = [
  {
    id: 'independent',
    title: 'INDEPENDENT ANALYSIS',
    description: 'Every rating is founded on objective assessment, analytical rigor, and independent judgement',
    bgClass: 'bg-[#090F26]'
  },
  {
    id: 'framework',
    title: 'RESEARCH FRAMEWORK',
    description: 'Ratings are supported by extensive sectoral, macroeconomic, and credit research',
    bgClass: 'bg-gradient-to-r from-[#171442] via-[#2D1F63] to-[#431B68]'
  },
  {
    id: 'expertise',
    title: 'SECTOR EXPERTISE',
    description: 'Deep understanding of industries, financial institutions, infrastructure, and emerging sectors',
    bgClass: 'bg-gradient-to-r from-[#6E1458] via-[#9B1569] to-[#BA1A6F]'
  },
  {
    id: 'transparency',
    title: 'TRANSPARENCY',
    description: 'Clear methodologies, structured processes, and robust governance frameworks drive every rating decision',
    bgClass: 'bg-[#180F2E]'
  }
];

export const WhyAcer = () => {
  return (
    <section id="why-acer" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Why ACER
          </h2>
        </div>

        {/* 4 Pods Capsule Container matching screenshot */}
        <div className="rounded-[32px] overflow-hidden shadow-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-slate-100">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.id}
              className={`${pillar.bgClass} px-8 py-10 lg:py-12 flex flex-col justify-center text-center text-white relative transition-transform duration-300 hover:brightness-110`}
            >
              {index > 0 && (
                <div className="hidden lg:block absolute left-0 inset-y-6 w-px bg-white/10 pointer-events-none" />
              )}

              <h3 className="text-sm font-bold tracking-wider uppercase text-white mb-4">
                {pillar.title}
              </h3>

              <p className="text-xs text-white/85 leading-relaxed font-normal">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
