import { useState } from 'react';
import { Hero } from './components/Hero';
import { SelectedWork } from './components/SelectedWork';
import { FeaturedCaseStudy } from './components/FeaturedCaseStudy';
import { DesignPhilosophy } from './components/DesignPhilosophy';
import { SkillsTools } from './components/SkillsTools';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full bg-[#0F0F13] text-[#F8FAFC] overflow-y-auto">
      <Hero />
      <SelectedWork />
      <FeaturedCaseStudy />
      <DesignPhilosophy />
      <SkillsTools />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}