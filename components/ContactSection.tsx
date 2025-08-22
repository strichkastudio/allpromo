
'use client';

import { useState, useEffect } from 'react';
import { texts } from '../lib/texts';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [content, setContent] = useState({
    title: 'Get In Touch',
    subtitle: 'Ready to start your project? Contact us today'
  });

  useEffect(() => {
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        if (parsed.contact) {
          setContent(parsed.contact);
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
          if (parsed.contact) {
            setContent(parsed.contact);
          }
        } catch (e) {
          console.error('Error parsing saved content:', e);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-contact-title
          >
            {content.title}
          </h2>
          <p 
            className="text-xl text-gray-400"
            data-contact-subtitle
          >
            {content.subtitle}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">{texts.contact.info.title}</h3>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-mail-line text-blue-400 text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{texts.contact.info.email.label}</p>
                  <p className="text-white">{texts.contact.info.email.value}</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mr-4">
                  <i className="ri-global-line text-blue-400 text-xl" aria-hidden="true"></i>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{texts.contact.info.website.label}</p>
                  <p className="text-white">{texts.contact.info.website.value}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">{texts.contact.social.title}</h4>
              <div className="flex space-x-4">
                {texts.contact.social.links.map((link, index) => (
                  <div 
                    key={index}
                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                    tabIndex={0}
                    role="button"
                    aria-label={`Follow us on ${link.name}`}
                  >
                    <i className={`${link.icon} text-gray-400 hover:text-white`} aria-hidden="true"></i>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-green-600/20 border border-green-600/50 rounded-lg p-8 text-center">
                <i className="ri-check-circle-line text-4xl text-green-400 mb-4" aria-hidden="true"></i>
                <h3 className="text-xl font-semibold text-white mb-2">{texts.contact.success.title}</h3>
                <p className="text-gray-300">{texts.contact.success.message}</p>
              </div>
            ) : (
              <form 
                id="contact-form"
                name="contact" 
                method="POST" 
                data-netlify="true" 
                onSubmit={handleSubmit} 
                className="space-y-6"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="bot-field" />
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    {texts.contact.form.name} *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder={texts.contact.form.namePlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    {texts.contact.form.email} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors"
                    placeholder={texts.contact.form.emailPlaceholder}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    {texts.contact.form.message} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    maxLength={500}
                    className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-colors resize-none"
                    placeholder={texts.contact.form.messagePlaceholder}
                  ></textarea>
                  <p className="text-sm text-gray-400 mt-1">{formData.message.length}/500 characters</p>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                  {texts.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
