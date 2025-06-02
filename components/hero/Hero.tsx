import dynamic from "next/dynamic";
import React from "react";
import { motion } from "framer-motion";
import ComputerCanvas from "./Computers";
import Particles from "../ui/background/Particles";

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
          <div className="h-5 w-5 rounded-full bg-[#A3D8FF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div>
          <h1 className={`font-black text-white text-[4rem] md:text-[4rem] lg:text-[6rem] lg:leading-[98px] mt-2`}>
            Hi, I'm <span className="text-[#A3D8FF]">Marcello</span>
          </h1>
          <p className={`text-white font-semibold text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] text-white-100 mt-2`}>
            I Develop attractive and interactive <br className="hidden sm:block" />
            websites applications
          </p>
        </div>
      </div>
      <ComputersCanvasNoSSR />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-white mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  )
}