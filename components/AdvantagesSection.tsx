'use client';

import { useState } from 'react';
import { texts } from '../lib/texts';

export default function AdvantagesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {texts.advantages.title}
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {texts.advantages.items.map((item, index) => (
            <div 
              key={index}
              className="relative bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <i className={`${item.icon} text-2xl ${item.color}`} aria-hidden="true"></i>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {item.description}
              </p>

              {/* Expanded Information Overlay */}
              <div className={`absolute inset-0 bg-gray-900/95 backdrop-blur-sm rounded-xl p-6 flex flex-col justify-center transition-all duration-300 ${
                hoveredIndex === index ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}>
                <div className={`w-12 h-12 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <i className={`${item.icon} text-xl ${item.color}`} aria-hidden="true"></i>
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.expandedDescription}
                </p>
                {/* === ОСЬ ТУТ БУЛО ВИПРАВЛЕННЯ === */}
                <div className="mt-4 text-xs text-gray-500">
                  Hover for more details
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
