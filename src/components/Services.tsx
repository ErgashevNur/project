import React, { useEffect, useRef, useState } from "react";
import { Palette, Layers, Zap } from "lucide-react";

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
      title: "Brend identifikatsiyasi",
      description:
        "Maqsadli auditoriyangizga mos keladigan va bozorda ajralib turadigan noyob brend identifikatsiyalarini yaratish.",
      features: [
        "Logotip dizayni",
        "Brend qoidalari",
        "Rang palitralari",
        "Tipografika",
      ],
    },
    {
      icon: Layers,
      title: "Illyustratsiya",
      description:
        "G‘oyalaringizni ijodiy va aniqlik bilan jonlantiradigan maxsus grafikalar va illyustratsiyalar.",
      features: [
        "Raqamli san’at",
        "Vektor grafikasi",
        "Qahramon dizayni",
        "Infografikalar",
      ],
    },
    {
      icon: Zap,
      title: "Ijodiy strategiya",
      description:
        "Dizayn yechimlarini biznes maqsadlaringiz bilan uyg‘unlashtiradigan strategik ijodiy yo‘nalish.",
      features: [
        "San’at yo‘nalishi",
        "Ijodiy maslahatlar",
        "Brend strategiyasi",
        "Dizayn auditi",
      ],
    },
  ];

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mening <span className="text-amber-400">Xizmatlarim</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Brendingizni rivojlantirish va biznes maqsadlaringizga
              erishishingiz uchun mo‘ljallangan keng qamrovli dizayn yechimlari
              — strategik ijodiy fikrlash orqali.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`group bg-gray-700/50 rounded-xl p-8 hover:bg-gray-700 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
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
                    <li
                      key={feature}
                      className="text-gray-400 text-sm flex items-center"
                    >
                      <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
