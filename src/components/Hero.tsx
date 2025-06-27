import React, { useEffect, useState, useCallback } from "react";
import { ChevronDown, Palette, Layers, Zap } from "lucide-react";

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Use useEffect for initial animation trigger
  useEffect(() => {
    setIsVisible(true);
  }, []); // Empty dependency array ensures this runs once on mount

  // Use useCallback for event handlers to prevent unnecessary re-renders
  const scrollToPortfolio = useCallback(() => {
    document
      .getElementById("portfolio")
      ?.scrollIntoView({ behavior: "smooth" });
  }, []); // No dependencies needed as it only scrolls to a static ID

  return (
    // Use `min-h-screen` to ensure it takes full viewport height
    <section
      id="hero"
      className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-slate-900 flex items-center justify-center relative overflow-hidden"
    >
      {/* Background pattern - consider moving this to a separate utility if used often */}
      <div></div>
      {/* // className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.03"%3E%3Cpath d="m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
       */}
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Entrance animation for the main content */}
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
          }`}
        >
          {/* Icon group with pulse animation */}
          <div className="flex justify-center space-x-4 mb-8">
            <div className="w-12 h-12 bg-amber-400/20 rounded-full flex items-center justify-center animate-pulse">
              <Palette
                className="text-amber-400"
                size={24}
                aria-hidden="true"
              />{" "}
              {/* Add aria-hidden for decorative icons */}
            </div>
            <div className="w-12 h-12 bg-blue-400/20 rounded-full flex items-center justify-center animate-pulse delay-200">
              <Layers className="text-blue-400" size={24} aria-hidden="true" />
            </div>
            <div className="w-12 h-12 bg-green-400/20 rounded-full flex items-center justify-center animate-pulse delay-400">
              <Zap className="text-green-400" size={24} aria-hidden="true" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Creative
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-500 block md:inline md:ml-4">
              Designer
            </span>
          </h1>

          {/* Subheading/Description */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Crafting visual experiences that captivate audiences and drive
            results through innovative design solutions and strategic thinking.
          </p>

          {/* Action Buttons */}
          <div className="space-y-4 md:space-y-0 md:space-x-6 md:flex md:justify-center">
            <button
              onClick={scrollToPortfolio}
              className="w-full md:w-auto bg-gradient-to-r from-amber-400 to-orange-500 text-gray-900 px-8 py-4 rounded-full font-semibold hover:from-amber-300 hover:to-orange-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button className="w-full md:w-auto border-2 border-gray-300 text-gray-300 px-8 py-4 rounded-full font-semibold hover:bg-gray-300 hover:text-gray-900 transition-all duration-300">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-gray-400" size={32} aria-hidden="true" />{" "}
        {/* Add aria-hidden */}
      </div>
    </section>
  );
};

export default Hero;
