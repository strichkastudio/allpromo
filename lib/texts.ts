// Centralized text content for internationalization
export const texts = {
  // Navigation
  navigation: [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
  ],

  // Header
  header: {
    cta: 'Contact Us'
  },

  // Hero Section
  hero: {
    title: 'Scale Your Business Globally — Accept Crypto Payments.',
    // === 1. ВИПРАВЛЕНО ПІДЗАГОЛОВОК ===
    subtitle: 'Full-service web development and international SEO. Pay securely with cryptocurrency from anywhere in the world.',
    primaryCta: 'Get Started',
    secondaryCta: 'See Services'
  },

  // About Section
  about: {
    title: 'What We Do',
    description: 'AllPromo is your global digital growth partner, delivering comprehensive solutions for businesses expanding into international markets. We specialize in multi-regional development, international SEO optimization, cross-border advertising, localized content creation, and worldwide payment solutions – all designed to accelerate your global presence and drive measurable growth across diverse markets.'
  },

  // Advantages Section
  advantages: {
    title: 'Why Choose AllPromo',
    items: [
      {
        icon: 'ri-money-dollar-circle-line',
        title: 'Crypto-Friendly Payments',
        description: 'Pay with BTC, ETH, or USDT alongside traditional payment methods for maximum flexibility and convenience.',
        expandedDescription: 'We accept Bitcoin, Ethereum, and USDT payments through secure blockchain transactions. Our crypto payment system offers lower fees, faster international transfers, and complete transaction transparency. No geographic restrictions or banking delays - pay from anywhere in the world within minutes.',
        color: 'text-yellow-400',
        bgColor: 'bg-yellow-500/20'
      },
      {
        icon: 'ri-rocket-2-line',
        title: 'Faster Go-to-Market',
        description: 'Streamlined processes and organized launches get your business online quickly with professional results.',
        expandedDescription: 'Our proven workflow reduces typical project timelines by 40%. We use advanced project management tools, pre-built templates, and automated deployment processes. Average website launch: 2-4 weeks instead of 2-3 months. Fast-track options available for urgent projects.',
        color: 'text-blue-400',
        bgColor: 'bg-blue-500/20'
      },
      {
        icon: 'ri-team-line',
        title: 'One Partner for Site + Growth',
        description: 'Complete end-to-end services from development to marketing, eliminating the need for multiple agencies.',
        expandedDescription: 'Single point of contact for all your digital needs. Coordinated strategy across web development, SEO, advertising, and content creation. No communication gaps between different vendors. Unified reporting and consistent brand messaging across all channels.',
        color: 'text-green-400',
        bgColor: 'bg-green-500/20'
      },
      {
        icon: 'ri-line-chart-line',
        title: 'Clear Reporting & Communication',
        description: 'Transparent progress updates and detailed analytics so you always know how your investment is performing.',
        expandedDescription: 'Weekly progress reports with real metrics and KPIs. Direct access to analytics dashboards showing traffic, conversions, and ROI. Monthly strategy calls with actionable insights. Custom reporting dashboard with 24/7 access to your project data and performance metrics.',
        color: 'text-green-400',
        bgColor: 'bg-green-500/20'
      }
    ]
  },

  // Services Section
  services: {
    title: 'Our Services',
    subtitle: 'Comprehensive digital solutions for global business expansion',
    items: [
      {
        icon: 'ri-code-s-slash-line',
        title: 'Web Development',
        description: 'Professional websites built for performance and growth',
        features: [
          'Landing pages, corporate sites, and e-commerce stores',
          'Mobile-first responsive design and UX optimization',
          'Fast loading speeds and SEO-ready structure',
          'Modern frameworks and scalable architecture'
        ],
        // === 2. ВИПРАВЛЕНО КОЛЬОРИ ІКОНОК ===
        color: '#60a5fa', // Blue
        bgColor: 'bg-blue-500/10',
        borderColor: 'border-blue-500/20'
      },
      {
        icon: 'ri-search-2-line',
        title: 'SEO',
        description: 'Data-driven optimization for sustainable organic growth',
        features: [
          'Technical SEO audits and on-page optimization',
          'Content strategy and keyword research',
          'Google Analytics setup and conversion tracking',
          'Monthly reporting and performance insights'
        ],
        color: '#34d399', // Green
        bgColor: 'bg-green-500/10',
        borderColor: 'border-green-500/20'
      },
      {
        icon: 'ri-megaphone-line',
        title: 'Performance Advertising',
        description: 'Targeted campaigns that deliver measurable results',
        features: [
          'Google Ads campaigns and optimization',
          'Remarketing and audience segmentation strategies',
          'Display banners and YouTube video ads',
          'Google Ads audit and performance analysis',
          'Product feeds and shopping ads optimization'
        ],
        color: '#fb923c', // Orange
        bgColor: 'bg-orange-500/10',
        borderColor: 'border-orange-500/20'
      },
      {
        icon: 'ri-settings-4-line',
        title: 'Automation',
        description: 'Streamlined processes and ongoing technical maintenance',
        features: [
          'Google Tag Manager and event tracking setup',
          'Chatbot integration and CRM basics',
          'Email marketing automation workflows',
          'Website maintenance and technical support'
        ],
        color: '#a855f7', // Violet
        bgColor: 'bg-violet-500/10',
        borderColor: 'border-violet-500/20'
      },
      {
        icon: 'ri-paint-brush-line',
        title: 'Branding & Design',
        description: 'Creative visual identity and brand development',
        features: [
          'Logo design and brand identity creation',
          'Marketing materials and business cards',
          'Social media graphics and templates',
          'Brand guidelines and style documentation'
        ],
        color: '#ec4899', // Pink
        bgColor: 'bg-pink-500/10',
        borderColor: 'border-pink-500/20'
      },
      {
        icon: 'ri-line-chart-line',
        title: 'Analytics & Reporting',
        description: 'Data insights and performance measurement tools',
        features: [
          'Custom analytics dashboard setup',
          'Conversion tracking and goal monitoring',
          'Monthly performance reports and insights',
          'ROI analysis and optimization recommendations'
        ],
        color: '#22d3ee', // Cyan
        bgColor: 'bg-cyan-500/10',
        borderColor: 'border-cyan-500/20'
      },
      {
        icon: 'ri-store-3-line',
        title: 'E-commerce Solutions',
        description: 'Complete online store development and optimization',
        features: [
          'Shopify and WooCommerce store setup',
          'Payment gateway integration and security',
          'Product catalog management and optimization',
          'Order management and inventory tracking'
        ],
        color: '#34d399', // Emerald
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/20'
      },
      {
        icon: 'ri-lightbulb-line',
        title: 'Digital Consulting',
        description: 'Strategic guidance for digital transformation',
        features: [
          'Digital strategy development and planning',
          'Technology stack recommendations',
          'Process optimization and workflow analysis',
          'Growth strategy and market expansion advice'
        ],
        color: '#facc15', // Yellow
        bgColor: 'bg-yellow-500/10',
        borderColor: 'border-yellow-500/20'
      }
    ]
  },

  // ... (решта файлу залишається без змін)
  crypto: {
    title: 'Seamless Transactions with Crypto',
    description: 'We accept cryptocurrency payments for global convenience and security. Pay with Bitcoin, Ethereum, or USDT from anywhere worldwide.',
    tagline: 'Borderless payments — accept crypto globally for ultimate flexibility.',
    currencies: [
      {
        name: 'Bitcoin',
        icon: 'ri-currency-line',
        textColor: 'text-orange-400',
        bgColor: 'bg-orange-500/20'
      },
      {
        name: 'Ethereum',
        icon: 'ri-coin-line',
        textColor: 'text-blue-400',
        bgColor: 'bg-blue-500/20'
      },
      {
        name: 'USDT',
        icon: 'ri-money-dollar-circle-line',
        textColor: 'text-green-400',
        bgColor: 'bg-green-500/20'
      }
    ]
  },

  portfolio: {
    title: 'Our Portfolio',
    subtitle: 'Concept examples — real projects coming soon.',
    seeMore: 'Want to see your business here? → Contact us',
    items: [
      {
        title: 'E-commerce SaaS Demo',
        description: 'Modern SaaS platform for online retailers with advanced analytics, inventory management, and automated marketing tools.',
        category: 'SaaS Platform',
        images: [
          '/portfolio/saas-project-1.jpg',
          '/portfolio/saas-project-2.jpg',
          '/portfolio/saas-project-3.jpg',
          '/portfolio/saas-project-4.jpg'
        ],
        details: {
          challenge: 'Create a comprehensive SaaS solution for e-commerce businesses needing better inventory and sales analytics.',
          solution: 'Developed a full-featured platform with real-time analytics, automated reporting, and integrated marketing tools.',
          results: [
            'Reduced inventory management time by 60%',
            'Increased sales conversion rates by 35%',
            'Automated 80% of routine marketing tasks',
            'Improved customer retention by 25%'
          ],
          technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Stripe API'],
          duration: '4 months',
          deliverables: [
            'Complete SaaS platform',
            'Admin dashboard',
            'API documentation',
            'User training materials'
          ]
        }
      },
      {
        title: 'Corporate Site Demo',
        description: 'Professional corporate website with modern design, SEO optimization, and lead generation features for B2B services.',
        category: 'Corporate Website',
        images: [
          '/portfolio/corporate-1.jpg',
          '/portfolio/corporate-2.jpg',
          '/portfolio/corporate-3.jpg',
          '/portfolio/corporate-4.jpg'
        ],
        details: {
          challenge: 'Design a professional corporate presence that effectively communicates services and generates qualified leads.',
          solution: 'Built a conversion-optimized website with clear messaging, strategic CTAs, and integrated lead capture forms.',
          results: [
            'Increased website traffic by 200%',
            'Generated 150% more qualified leads',
            'Improved bounce rate by 40%',
            'Achieved #1 Google rankings for target keywords'
          ],
          technologies: ['Next.js', 'Tailwind CSS', 'CMS Integration', 'Google Analytics'],
          duration: '6 weeks',
          deliverables: [
            'Responsive corporate website',
            'SEO optimization',
            'Content management system',
            'Lead generation forms'
          ]
        }
      },
      {
        title: 'Evergreen Collective - Sustainable Home Goods E-commerce',
        description: 'A premium Shopify e-commerce platform for an Australian sustainable goods brand, featuring a custom subscription model to boost recurring revenue.',
        category: 'E-commerce',
        images: [
          '/portfolio/evergreen-1.jpg', // Тимчасові назви, які ми замінимо
          '/portfolio/evergreen-2.jpg',
          '/portfolio/evergreen-3.jpg',
          '/portfolio/evergreen-4.jpg'
        ],
        details: {
          challenge: 'Evergreen Collective, an established Australian brand for sustainable home goods, had an outdated website with a poor mobile experience and no way to foster recurring purchases, limiting their growth potential.',
          solution: 'We engineered a complete overhaul on the Shopify platform with a mobile-first design philosophy. A key feature was the integration of a custom subscription model, allowing customers to receive curated goods regularly. We also automated their email marketing to nurture customer relationships.',
          results: [
            'Increased mobile conversion rate by 70%',
            'Subscription model adopted by 15% of customers within 3 months',
            'Boosted Average Order Value by 25% through upselling',
            'Reduced bounce rate by 40% due to improved UX'
          ],
          technologies: ['Shopify Plus', 'Next.js (Headless)', 'Stripe', 'Klaviyo', 'Tailwind CSS'],
          duration: '10 weeks',
          deliverables: [
            'Mobile-first e-commerce platform',
            'Custom subscription model integration',
            'New brand identity & UX/UI design',
            'Email marketing automation setup'
          ]
        }
      },
      {
        title: 'StarlightAutomotive.com - Premium Car Services',
        description: 'Luxury automotive service booking platform with real-time scheduling and customer management.',
        // === ОСЬ ТУТ ВНЕСЕНО ЗМІНИ ===
        images: [
          '/portfolio/automotive-1.jpg',
          '/portfolio/automotive-2.jpg',
          '/portfolio/automotive-3.jpg',
          '/portfolio/automotive-4.jpg'
        ],
        // ============================
        category: 'Service Platform',
        details: {
          challenge: 'Starlight Automotive required a premium booking platform that would reflect their luxury brand while providing seamless appointment scheduling and customer relationship management.',
          solution: 'We created a sophisticated booking system with real-time availability, automated confirmations, customer portal, and integrated payment processing tailored for premium automotive services.',
          results: [
            '250% increase in online bookings',
            '90% reduction in booking management time',
            'Improved customer satisfaction score to 4.9/5',
            '45% increase in repeat customer bookings'
          ],
          technologies: ['React', 'Express.js', 'MongoDB', 'Square', 'Twilio'],
          duration: '10 weeks',
          deliverables: [
            'Premium booking platform',
            'Customer management system',
            'Automated notification system',
            'Payment processing integration'
          ]
        }
      },
      {
        title: 'TechStartup SaaS - Project Management Platform',
        description: 'AI-powered project management tool with team collaboration and advanced analytics.',
        images: [
          '/portfolio/saas-project-1.jpg',
          '/portfolio/saas-project-2.jpg',
          '/portfolio/saas-project-3.jpg',
          '/portfolio/saas-project-4.jpg'
        ],
        category: 'SaaS',
        details: {
          challenge: 'A growing tech startup needed a scalable project management platform that could compete with established players while offering unique AI-powered insights and team collaboration features.',
          solution: 'We built a cloud-native SaaS platform with AI-powered project analytics, real-time collaboration tools, custom workflows, and comprehensive reporting dashboard.',
          results: [
            '500+ active teams in first 3 months',
            '$50K MRR achieved within 6 months',
            '95% user retention rate',
            'Successfully raised Series A funding'
          ],
          technologies: ['Next.js', 'Supabase', 'OpenAI API', 'Stripe', 'Vercel'],
          duration: '16 weeks',
          deliverables: [
            'Full SaaS platform development',
            'AI analytics integration',
            'Multi-tenant architecture',
            'Subscription and billing system'
          ]
        }
      },
      {
        title: 'E-commerce Fashion Store - Mobile-First Platform',
        description: 'Modern fashion e-commerce with AR try-on feature and social shopping integration.',
        images: [
          'https://static.readdy.ai/image/1488eada459a36faf9de2c307146a819/13d4dc269b46cb8aa0a90e519fb22539.png',
          'https://static.readdy.ai/image/1488eada459a36faf9de2c307146a819/88d8fea22da56c4f63a84d29aab1234d.png',
          'https://static.readdy.ai/image/1488eada459a36faf9de2c307146a819/3daacb7b4a7a42f23a728965957e7b45.png',
          'https://static.readdy.ai/image/1488eada459a36faf9de2c307146a819/0e9fd201282e411b3c7e9fc8073169ac.png'
        ],
        category: 'Fashion E-commerce',
        details: {
          challenge: 'A fashion brand needed a mobile-first e-commerce platform with innovative features like AR try-on, social shopping, and personalized recommendations to compete in the crowded fashion market.',
          solution: 'We developed a progressive web app with AR integration, social features, AI-powered recommendations, and seamless mobile checkout experience.',
          results: [
            '400% increase in mobile conversions',
            '70% improvement in user engagement',
            'AR feature used by 60% of visitors',
            '25% increase in average order value'
          ],
          technologies: ['React Native', 'AR.js', 'Node.js', 'Redis', 'Cloudinary'],
          duration: '14 weeks',
          deliverables: [
            'Mobile-first PWA development',
            'AR try-on feature integration',
            'Social shopping functionality',
            'AI recommendation engine'
          ]
        }
      },
      {
        title: 'FinTech Startup - Digital Banking Platform',
        description: 'Secure digital banking solution with cryptocurrency integration and AI fraud detection.',
        images: [
          '/portfolio/fintech-1.jpg',
          '/portfolio/fintech-2.jpg',
          '/portfolio/fintech-3.jpg',
          '/portfolio/fintech-4.jpg'
        ],
        category: 'FinTech',
        details: {
          challenge: 'A fintech startup required a comprehensive digital banking platform with advanced security, cryptocurrency support, and AI-powered fraud detection to meet regulatory compliance.',
          solution: 'We built a secure banking platform with multi-factor authentication, blockchain integration, real-time fraud detection, and comprehensive financial management tools.',
          results: [
            '10,000+ users onboarded in 4 months',
            '99.9% security compliance rating',
            '50% reduction in fraudulent transactions',
            'Successfully obtained banking license'
          ],
          technologies: ['Node.js', 'PostgreSQL', 'Blockchain API', 'TensorFlow', 'AWS'],
          duration: '20 weeks',
          deliverables: [
            'Secure banking platform',
            'Cryptocurrency integration',
            'AI fraud detection system',
            'Regulatory compliance framework'
          ]
        }
      },
      {
        title: 'Healthcare Platform - Telemedicine Solution',
        description: 'HIPAA-compliant telemedicine platform with video consultations and patient management.',
        images: [
          '/portfolio/healthcare-telemedicine-1.jpg',
          '/portfolio/healthcare-telemedicine-2.jpg',
          '/portfolio/healthcare-telemedicine-3.jpg',
          '/portfolio/healthcare-telemedicine-4.jpg'
        ],
        category: 'Healthcare',
        details: {
          challenge: 'A healthcare provider needed a HIPAA-compliant telemedicine platform that would enable secure video consultations, patient record management, and prescription handling.',
          solution: 'We developed a comprehensive telemedicine solution with encrypted video calls, electronic health records, appointment scheduling, and integrated pharmacy connections.',
          results: [
            '300% increase in patient consultations',
            '85% reduction in wait times',
            '100% HIPAA compliance achieved',
            'Expanded service to rural areas'
          ],
          technologies: ['React', 'WebRTC', 'FHIR API', 'MongoDB', 'HIPAA Cloud'],
          duration: '18 weeks',
          deliverables: [
            'HIPAA-compliant platform',
            'Video consultation system',
            'Electronic health records',
            'Prescription management integration'
          ]
        }
      }
    ]
  },

  // Trust Section
  trust: {
    title: 'Trusted by small businesses & startups',
    companies: [
      { name: 'TechCorp', logo: 'ri-building-line' },
      { name: 'StartupX', logo: 'ri-rocket-line' },
      { name: 'GrowthCo', logo: 'ri-plant-line' },
      { name: 'InnovateLab', logo: 'ri-lightbulb-line' }
    ]
  },

  // CTA Section
  cta: {
    title: 'Ready to Launch Your Success?',
    description: 'Join hundreds of businesses that trust AllPromo for their digital growth. Get your personalized quote today.',
    button: 'Get Started'
  },

  // Contact Section
  contact: {
    title: 'Get In Touch',
    subtitle: 'Ready to start your project? Let\'s discuss your needs',
    info: {
      title: 'Contact Information',
      email: {
        label: 'Email',
        value: 'hello@allpromo.space'
      },
      website: {
        label: 'Website',
        value: 'allpromo.space'
      }
    },
    social: {
      title: 'Follow Us',
      links: [
        { name: 'LinkedIn', icon: 'ri-linkedin-fill' },
        { name: 'Telegram', icon: 'ri-telegram-fill' }
      ]
    },
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell us about your project...',
      submit: 'Send Message'
    },
    success: {
      title: 'Thanks! We\'ll get back to you soon.',
      message: 'Your message has been sent successfully. We\'ll contact you within 24 hours.'
    }
  },

  // Footer
  footer: {
    copyright: ' 2025 AllPromo. All rights reserved.',
    description: 'AllPromo — digital solutions for small business growth.',
    email: 'hello@allpromo.space'
  },

  // Global Markets Section
  globalMarkets: {
    title: 'Cultural-Aware Marketing Strategies',
    subtitle: 'Optimized for global audiences with deep market understanding',
    features: [
      {
        icon: 'ri-global-line',
        title: 'Global SEO & Localization',
        description: 'Multi-language SEO strategies with cultural adaptation for international markets and local search optimization.'
      },
      {
        icon: 'ri-advertisement-line',
        title: 'Multi-regional Ad Campaigns',
        description: 'Cross-border advertising campaigns tailored to regional preferences, behaviors, and market dynamics.'
      },
      {
        icon: 'ri-secure-payment-line',
        title: 'International Payment Solutions',
        description: 'Global payment processing with cryptocurrency support and multi-currency transactions for worldwide accessibility.'
      }
    ]
  },

  // New Testimonials Section
  testimonials: {
    title: 'Trusted by Businesses Worldwide',
    items: [
      {
        quote: 'AllPromo transformed our digital presence and helped us expand into three new international markets within six months.',
        author: 'Sarah Chen',
        position: 'CEO, TechVision Solutions',
        location: 'Singapore'
      },
      {
        quote: 'Their crypto payment integration and global SEO strategy increased our international sales by 280% in the first quarter.',
        author: 'Marcus Weber',
        position: 'Founder, InnovateLab',
        location: 'Berlin'
      },
      {
        quote: 'Professional team with deep understanding of global markets. Our conversion rates improved dramatically across all regions.',
        author: 'Elena Rodriguez',
        position: 'CMO, GrowthCorp',
        location: 'Madrid'
      },
      {
        quote: 'The multi-regional advertising campaigns delivered exceptional ROI. We saw 150% growth in our target markets within 4 months.',
        author: 'James Morrison',
        position: 'Marketing Director, ScaleUp Inc',
        location: 'London'
      },
      {
        quote: 'Outstanding web development and SEO services. Our organic traffic increased by 320% and we rank #1 for all target keywords.',
        author: 'Sophie Dubois',
        position: 'Founder, DigitalFirst',
        location: 'Paris'
      },
      {
        quote: 'Their automation solutions streamlined our entire marketing workflow. We now generate 40% more leads with half the manual effort.',
        author: 'David Kim',
        position: 'CEO, TechAdvantage',
        location: 'Toronto'
      }
    ]
  }
};
