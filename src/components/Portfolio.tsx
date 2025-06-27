import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Eye, Heart } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = ['all', 'branding', 'web', 'print', 'illustration'];

  const projects = [
    {
      id: 1,
      title: 'Modern Brand Identity',
      category: 'branding',
      image: 'https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 142,
      views: 2341
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'web',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 89,
      views: 1567
    },
    {
      id: 3,
      title: 'Magazine Layout',
      category: 'print',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 234,
      views: 3421
    },
    {
      id: 4,
      title: 'Digital Illustration',
      category: 'illustration',
      image: 'https://images.pexels.com/photos/1109543/pexels-photo-1109543.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 176,
      views: 2890
    },
    {
      id: 5,
      title: 'Corporate Brochure',
      category: 'print',
      image: 'https://images.pexels.com/photos/618613/pexels-photo-618613.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 98,
      views: 1876
    },
    {
      id: 6,
      title: 'App Interface Design',
      category: 'web',
      image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800',
      likes: 267,
      views: 4123
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" ref={sectionRef} className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              My <span className="text-amber-400">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              A collection of my best work showcasing creativity, innovation, and attention to detail 
              across various design disciplines.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium capitalize transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-amber-400 text-gray-900'
                      : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className={`group cursor-pointer transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="relative overflow-hidden rounded-xl bg-gray-800 shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <div className="flex items-center justify-between text-gray-300">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Heart size={16} />
                            <span className="text-sm">{project.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye size={16} />
                            <span className="text-sm">{project.views}</span>
                          </div>
                        </div>
                        <ExternalLink size={20} className="text-amber-400" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:from-amber-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg">
              View All Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;