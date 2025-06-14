'use client'

import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import Particles from "../ui/background/Particles";

// Dinamic import untuk komponen 3D, ssr: false penting untuk menghindari error di server
const ComputersCanvasNoSSR = dynamic(
  () => import("./Computers"), 
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative mx-auto h-screen w-full"
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={100}
        />
      </div>
      <div className="absolute inset-0 top-[120px] mx-auto max-w-[1200px] sm:px-16 px-6 flex flex-row items-start gap-5">
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-primary" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className="text-heading-2xl">
            Hi, I&apos;m <span className="text-primary">Marcello</span>
          </h1>
          <p className="text-body-lg text-foreground mt-2">
            I develop attractive and interactive <br className="hidden sm:block" />
            websites applications
          </p>
        </div>
      </div>
      
      <ComputersCanvasNoSSR />

      <div className="absolute bottom-12 w-full flex items-center justify-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-white mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  )
}