"use client"

import Particles from "../ui/background/Particles"
import ComputerCanvas from "./Computers"
import VideoText from "../ui/animation/VideoText"

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-black"
    >
      {/* Uncomment for background particles */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={400}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={100}
        />
      </div>
     

      <div className="relative z-10 h-full w-full flex flex-col items-center justify-center">
        {/* Video-text animation sits above the canvas */}
        <div className="w-full flex justify-center mt-24">
          <VideoText text="MARCELLO" />
        </div>

        {/* 3D computer canvas */}
        <div className="w-full top-0 h-[60vh] sm:h-[70vh]">
          <ComputerCanvas />
        </div>
      </div>
    </section>
  )
}
