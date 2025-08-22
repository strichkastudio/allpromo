
'use client';

import { useState, useEffect } from 'react';
import { texts } from '../lib/texts';

export default function GlobalMarketsSection() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

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

    const items = document.querySelectorAll('.global-feature-item');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {texts.globalMarkets.title}
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            {texts.globalMarkets.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {texts.globalMarkets.features.map((feature, index) => (
            <div 
              key={index}
              data-index={index}
              className={`global-feature-item bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-700/50 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-500 hover:transform hover:scale-105 ${
                visibleItems.includes(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="w-20 h-20 bg-blue-600/20 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
                <i className={`${feature.icon} text-3xl text-blue-400`} aria-hidden="true"></i>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}