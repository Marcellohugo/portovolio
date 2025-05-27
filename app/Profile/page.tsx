"use client"

import Aurora from "@/components/ui/background/Aurora";
import Experience1 from "./components/Experience/Experience";
import AboutMe from "./components/AboutMe/AboutMe";
import TypingText from "@/components/ui/text/TypingText";
import MagneticEffect from "@/components/ui/button/MagneticEffect";
import Nav from "@/components/navbar/NavProfile";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <section 
        className="relative w-full"
    >
      <Nav/>
      <div className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#092965", "#A3D8FF", "#092965"]}
        />
      </div>
      <AboutMe/>
      <Experience1/>
      <div className="w-full h-screen flex flex-col items-center justify-center relative">
        <TypingText
          text="The only person who can limit your steps is yourself"
          speed={50}
          loop={true}
          delay={2000}
        />
        {/* Footer fixed at bottom */}
        <div className="absolute bottom-0 w-full text-white py-4 flex justify-center items-center text-center">
          <div className="text-sm">
            <MagneticEffect>
              <div className="font-signature text-xl">Marcello Hugo</div>
            </MagneticEffect>
            <MagneticEffect>
              <div className="text-xs">Front-end Developer</div>
            </MagneticEffect>
            <MagneticEffect>
              <div className="text-[10px] text-gray-400">
                Copyright © 2025 by Marcello Hugo
              </div>
            </MagneticEffect>
          </div>
        </div>
      </div>
    </section>
  )
}