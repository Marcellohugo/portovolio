"use client"

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import RotatingText from "./RotatingText";

type PreloadProps = {
  onStart: () => void;
};

export default function Preload({ onStart }: PreloadProps) {
  const [step, setStep] = useState(1);

  useEffect(() => {
    if (step !== 1) return;
    const timer = setTimeout(() => setStep(2), 6000);
    return () => clearTimeout(timer);
  }, [step]);

  return (
    <div className="relative flex min-h-[100svh] w-full items-center justify-center overflow-hidden bg-background px-4">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex w-full items-center justify-center"
          >
            <div className="flex flex-wrap items-center justify-center">
              <span className="mr-2 text-[clamp(1rem,6vw,10rem)] font-bold text-foreground sm:mr-4">
                I am
              </span>
              <span className="text-[clamp(1rem,6vw,10rem)] font-bold text-foreground">
                <RotatingText
                  texts={[
                    "Software Engineer",
                    "Full-Stack Developer",
                    "Funny Guy",
                    "Marco Marcello Hugo",
                  ]}
                />
              </span>
            </div>
          </motion.div>
        )}

        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-background px-6 text-center text-foreground"
          >
            <div className="mb-7 flex items-center gap-3 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-muted-foreground">
              <span className="h-px w-8 bg-primary" /> Ready
            </div>

            <h1 className="text-[clamp(2.8rem,8vw,6.5rem)] font-black leading-none tracking-[-0.055em]">
              Let&apos;s begin.
            </h1>
            <p className="mt-5 text-sm text-muted-foreground sm:text-base">
              Everything is ready for you.
            </p>

            <button
              type="button"
              onClick={onStart}
              className="group mt-9 inline-flex items-center gap-5 border-b border-foreground pb-2 text-sm font-bold transition-colors hover:border-primary hover:text-primary"
            >
              Enter portfolio
              <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </button>

            <p className="absolute bottom-6 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:bottom-8">
              Marcello Hugo · Portfolio 2026
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
