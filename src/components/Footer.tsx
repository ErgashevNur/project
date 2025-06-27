import React from 'react';
import { Heart, Instagram, Twitter, Dribbble, Bean as Behance } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Dribbble, href: '#', label: 'Dribbble' },
    { icon: Behance, href: '#', label: 'Behance' }
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white tracking-tight mb-2">
              Miss Charos<span className="text-amber-400">.</span>
            </div>
            <p className="text-gray-400">Creative Designer & Visual Storyteller</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:bg-amber-400 hover:text-gray-900 transition-all duration-300 transform hover:scale-110"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-1">
            <span>© 2025 Charos Designer. Made with</span>
            <Heart className="text-red-400" size={16} />
            <span>and lots of coffee.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;