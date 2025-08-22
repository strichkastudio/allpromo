
'use client';

import { texts } from '../lib/texts';

export default function CTASection() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gray-950">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {texts.cta.title}
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          {texts.cta.description}
        </p>
        <button 
          onClick={scrollToContact}
          className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-lg transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-950"
          aria-label="Get started with AllPromo services"
        >
          {texts.cta.button}
        </button>
      </div>
    </section>
  );
}
