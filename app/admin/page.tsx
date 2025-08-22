
'use client';

import { useState, useEffect } from 'react';

interface EditableContent {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    title: string;
    description: string;
  };
  services: {
    title: string;
    subtitle: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
  };
  testimonials: {
    title: string;
  };
  contact: {
    title: string;
    subtitle: string;
  };
}

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('hero');
  const [content, setContent] = useState<EditableContent>({
    hero: {
      title: 'Scale Your Business with Global IT Solutions',
      subtitle: 'Expert web development, SEO, and automation services for businesses ready to expand internationally',
      primaryCta: 'Get Started',
      secondaryCta: 'View Services'
    },
    about: {
      title: 'Global IT Excellence',
      description: 'We are AllPromo - a forward-thinking digital agency specializing in comprehensive IT solutions for international markets. Our expertise spans web development, SEO optimization, marketing automation, and crypto-friendly payment systems.'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive solutions for your digital success'
    },
    portfolio: {
      title: 'Our Work',
      subtitle: 'Successful projects across various industries'
    },
    testimonials: {
      title: 'What Our Clients Say'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Ready to start your project? Contact us today'
    }
  });
  const [savedMessage, setSavedMessage] = useState('');
  const [imageUpload, setImageUpload] = useState<File | null>(null);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'allpromo2025') {
      setIsAuthenticated(true);
      localStorage.setItem('admin_session', 'true');
    } else {
      alert('Invalid password');
    }
  };

  useEffect(() => {
    if (localStorage.getItem('admin_session')) {
      setIsAuthenticated(true);
    }
    
    const savedContent = localStorage.getItem('site_content');
    if (savedContent) {
      try {
        const parsed = JSON.parse(savedContent);
        setContent(parsed);
        // Apply content to page
        applyContentToPage(parsed);
      } catch (e) {
        console.error('Error parsing saved content:', e);
      }
    }

    const savedImages = localStorage.getItem('uploaded_images');
    if (savedImages) {
      try {
        setUploadedImages(JSON.parse(savedImages));
      } catch (e) {
        console.error('Error parsing saved images:', e);
      }
    }
  }, []);

  const applyContentToPage = (newContent: EditableContent) => {
    // Update page content dynamically
    const heroTitle = document.querySelector('[data-hero-title]');
    const heroSubtitle = document.querySelector('[data-hero-subtitle]');
    const aboutTitle = document.querySelector('[data-about-title]');
    const aboutDescription = document.querySelector('[data-about-description]');
    const servicesTitle = document.querySelector('[data-services-title]');
    const servicesSubtitle = document.querySelector('[data-services-subtitle]');
    const portfolioTitle = document.querySelector('[data-portfolio-title]');
    const portfolioSubtitle = document.querySelector('[data-portfolio-subtitle]');
    const testimonialsTitle = document.querySelector('[data-testimonials-title]');
    const contactTitle = document.querySelector('[data-contact-title]');
    const contactSubtitle = document.querySelector('[data-contact-subtitle]');

    if (heroTitle) heroTitle.textContent = newContent.hero.title;
    if (heroSubtitle) heroSubtitle.textContent = newContent.hero.subtitle;
    if (aboutTitle) aboutTitle.textContent = newContent.about.title;
    if (aboutDescription) aboutDescription.textContent = newContent.about.description;
    if (servicesTitle) servicesTitle.textContent = newContent.services.title;
    if (servicesSubtitle) servicesSubtitle.textContent = newContent.services.subtitle;
    if (portfolioTitle) portfolioTitle.textContent = newContent.portfolio.title;
    if (portfolioSubtitle) portfolioSubtitle.textContent = newContent.portfolio.subtitle;
    if (testimonialsTitle) testimonialsTitle.textContent = newContent.testimonials.title;
    if (contactTitle) contactTitle.textContent = newContent.contact.title;
    if (contactSubtitle) contactSubtitle.textContent = newContent.contact.subtitle;
  };

  const handleSave = () => {
    localStorage.setItem('site_content', JSON.stringify(content));
    applyContentToPage(content);
    setSavedMessage('Content saved successfully!');
    setTimeout(() => setSavedMessage(''), 3000);
    
    // Trigger a page refresh to apply changes
    if (window.opener) {
      window.opener.location.reload();
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('admin_session');
    setPassword('');
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageUpload(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        const newImages = [...uploadedImages, imageUrl];
        setUploadedImages(newImages);
        localStorage.setItem('uploaded_images', JSON.stringify(newImages));
        setSavedMessage('Image uploaded successfully!');
        setTimeout(() => setSavedMessage(''), 3000);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = (index: number) => {
    const newImages = uploadedImages.filter((_, i) => i !== index);
    setUploadedImages(newImages);
    localStorage.setItem('uploaded_images', JSON.stringify(newImages));
  };

  const tabs = [
    { id: 'hero', label: 'Hero Section', icon: 'ri-home-4-line' },
    { id: 'about', label: 'About Us', icon: 'ri-information-line' },
    { id: 'services', label: 'Services', icon: 'ri-service-line' },
    { id: 'portfolio', label: 'Portfolio', icon: 'ri-gallery-line' },
    { id: 'testimonials', label: 'Testimonials', icon: 'ri-chat-quote-line' },
    { id: 'contact', label: 'Contact', icon: 'ri-contacts-line' },
    { id: 'images', label: 'Images', icon: 'ri-image-line' }
  ];

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-950 flex items-center justify-center">
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-admin-line text-2xl text-blue-400" aria-hidden="true"></i>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">Admin Panel</h1>
            <p className="text-gray-400">Enter password to access</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                placeholder="Enter password..."
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors whitespace-nowrap"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mr-3">
                <i className="ri-admin-line text-blue-400" aria-hidden="true"></i>
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">AllPromo Admin Panel</h1>
                <p className="text-sm text-gray-400">Website content management</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              {savedMessage && (
                <div className="bg-green-600/20 text-green-400 px-4 py-2 rounded-lg text-sm">
                  {savedMessage}
                </div>
              )}
              <button
                onClick={handleSave}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors whitespace-nowrap"
              >
                Save Changes
              </button>
              <button
                onClick={handleLogout}
                className="bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-6">
              <h2 className="text-lg font-semibold text-white mb-6">Website Sections</h2>
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-colors ${
                      activeTab === tab.id
                        ? 'bg-blue-600/20 text-blue-400 border border-blue-500/30'
                        : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                    }`}
                  >
                    <i className={`${tab.icon} mr-3`} aria-hidden="true"></i>
                    {tab.label}
                  </button>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h3 className="text-sm font-medium text-gray-400 mb-4">Quick Actions</h3>
                <div className="space-y-2">
                  <a
                    href="/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <i className="ri-external-link-line mr-2" aria-hidden="true"></i>
                    View Website
                  </a>
                  <button
                    onClick={() => window.location.reload()}
                    className="flex items-center text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <i className="ri-refresh-line mr-2" aria-hidden="true"></i>
                    Refresh Panel
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
              {activeTab === 'hero' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Hero Section</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Main Title
                      </label>
                      <input
                        type="text"
                        value={content.hero.title}
                        onChange={(e) => setContent({
                          ...content,
                          hero: { ...content.hero, title: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subtitle
                      </label>
                      <textarea
                        value={content.hero.subtitle}
                        onChange={(e) => setContent({
                          ...content,
                          hero: { ...content.hero, subtitle: e.target.value }
                        })}
                        rows={3}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Primary Button
                        </label>
                        <input
                          type="text"
                          value={content.hero.primaryCta}
                          onChange={(e) => setContent({
                            ...content,
                            hero: { ...content.hero, primaryCta: e.target.value }
                          })}
                          className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Secondary Button
                        </label>
                        <input
                          type="text"
                          value={content.hero.secondaryCta}
                          onChange={(e) => setContent({
                            ...content,
                            hero: { ...content.hero, secondaryCta: e.target.value }
                          })}
                          className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'about' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">About Section</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={content.about.title}
                        onChange={(e) => setContent({
                          ...content,
                          about: { ...content.about, title: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Description
                      </label>
                      <textarea
                        value={content.about.description}
                        onChange={(e) => setContent({
                          ...content,
                          about: { ...content.about, description: e.target.value }
                        })}
                        rows={6}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'services' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Services Section</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Section Title
                      </label>
                      <input
                        type="text"
                        value={content.services.title}
                        onChange={(e) => setContent({
                          ...content,
                          services: { ...content.services, title: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subtitle
                      </label>
                      <input
                        type="text"
                        value={content.services.subtitle}
                        onChange={(e) => setContent({
                          ...content,
                          services: { ...content.services, subtitle: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="bg-blue-600/20 border border-blue-500/50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <i className="ri-information-line text-blue-400 mr-2" aria-hidden="true"></i>
                        <span className="text-blue-400 font-medium">Service Management Available</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        You can now edit the main title and subtitle for the services section. Individual service items can be customized in future updates.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'portfolio' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Portfolio Section</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Section Title
                      </label>
                      <input
                        type="text"
                        value={content.portfolio.title}
                        onChange={(e) => setContent({
                          ...content,
                          portfolio: { ...content.portfolio, title: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subtitle
                      </label>
                      <input
                        type="text"
                        value={content.portfolio.subtitle}
                        onChange={(e) => setContent({
                          ...content,
                          portfolio: { ...content.portfolio, subtitle: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="bg-blue-600/20 border border-blue-500/50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <i className="ri-information-line text-blue-400 mr-2" aria-hidden="true"></i>
                        <span className="text-blue-400 font-medium">Portfolio Management Available</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Main portfolio section titles can now be edited. Individual portfolio items and project details management coming in future updates.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'testimonials' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Testimonials Section</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Section Title
                      </label>
                      <input
                        type="text"
                        value={content.testimonials.title}
                        onChange={(e) => setContent({
                          ...content,
                          testimonials: { ...content.testimonials, title: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="bg-blue-600/20 border border-blue-500/50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <i className="ri-information-line text-blue-400 mr-2" aria-hidden="true"></i>
                        <span className="text-blue-400 font-medium">Testimonials Management Available</span>
                      </div>
                      <p className="text-gray-300 text-sm">
                        Section title can be customized. Individual testimonial management and client feedback editing coming soon.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'contact' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Section</h2>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Title
                      </label>
                      <input
                        type="text"
                        value={content.contact.title}
                        onChange={(e) => setContent({
                          ...content,
                          contact: { ...content.contact, title: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Subtitle
                      </label>
                      <input
                        type="text"
                        value={content.contact.subtitle}
                        onChange={(e) => setContent({
                          ...content,
                          contact: { ...content.contact, subtitle: e.target.value }
                        })}
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'images' && (
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Image Management</h2>
                  <div className="space-y-6">
                    <div className="border-2 border-dashed border-gray-700 rounded-lg p-8 text-center">
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                        id="image-upload"
                      />
                      <label
                        htmlFor="image-upload"
                        className="cursor-pointer flex flex-col items-center"
                      >
                        <i className="ri-upload-cloud-line text-4xl text-gray-400 mb-4" aria-hidden="true"></i>
                        <span className="text-gray-300 font-medium mb-2">Upload New Image</span>
                        <span className="text-gray-400 text-sm">Click to select an image file</span>
                      </label>
                    </div>

                    {uploadedImages.length > 0 && (
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Uploaded Images</h3>
                        <div className="grid md:grid-cols-3 gap-4">
                          {uploadedImages.map((image, index) => (
                            <div key={index} className="relative bg-gray-800 rounded-lg overflow-hidden">
                              <img
                                src={image}
                                alt={`Uploaded ${index + 1}`}
                                className="w-full h-32 object-cover"
                              />
                              <button
                                onClick={() => removeImage(index)}
                                className="absolute top-2 right-2 bg-red-600 hover:bg-red-700 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm"
                              >
                                ×
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-blue-600/20 border border-blue-500/50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <i className="ri-information-line text-blue-400 mr-2" aria-hidden="true"></i>
                        <span className="text-blue-400 font-medium">Image Management Now Available</span>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        You can now upload custom images for your website. Images are stored locally and will be preserved between sessions.
                      </p>
                      <ul className="text-gray-300 text-sm space-y-1">
                        <li>• Upload custom hero background images</li>
                        <li>• Add portfolio project images</li>
                        <li>• Replace auto-generated content</li>
                        <li>• Manage image library efficiently</li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
