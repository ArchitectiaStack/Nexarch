/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Approach from './components/Approach';
import ProjectsGallery from './components/ProjectsGallery';
import FeaturedProject from './components/FeaturedProject';
import Stats from './components/Stats';
import Services from './components/Services';
import Process from './components/Process';
import Footer from './components/Footer';
import GetInTouchModal from './components/GetInTouchModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleScrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col bg-bronze-50/10 selection:bg-bronze-500 selection:text-white">
      {/* Fixed Navigation Header */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Layout Blocks */}
      <main className="flex-grow">
        {/* Hero Banner Section */}
        <Hero onExploreWork={handleScrollToProjects} />

        {/* Our Approach Section */}
        <Approach />

        {/* Curated Interactive Projects Gallery Section */}
        <ProjectsGallery />

        {/* Highlight Featured Project Section */}
        <FeaturedProject />

        {/* Numeric Core Achievement Statistics Section */}
        <Stats />

        {/* Custom Architectural Services Section */}
        <Services />

        {/* Chronological Concepts Timeline Section */}
        <Process />
      </main>

      {/* Structured Multi-column Footer */}
      <Footer />

      {/* Unified 'Get In Touch' Consultation Modal Dialog */}
      <GetInTouchModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
