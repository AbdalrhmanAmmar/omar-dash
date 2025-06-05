'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from '@/hooks/useTranslation';

const VideoSection: React.FC = () => {
   const { t } = useTranslation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3
      }
    }
  };

  const videoVariants = {
    hidden: { 
      y: 50,
      opacity: 0,
      scale: 0.95
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-30"></div>
      
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-16 text-center relative"
        >
          <span className="relative inline-block">
            {t('videos.title')}
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
          </span>
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <motion.div
            variants={videoVariants}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="aspect-video relative">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/portfolio/dubai-2.jpg"
              >
                <source src="/videos/video1.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2">مشاريع دبي الفاخرة</h3>
              <p className="text-sm text-gray-200">استكشف أفخم المشاريع العقارية في دبي</p>
            </div>
          </motion.div>

          <motion.div
            variants={videoVariants}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="aspect-video relative">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                poster="/portfolio/invest.jpg"
              >
                <source src="/videos/video2.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-xl font-bold mb-2">جولات عقارية حصرية</h3>
              <p className="text-sm text-gray-200">تعرف على أحدث المشاريع السكنية في دبي</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default VideoSection;