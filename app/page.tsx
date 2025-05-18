"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Preload from "../components/preload/Preload";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Project from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Heroblank from "@/components/hero/Heroblank";
import Nav from "@/components/navbar/Nav";

export default function Home() {
  const [showPreloader, setShowPreloader] = useState(false);
  const [preloadDone, setPreloadDone] = useState(false);

  useEffect(() => {
    const handleReady = () => setShowPreloader(true);
    if (document.readyState === "complete") {
      handleReady();
    } else {
      window.addEventListener("load", handleReady);
      return () => window.removeEventListener("load", handleReady);
    }
  }, []);

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
          <Hero/>

        {/* <div> */}
        <Heroblank/>
        <About/>
        <Project/>
        <Contact/>
        {/* </div> */}
      </main>
    )}
    </>
  );
}
