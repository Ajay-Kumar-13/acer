import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin, Award, Building2 } from 'lucide-react';

interface Leader {
  id: string;
  name: string;
  role: string;
  title: string;
  image: string;
  bio: string;
  formerRoles: string[];
}

const boardMembers: Leader[] = [
  {
    id: 'lead-1',
    name: 'Sunil Mehta',
    role: 'Board of Directors',
    title: 'Former CEO of IBA, former MD & CEO of PNB',
    image: '/src/assets/images/executive_sunil_mehta_1793294808747.jpg',
    bio: 'Over four decades of leadership in the Indian commercial banking system, spearheading capital recapitalizations, corporate debt restructuring, and governance reforms.',
    formerRoles: ['Managing Director & CEO, Punjab National Bank', 'Chief Executive, Indian Banks\' Association (IBA)']
  },
  {
    id: 'lead-2',
    name: 'Ajay Choudhary',
    role: 'Board of Directors',
    title: 'Chairman NPCI, former Executive Director of RBI',
    image: '/src/assets/images/executive_ajay_choudhary_1793294809286.jpg',
    bio: 'Distinguished central banker with extensive experience leading banking supervision, foreign exchange reserves, and domestic digital payments infrastructure in India.',
    formerRoles: ['Chairman, National Payments Corporation of India (NPCI)', 'Executive Director, Reserve Bank of India (RBI)']
  },
  {
    id: 'lead-3',
    name: 'Dr. R. K. Nair',
    role: 'Board of Directors',
    title: 'Former Executive Director of SEBI, Member IRDAI',
    image: '/src/assets/images/executive_sunil_mehta_1793294808747.jpg',
    bio: 'Architect of key securities market disclosures and mutual fund regulations in India, bringing profound oversight in corporate transparency and capital market integrity.',
    formerRoles: ['Executive Director, Securities and Exchange Board of India (SEBI)', 'Whole Time Member, Insurance Regulatory and Development Authority (IRDAI)']
  },
  {
    id: 'lead-4',
    name: 'Meena Hemchandra',
    role: 'Board of Directors',
    title: 'Former Executive Director of Reserve Bank of India',
    image: '/src/assets/images/executive_ajay_choudhary_1793294809286.jpg',
    bio: 'Leading authority on systemic liquidity surveillance, financial inclusion programs, and risk-based banking supervision across domestic public and private sector banks.',
    formerRoles: ['Executive Director, Reserve Bank of India', 'Independent Director, Multiple Scheduled Commercial Banks']
  }
];

const managementMembers: Leader[] = [
  {
    id: 'mgmt-1',
    name: 'Arunav Sengupta',
    role: 'Senior Management',
    title: 'Chief Executive Officer & Managing Director',
    image: '/src/assets/images/financial_analyst_stress_1793294807179.jpg',
    bio: '25+ years across global and domestic rating agencies, leading rating criteria design, analytical governance, and market expansion.',
    formerRoles: ['Head of Ratings, Leading National Rating Agency', 'Director, Structured Credit Solutions']
  },
  {
    id: 'mgmt-2',
    name: 'Deepa Krishnan',
    role: 'Senior Management',
    title: 'Chief Rating Officer & Head of Criteria',
    image: '/src/assets/images/executive_sunil_mehta_1793294808747.jpg',
    bio: 'Pioneered ESG integration into debt ratings and developed back-tested credit scoring engines across infrastructure and manufacturing cohorts.',
    formerRoles: ['Chairperson, Rating Criteria Committee', 'Senior Credit Analyst, Global Ratings']
  },
  {
    id: 'mgmt-3',
    name: 'Vikramaditya Roy',
    role: 'Senior Management',
    title: 'Chief Economist & Head of Sectoral Research',
    image: '/src/assets/images/executive_ajay_choudhary_1793294809286.jpg',
    bio: 'Renowned macroeconomic commentator leading ACER\'s research publications on fiscal trends, monetary transmission, and sectoral default risks.',
    formerRoles: ['Senior Economic Advisor, Ministry of Finance', 'Lead Economist, Investment Banking Group']
  },
  {
    id: 'mgmt-4',
    name: 'Nandita Sharma',
    role: 'Senior Management',
    title: 'Head of Surveillance & Compliance',
    image: '/src/assets/images/financial_analyst_stress_1793294807179.jpg',
    bio: 'Oversees continuous surveillance triggers, regulatory adherence to SEBI and RBI mandates, and independent analytical audit protocols.',
    formerRoles: ['Head of Compliance, Asset Management Company', 'Vice President, Surveillance Division']
  }
];

export const OurFaces: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'board' | 'management'>('board');
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const leaders = activeCategory === 'board' ? boardMembers : managementMembers;

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Ambient glow matching screenshot right above 2nd card */}
      <div className="absolute top-20 left-1/3 w-80 h-80 ambient-glow-purple -z-10 blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading matching screenshot */}
        <div className="mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Faces
          </h2>
        </div>

        {/* Functional Tabs: Board of Directors & Senior Management */}
        <div className="flex items-center gap-6 mb-12 text-xs font-medium">
          <button
            onClick={() => setActiveCategory('board')}
            className={`pb-1 transition-all cursor-pointer ${
              activeCategory === 'board'
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Board of Directors
          </button>
          <button
            onClick={() => setActiveCategory('management')}
            className={`pb-1 transition-all cursor-pointer ${
              activeCategory === 'management'
                ? 'text-blue-600 font-semibold border-b-2 border-blue-600'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            Senior Management
          </button>
        </div>

        {/* 4 Cards Grid / Carousel */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {leaders.map((leader) => (
            <div
              key={leader.id}
              onClick={() => setSelectedLeader(leader)}
              className="group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              {/* Leader Photo */}
              <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-xs border border-slate-100">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover object-top group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Leader Name */}
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors tracking-tight">
                {leader.name}
              </h3>

              {/* Subtitle / Designation */}
              <p className="text-xs text-slate-500 leading-snug mt-1 font-normal">
                {leader.title}
              </p>
            </div>
          ))}
        </div>

        {/* Leader Bio Modal */}
        {selectedLeader && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
              <div className="flex items-start gap-5">
                <img
                  src={selectedLeader.image}
                  alt={selectedLeader.name}
                  className="w-20 h-20 rounded-xl object-cover border border-slate-200 shrink-0"
                />
                <div>
                  <span className="text-[10px] uppercase font-semibold tracking-wider text-purple-600">
                    {selectedLeader.role}
                  </span>
                  <h4 className="text-xl font-bold text-slate-900">
                    {selectedLeader.name}
                  </h4>
                  <p className="text-xs text-slate-600 font-medium">
                    {selectedLeader.title}
                  </p>
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-slate-100 space-y-4">
                <p className="text-xs text-slate-700 leading-relaxed">
                  {selectedLeader.bio}
                </p>

                <div>
                  <h5 className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">Key Positions Held</h5>
                  <div className="space-y-1">
                    {selectedLeader.formerRoles.map((role, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Award className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setSelectedLeader(null)}
                  className="px-5 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
