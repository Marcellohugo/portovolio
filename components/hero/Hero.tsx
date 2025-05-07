"use client"

import Particles from "../ui/background/Particles";
import VideoInText from "./VideoInText";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen w-full items-center justify-center"
    >

      <VideoInText />

      {/* <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />  */}
    </section>
  )
}