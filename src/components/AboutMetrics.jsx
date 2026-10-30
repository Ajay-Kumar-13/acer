import React from 'react';

export const AboutMetrics = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* 4-Column Grid matching the screenshot */}
        <div className="border border-slate-200/90 rounded-2xl overflow-hidden bg-white shadow-xs">
          
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/90 border-b border-slate-200/90">
            
            {/* Box 1: 2024 with peach aura */}
            <div className="p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[190px]">
              <div className="absolute top-0 left-0 w-36 h-36 bg-gradient-to-br from-orange-200/35 via-pink-100/20 to-transparent rounded-br-full pointer-events-none" />
              <div className="text-5xl sm:text-6xl font-light text-[#5B48EE] tracking-tight font-mono select-none">
                2024
              </div>
              <p className="text-xs text-slate-500 font-normal mt-6">
                ACER was founded
              </p>
            </div>

            {/* Box 2: +60 */}
            <div className="p-8 lg:p-10 flex flex-col justify-between min-h-[190px]">
              <div className="text-5xl sm:text-6xl font-light text-[#5B48EE] tracking-tight font-mono select-none">
                +60
              </div>
              <p className="text-xs text-slate-500 font-normal mt-6">
                employees
              </p>
            </div>

            {/* Box 3: 170 */}
            <div className="p-8 lg:p-10 flex flex-col justify-between min-h-[190px]">
              <div className="text-5xl sm:text-6xl font-light text-[#5B48EE] tracking-tight font-mono select-none">
                170
              </div>
              <p className="text-xs text-slate-500 font-normal mt-6">
                numbers here
              </p>
            </div>

            {/* Box 4: Empty quadrant matching screenshot layout */}
            <div className="hidden lg:block p-8 lg:p-10 min-h-[190px] bg-slate-50/30" />

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/90">
            
            {/* Box 5: 2024 with subtle warm gradient base */}
            <div className="p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[190px] bg-gradient-to-t from-orange-50/40 to-transparent">
              <div className="text-5xl sm:text-6xl font-light text-[#5B48EE] tracking-tight font-mono select-none">
                2024
              </div>
              <p className="text-xs text-slate-500 font-normal mt-6">
                ACER was founded
              </p>
            </div>

            {/* Box 6: +60 */}
            <div className="p-8 lg:p-10 flex flex-col justify-between min-h-[190px]">
              <div className="text-5xl sm:text-6xl font-light text-[#5B48EE] tracking-tight font-mono select-none">
                +60
              </div>
              <p className="text-xs text-slate-500 font-normal mt-6">
                employees
              </p>
            </div>

            {/* Box 7: 170 with violet glow */}
            <div className="p-8 lg:p-10 relative overflow-hidden flex flex-col justify-between min-h-[190px]">
              <div className="absolute right-0 top-0 bottom-0 w-36 bg-gradient-to-l from-purple-400/20 via-purple-300/10 to-transparent rounded-l-full pointer-events-none" />
              <div className="text-5xl sm:text-6xl font-light text-[#5B48EE] tracking-tight font-mono select-none relative z-10">
                170
              </div>
              <p className="text-xs text-slate-500 font-normal mt-6 relative z-10">
                numbers here
              </p>
            </div>

            {/* Box 8: Empty / subtle gradient */}
            <div className="hidden lg:block p-8 lg:p-10 min-h-[190px] bg-purple-50/20" />

          </div>

        </div>

      </div>
    </section>
  );
};
