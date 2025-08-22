
'use client';

import { useEffect, useState } from 'react';

interface PortfolioItem {
  title: string;
  description: string;
  images: string[];
  category: string;
  details: {
    challenge: string;
    solution: string;
    results: string[];
    technologies: string[];
    duration: string;
    deliverables: string[];
  };
}

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const nextImage = () => {
    if (item && item.images) {
      setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
    }
  };

  const prevImage = () => {
    if (item && item.images) {
      setCurrentImageIndex((prev) => (prev - 1 + item.images.length) % item.images.length);
    }
  };

  if (!isOpen || !item) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-gray-900 border border-gray-700 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-gray-700 flex items-center justify-between">
          <div>
            <span className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm font-medium">
              {item.category}
            </span>
            <h2 className="text-2xl font-bold text-white mt-2">
              {item.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Close modal"
          >
            <i className="ri-close-line text-xl" aria-hidden="true"></i>
          </button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg">
                <img 
                  src={item.images[currentImageIndex]}
                  alt={`${item.title} - Image ${currentImageIndex + 1}`}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                
                {/* Image Navigation Arrows */}
                {item.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                      aria-label="Previous image"
                    >
                      <i className="ri-arrow-left-line text-sm" aria-hidden="true"></i>
                    </button>
                    
                    <button
                      onClick={nextImage}
                      className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-colors"
                      aria-label="Next image"
                    >
                      <i className="ri-arrow-right-line text-sm" aria-hidden="true"></i>
                    </button>
                  </>
                )}
                
                {/* Image Indicators */}
                {item.images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
                    {item.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          currentImageIndex === index ? 'bg-white' : 'bg-white/50'
                        }`}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Project Overview</h3>
              <p className="text-gray-300 mb-6">{item.description}</p>
              
              <div className="space-y-4">
                <div>
                  <span className="text-blue-400 font-semibold">Duration:</span>
                  <span className="text-gray-300 ml-2">{item.details.duration}</span>
                </div>
                
                <div>
                  <span className="text-blue-400 font-semibold">Technologies:</span>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.details.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Challenge</h3>
              <p className="text-gray-300 leading-relaxed">
                {item.details.challenge}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Solution</h3>
              <p className="text-gray-300 leading-relaxed">
                {item.details.solution}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Results</h3>
                <ul className="space-y-3">
                  {item.details.results.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <i className="ri-check-line text-green-400 text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true"></i>
                      <span className="text-gray-300">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Deliverables</h3>
                <ul className="space-y-3">
                  {item.details.deliverables.map((deliverable, index) => (
                    <li key={index} className="flex items-start">
                      <i className="ri-arrow-right-s-line text-blue-400 text-lg mt-0.5 mr-3 flex-shrink-0" aria-hidden="true"></i>
                      <span className="text-gray-300">{deliverable}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-700 text-center">
            <button 
              onClick={onClose}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Discuss Similar Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
