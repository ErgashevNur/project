import React, { useEffect, useState, useCallback } from "react";
import { ChevronDown, Palette, Layers, Zap } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToPortfolio = useCallback(() => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToContact = useCallback(() => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-6 text-center relative z-10">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Ikonkalar */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center animate-pulse">
              <Palette
                className="text-amber-400"
                size={24}
                aria-hidden="true"
              />
            </div>
            <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center animate-pulse delay-200">
              <Layers className="text-blue-400" size={24} aria-hidden="true" />
            </div>
            <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center animate-pulse delay-400">
              <Zap className="text-green-400" size={24} aria-hidden="true" />
            </div>
          </div>

          {/* Sarlavha */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Creative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 block md:inline md:ml-4">
              Designer
            </span>
          </h1>

          {/* Tavsif */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Innovatsion dizayn yechimlari va strategik fikrlash orqali
            tomoshabinlarni o'ziga jalb qiladigan va natijalarga olib keladigan
            vizual tajribalarni yaratish.
          </p>

          {/* Tugmalar */}
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <button
              onClick={scrollToPortfolio}
              className="w-full md:w-auto bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:from-amber-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Loyhalarim
            </button>

            <button
              onClick={scrollToContact}
              className="w-full md:w-auto border-2 border-gray-300 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300"
            >
              Aloqaga chiqish
            </button>
          </div>
        </div>
      </div>

      {/* Scroll pastga ko‘rsatkich */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} aria-hidden="true" />
      </div>
    </section>
  );
};

export default Hero;
