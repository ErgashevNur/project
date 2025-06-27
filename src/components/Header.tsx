import React, { useState, useEffect } from "react";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white tracking-tight">
            Miss Charos<span className="text-amber-400">.</span>
          </div>

          <div className="hidden md:flex space-x-8">
            {[
              { name: "Home", id: "hero", icon: Home },
              { name: "About", id: "about", icon: User },
              { name: "Work", id: "portfolio", icon: Briefcase },
              { name: "Contact", id: "contact", icon: Mail },
            ].map(({ name, id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center space-x-2 group"
              >
                <Icon
                  size={18}
                  className="group-hover:scale-110 transition-transform duration-300"
                />
                <span>{name}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-amber-400 transition-colors duration-300"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-4 pb-2 space-y-3">
            {[
              { name: "Home", id: "hero", icon: Home },
              { name: "About", id: "about", icon: User },
              { name: "Work", id: "portfolio", icon: Briefcase },
              { name: "Contact", id: "contact", icon: Mail },
            ].map(({ name, id, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="w-full text-left text-gray-300 hover:text-amber-400 transition-colors duration-300 flex items-center space-x-3 py-2"
              >
                <Icon size={18} />
                <span>{name}</span>
              </button>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
