"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Nav from "@/components/navbar/Nav";
import Hero from "@/components/hero/Hero";
import Footer from "@/components/shared/Footer";

const About = dynamic(() => import("@/components/about/About"));
const AboutAttribute = dynamic(() => import("@/components/about-attribute/AboutAttribute"));
const Project = dynamic(() => import("@/components/projects/Projects"));
const Contact = dynamic(() => import("@/components/contact/Contact"));

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
        <Hero paused={isBlurred} />
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
