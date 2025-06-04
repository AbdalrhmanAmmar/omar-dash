'use client';

import React from 'react';
import { Building2, Award, Clock4 } from 'lucide-react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* النص والمعلومات */}
          <div className="lg:w-1/2 text-right" style={{ direction: 'rtl' }}>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              عمر الداش
            </h1>
            <h2 className="text-2xl md:text-3xl text-blue-300 mb-6 font-semibold">
              مستشار عقاري محترف في الإمارات
            </h2>
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              خبرة استثنائية في سوق العقارات الإماراتي، نقدم لكم خدمات استشارية متكاملة تضمن لكم أفضل الفرص الاستثمارية
            </p>

            {/* مميزات */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
              <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <Building2 className="w-7 h-7 text-blue-400" />
                <span className="text-lg">خبرة في أرقى المشاريع</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <Award className="w-7 h-7 text-blue-400" />
                <span className="text-lg">استشارات احترافية</span>
              </div>
              <div className="flex items-center gap-4 text-white bg-white/5 p-4 rounded-xl backdrop-blur-sm">
                <Clock4 className="w-7 h-7 text-blue-400" />
                <span className="text-lg">خدمة 24/7</span>
              </div>
            </div>

            {/* زر التواصل */}
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-10 py-4 rounded-xl text-xl font-semibold transition duration-300 shadow-lg hover:shadow-blue-500/25">
              تواصل معنا
            </button>
          </div>

          {/* صورة الملف الشخصي */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* تأثيرات الإضاءة */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2rem] blur opacity-30 group-hover:opacity-40 transition duration-1000"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition duration-1000 delay-150"></div>

              {/* الصورة */}
              <div className="relative">
                {/* <img
                  src="/Images/heroimge.png"
                  alt="عمر الداش - مستشار عقاري"
                  className="relative w-[28rem] h-[28rem] object-cover rounded-[2rem] shadow-2xl border-2 border-white/10 group-hover:border-white/20 transition duration-300"
                  style={{ objectPosition: 'center top' }}
                /> */}
                <Image
                  src="/Img/heroimg.jpg"
                  width={448}
                  height={448}
                  alt="عمر الداش - مستشار عقاري"
                  className="relative w-[28rem] h-[28rem] object-cover rounded-[2rem] shadow-2xl border-2 border-white/10 group-hover:border-white/20 transition duration-300"
                  style={{ objectPosition: 'center top' }}
                />
                {/* تأثير الزجاج */}
                <div className="absolute inset-0 rounded-[2rem] ring-1 ring-white/10 group-hover:ring-white/20 transition duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
