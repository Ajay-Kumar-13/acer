import React, { useState } from 'react';
import { X, Search, Download, CheckCircle2 } from 'lucide-react';

const ratingDatabase = [
  {
    id: 'rec-1',
    issuer: 'Tata Steel Limited',
    sector: 'Metals & Mining',
    instrument: 'Non-Convertible Debentures',
    rating: 'ACER AA+',
    outlook: 'Positive',
    date: 'May 18, 2026',
    size: '₹1,500 Cr'
  },
  {
    id: 'rec-2',
    issuer: 'Larsen & Toubro Ltd',
    sector: 'Infrastructure & EPC',
    instrument: 'Bank Loan Facilities',
    rating: 'ACER AAA',
    outlook: 'Stable',
    date: 'May 17, 2026',
    size: '₹8,200 Cr'
  },
  {
    id: 'rec-3',
    issuer: 'Sun Pharma Industries',
    sector: 'Pharmaceuticals',
    instrument: 'Commercial Paper',
    rating: 'ACER A1+',
    outlook: 'Stable',
    date: 'May 16, 2026',
    size: '₹600 Cr'
  },
  {
    id: 'rec-4',
    issuer: 'Indian Overseas Bank',
    sector: 'Financial Institutions',
    instrument: 'Tier II Bonds (Basel III)',
    rating: 'ACER AA',
    outlook: 'Positive',
    date: 'May 14, 2026',
    size: '₹1,000 Cr'
  },
  {
    id: 'rec-5',
    issuer: 'Renew Power Private Limited',
    sector: 'Renewable Energy',
    instrument: 'Long-term Bank Facilities',
    rating: 'ACER A+',
    outlook: 'Stable',
    date: 'May 10, 2026',
    size: '₹2,400 Cr'
  },
  {
    id: 'rec-6',
    issuer: 'Central Bank of India',
    sector: 'Financial Institutions',
    instrument: 'Infrastructure Bonds',
    rating: 'ACER AA',
    outlook: 'Stable',
    date: 'May 08, 2026',
    size: '₹1,500 Cr'
  },
  {
    id: 'rec-7',
    issuer: 'JSW Infrastructure Ltd',
    sector: 'Ports & Logistics',
    instrument: 'Non-Convertible Debentures',
    rating: 'ACER AA-',
    outlook: 'Positive',
    date: 'May 02, 2026',
    size: '₹850 Cr'
  }
];

export const RatingsSearchModal = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sectorFilter, setSectorFilter] = useState('ALL');
  const [downloadNotice, setDownloadNotice] = useState(null);

  if (!isOpen) return null;

  const sectors = ['ALL', 'Metals & Mining', 'Infrastructure & EPC', 'Pharmaceuticals', 'Financial Institutions', 'Renewable Energy'];

  const filtered = ratingDatabase.filter((item) => {
    const matchesSearch =
      item.issuer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.instrument.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.rating.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = sectorFilter === 'ALL' || item.sector === sectorFilter;
    return matchesSearch && matchesSector;
  });

  const handleDownloadRationale = (issuer) => {
    setDownloadNotice(issuer);
    setTimeout(() => setDownloadNotice(null), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 my-8 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="flex items-start justify-between pb-4 border-b border-slate-100">
          <div>
            <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
              ACER Public Ratings Registry
            </span>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
              Search Ratings & Rationales
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Dissemination of assigned credit ratings, rating outlooks, and press releases.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {downloadNotice && (
          <div className="my-3 p-3 bg-purple-50 border border-purple-200 rounded-lg text-xs text-purple-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Rating rationale document for <strong>{downloadNotice}</strong> successfully downloaded.</span>
          </div>
        )}

        {/* Search & Filter Controls */}
        <div className="my-5 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by issuer, instrument, or symbol (e.g. Tata, AAA, NCD)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600"
            />
          </div>

          <div className="sm:w-56">
            <select
              value={sectorFilter}
              onChange={(e) => setSectorFilter(e.target.value)}
              className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600 bg-white"
            >
              {sectors.map((s) => (
                <option key={s} value={s}>
                  {s === 'ALL' ? 'All Sectors' : s}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Table */}
        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-4">Issuer Name</th>
                <th className="py-3 px-4">Instrument / Program</th>
                <th className="py-3 px-4">Assigned Rating</th>
                <th className="py-3 px-4">Outlook</th>
                <th className="py-3 px-4">Quantum</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4 text-right">Rationale</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-8 text-center text-slate-400 text-xs">
                    No ratings found matching "{searchTerm}".
                  </td>
                </tr>
              ) : (
                filtered.map((r) => (
                  <tr key={r.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-slate-900">
                      {r.issuer}
                      <span className="block text-[10px] text-slate-400 font-normal">{r.sector}</span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600">{r.instrument}</td>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-purple-700 bg-purple-50 px-2 py-0.5 rounded text-[11px] font-mono">
                        {r.rating}
                      </span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className={`text-[11px] font-medium ${
                        r.outlook === 'Positive' ? 'text-emerald-600' : 'text-slate-600'
                      }`}>
                        {r.outlook}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-slate-600 font-mono tabular-nums">{r.size}</td>
                    <td className="py-3.5 px-4 text-slate-500 whitespace-nowrap">{r.date}</td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => handleDownloadRationale(r.issuer)}
                        className="text-purple-600 hover:text-purple-800 p-1 hover:bg-purple-50 rounded transition-colors inline-flex items-center gap-1 cursor-pointer"
                        title="Download Rating Rationale PDF"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span className="text-[11px] font-medium">PDF</span>
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {filtered.length} of {ratingDatabase.length} published ratings</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-slate-700 hover:bg-slate-100 rounded-lg cursor-pointer"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
