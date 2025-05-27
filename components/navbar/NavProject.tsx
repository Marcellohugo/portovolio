"use client";

import React from "react";
import { FaGamepad, FaVolumeMute, FaArrowUp, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import MagneticEffect from "../ui/button/MagneticEffect";
import { Button } from "../ui/button/button";
// import ThemeSwitcher from "../ui/ThemeSwitcher";

const Nav: React.FC = () => {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

// Optional: handler for logo button click
const handleLogoClick = () => {
  console.log("Logo button clicked");
  // e.g., navigate to home, or trigger some action
  window.location.href = "/";
};

  return (
    <>
      {/* Top Navbar */}
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-8 py-4 backdrop-blur-md bg-black/50 text-white">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <MagneticEffect>
            <Button
              variant="secondary"
              className="py-5 justify-center items-center text-4xl"
              onClick={handleLogoClick}
            >
              &laquo;
            </Button>
          </MagneticEffect>
          <div>
            <div className="text-[#A3D8FF] font-bold text-lg">Marcello Hugo</div>
            <div className="text-xs">Frond-end Developer</div>
          </div>
        </div>

        {/* Right Icons */}
        <div className="flex items-center space-x-4">
          <MagneticEffect>
            <a href="https://instagram.com/marcellohugo__" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 cursor-pointer hover:text-[#A3D8FF] transition" />
            </a>
          </MagneticEffect>
          <MagneticEffect>
            <a href="https://linkedin.com/in/marcellohugo" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 cursor-pointer hover:text-[#A3D8FF] transition" />
            </a>
          </MagneticEffect>
          <MagneticEffect>
            <a href="https://github.com/marcellohugo" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 cursor-pointer hover:text-[#A3D8FF] transition" />
            </a>
          </MagneticEffect>
        </div>
      </nav>

      {/* Bottom Footer-Like Bar */}
      <div className="fixed bottom-0 w-full text-white py-4 flex justify-center items-center text-center z-40">
        {/* Left Icon */}
        <div className="absolute left-4 bottom-4">
          <MagneticEffect>
            <FaGamepad className="w-6 h-6" />
          </MagneticEffect>
        </div>

        {/* Right Icons */}
        <div className="absolute right-4 bottom-4 flex flex-col items-center justify-center space-y-2">
          <MagneticEffect>
            <div
              className="flex flex-col items-center cursor-pointer"
              onClick={handleScrollTop}
            >
              <FaArrowUp />
              <span className="text-xs mt-1">Scroll Top</span>
            </div>
          </MagneticEffect>
          <div className="flex flex-row items-center justify-center space-x-4">
            <MagneticEffect>
              <FaVolumeMute className="w-6 h-6" />
            </MagneticEffect>
          </div>
          {/* <ThemeSwitcher /> */}
        </div>
      </div>
    </>
  );
};

export default Nav;
