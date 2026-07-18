"use client";

import React from "react";
import Image from "next/image";
import { FaArrowUp, FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import MagneticEffect from "@/components/ui/button/MagneticEffect";
import ThemeSwitcher from "../ui/ThemeSwitcher";

const Nav: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 z-50 flex w-full items-center justify-between bg-slate-400/80 px-3 py-3 text-foreground backdrop-blur-md dark:bg-background/75 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image
            src="/icons/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="h-11 w-11 sm:h-[60px] sm:w-[60px]"
          /> 
          <div>
            <div className="text-primary font-bold text-sm sm:text-lg">Marcello Hugo</div>
            <div className="hidden text-[0.875rem] sm:block">Front-end Developer</div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="absolute left-1/2 hidden -translate-x-1/2 space-x-8 text-sm font-medium uppercase tracking-widest md:flex">
          <MagneticEffect>
            <a href="#about" className="hover:text-primary transition">
              Profile
            </a>
          </MagneticEffect>
          <MagneticEffect>
            <a href="#project" className="hover:text-primary transition">
              Projects
            </a>
          </MagneticEffect>
          <MagneticEffect>
            <a href="#contact" className="hover:text-primary transition">
              Contact
            </a>
          </MagneticEffect>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          <MagneticEffect>
            <a href="mailto:marco.marcello15@gmail.com" aria-label="Email Marco Marcello Hugo">
              <FaEnvelope className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-primary transition" />
            </a>
          </MagneticEffect>
          <MagneticEffect>
            <a href="https://instagram.com/marcellohugo__" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-primary transition" />
            </a>
          </MagneticEffect>
          <MagneticEffect>
            <a href="https://linkedin.com/in/marcellohugo" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-primary transition" />
            </a>
          </MagneticEffect>
          <MagneticEffect>
            <a href="https://github.com/marcellohugo" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 cursor-pointer hover:text-primary transition" />
            </a>
          </MagneticEffect>
        </div>
      </nav>

      {/* Bottom Footer-Like Bar */}
      <div className="fixed bottom-0 z-[100] flex w-full items-center justify-center py-4 text-center text-foreground dark:text-white">
        {/* Left Icon */}
        <div className="absolute left-3 sm:left-4 bottom-3 sm:bottom-4">
          <ThemeSwitcher />
        </div>

        {/* Right Icons */}
        <div className="absolute right-3 sm:right-4 bottom-3 sm:bottom-4 flex flex-col items-center justify-center space-y-2">
          <MagneticEffect>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={handleScrollTop}
            >
              <FaArrowUp />
              <span className="text-xs font-bold mt-1">Scroll Top</span>
            </div>
          </MagneticEffect>
          {/* <div className="flex flex-row items-center justify-center space-x-4">
            <MagneticEffect>
              <FaVolumeMute className="w-6 h-6" />
            </MagneticEffect>
          </div> */}
          {/* <ThemeSwitcher /> */}
        </div>
      </div>
    </>
  );
};

export default Nav;
