"use client";

import Nav from "@/components/navbar/NavProfile";
import Footer from "@/components/shared/Footer";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Aurora = dynamic(() => import("@/components/ui/background/Aurora"), { ssr: false });

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative isolate w-full bg-slate-400 dark:bg-background">
      <Nav />
      <div
        className={`fixed inset-0 z-0 transition-[filter] duration-500 ${isScrolled ? "blur-[20px] md:blur-[45px]" : "blur-0"}`}
      >
        <Aurora colorStops={["#092965", "#A3D8FF", "#092965"]} />
      </div>
      <main className="relative z-10 pt-16 sm:pt-20">
        {children}
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </section>
  );
}
