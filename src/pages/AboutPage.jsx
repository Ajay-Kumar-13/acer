import React from 'react';
import { AboutHero } from '../components/AboutHero.jsx';
import { AboutVisionMission } from '../components/AboutVisionMission.jsx';
import { AboutMetrics } from '../components/AboutMetrics.jsx';
import { OurFaces } from '../components/OurFaces.jsx';
import { CallToAction } from '../components/CallToAction.jsx';

export const AboutPage = ({ onOpenGetRated }) => {
  return (
    <div className="bg-white">
      {/* About Acer Hero Section */}
      <AboutHero />

      {/* Vision & Mission Gradient Pods */}
      <AboutVisionMission />

      {/* Metrics & Milestones Grid */}
      <AboutMetrics />

      {/* Our Faces Section with Leadership Carousel */}
      <OurFaces />

      {/* Looking to Obtain a Credit Rating? Banner */}
      <CallToAction onOpenGetRated={onOpenGetRated} />
    </div>
  );
};
