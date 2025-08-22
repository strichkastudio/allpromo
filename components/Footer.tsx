
'use client';

import { texts } from '../lib/texts';

export default function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center">
          <div className="text-2xl font-bold text-white mb-4">
            <span className="text-blue-400">All</span>Promo
          </div>
          <p className="text-gray-400 mb-4 max-w-md mx-auto">
            {texts.footer.description}
          </p>
          <div className="mb-6">
            <a href={`mailto:${texts.footer.email}`} className="text-blue-400 hover:text-blue-300 transition-colors">
              {texts.footer.email}
            </a>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
              <i className="ri-linkedin-fill text-gray-400 hover:text-white" aria-hidden="true"></i>
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500">
              <i className="ri-telegram-fill text-gray-400 hover:text-white" aria-hidden="true"></i>
            </div>
          </div>
          <p className="text-gray-500 text-sm">
            {texts.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
