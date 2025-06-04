"use client"

import React, { useEffect, useRef } from 'react';
import {
  FaGithub,
  FaInstagram,
  FaDiscord,
  FaTiktok,
  FaLinkedin,
  FaEnvelope,
  FaCheckCircle,
  FaBox,
  FaLaptopMedical,
} from 'react-icons/fa';
import Aurora from '@/components/ui/background/Aurora';
import MagneticEffect from '@/components/ui/button/MagneticEffect';

const App: React.FC = () => {
  return (
    <div className="min-h-screen max-h-screen items-center justify-center text-white flex flex-col">
      {/* Bagian Header Gradient */}
      <div className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#092965", "#A3D8FF", "#092965"]}
        />
      </div>

      {/* Konten utama (avatar + info + tombol) */}
      <div className="flex-1 flex flex-col max-w-[1200px] items-center justify-center px-4">
        {/* Avatar dengan border gradient */}
        <div className="relative">
          <div className="rounded-full">
            <img
              src="/images/Profile.png" // Ganti dengan URL foto profil
              alt="Marcello"
              className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-[#A3D8FF]"
            />
          </div>
        </div>

        {/* Nama + Verified */}
        <h1 className="mt-4 flex items-center text-2xl sm:text-3xl font-semibold">
          Marco Marcello Hugo
        </h1>

        {/* URL */}
        <a
          href="https://marcello.web.id/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-blue-400 hover:underline"
        >
          https://marcello.web.id/
        </a>

        {/* Deskripsi singkat */}
        <p className="mt-2 text-center text-sm sm:text-base text-gray-200 max-w-md">
          The only person who can limit your steps is yourself
        </p>

        {/* Social Icons */}
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <a
            href="https://github.com/marcellohugo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:bg-[#A3D8FF]"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://instagram.com/marcellohugo__"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:bg-[#A3D8FF]"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://www.tiktok.com/@marcellohugo__"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:bg-[#A3D8FF]"
          >
            <FaTiktok size={20} />
          </a>
          <a
            href="https://linkedin.com/in/marcellohugo"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black rounded-full p-2 hover:bg-[#A3D8FF]"
          >
            <FaLinkedin size={20} />
          </a>
        </div>

        {/* Tombol Email */}
        <a
          href="mailto:marco.marcello15@gmail.com"
          className="mt-4 flex items-center space-x-2 bg-white text-black rounded-full px-4 py-2 hover:bg-[#A3D8FF]"
        >
          <FaEnvelope />
          <span className="text-sm sm:text-base">Email</span>
        </a>

        {/* Daftar Link (Cards) */}
        <div className="mt-6 w-full max-w-md space-y-4">
          {/* Card 1 */}
          <a
            href="https://vercel.com/blog/building-an-interactive-3d-event-badge-with-react-three-fiber"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-white text-black rounded-lg px-4 py-3 hover:bg-[#A3D8FF]"
          >
            <div className="flex items-center space-x-2">
            <FaLaptopMedical/>
            <span className="font-medium">Tutorial Create 3D Event</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          {/* Card 2 */}
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-white text-black rounded-lg px-4 py-3 hover:bg-[#A3D8FF]"
          >
            <div className="flex items-center space-x-2">
              <FaBox />
              <span className="font-medium">Want to create a website?</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a> */}

          {/* Card 3 */}
          {/* <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-between bg-white text-black rounded-lg px-4 py-3 hover:bg-[#A3D8FF]"
          >
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 2a2 2 0 00-2 2v2H5a1 1 0 000 2h1v9a4 4 0 004 4h4a4 4 0 004-4V8h1a1 1 0 000-2h-1V4a2 2 0 00-2-2H8zm2 2h4v2H10V4z" />
              </svg>
              <span className="font-medium">Support To Buy ☕</span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default App;
