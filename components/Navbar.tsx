'use client';

import React from 'react';
import {
  Home,
  Building,
  Award,
  MessageSquare,
  Languages,
  Moon,
  Sun
} from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (value: boolean) => void;
  isEnglish: boolean;
  setIsEnglish: (value: boolean) => void;
}

const Navbar = ({ isDark, setIsDark, isEnglish, setIsEnglish }:NavbarProps) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* خلفية متدرجة جميلة مع تأثيرات */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 opacity-95"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800/20 to-purple-800/30"></div>
      
      {/* تأثيرات ضوئية متحركة */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 sm:w-80 h-40 sm:h-80 bg-blue-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 sm:w-80 h-40 sm:h-80 bg-purple-400/20 rounded-full blur-2xl sm:blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative backdrop-blur-sm border-b border-white/10 shadow-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4 sm:py-6">
            
            {/* أزرار التبديل - الآن في اليمين */}
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={() => setIsEnglish(!isEnglish)}
                className="p-2 sm:p-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10"
                title="تغيير اللغة"
              >
                <Languages size={18} className="sm:w-5 sm:h-5" />
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 sm:p-3 text-white/90 hover:text-white hover:bg-white/15 rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-white/10"
                title="تغيير المظهر"
              >
                {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
              </button>
            </div>

            {/* القائمة الرئيسية - الآن في اليسار */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8 text-white/90" style={{ direction: 'rtl' }}>
              <a 
                href="#" 
                className="flex items-center gap-2 lg:gap-3 hover:text-white hover:bg-white/10 px-3 lg:px-4 py-2 rounded-lg lg:rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-transparent hover:border-white/20 group"
              >
                <Home size={18} className="lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium text-sm lg:text-base">الرئيسية</span>
              </a>
              
              <a 
                href="#projects" 
                className="flex items-center gap-2 lg:gap-3 hover:text-white hover:bg-white/10 px-3 lg:px-4 py-2 rounded-lg lg:rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-transparent hover:border-white/20 group"
              >
                <Building size={18} className="lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium text-sm lg:text-base">المشاريع</span>
              </a>
              
              <a 
                href="#certificates" 
                className="flex items-center gap-2 lg:gap-3 hover:text-white hover:bg-white/10 px-3 lg:px-4 py-2 rounded-lg lg:rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-transparent hover:border-white/20 group"
              >
                <Award size={18} className="lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium text-sm lg:text-base">الشهادات</span>
              </a>
              
              <a 
                href="#contact" 
                className="flex items-center gap-2 lg:gap-3 hover:text-white hover:bg-white/10 px-3 lg:px-4 py-2 rounded-lg lg:rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-transparent hover:border-white/20 group"
              >
                <MessageSquare size={18} className="lg:w-5 lg:h-5 group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium text-sm lg:text-base">التواصل</span>
              </a>
            </div>

            {/* قائمة المحمول */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-white/90 hover:text-white hover:bg-white/15 rounded-lg transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* قائمة المحمول المنسدلة */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}>
            <div className="px-4 py-4 space-y-2 bg-black/20 backdrop-blur-md border-t border-white/10">
              <a 
                href="#" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 group"
              >
                <Home size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">الرئيسية</span>
              </a>
              
              <a 
                href="#projects" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 group"
              >
                <Building size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">المشاريع</span>
              </a>
              
              <a 
                href="#certificates" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 group"
              >
                <Award size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">الشهادات</span>
              </a>
              
              <a 
                href="#contact" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-white/90 hover:text-white hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 group"
              >
                <MessageSquare size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                <span className="font-medium">التواصل</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* خط متوهج في الأسفل */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60"></div>
    </nav>
  );
};

export default Navbar;