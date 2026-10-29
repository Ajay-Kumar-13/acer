import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, ChevronRight, FileCheck, Layers, Users } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  summary: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    number: '01',
    title: 'Rating Mandate',
    summary: 'Execution of a formal rating agreement and confidentiality protocols establishing the scope of borrowing instruments or issuer entities to be rated.',
    deliverables: [
      'Formal Rating Mandate execution',
      'Confidentiality & Non-Disclosure documentation',
      'Scope definition of debt instruments / borrowing programs'
    ]
  },
  {
    number: '02',
    title: 'Information Collection',
    summary: 'Comprehensive quantitative and qualitative data acquisition including multi-year audited financial records, management presentations, and site visits.',
    deliverables: [
      'Submission of five-year audited historical financials',
      'Interactive executive management discussions',
      'Plant, asset, or facility inspections where applicable'
    ]
  },
  {
    number: '03',
    title: 'Analytical Assessment',
    summary: 'In-depth credit modeling examining macroeconomic risk, competitive moats, cash-flow coverage ratios, working capital cycles, and stress scenario testing.',
    deliverables: [
      'Business & Industry Risk profiling',
      'Financial risk & cash-flow sensitivity modeling',
      'Management governance & promoter track-record evaluation'
    ]
  },
  {
    number: '04',
    title: 'Rating Committee',
    summary: 'Independent Rating Committee review where analysts present credit rationales. Ratings are assigned via democratic voting without commercial interference.',
    deliverables: [
      'Rating presentation to independent committee members',
      'Voting and assignment of rating symbol & outlook',
      'Communication of provisional rating to the issuer'
    ]
  },
  {
    number: '05',
    title: 'Dissemination & Surveillance',
    summary: 'Public dissemination of the Rating Rationale via press release, SEBI/stock exchange notification, and initiation of ongoing continuous surveillance.',
    deliverables: [
      'Publication of full Rating Rationale on website',
      'Regulatory filing with SEBI and stock exchanges',
      'Continuous monitoring of quarterly results and material events'
    ]
  }
];

export const HowAcerAssignsRatings: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  return (
    <section id="process" className="py-24 bg-[#120E24] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Heading matching screenshot */}
        <div className="max-w-2xl mb-20 space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-white leading-tight">
            How ACER <br />
            <span className="gradient-text-purple-pink">Assigns Ratings</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed font-normal">
            ACER follows a structured, transparent, and independent rating process designed to ensure consistency and analytical rigor.
          </p>
        </div>

        {/* Process Stepper matching screenshot's "01 Rating Mandate", "02 Information Collection", "03 Analytical Assessment" */}
        <div className="relative">
          {/* Horizontal connecting line across stepper */}
          <div className="hidden md:block absolute top-[44px] inset-x-8 h-px bg-gradient-to-r from-purple-500/30 via-pink-400/40 to-purple-500/20 pointer-events-none -z-0" />

          {/* Stepper items */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`group cursor-pointer flex flex-col transition-all duration-300 ${isActive ? 'opacity-100 scale-102' : 'opacity-70 hover:opacity-100'}`}
                >
                  {/* Outline Number */}
                  <div className="relative mb-6">
                    <span className={`text-5xl sm:text-6xl font-light font-mono transition-colors tracking-tighter ${isActive ? 'text-purple-300 font-normal drop-shadow-[0_0_12px_rgba(192,132,252,0.4)]' : 'text-purple-300/40 group-hover:text-purple-300/70'}`}>
                      {step.number}
                    </span>
                    {/* Active pulse indicator on current step */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-2 w-2 h-2 rounded-full bg-pink-400 animate-pulse" />
                    )}
                  </div>

                  {/* Step Title */}
                  <h3 className={`text-xl sm:text-2xl font-semibold tracking-tight transition-colors mb-3 leading-snug ${isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'}`}>
                    {step.title}
                  </h3>

                  {/* Summary snippet */}
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 group-hover:text-slate-300">
                    {step.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive Step Detail Drawer */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-white/5 border border-purple-500/20 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-purple-300">
                Step {steps[activeStepIndex].number} of 05
              </span>
              <h4 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {steps[activeStepIndex].title}
              </h4>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveStepIndex((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="px-3.5 py-1.5 rounded-lg border border-white/15 text-xs text-slate-300 hover:text-white hover:border-purple-400 transition-colors"
              >
                Previous Step
              </button>
              <button
                onClick={() => setActiveStepIndex((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="px-3.5 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-xs text-white font-medium transition-colors flex items-center gap-1.5"
              >
                <span>Next Step</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7">
              <p className="text-sm text-slate-300 leading-relaxed">
                {steps[activeStepIndex].summary}
              </p>
            </div>
            <div className="lg:col-span-5 space-y-2">
              <p className="text-xs font-semibold text-purple-300 uppercase tracking-wider mb-2">Key Criteria & Actions:</p>
              {steps[activeStepIndex].deliverables.map((d, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>{d}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
