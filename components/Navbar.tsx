'use client';

import React from 'react';
import {
  Home,
  Building,
  Award,
  MessageSquare,
  Languages,
  ChevronDown
} from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { t } = useTranslation();
  const { language, setLanguage } = useContext(LanguageContext);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  // Gradient colors and effects
  const gradientColors = "bg-gradient-to-r from-indigo-800 via-blue-800 to-purple-800";
  const hoverEffect = "hover:bg-white/10 hover:text-white hover:shadow-lg";
  const transition = "transition-all duration-300 ease-out";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${gradientColors} shadow-xl`}>
      {/* Visual effects */}
      <div className="absolute inset-0 overflow-hidden opacity-90">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            
            {/* Language switcher */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className={`p-2 text-white/90 ${hoverEffect} rounded-lg ${transition} flex items-center gap-1 border border-white/10`}
                title={language === 'en' ? 'Switch to Arabic' : 'Switch to English'}
              >
                <Languages size={18} />
                <span className="text-xs font-medium hidden sm:inline">
                  {language === 'en' ? 'العربية' : 'English'}
                </span>
              </button>
            </div>

            {/* Center Branding - Professional Integration */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className={`hidden md:flex flex-col items-center justify-center ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                <h1 className="text-white font-bold text-sm sm:text-base tracking-wider whitespace-nowrap">
                  OMAR ELDASH
                </h1>
                <div className="flex items-center gap-1">
                  <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
                  <span className="text-xs text-blue-100 font-medium tracking-wider whitespace-nowrap">
                    PROPERTY CONSULTANT
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className={`hidden md:flex items-center gap-1 text-white/90 ${language === 'ar' ? 'flex-row' : ''}`}>
              {[
                { href: "#", icon: Home, text: t('nav.home') },
                { href: "#projects", icon: Building, text: t('nav.projects') },
                { href: "#certificates", icon: Award, text: t('nav.certificates') },
                { href: "#contact", icon: MessageSquare, text: t('nav.contact') }
              ].map((item, index) => (
                <a 
                  key={index}
                  href={item.href}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg ${transition} ${hoverEffect} group`}
                >
                  <item.icon size={16} className="group-hover:rotate-12 ${transition}" />
                  <span className="font-medium text-sm">{item.text}</span>
                  <ChevronDown size={14} className="opacity-0 group-hover:opacity-70 ${transition} transform group-hover:translate-y-0.5" />
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 text-white/90 ${hoverEffect} rounded-lg ${transition}`}
              >
                <div className="flex flex-col gap-1 w-6">
                  <span className={`h-0.5 bg-white rounded-full ${transition} ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                  <span className={`h-0.5 bg-white rounded-full ${transition} ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`h-0.5 bg-white rounded-full ${transition} ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`md:hidden ${transition} overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className={`px-2 py-2 space-y-1 bg-black/20 backdrop-blur-md ${language === 'ar' ? 'text-right' : 'text-left'}`}>
              {/* Mobile Branding */}
              <div className={`px-4 py-3 flex ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'} items-center gap-3`}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Building size={16} className="text-blue-300" />
                </div>
                <div>
                  <h2 className="font-bold text-white">Omar Eldash</h2>
                  <p className="text-xs text-blue-200">Property Consultant</p>
                </div>
              </div>
              
              {[
                { href: "#", icon: Home, text: t('nav.home') },
                { href: "#projects", icon: Building, text: t('nav.projects') },
                { href: "#certificates", icon: Award, text: t('nav.certificates') },
                { href: "#contact", icon: MessageSquare, text: t('nav.contact') }
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg ${transition} ${hoverEffect} ${language === 'ar' ? 'flex-row-reverse' : ''}`}
                >
                  <item.icon size={18} className="flex-shrink-0" />
                  <span className="font-medium">{item.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom animated line */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${
        language === 'ar' ? 
        'from-transparent via-purple-400 to-transparent' : 
        'from-transparent via-blue-400 to-transparent'
      } opacity-70`}></div>
    </nav>
  );
};

export default Navbar;