import React from 'react';
import { Hero } from '../components/Hero.jsx';
import { OurServices } from '../components/OurServices.jsx';
import { LatestRatings } from '../components/LatestRatings.jsx';
import { WhyAcer } from '../components/WhyAcer.jsx';
import { HowAcerAssignsRatings } from '../components/HowAcerAssignsRatings.jsx';
import { ResearchInsights } from '../components/ResearchInsights.jsx';
import { OurFaces } from '../components/OurFaces.jsx';
import { EventsWebinars } from '../components/EventsWebinars.jsx';
import { CallToAction } from '../components/CallToAction.jsx';

export const HomePage = ({ onOpenGetRated, onOpenRatingsSearch }) => {
  return (
    <>
      {/* Hero Section */}
      <Hero onOpenGetRated={onOpenGetRated} />

      {/* Our Services */}
      <OurServices />

      {/* Latest Ratings with Functional Carousel */}
      <LatestRatings
        onOpenRatingsSearch={onOpenRatingsSearch}
        onSelectRating={onOpenRatingsSearch}
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
      <CallToAction onOpenGetRated={onOpenGetRated} />
    </>
  );
};
