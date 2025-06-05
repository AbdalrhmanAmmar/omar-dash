'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from '@/hooks/useTranslation';


const certificateImages = ['cert01.jpg', 'cert02.jpg', 'cert03.jpg'];

const Certificates: React.FC = () => {
   const { t } = useTranslation();
  return (
    <section id='certificates' className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-16 relative">
          <span className="relative inline-block px-4 text-white">
            {t('certificates.title')}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {certificateImages.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border-4 border-white"
            >
              <Image
                src={`/certificate/${cert}`}
                alt={`شهادة ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
