import React, { useEffect, useRef, useState } from 'react';
import { Palette, Monitor, Printer, Smartphone, Layers, Zap } from 'lucide-react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: Palette,
      title: 'Brand Identity',
      description: 'Creating distinctive brand identities that resonate with your target audience and stand out in the market.',
      features: ['Logo Design', 'Brand Guidelines', 'Color Palettes', 'Typography']
    },
    {
      icon: Monitor,
      title: 'Web Design',
      description: 'Designing modern, responsive websites that deliver exceptional user experiences across all devices.',
      features: ['UI/UX Design', 'Responsive Layout', 'User Research', 'Prototyping']
    },
    {
      icon: Printer,
      title: 'Print Design',
      description: 'Professional print materials that make a lasting impression and effectively communicate your message.',
      features: ['Brochures', 'Business Cards', 'Posters', 'Packaging']
    },
    {
      icon: Smartphone,
      title: 'Mobile Design',
      description: 'Intuitive mobile app interfaces designed for optimal user engagement and conversion.',
      features: ['App UI Design', 'Mobile UX', 'Icon Design', 'Wireframing']
    },
    {
      icon: Layers,
      title: 'Illustration',
      description: 'Custom illustrations and graphics that bring your ideas to life with creativity and precision.',
      features: ['Digital Art', 'Vector Graphics', 'Character Design', 'Infographics']
    },
    {
      icon: Zap,
      title: 'Creative Strategy',
      description: 'Strategic creative direction that aligns design solutions with your business objectives.',
      features: ['Art Direction', 'Creative Consulting', 'Brand Strategy', 'Design Audits']
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-amber-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive design solutions tailored to elevate your brand and achieve your business goals 
              through strategic creative thinking.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-gray-700/50 rounded-xl p-8 hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-gray-900" size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-gray-400 text-sm flex items-center">
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 pt-4 border-t border-gray-600">
                  <button className="text-amber-400 font-medium hover:text-amber-300 transition-colors duration-300">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;