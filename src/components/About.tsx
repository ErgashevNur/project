import React, { useEffect, useRef, useState } from 'react';
import { Award, Users, Coffee, Clock } from 'lucide-react';

const About: React.FC = () => {
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

  const skills = [
    { name: 'Brand Identity', level: 95 },
    { name: 'Digital Design', level: 90 },
    { name: 'Typography', level: 88 },
    { name: 'Illustration', level: 85 },
    { name: 'UI/UX Design', level: 87 },
    { name: 'Print Design', level: 92 }
  ];

  const stats = [
    { icon: Award, value: '150+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Clock, value: '5+', label: 'Years Experience' }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className={`transition-all duration-1000 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About <span className="text-amber-400">Me</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Passionate graphic designer with a keen eye for detail and a love for creating 
              meaningful visual experiences that connect brands with their audiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                With over 5 years of experience in the design industry, I specialize in creating 
                compelling visual identities and digital experiences. My work spans across various 
                industries, from startups to established corporations.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                I believe that great design is not just about aesthetics—it's about solving problems, 
                telling stories, and creating connections between brands and their audiences.
              </p>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-amber-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-amber-400 to-orange-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gray-700 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍🎨</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center transition-all duration-700 transform ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-amber-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;