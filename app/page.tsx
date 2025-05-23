"use client";

import { useEffect, useState } from "react";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import AboutAttribute from "../components/aboutattribute/AboutAttribute";
import Project from "../components/projects/Projects";
import Contact from "../components/contact/Contact";

export default function Home() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Jika sudah scroll sedikit saja, aktifkan blur
      setIsBlurred(window.scrollY > 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <main className="relative scroll-smooth">
      {/* Hero tetap fixed; akan di-blur setelah scroll pertama */}
      <div
        className="fixed top-0 left-0 w-full h-screen z-0 transition-filter duration-500"
        style={{ filter: isBlurred ? "blur(30px)" : "blur(0px)" }}
      >
        <Hero />
      </div>

      {/* Spacer agar konten tidak menumpuk di bawah Hero */}
      <div className="h-screen w-full" />

      {/* Konten utama */}
      <div className="relative z-10">
        <About />
        <AboutAttribute />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
