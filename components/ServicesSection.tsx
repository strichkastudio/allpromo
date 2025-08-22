'use client';

import { useState, useEffect } from 'react';
import { texts } from '../lib/texts';

export default function ServicesSection() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [content, setContent] = useState({
    title: 'Our Services',
    subtitle: 'Comprehensive solutions for your digital success'
  });

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(texts.services.items.length / itemsPerSlide);

  useEffect(() => {
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.services) {
          setContent(parsed.services);
        }
      } catch (e) {
        console.error('Error parsing saved content:', e);
      }
    }

    const handleStorageChange = () => {
      const savedContent = localStorage.getItem('site_content');
      if (savedContent) {
        try {
          const parsed = JSON.parse(savedContent);
          if (parsed.services) {
            setContent(parsed.services);
          }
        } catch (e) {
          console.error('Error parsing saved content:', e);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleCards(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, [currentSlide]);

  function scrollToContact() {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setVisibleCards([]);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setVisibleCards([]);
  };

  const getCurrentServices = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return texts.services.items.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section id="services" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-services-title
          >
            {content.title}
          </h2>
          <p 
            className="text-xl text-gray-400"
            data-services-subtitle
          >
            {content.subtitle}
          </p>
        </div>

        <div className="relative">
          {/* Navigation Arrows */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:opacity-50 rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600 disabled:cursor-not-allowed"
                aria-label="Previous services"
              >
                <i className="ri-arrow-left-line text-white text-xl" aria-hidden="true"></i>
              </button>

              <button
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 1}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:opacity-50 rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600 disabled:cursor-not-allowed"
                aria-label="Next services"
              >
                <i className="ri-arrow-right-line text-white text-xl" aria-hidden="true"></i>
              </button>
            </>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {getCurrentServices().map((service, index) => {
              const globalIndex = currentSlide * itemsPerSlide + index;
              return (
                <div 
                  key={globalIndex}
                  data-index={globalIndex}
                  onClick={scrollToContact}
                  className={`service-card bg-gray-900/50 border border-gray-700 rounded-xl p-8 hover:border-blue-500/50 hover:transform hover:scale-105 transition-all duration-500 cursor-pointer ${
                    visibleCards.includes(globalIndex) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center mb-6">
                      {/* === ОСЬ ТУТ ГОЛОВНЕ ВИПРАВЛЕННЯ === */}
                      <i 
                        className={`${service.icon} text-3xl`} 
                        style={{ color: service.color }} 
                        aria-hidden="true"
                      ></i>
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-4">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 text-sm">
                      {service.description}
                    </p>
                    <ul className="space-y-3 text-left w-full">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <i className="ri-check-line text-green-400 text-sm mt-1 mr-3 flex-shrink-0" aria-hidden="true"></i>
                          <span className="text-gray-300 text-xs leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide Indicators */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setVisibleCards([]);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    currentSlide === index 
                      ? 'bg-blue-500' 
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-16">
          <button 
            onClick={scrollToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Contact us about our services"
          >
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
}
