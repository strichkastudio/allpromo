'use client';

// 1. Імпортуємо наш файл з текстами
import { texts } from '../lib/texts';

export default function HeroSection() {

  // 2. Функції для прокрутки залишаються без змін
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const heroImageUrl = 'https://readdy.ai/api/search-image?query=Modern%20digital%20workspace%20with%20floating%20holographic%20interface%20elements%2C%20abstract%20geometric%20shapes%20in%20blue%20and%20violet%20gradients%2C%20professional%20tech%20environment%20with%20subtle%20blockchain%20network%20visualization%2C%20minimalist%20design%20with%20depth%20and%20dimension%2C%20dark%20background%20with%20glowing%20accents%2C%20futuristic%20business%20atmosphere&width=1920&height=1080&seq=hero-bg&orientation=landscape';

  return (
    <section 
      className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url('${heroImageUrl}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className="absolute inset-0 bg-gray-950/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">
        <div className="max-w-4xl mx-auto">
          <h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 font-['Inter']"
          >
            {/* 3. Беремо текст напряму з texts.ts */}
            {texts.hero.title}
          </h1>
          <p 
            className="text-xl md:text-2xl text-gray-300 mb-4 leading-relaxed"
          >
            {/* 3. Беремо текст напряму з texts.ts */}
            {texts.hero.subtitle}
          </p>
          <p className="text-lg text-blue-400 mb-10 font-medium">
            Global reach across international markets
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
              aria-label="Get started with our services"
            >
              {/* 3. Беремо текст напряму з texts.ts */}
              {texts.hero.primaryCta}
            </button>
            <button 
              onClick={scrollToServices}
              className="bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/40 text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-gray-950"
              aria-label="View our services"
            >
              {/* 3. Беремо текст напряму з texts.ts */}
              {texts.hero.secondaryCta}
            </button>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 bg-gray-900/30 border border-gray-800 rounded-lg p-4 max-w-2xl mx-auto">
            <i className="ri-check-double-line text-green-400 mr-2" aria-hidden="true"></i>
            Guaranteed alignment with your campaigns for better global conversions
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent"></div>
    </section>
  );
}
