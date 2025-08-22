
'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import CryptoSection from '@/components/CryptoSection';
import PortfolioSection from '@/components/PortfolioSection';
import GlobalMarketsSection from '@/components/GlobalMarketsSection';
import AdvantagesSection from '@/components/AdvantagesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CTASection from '@/components/CTASection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CryptoSection />
        <PortfolioSection />
        <GlobalMarketsSection />
        <AdvantagesSection />
        <TestimonialsSection />
        <CTASection />
        <ContactSection />
      </main>
    </>
  );
}
