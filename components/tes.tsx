"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Preload from "../components/preload/Preload";
import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import Project from "../components/projects/Projects";
import Contact from "../components/contact/Contact";
import Nav from "@/components/navbar/Nav";
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Home() {
  // const [showPreloader, setShowPreloader] = useState(false);
  // const [preloadDone, setPreloadDone] = useState(false);

  // useEffect(() => {
  //   const handleReady = () => setShowPreloader(true);
  //   if (document.readyState === "complete") {
  //     handleReady();
  //   } else {
  //     window.addEventListener("load", handleReady);
  //     return () => window.removeEventListener("load", handleReady);
  //   }
  // }, []);

  // return (
  //   <>
  //     <AnimatePresence mode="wait">
  //       {showPreloader && !preloadDone && (
  //         <Preload onStart={() => setPreloadDone(true)} />
  //       )}
  //     </AnimatePresence>

  //   {preloadDone && (
  //     <main data-scroll-container className="relative">
  //       <Nav/>
  //       <Hero/>
  //       <About/>
  //       <Project/>
  //       <Contact/>
  //     </main>
  //   )}
  //   </>
  // );
// }

  const [isProjectsVisible, setIsProjectsVisible] = useState(false)
  const projectsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsProjectsVisible(true)
          } else {
            setIsProjectsVisible(false)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current)
      }
    }
  }, [])

  const scrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>
      <main className="relative">
        <Nav />

        {/* Hero section - always sticky at the top */}
        <div
          className="fixed top-0 left-0 w-full h-screen z-0 transition-all duration-700"
          style={{
            filter: isProjectsVisible ? `blur(15px)` : "blur(0px)",
          }}
        >
          <Hero />
        </div>

        {/* Scroll indicator */}
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40">
          <ScrollIndicator onClick={scrollToProjects} />
        </div>

        {/* Empty spacer with same height as hero to push content down */}
        <div className="h-screen w-full"></div>

        {/* Projects section */}
        <div ref={projectsRef} className="relative z-10">
          <About/>
        </div>
      </main>
    </>
  )
}