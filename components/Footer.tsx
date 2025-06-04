'use client';

import React from 'react';
import { FaTiktok, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="container mx-auto px-6 text-center">
        <h4 className="text-xl font-bold mb-4 text-white">تواصل معنا على مواقع التواصل</h4>
        <div className="flex justify-center gap-6 mb-6 text-2xl">
          <a
            href="https://www.tiktok.com/@omar.eldash?_t=ZS-8wjUpx3X1lQ&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaTiktok />
          </a>
          <a
            href="https://www.instagram.com/omareldash_dubai?igsh=MXFhbDAydnAyc25nMg=="
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/omar-eldash-3976271aa"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://wa.me/971551586215"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition"
          >
            <FaWhatsapp />
          </a>
        </div>
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} عمر الداش. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
