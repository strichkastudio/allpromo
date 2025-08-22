'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { texts } from '../lib/texts';
import PortfolioModal from './PortfolioModal';

export default function PortfolioSection() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [content, setContent] = useState({
    title: 'Our Work',
    subtitle: 'Successful projects across various industries'
  });
  
  // --- ЛОГІКА СЛАЙДЕРА ---
  const [currentSlide, setCurrentSlide] = useState(0);
  const itemsPerSlide = 3; // Показуємо по 3 проєкти
  const totalSlides = Math.ceil(texts.portfolio.items.length / itemsPerSlide);

  useEffect(() => {
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.portfolio) {
          setContent(parsed.portfolio);
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
          if (parsed.portfolio) {
            setContent(parsed.portfolio);
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
    const items = document.querySelectorAll('.portfolio-item');
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, [currentSlide]); // Перезапускаємо анімацію при зміні слайда

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setVisibleItems([]);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setVisibleItems([]);
  };
  
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setVisibleItems([]);
  };

  const getCurrentPortfolioItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    return texts.portfolio.items.slice(startIndex, startIndex + itemsPerSlide);
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-portfolio-title
          >
            {content.title}
          </h2>
          <p 
            className="text-xl text-gray-400 mb-4"
            data-portfolio-subtitle
          >
            {content.subtitle}
          </p>
        </div>
        
        <div className="relative">
          {/* --- СТРІЛКИ НАВІГАЦІЇ --- */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600"
                aria-label="Previous projects"
              >
                <i className="ri-arrow-left-line text-white text-xl" aria-hidden="true"></i>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center z-10 transition-all duration-300 cursor-pointer border border-gray-700 hover:border-gray-600"
                aria-label="Next projects"
              >
                <i className="ri-arrow-right-line text-white text-xl" aria-hidden="true"></i>
              </button>
            </>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getCurrentPortfolioItems().map((item, index) => {
              const globalIndex = currentSlide * itemsPerSlide + index;
              return (
                <div 
                  key={globalIndex}
                  data-index={globalIndex}
                  className={`portfolio-item bg-gray-950/50 border border-gray-800 rounded-xl overflow-hidden hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 focus-within:border-blue-500/50 group ${ 
                    visibleItems.includes(globalIndex) 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div 
                    className="h-48 bg-gray-800 relative overflow-hidden"
                    role="img"
                    aria-label={`Portfolio example: ${item.title}`}
                  >
                    <Image 
                      src={item.images[0]}
                      alt={item.title}
                      layout="fill"
                      objectFit="cover"
                      className="object-top"
                      unoptimized={true}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-3">
                      <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                      {item.description}
                    </p>
                    <button 
                      onClick={() => openModal(item)}
                      className="text-blue-400 hover:text-blue-300 font-semibold cursor-pointer transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900 flex items-center group text-sm"
                      aria-label="View detailed information about this project"
                    >
                      View Details 
                      <i className="ri-arrow-right-line ml-1 transition-transform group-hover:translate-x-1" aria-hidden="true"></i>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* --- ІНДИКАТОРИ СЛАЙДІВ --- */}
        {totalSlides > 1 && (
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
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
        
        <div className="text-center mt-16">
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Want to see your business here? → Contact us
          </button>
        </div>
      </div>

      <PortfolioModal 
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
}
