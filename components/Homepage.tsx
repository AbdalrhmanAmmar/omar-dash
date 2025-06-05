// app/page.jsx
'use client';

import React from 'react';

import Navbar from './Navbar';
import Hero from './Hero';
import Projects from './Projects';
import Certificate from './Certificate';
import VideoSection from './VideoSection';

export default function HomePage() {


  return (
    <div className="relative min-h-screen">
      {/* خلفية متدرجة ومحسنة */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIiIGhlaWdodD0iMiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjA1Ii8+PC9zdmc+')] opacity-30"></div>

      <Navbar  />
      <Hero />
      <Projects />
      <VideoSection />
      <Certificate/>
   
  
    </div>
  );
}
