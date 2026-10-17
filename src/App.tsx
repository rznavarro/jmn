/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LogoMarquee } from './components/LogoMarquee';
import { ProblemSection } from './components/ProblemSection';
import { ServicesSection } from './components/ServicesSection';
import { ProjectsSection } from './components/ProjectsSection';
import { StatsAndSeals } from './components/StatsAndSeals';
import { HowWeWork } from './components/HowWeWork';
import { FaqSection } from './components/FaqSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F6F5F2] text-[#1D2024] antialiased">
      {/* Fixed Header */}
      <Navbar />

      {/* Main Content Landmark for Screen Readers and Keyboard Accessibility */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Client Logos Marquee */}
        <LogoMarquee />

        {/* Problem Breakdown Section */}
        <ProblemSection />

        {/* Core Services Section */}
        <ServicesSection />

        {/* Before / After Projects & Lightbox Gallery */}
        <ProjectsSection />

        {/* Numerical Stats & Institutional Seals */}
        <StatsAndSeals />

        {/* How We Work 3-Step Timeline */}
        <HowWeWork />

        {/* FAQ Accordion Section */}
        <FaqSection />

        {/* Final CTA & Quick Lead Form */}
        <FinalCtaSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive Elements */}
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
