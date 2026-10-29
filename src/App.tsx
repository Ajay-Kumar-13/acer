/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { OurServices } from './components/OurServices.tsx';
import { LatestRatings } from './components/LatestRatings.tsx';
import { WhyAcer } from './components/WhyAcer.tsx';
import { HowAcerAssignsRatings } from './components/HowAcerAssignsRatings.tsx';
import { ResearchInsights } from './components/ResearchInsights.tsx';
import { OurFaces } from './components/OurFaces.tsx';
import { EventsWebinars } from './components/EventsWebinars.tsx';
import { CallToAction } from './components/CallToAction.tsx';
import { Footer } from './components/Footer.tsx';
import { GetRatedModal } from './components/GetRatedModal.tsx';
import { RatingsSearchModal } from './components/RatingsSearchModal.tsx';

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
        onOpenDisclosures={(type) => {
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
