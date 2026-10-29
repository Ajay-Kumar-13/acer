import React, { useState } from 'react';
import { X, CheckCircle2, ShieldAlert, Building, Mail, Phone, User } from 'lucide-react';

export const GetRatedModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    instrumentType: 'Bank Loan Rating',
    amount: '₹50 Cr - ₹250 Cr',
    timeline: 'Immediate (Within 2-3 weeks)'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.email || !formData.phone) {
      setError('Please provide company name, email, and contact number.');
      return;
    }
    setError(null);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      companyName: '',
      contactName: '',
      email: '',
      phone: '',
      instrumentType: 'Bank Loan Rating',
      amount: '₹50 Cr - ₹250 Cr',
      timeline: 'Immediate (Within 2-3 weeks)'
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
      <div className="relative bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-100 my-8 animate-in zoom-in-95 duration-200">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Rating Mandate Request Initiated</h3>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{formData.contactName || formData.companyName}</strong>. An ACER Senior Rating Director will contact your treasury team within 24 business hours with the information requisition package.
            </p>
            <div className="p-4 bg-purple-50 rounded-xl text-left text-xs text-purple-900 border border-purple-100 space-y-1">
              <p><strong>Entity:</strong> {formData.companyName}</p>
              <p><strong>Instrument:</strong> {formData.instrumentType} ({formData.amount})</p>
              <p><strong>Mandate Timeline:</strong> {formData.timeline}</p>
            </div>
            <button
              onClick={handleReset}
              className="mt-4 bg-[#786CF0] hover:bg-[#685BD8] text-white text-xs font-semibold px-6 py-2.5 rounded-lg uppercase tracking-wider cursor-pointer"
            >
              Done
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold text-purple-600 uppercase tracking-wider">
                ACER Rating Mandate Desk
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight mt-1">
                Initiate Rating Process
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Independent, rigorous credit ratings for bank facilities, NCDs, commercial paper & debt programs.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-700 flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Company / Issuer Name *</label>
                  <div className="relative">
                    <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Apex Infrastructures Ltd"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Contact Officer Name</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. CFO / Head Treasury"
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Corporate Email Address *</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="treasury@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Mobile / Direct Phone *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Instrument Category</label>
                  <select
                    value={formData.instrumentType}
                    onChange={(e) => setFormData({ ...formData, instrumentType: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600 bg-white"
                  >
                    <option>Bank Loan Rating (BLR)</option>
                    <option>Non-Convertible Debentures (NCDs)</option>
                    <option>Commercial Paper (CP)</option>
                    <option>Corporate Issuer Rating</option>
                    <option>Structured Debt & Securitization</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Debt Facility Size</label>
                  <select
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:border-purple-600 bg-white"
                  >
                    <option>Under ₹50 Cr</option>
                    <option>₹50 Cr - ₹250 Cr</option>
                    <option>₹250 Cr - ₹1,000 Cr</option>
                    <option>Above ₹1,000 Cr</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#786CF0] hover:bg-[#685BD8] text-white text-xs font-semibold py-3 rounded-lg shadow-sm hover:shadow transition-all tracking-wider uppercase cursor-pointer"
                >
                  Submit Rating Requisition
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center">
                All submissions are protected by strict institutional non-disclosure protocols.
              </p>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
