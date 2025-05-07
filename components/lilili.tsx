"use client"

import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Preload from "./preload/Preload";
import Hero from "./hero/Hero";
import About from "./about/About";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Heroblank from "@/components/hero/Heroblank";
import Nav from "@/components/navbar/Nav";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [preloadDone, setPreloadDone] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const lastScrollY = useRef(0);
  const scrollDir = useRef<"up" | "down">("down");

  useEffect(() => {
    const handleReady = () => setShowPreloader(true);
    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
      return () => window.removeEventListener("load", handleReady);
    }
  }, []);

  // Update arah scroll
  useEffect(() => {
    const updateScrollDir = () => {
      const currentY = window.scrollY;
      scrollDir.current = currentY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  // Scroll otomatis berdasarkan posisi Hero & About
  useEffect(() => {
    if (!preloadDone) return;

    const observers: IntersectionObserver[] = [];

    // Scroll ke about saat bagian atas about terlihat (dari bawah)
    if (aboutRef.current) {
      const observerAbout = new IntersectionObserver(([entry]) => {
        if (
          entry.isIntersecting &&
          entry.boundingClientRect.top > 0 && // bagian atas masuk
          scrollDir.current === "down"
        ) {
          entry.target.scrollIntoView({ behavior: "smooth" });
        }
      }, { threshold: 0.05 });

      observerAbout.observe(aboutRef.current);
      observers.push(observerAbout);
    }

    // Scroll ke hero saat bagian bawah hero terlihat (dari atas)
    if (heroRef.current) {
      const observerHero = new IntersectionObserver(([entry]) => {
        if (
          entry.isIntersecting &&
          entry.boundingClientRect.top < 0 && // bagian bawah masuk ke layar
          scrollDir.current === "up"
        ) {
          entry.target.scrollIntoView({ behavior: "smooth" });
        }
      }, { threshold: 0.05 });

      observerHero.observe(heroRef.current);
      observers.push(observerHero);
    }

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [preloadDone]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showPreloader && !preloadDone && (
          <Preload onStart={() => setPreloadDone(true)} />
        )}
      </AnimatePresence>

      {preloadDone && (
        <main data-scroll-container className="relative">
          <Nav/>
          <section ref={heroRef} className="z-0">
            <Hero />
          </section>

          <div className="z-10">
            <section ref={aboutRef}>
              <Heroblank />
              <About />
              <Projects />
              <Contact />
            </section>
          </div>
        </main>
      )}
    </>
  );
}
