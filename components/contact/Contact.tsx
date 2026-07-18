"use client"

import GradientText from "../ui/text/AnimateSubtitle";
import AnimateTitle from "../ui/text/AnimateTitle";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef, useState } from "react";
import ContactForm from "./ContactForm";

const LanyardNoSSR = dynamic(
  () => import("../ui/animation/Lanyard"), 
  { ssr: false }
);

export default function Contact() {
    const [showLanyard, setShowLanyard] = useState(false);
    const lanyardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const media = window.matchMedia("(min-width: 768px)");
      const target = lanyardRef.current;
      if (!target) return;

      let observer: IntersectionObserver | undefined;
      const sync = () => {
        observer?.disconnect();
        if (!media.matches) {
          setShowLanyard(false);
          return;
        }

        observer = new IntersectionObserver(
          ([entry]) => setShowLanyard(entry.isIntersecting),
          { rootMargin: "0px" },
        );
        observer.observe(target);
      };
      sync();
      media.addEventListener("change", sync);
      return () => {
        observer?.disconnect();
        media.removeEventListener("change", sync);
      };
    }, []);

    return (
      <section
        id="contact"
        className="relative w-full pt-24"
      >
      <div className="relative z-10 mx-auto flex-col text-foreground dark:text-white">
        <div className="flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
          <GradientText
            className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
            >
            CONTACT INFORMATION
          </GradientText>
          <AnimateTitle>
            CONTACT
          </AnimateTitle>
          <div className="w-full flex flex-col items-center justify-center overflow-hidden">
            <GradientText
              className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
              >
              STAY IN TOUCH
            </GradientText>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          {/* ContactForm tampil dulu di mobile, tapi di desktop tetap di kanan */}
          <div className="order-2 md:order-2 w-full md:w-1/2">
            <ContactForm />
          </div>

          {/* LanyardNoSSR tampil kedua di mobile, tapi di desktop tetap di kiri */}
          <div ref={lanyardRef} className="order-1 md:order-1 w-full md:w-1/2">
            {showLanyard && (
              <Suspense fallback={null}>
                <LanyardNoSSR />
              </Suspense>
            )}
          </div>
        </div>
        
      </div>
      </section>
    )
  }
