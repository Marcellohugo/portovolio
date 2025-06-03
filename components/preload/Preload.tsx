"use client"

import { useEffect, useState } from "react";
import RotatingText from "./RotatingText";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../ui/button/Button";
import MagneticEffect from "../ui/button/MagneticEffect";
import GradientText from "../ui/text/AnimateSubtitle";

type PreloadProps = {
  onStart: () => void;
};

export default function Preload({ onStart }: PreloadProps) {
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 6000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex items-center justify-center w-full"
          >
            <div className="flex items-center justify-center flex-wrap">
              {/* "I am" */}
              <span className="text-[clamp(1rem,6vw,10rem)] font-bold mr-2 sm:mr-4 text-white">
                I am
              </span>

              {/* RotatingText */}
              <span className="text-[clamp(1rem,6vw,10rem)] font-bold text-white">
                <RotatingText
                  texts={[
                    "Front-End Dev",
                    "Full-Stack Dev",
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
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col items-center justify-center gap-6"
          >
            <GradientText
              className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] font-black"
              >
              LOADING STATUS!
            </GradientText>
            <h1 className="text-[clamp(1.6rem,4vw,3rem)] font-black text-white text-center">READY</h1>
            <MagneticEffect>
              <Button
                variant = "outline"
                onClick={onStart}
              >
                Get Started
              </Button>
            </MagneticEffect>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
