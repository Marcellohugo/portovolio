"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/navbar/Nav";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import AboutAttribute from "@/components/about-attribute/AboutAttribute";
import Project from "@/components/projects/Projects";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/shared/Footer";

export default function HomeClient() { 
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    let previous = false;
    const onScroll = () => {
      const next = window.scrollY > 0;
      if (next !== previous) {
        previous = next;
        setIsBlurred(next);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="relative scroll-smooth bg-slate-400 dark:bg-background">
      <div
        className={`fixed left-0 top-0 z-0 h-[100svh] w-full transition-[filter] duration-500 md:h-screen ${isBlurred ? "blur-[20px] md:blur-[45px]" : "blur-0"}`}
      >
        <Hero />
      </div>
      
      {/* Spacer untuk Hero section */}
      <div className="h-[100svh] w-full md:h-screen" />

      {/* Konten utama yang dapat di-scroll */}
      <div className="relative z-10">
        <Nav />
        <About />
        <AboutAttribute />
        <Project />
        <Contact />
        <Footer /> 
      </div>
    </main>
  );
}
