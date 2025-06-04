'use client';

import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Project {
  id: number;
  image: string;
  title: string;
  description: string;
  beds?:string
  handover?: string;
  location?: string;
}

const projects: Project[] = [
  {
    id: 1,
    image: "/Project/project1.jpg",
    title: "EVERGR1N HOUSE",
    description: "A Sancutary of modern Elegance",
    beds:"Studio, 1-2-bedroom",
    handover: "Q2 2026",
    location: "Jumeirah Garden City - Dubai"
  },
  {
    id: 2,
    image: "/Project/project2.jpg",
    title: "فيلا الواحة",
    description: "فيلا مستقلة فاخرة مع حديقة خاصة وحمام سباحة في مجمع مغلق",
     beds:"Studio, 1-2-bedroom",
    handover: "Q2 2026",
    location: "Jumeirah Garden City - Dubai"
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg",
    title: "شقق داون تاون",
    description: "شقق حديثة في قلب المدينة بالقرب من برج خليفة ودبي مول",
    beds:"Studio, 1-2-bedroom",
    handover: "Q2 2026",
    location: "Jumeirah Garden City - Dubai"
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg",
    title: "مجمع النخيل السكني",
    description: "وحدات سكنية راقية مع مرافق متكاملة ومناظر طبيعية خلابة",
    beds:"Studio, 1-2-bedroom",
    handover: "Q2 2026",
    location: "Jumeirah Garden City - Dubai"
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg",
    title: "برج السماء",
    description: "شقق بنتهاوس فاخرة مع خدمات فندقية وإطلالات 360 درجة",
    beds:"Studio, 1-2-bedroom",
    handover: "Q2 2026",
    location: "Jumeirah Garden City - Dubai"
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/2462015/pexels-photo-2462015.jpeg",
    title: "فلل الصفا",
    description: "فلل مستقلة بتصميم عصري وموقع استراتيجي في قلب دبي",
    beds:"Studio, 1-2-bedroom",
    handover: "Q2 2026",
    location: "Jumeirah Garden City - Dubai"
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/1643389/pexels-photo-1643389.jpeg",
    title: "شقق المرسى",
    description: "شقق مطلة على المارينا مع تشطيبات راقية ومرافق حصرية",
    beds:"Studio, 1-2-bedroom",
    handover: "Q2 2026",
    location: "Jumeirah Garden City - Dubai"
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/2587054/pexels-photo-2587054.jpeg",
    title: "برج الأفق",
    description: "وحدات سكنية فاخرة في أحدث أبراج المنطقة مع مرافق استثنائية",
    beds:"Studio, 1-2-bedroom",
    handover: "Q2 2026",
    location: "Jumeirah Garden City - Dubai"
  }
];

const Projects: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 10,
        stiffness: 100
      }
    }
  };

  const hoverVariants = {
    hover: {
      y: -10,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10
      }
    }
  };

  return (
    <section id="projects" className="relative py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[url('/path/to/subtle-pattern.png')] bg-repeat opacity-30"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-white mb-16 text-center relative"
        >
          <span className="relative inline-block">
            مشاريعنا المميزة
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"></span>
          </span>
        </motion.h2>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative"
            >
              <motion.div
                variants={hoverVariants}
                className="h-full bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 shadow-xl hover:shadow-2xl hover:shadow-blue-400/20 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-blue-200 text-sm">{project.description}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex flex-col space-y-3 text-sm">
                    <div className="flex items-center text-blue-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{project.location}</span>
                    </div>
                    
                    <div className="flex items-center text-teal-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>{project.beds}</span>
                    </div>
                    
                    <div className="flex items-center text-purple-300">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span>Handover: {project.handover}</span>
                    </div>
                  </div>
                  

                </div>
                
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 rounded-2xl transition-all duration-500 pointer-events-none"></div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

