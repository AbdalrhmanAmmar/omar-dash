'use client';

import React from 'react';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';
import { useContext } from 'react';
import { LanguageContext } from '@/context/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const { language } = useContext(LanguageContext);

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
        <Image
          src="/dubai-skyline.jpg"
          alt="Dubai Background"
          fill
          className="object-cover animate-kenburns"
          priority
        />
      </div>

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-1/4 w-16 h-16 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400 rounded-full filter blur-3xl opacity-15 animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-float-delay-2"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-right" style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
              {t('hero.name')}
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 font-semibold animate-fade-in-up delay-100">
              {t('hero.title')}
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed animate-fade-in-up delay-200">
              {t('hero.description')}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition duration-300 animate-fade-in-up delay-300">
                <span className="text-lg">{t('hero.features.projects')}</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition duration-300 animate-fade-in-up delay-400">
                <span className="text-lg">{t('hero.features.consulting')}</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition duration-300 animate-fade-in-up delay-500">
                <span className="text-lg">{t('hero.features.service')}</span>
              </div>
            </div>

      <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-600">
  {/* WhatsApp Contact Button */}
  <a
    href="https://wa.me/971551586215"
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-blue-500/30 flex items-center justify-center gap-2 w-full sm:w-auto"
  >
    <span className="relative z-10 flex items-center">
      {t('hero.buttons.contact')}
    </span>
    <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
  </a>

  {/* Projects Button */}
  <a
    href="#projects"
    className="relative overflow-hidden group border-2 border-blue-400/80 hover:border-blue-300 text-blue-300 hover:text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl text-lg sm:text-xl font-semibold transition-all duration-300 flex items-center justify-center w-full sm:w-auto"
  >
    <span className="relative z-10">{t('hero.buttons.projects')}</span>
    <span className="absolute inset-0 bg-blue-400/10 group-hover:bg-blue-400/20 transition-all duration-300"></span>
    <span className="absolute inset-0 border-2 border-blue-400/0 group-hover:border-blue-300/30 rounded-xl group-hover:scale-105 transition-all duration-500"></span>
  </a>
</div>
          </div>

          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2rem] blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000 delay-150"></div>

              <div className="relative">
                <Image
                  src="/img/heroimg.jpg"
                  width={448}
                  height={448}
                  alt="Omar Eldash - Real Estate Consultant"
                  className="relative w-[28rem] h-[28rem] object-cover rounded-[2rem] shadow-2xl border-2 border-white/10 group-hover:border-white/20 transition duration-300"
                  style={{ objectPosition: 'center top' }}
                  priority
                />
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 group-hover:ring-white/20 transition duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
      </div>

      <style jsx global>{`
        @keyframes kenburns {
          0% { transform: scale(1); }
          100% { transform: scale(1.1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-30px); }
        }
        @keyframes float-delay-2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(20px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-kenburns {
          animation: kenburns 20s ease-in-out infinite alternate;
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float 10s ease-in-out infinite 2s;
        }
        .animate-float-delay-2 {
          animation: float 12s ease-in-out infinite 4s;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        .animate-fade-in-up.delay-100 {
          animation-delay: 0.1s;
        }
        .animate-fade-in-up.delay-200 {
          animation-delay: 0.2s;
        }
        .animate-fade-in-up.delay-300 {
          animation-delay: 0.3s;
        }
        .animate-fade-in-up.delay-400 {
          animation-delay: 0.4s;
        }
        .animate-fade-in-up.delay-500 {
          animation-delay: 0.5s;
        }
        .animate-fade-in-up.delay-600 {
          animation-delay: 0.6s;
        }
        .animate-fade-in {
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.5s forwards;
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
          40% {transform: translateY(-20px);}
          60% {transform: translateY(-10px);}
        }
      `}</style>
    </div>
  );
};

export default Hero;