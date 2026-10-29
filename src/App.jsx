/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Hero } from './components/Hero.jsx';
import { OurServices } from './components/OurServices.jsx';
import { LatestRatings } from './components/LatestRatings.jsx';
import { WhyAcer } from './components/WhyAcer.jsx';
import { HowAcerAssignsRatings } from './components/HowAcerAssignsRatings.jsx';
import { ResearchInsights } from './components/ResearchInsights.jsx';
import { OurFaces } from './components/OurFaces.jsx';
import { EventsWebinars } from './components/EventsWebinars.jsx';
import { CallToAction } from './components/CallToAction.jsx';
import { Footer } from './components/Footer.jsx';
import { GetRatedModal } from './components/GetRatedModal.jsx';
import { RatingsSearchModal } from './components/RatingsSearchModal.jsx';

export default function App() {
  const [getRatedModalOpen, setGetRatedModalOpen] = useState(false);
  const [ratingsSearchModalOpen, setRatingsSearchModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      {/* Sticky Header with Navigation and Dropdowns */}
      <Header
        onOpenGetRated={() => setGetRatedModalOpen(true)}
        onOpenRatingsSearch={() => setRatingsSearchModalOpen(true)}
      />

      <main>
        {/* Hero Section */}
        <Hero onOpenGetRated={() => setGetRatedModalOpen(true)} />

        {/* Our Services */}
        <OurServices />

        {/* Latest Ratings with Functional Carousel */}
        <LatestRatings
          onOpenRatingsSearch={() => setRatingsSearchModalOpen(true)}
          onSelectRating={() => setRatingsSearchModalOpen(true)}
        />

        {/* Why ACER 4-Pod Gradient Banner */}
        <WhyAcer />

        {/* How ACER Assigns Ratings Process Stepper */}
        <HowAcerAssignsRatings />

        {/* Research & Insights with Sector Tabs */}
        <ResearchInsights />

        {/* Our Faces with Board / Management Tabs & Carousel */}
        <OurFaces />

        {/* Events & Webinars with Carousel */}
        <EventsWebinars />

        {/* Bottom CTA with 3D Crystalline Cubes */}
        <CallToAction onOpenGetRated={() => setGetRatedModalOpen(true)} />
      </main>

      {/* Footer with Links and Regulatory Disclaimers */}
      <Footer
        onOpenRatingsSearch={() => setRatingsSearchModalOpen(true)}
        onOpenDisclosures={() => {
          setRatingsSearchModalOpen(true);
        }}
      />

      {/* Interactive Modals */}
      <GetRatedModal
        isOpen={getRatedModalOpen}
        onClose={() => setGetRatedModalOpen(false)}
      />

      <RatingsSearchModal
        isOpen={ratingsSearchModalOpen}
        onClose={() => setRatingsSearchModalOpen(false)}
      />
    </div>
  );
}
