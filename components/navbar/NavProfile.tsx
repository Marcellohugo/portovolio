"use client";

import { FaArrowUp, FaEnvelope, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import MagneticEffect from "../ui/button/MagneticEffect";
import ThemeSwitcher from "../ui/ThemeSwitcher";
import BackButton from "../ui/button/BackButton";

export default function Nav() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed left-3 top-3 z-50 sm:left-4 sm:top-4">
        <BackButton />
      </div>

      <div className="fixed right-3 top-3 z-50 flex items-center gap-3 rounded-full border border-border bg-slate-400/80 px-3 py-2 text-foreground backdrop-blur-md dark:bg-background/70 sm:right-4 sm:top-4 sm:gap-4">
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

      {/* Bottom Footer-Like Bar */}
      <div className="fixed bottom-0 z-[100] flex w-full items-center justify-center py-4 text-center text-foreground">
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
        </div>
      </div>
    </>
  );
}
