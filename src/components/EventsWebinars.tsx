import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Video, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

interface EventItem {
  id: string;
  image: string;
  tag: string;
  topic: string;
  description: string;
  date: string;
  time: string;
  type: 'Webinar' | 'Conclave' | 'Roundtable';
  speaker: string;
}

const eventsData: EventItem[] = [
  {
    id: 'evt-1',
    image: '/src/assets/images/financial_analyst_stress_1793294807179.jpg',
    tag: 'EVENT TITLE',
    topic: 'Annual Debt Markets Conclave 2026',
    description: 'Domestic steel demand is expected to remain supported by infrastructure spending',
    date: 'November 12, 2026',
    time: '3:00 PM - 4:30 PM IST',
    type: 'Webinar',
    speaker: 'Sunil Mehta & Sector Panelists'
  },
  {
    id: 'evt-2',
    image: '/src/assets/images/modern_glass_skyscraper_1793294807340.jpg',
    tag: 'EVENT TITLE',
    topic: 'Commercial Real Estate & Infrastructure Financing',
    description: 'Domestic steel demand is expected to remain supported by infrastructure spending',
    date: 'November 20, 2026',
    time: '11:00 AM - 12:30 PM IST',
    type: 'Conclave',
    speaker: 'Infrastructure Rating Committee'
  },
  {
    id: 'evt-3',
    image: '/src/assets/images/executive_ajay_choudhary_1793294809286.jpg',
    tag: 'EVENT TITLE',
    topic: 'Ideas, Dialogue & Impact: Monetary Policy Transmission',
    description: 'Domestic steel demand is expected to remain supported by infrastructure spending',
    date: 'December 04, 2026',
    time: '4:00 PM - 5:15 PM IST',
    type: 'Roundtable',
    speaker: 'Ajay Choudhary & Central Bankers'
  },
  {
    id: 'evt-4',
    image: '/src/assets/images/hero_matterhorn_mountain_1793294806349.jpg',
    tag: 'EVENT TITLE',
    topic: 'Green Bonds & ESG Credit Methodologies',
    description: 'Framework evaluation for sustainability-linked debt issuances in emerging economies',
    date: 'December 18, 2026',
    time: '2:30 PM - 4:00 PM IST',
    type: 'Webinar',
    speaker: 'Head of ESG & Criteria Group'
  }
];

export const EventsWebinars: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [registeredEvent, setRegisteredEvent] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  const itemsPerPage = 3;
  const maxIndex = Math.max(0, eventsData.length - itemsPerPage);

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleEvents = eventsData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section id="events" className="py-20 bg-white relative overflow-hidden">
      {/* Peach/Orange and purple ambient glows matching screenshot */}
      <div className="absolute top-12 right-12 w-96 h-96 ambient-glow-peach -z-10 blur-3xl opacity-75 pointer-events-none" />
      <div className="absolute top-20 left-1/4 w-80 h-80 ambient-glow-purple -z-10 blur-3xl opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading & Carousel Controls */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Events & Webinars
          </h2>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={startIndex === 0}
              aria-label="Previous events"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-purple-500 hover:text-purple-600 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex >= maxIndex}
              aria-label="Next events"
              className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:border-purple-500 hover:text-purple-600 disabled:opacity-30 disabled:hover:border-slate-200 disabled:hover:text-slate-600 transition-all cursor-pointer disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3-Cards Carousel Track matching screenshot */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {visibleEvents.map((evt) => (
            <div
              key={evt.id}
              onClick={() => setSelectedEvent(evt)}
              className="group cursor-pointer flex flex-col transition-all duration-300 hover:-translate-y-1"
            >
              {/* Event Image */}
              <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-slate-100 mb-4 shadow-sm border border-slate-100">
                <img
                  src={evt.image}
                  alt={evt.topic}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white text-[10px] font-semibold px-2.5 py-1 rounded-md tracking-wider">
                  {evt.type}
                </div>
              </div>

              {/* Tag / Micro-header matching screenshot's "EVENT TITLE" */}
              <span className="text-[11px] font-bold tracking-wider text-slate-800 uppercase block mb-1">
                {evt.tag}
              </span>

              {/* Description matching screenshot */}
              <p className="text-xs text-slate-600 leading-relaxed font-normal">
                {evt.description}
              </p>
            </div>
          ))}
        </div>

        {/* Button below matching screenshot: MORE EVENTS */}
        <div className="mt-12">
          <button
            onClick={() => setSelectedEvent(eventsData[0])}
            className="bg-[#786CF0] hover:bg-[#685BD8] text-white text-xs font-semibold px-6 py-2.5 rounded-lg shadow-sm hover:shadow transition-all duration-200 tracking-wider uppercase cursor-pointer"
          >
            MORE EVENTS
          </button>
        </div>

        {/* Event Detail & Registration Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-100 relative animate-in zoom-in-95 duration-150">
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600">
                {selectedEvent.tag} · {selectedEvent.type}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                {selectedEvent.topic}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                {selectedEvent.description}
              </p>

              <div className="space-y-2 py-3 border-y border-slate-100 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <Calendar className="w-3.5 h-3.5 text-purple-600" />
                  <span>{selectedEvent.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-purple-600" />
                  <span>{selectedEvent.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Video className="w-3.5 h-3.5 text-purple-600" />
                  <span>Live Virtual Symposium & Interactive Q&A</span>
                </div>
              </div>

              {registeredEvent === selectedEvent.id ? (
                <div className="mt-5 p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Registration confirmed! Calendar invite & streaming pass sent.</span>
                </div>
              ) : (
                <div className="mt-6 flex items-center justify-end gap-3">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setRegisteredEvent(selectedEvent.id)}
                    className="px-5 py-2 text-xs font-semibold text-white bg-[#786CF0] hover:bg-[#685BD8] rounded-lg cursor-pointer tracking-wider uppercase"
                  >
                    Register for Free
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
