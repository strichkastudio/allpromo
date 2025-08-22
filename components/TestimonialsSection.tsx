
'use client';

import { useState, useEffect } from 'react';
import { texts } from '../lib/texts';

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [content, setContent] = useState({
    title: 'What Our Clients Say'
  });
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(texts.testimonials.items.length / itemsPerSlide);

  useEffect(() => {
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.testimonials) {
          setContent(parsed.testimonials);
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
          if (parsed.testimonials) {
            setContent(parsed.testimonials);
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
            setVisibleItems(prev => [...prev, index]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const items = document.querySelectorAll('.testimonial-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return texts.testimonials.items.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testimonials-title
          >
            {content.title}
          </h2>
        </div>
        
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:opacity-50 rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600 disabled:cursor-not-allowed"
            aria-label="Previous testimonials"
          >
            <i className="ri-arrow-left-line text-white text-xl" aria-hidden="true"></i>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-900 disabled:opacity-50 rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600 disabled:cursor-not-allowed"
            aria-label="Next testimonials"
          >
            <i className="ri-arrow-right-line text-white text-xl" aria-hidden="true"></i>
          </button>

          {/* Testimonial Cards */}
          <div className="grid md:grid-cols-3 gap-8">
            {getCurrentItems().map((testimonial, index) => {
              const globalIndex = currentSlide * itemsPerSlide + index;
              return (
                <div 
                  key={globalIndex}
                  data-index={globalIndex}
                  className={`testimonial-item bg-gray-950/50 border border-gray-800 rounded-xl p-8 transition-all duration-500 hover:border-blue-500/30 relative ${
                    visibleItems.includes(globalIndex) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Large Quotation Mark */}
                  <div className="absolute top-6 right-6 opacity-20">
                    <i className="ri-double-quotes-r text-6xl text-blue-400" aria-hidden="true"></i>
                  </div>
                  
                  <div className="flex items-center mb-6 relative z-10">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="ri-star-fill text-lg" aria-hidden="true"></i>
                      ))}
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-300 mb-8 text-lg leading-relaxed italic relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                  
                  <div className="flex items-center relative z-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full flex items-center justify-center mr-4 border border-blue-500/30">
                      <i className="ri-user-line text-blue-400 text-xl" aria-hidden="true"></i>
                    </div>
                    <div>
                      <div className="text-white font-bold text-lg">{testimonial.author}</div>
                      <div className="text-gray-400 text-sm">{testimonial.position}</div>
                      <div className="text-blue-400 text-sm font-medium">{testimonial.location}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-12 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                  currentSlide === index 
                    ? 'bg-blue-500' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
