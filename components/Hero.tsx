'use client';

import React from 'react';
import { Building2, Award, Clock4, ChevronLeft, ChevronDown } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* خلفية متحركة لمعالم دبي */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10"></div>
        <Image
          src="/dubai-skyline.jpg" // يمكن استبدالها بصورة لمعالم دبي
          alt="دبي الخلفية"
          fill
          className="object-cover animate-kenburns"
          priority
        />
      </div>

      {/* عناصر متحركة إضافية */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-1/4 w-16 h-16 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-blue-400 rounded-full filter blur-3xl opacity-15 animate-float-delay"></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-600 rounded-full filter blur-3xl opacity-10 animate-float-delay-2"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* النص والمعلومات */}
          <div className="lg:w-1/2 text-right" style={{ direction: 'rtl' }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up">
              عمر الداش
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 font-semibold animate-fade-in-up delay-100">
              مستشار عقاري محترف في الإمارات
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed animate-fade-in-up delay-200">
              خبرة استثنائية في سوق العقارات الإماراتي، نقدم لكم خدمات استشارية متكاملة تضمن لكم أفضل الفرص الاستثمارية
            </p>

            {/* مميزات */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition duration-300 animate-fade-in-up delay-300">
                <Building2 className="w-7 h-7 text-blue-400" />
                <span className="text-lg">خبرة في أرقى المشاريع</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition duration-300 animate-fade-in-up delay-400">
                <Award className="w-7 h-7 text-blue-400" />
                <span className="text-lg">استشارات احترافية</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm hover:bg-white/10 transition duration-300 animate-fade-in-up delay-500">
                <Clock4 className="w-7 h-7 text-blue-400" />
                <span className="text-lg">خدمة 24/7</span>
              </div>
            </div>

            {/* أزرار التواصل */}
            <div className="flex gap-4 animate-fade-in-up delay-600">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-xl font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/25 flex items-center gap-2">
                تواصل معنا
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="border-2 border-blue-400 text-blue-300 hover:bg-blue-400/10 px-8 py-4 rounded-xl text-xl font-semibold transition duration-300">
                المشاريع الحالية
              </button>
            </div>
          </div>

          {/* صورة الملف الشخصي */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative group">
              {/* تأثيرات الإضاءة */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2rem] blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000 delay-150"></div>

              {/* الصورة */}
              <div className="relative">
                <Image
                  src="/img/heroimg.jpg"
                  width={448}
                  height={448}
                  alt="عمر الداش - مستشار عقاري"
                  className="relative w-[28rem] h-[28rem] object-cover rounded-[2rem] shadow-2xl border-2 border-white/10 group-hover:border-white/20 transition duration-300"
                  style={{ objectPosition: 'center top' }}
                  priority
                />
                {/* تأثير الزجاج */}
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 group-hover:ring-white/20 transition duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* عناصر إضافية لجذب الانتباه */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <ChevronDown className="w-8 h-8 text-blue-300" />
      </div>

      {/* تأثيرات CSS للحركات */}
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