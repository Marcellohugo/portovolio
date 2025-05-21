"use client"

import Particles from "../ui/background/Particles"
import ComputerCanvas from "./Computers"
import ScrollIndicator from "@/components/ui/ScrollIndicator";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center relative overflow-hidden"
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

      <div className="relative z-10 h-screen w-full flex items-center justify-center">
        <ComputerCanvas />
      </div>
    </section>
  )
}
