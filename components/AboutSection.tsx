'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image'; // ✅ Імпортуємо компонент Image з Next.js для кращої оптимізації

export default function AboutSection() {
  const [content, setContent] = useState({
    title: 'Global IT Excellence',
    description: 'We are AllPromo - a forward-thinking digital agency specializing in comprehensive IT solutions for international markets. Our expertise spans web development, SEO optimization, marketing automation, and crypto-friendly payment systems.'
  });

  useEffect(() => {
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.about) {
          setContent(parsed.about);
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
          if (parsed.about) {
            setContent(parsed.about);
          }
        } catch (e) {
          console.error('Error parsing saved content:', e);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  return (
    <section id="about" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              data-about-title
            >
              {content.title}
            </h2>
            <p 
              className="text-xl text-gray-400 leading-relaxed mb-8"
              data-about-description
            >
              {content.description}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-global-line text-2xl text-blue-400" aria-hidden="true"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
                <p className="text-gray-400 text-sm">International markets across 40+ countries</p>
              </div>
              
              <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
                <div className="w-12 h-12 bg-green-600/20 rounded-lg flex items-center justify-center mb-4">
                  <i className="ri-shield-check-line text-2xl text-green-400" aria-hidden="true"></i>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Crypto Ready</h3>
                <p className="text-gray-400 text-sm">Bitcoin, Ethereum, and 15+ cryptocurrencies</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-gray-700">
              {/* ✅ Замінили <img> на <Image> і оновили шлях */}
              <Image 
                src="/about-team.jpg" // Новий локальний шлях
                alt="Global IT Excellence Team"
                width={600} // Додаємо ширину
                height={400} // Додаємо висоту
                className="w-full h-auto object-cover object-top rounded-lg"
              />
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-bold text-white">500+</div>
                  <div className="text-sm text-gray-400">Projects Completed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">98%</div>
                  <div className="text-sm text-gray-400">Client Satisfaction</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">5+</div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-600/10 rounded-full border border-blue-500/20 flex items-center justify-center">
              <i className="ri-rocket-line text-3xl text-blue-400" aria-hidden="true"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}