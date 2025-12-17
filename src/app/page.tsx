 'use client';

import { useEffect } from 'react';
import RetroGamingHero from '@/components/RetroGamingHero';
import Categories from '@/components/Categories';
import Values from '@/components/Values';
import Team from '@/components/Team';
import Partners from '@/components/Partners';
import FAQs from '@/components/FAQs';
import CommunityCTA from '@/components/CommunityCTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  useEffect(() => {
    // Always start at the hero on load
    if (window.location.hash) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  return (
    <div className="min-h-screen">
      <RetroGamingHero />
      <Categories />
      <Values />
      <CommunityCTA />
      <Team />
      <Partners />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}
