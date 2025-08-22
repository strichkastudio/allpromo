'use client';

import { useState, useEffect } from 'react';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // показуємо header після hero
      setIsVisible(scrollY > heroHeight - 100);

      // відслідковуємо активну секцію
      const sections = ['services', 'portfolio', 'testimonials', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isVisible
          ? 'translate-y-0 opacity-100 bg-gray-950/80 backdrop-blur-md border-b border-gray-800'
          : '-translate-y-full opacity-0'
      }`}
    >
      <div className="w-full px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Лого */}
          <div
            className="text-2xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-blue-400">All</span>Promo
          </div>

          {/* Навігація */}
          <nav className="hidden md:flex items-center space-x-6">
            {['services', 'portfolio', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950 ${
                  activeSection === section
                    ? 'text-blue-400 bg-blue-500/10'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </nav>

          {/* CTA у хедері */}
          <button
            onClick={() => scrollToSection('contact')}
            className="ml-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </header>
  );
}
