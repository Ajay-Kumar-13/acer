import React, { useState } from 'react';
import { ArrowUpRight, BarChart3, Download, FileText, TrendingDown, TrendingUp, ShieldAlert, CheckCircle2 } from 'lucide-react';

interface SectorReport {
  id: string;
  tabTitle: string;
  reportName: string;
  releaseDate: string;
  pages: number;
  pdfSize: string;
  executiveSummary: string;
  creditOutlook: 'Positive' | 'Stable' | 'Cautious';
  keyMetrics: { label: string; value: string; change: string; isPositive: boolean }[];
  keyDrivers: string[];
  risksToWatch: string[];
}

const sectorData: SectorReport[] = [
  {
    id: 'steel',
    tabTitle: 'STEEL SECTOR OUTLOOK',
    reportName: 'Indian Steel Industry: Domestic Capex Wave Meets Global Trade Realignment',
    releaseDate: 'October 2026',
    pages: 36,
    pdfSize: '3.8 MB',
    creditOutlook: 'Stable',
    executiveSummary: 'Domestic infrastructure spending, railway modernization, and real estate construction drive strong volume growth of 9-11% YoY. While coking coal price volatility and Chinese export dumping pose margin headwinds, balance sheet deleveraging provides strong credit cushions.',
    keyMetrics: [
      { label: 'Domestic Demand Growth', value: '10.2%', change: '+180 bps YoY', isPositive: true },
      { label: 'Blended EBITDA / Tonne', value: '₹12,400', change: '-4.5% QoQ', isPositive: false },
      { label: 'Sector Net Debt / EBITDA', value: '1.85x', change: 'Conservative', isPositive: true },
      { label: 'Brownfield Capacity Additions', value: '18.5 MTPA', change: 'On Track', isPositive: true }
    ],
    keyDrivers: [
      'National Infrastructure Pipeline (NIP) budget allocation expansion',
      'Automotive and industrial machinery capital goods demand surge',
      'High scrap import substitution and green hydrogen pilot incentives'
    ],
    risksToWatch: [
      'Surge in cheap steel imports from non-traditional surplus markets',
      'Coking coal supply disruption risks from Australian basin ports'
    ]
  },
  {
    id: 'pharma',
    tabTitle: 'PHARMA SECTOR OUTLOOK',
    reportName: 'Formulations & APIs: CDMO Tailwinds Offset US Price Erosion Pressures',
    releaseDate: 'October 2026',
    pages: 42,
    pdfSize: '4.2 MB',
    creditOutlook: 'Positive',
    executiveSummary: 'Indian formulations leaders benefit from robust domestic chronic therapy sales and high-margin complex injectables rollout in North America. CDMO contract manufacturing order books are at historic highs following western supply diversification mandates.',
    keyMetrics: [
      { label: 'Domestic Formulations Growth', value: '11.8%', change: '+220 bps', isPositive: true },
      { label: 'US Generic Price Erosion', value: '-3.2%', change: 'Moderated', isPositive: true },
      { label: 'CDMO Order Backlog', value: '₹34,500 Cr', change: '+28% YoY', isPositive: true },
      { label: 'Median Operating Margin', value: '23.4%', change: '+110 bps', isPositive: true }
    ],
    keyDrivers: [
      'Patent cliff opportunities: $140B in biologic and small-molecule patent expiries',
      'PLI scheme phase-II disbursement supporting indigenous key starting materials (KSMs)',
      'Expansion into Latin American and Southeast Asian tender markets'
    ],
    risksToWatch: [
      'Stringent US FDA inspection scrutiny and Official Action Indicated (OAI) notices',
      'Regulatory price capping expansions in essential domestic medications'
    ]
  },
  {
    id: 'packaging',
    tabTitle: 'PAPER AND PACKAGING OUTLOOK',
    reportName: 'Sustainable Packaging Transition: E-Commerce & FMCG Drive Volume Upswing',
    releaseDate: 'September 2026',
    pages: 28,
    pdfSize: '2.9 MB',
    creditOutlook: 'Stable',
    executiveSummary: 'Ban on single-use plastics and sustainable packaging mandates accelerate structural substitution towards virgin kraft paper, folding box boards, and biodegradable coatings across organized FMCG and pharmaceuticals.',
    keyMetrics: [
      { label: 'Packaging Volume Expansion', value: '8.4%', change: '+120 bps', isPositive: true },
      { label: 'Virgin Fiber Pulp Cost', value: '$690/T', change: '-8% YoY', isPositive: true },
      { label: 'Recycled Paper Utilization', value: '74%', change: '+400 bps', isPositive: true },
      { label: 'Capacity Utilization', value: '88.5%', change: 'Optimal', isPositive: true }
    ],
    keyDrivers: [
      'Rapid penetration of quick-commerce delivery requiring sturdy paper cartons',
      'Premiumization in cosmetic and high-value consumer electronics retail boxes',
      'In-house solar cogeneration mitigating grid industrial tariff spikes'
    ],
    risksToWatch: [
      'Domestic wood pulp raw material availability and logistics friction',
      'Rapid capacity additions by mid-tier mills risking short-term pricing power'
    ]
  },
  {
    id: 'nickel',
    tabTitle: 'NICKEL SECTOR OUTLOOK',
    reportName: 'Battery Metals & Specialty Alloys: Indonesian Smelter Dynamics & Energy Transition',
    releaseDate: 'September 2026',
    pages: 31,
    pdfSize: '3.4 MB',
    creditOutlook: 'Cautious',
    executiveSummary: 'LME nickel prices continue consolidation under Indonesian NPI (nickel pig iron) and HPAL (high pressure acid leach) supply expansions. Indian specialty stainless steel producers navigate favorable raw material spreads while battery-grade precursor investments accelerate cautiously.',
    keyMetrics: [
      { label: 'Global Supply Surplus', value: '185 kT', change: 'Elevated', isPositive: false },
      { label: 'LME Cash Settlement', value: '$16,200/T', change: 'Range-bound', isPositive: false },
      { label: 'Indian Stainless Steel Demand', value: '+7.8%', change: '+150 bps', isPositive: true },
      { label: 'HPAL Refinery Conversion Spread', value: '$4,100/T', change: 'Compressed', isPositive: false }
    ],
    keyDrivers: [
      'Government incentive schemes for electric mobility and grid-scale ESS batteries',
      'Rising demand for austenitic nickel-bearing stainless steels in defense & aerospace',
      'Strategic bilateral mineral partnership pacts with Australia and African nations'
    ],
    risksToWatch: [
      'Prolonged Indonesian output surplus depressing worldwide mine gate economics',
      'Substitution by lithium iron phosphate (LFP) chemistries in entry-level EV models'
    ]
  }
];

export const ResearchInsights: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('steel');
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const currentReport = sectorData.find((s) => s.id === activeTab) || sectorData[0];

  const handleDownload = (reportName: string) => {
    setDownloadSuccess(reportName);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  return (
    <section id="research" className="py-20 bg-white relative overflow-hidden">
      {/* Right ambient purple glow matching screenshot */}
      <div className="absolute top-10 right-0 w-96 h-96 ambient-glow-purple -z-10 blur-3xl opacity-70 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading & Subtext */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          <div className="lg:col-span-6 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Research & Insights
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal max-w-md">
              ACER's research platform provides sectoral perspectives, economic insights, and thematic analysis that help market participants navigate changing business environments.
            </p>
          </div>
        </div>

        {/* Horizontal Navigation Tabs matching screenshot */}
        <div className="border-b border-slate-200 overflow-x-auto scrollbar-none">
          <div className="flex items-center min-w-max">
            {sectorData.map((sector) => {
              const isActive = activeTab === sector.id;
              return (
                <button
                  key={sector.id}
                  onClick={() => setActiveTab(sector.id)}
                  className={`px-6 py-4 text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer border-b-2 whitespace-nowrap ${
                    isActive
                      ? 'border-purple-600 text-purple-700 bg-purple-50/50'
                      : 'border-transparent text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {sector.tabTitle}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Sector Insight Presentation */}
        <div className="mt-8 bg-slate-50/60 rounded-2xl p-6 sm:p-8 border border-slate-100">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200/80">
            <div>
              <div className="flex items-center gap-2.5 text-xs text-slate-500 mb-2 font-normal">
                <span>Sector Research</span>
                <span aria-hidden="true">·</span>
                <span>{currentReport.releaseDate}</span>
                <span aria-hidden="true">·</span>
                <span>{currentReport.pages} Pages</span>
                <span aria-hidden="true">·</span>
                <span className={`font-semibold px-2 py-0.5 rounded text-[11px] ${
                  currentReport.creditOutlook === 'Positive'
                    ? 'bg-emerald-100 text-emerald-800'
                    : currentReport.creditOutlook === 'Stable'
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  Credit Outlook: {currentReport.creditOutlook}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                {currentReport.reportName}
              </h3>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => handleDownload(currentReport.reportName)}
                className="bg-[#786CF0] hover:bg-[#685BD8] text-white text-xs font-semibold px-5 py-2.5 rounded-lg shadow-xs hover:shadow transition-all flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD REPORT ({currentReport.pdfSize})</span>
              </button>
            </div>
          </div>

          {downloadSuccess && (
            <div className="my-4 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2 animate-in fade-in duration-150">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Full sector research report PDF download initiated for <strong>{downloadSuccess}</strong>.</span>
            </div>
          )}

          {/* Key Metric Gauges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {currentReport.keyMetrics.map((metric, i) => (
              <div key={i} className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-xs">
                <span className="text-[11px] font-medium text-slate-500 uppercase tracking-wider block mb-1">
                  {metric.label}
                </span>
                <div className="text-2xl font-bold text-slate-900 font-mono tabular-nums">
                  {metric.value}
                </div>
                <div className={`text-xs mt-1.5 flex items-center gap-1 font-medium ${metric.isPositive ? 'text-emerald-600' : 'text-slate-600'}`}>
                  {metric.isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <BarChart3 className="w-3.5 h-3.5" />}
                  <span>{metric.change}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Executive Summary & Drivers */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-7 space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Executive Synthesis
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed font-normal">
                {currentReport.executiveSummary}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Structural Sector Drivers
              </h4>
              <div className="space-y-2">
                {currentReport.keyDrivers.map((driver, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-600">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0 mt-0.5" />
                    <span>{driver}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
