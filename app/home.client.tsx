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
    const onScroll = () => {
      setIsBlurred(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="relative scroll-smooth">
      <div
        className="fixed top-0 left-0 w-full h-screen z-0 transition-filter duration-500"
        style={{ filter: isBlurred ? "blur(30px)" : "blur(0px)" }}
      >
        <Hero />
      </div>
      
      {/* Spacer untuk Hero section */}
      <div className="h-screen w-full" />

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