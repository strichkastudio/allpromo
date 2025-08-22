'use client';

import { useState, useEffect } from 'react';
import { texts } from '../lib/texts';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // показуємо header тільки після hero
      setIsScrolled(scrollY > heroHeight - 100);

      // відслідковуємо активну секцію
      const sections = ['services', 'portfolio', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      setActiveSection(current || '');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'translate-y-0 opacity-100 bg-gray-950/90 backdrop-blur-md border-b border-gray-800'
          : '-translate-y-full opacity-0'
      }`}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Лого */}
          <div
            className="text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors"
            onClick={scrollToTop}
          >
            <span className="text-blue-400">All</span>Promo
          </div>

          {/* Навігація */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className={`nav-link ${
                activeSection === 'services' ? 'active' : ''
              }`}
              aria-label="Navigate to Services section"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className={`nav-link ${
                activeSection === 'portfolio' ? 'active' : ''
              }`}
              aria-label="Navigate to Portfolio section"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className={`nav-link ${
                activeSection === 'testimonials' ? 'active' : ''
              }`}
              aria-label="Navigate to Testimonials section"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`nav-link ${
                activeSection === 'contact' ? 'active' : ''
              }`}
              aria-label="Navigate to Contact section"
            >
              Contact
            </button>
          </nav>

          {/* CTA у хедері */}
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
            aria-label="Get a quote from AllPromo"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
