import React, { useEffect, useRef, useState } from "react";
import { Award, Users, Coffee, Clock } from "lucide-react";

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
    { name: "Brand Identity", level: 95 },
    { name: "Digital Design", level: 90 },
    { name: "Typography", level: 88 },
    { name: "Illustration", level: 85 },
    { name: "UI/UX Design", level: 87 },
    { name: "Print Design", level: 92 },
  ];

  const stats = [
    { icon: Award, value: "60+", label: "Umumiy qilgan loyhalarim" },
    { icon: Users, value: "38+", label: "Umumiy Real loyhalarim" },
    { icon: Coffee, value: "30+", label: "Kutubxonamdagi kitoblar" },
    { icon: Clock, value: "4+", label: "Month Experience" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Men <span className="text-amber-400">haqimda</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Men uchun dizayn — bu nafaqat chiroyli ko‘rinish, balki muammoni
              hal qilish, hikoya aytish va vizual aloqa orqali ishonch uyg‘otish
              san’atidir.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                Ko'p muddatdan beri dizayn sohasidagi tajribam davomida men brendlar
                uchun o‘ziga xos vizual identifikatsiyalar va raqamli dizayn
                tajribalari yaratishga ixtisoslashganman. Mening ishlarim turli
                sohalarni — startaplardangina emas, balki yirik kompaniyalarni
                ham qamrab oladi.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Men uchun yaxshi dizayn — bu faqat chiroyli ko‘rinish emas. Bu —
                muammolarga yechim topish, hikoya aytish va brendlar bilan
                auditoriya o‘rtasida kuchli aloqa yaratish vositasidir.
              </p>
            </div>

            <div className="relative">
              <div>
                <img
                  src="/charos.jpg"
                  className="w-[400px] rounded-full"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`text-center transition-all duration-700 transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 bg-amber-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="text-amber-400" size={24} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </div>
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
