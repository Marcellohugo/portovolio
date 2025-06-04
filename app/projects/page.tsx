"use client"

import AnimateTitle from "@/components/ui/text/AnimateTitle";
import GradientText from "@/components/ui/text/AnimateSubtitle";
import OtherProjectsSection from "./components/Project"
import HighlightSection from "./components/Highlight"
import Aurora from "@/components/ui/background/Aurora";
import MagneticEffect from "@/components/ui/button/MagneticEffect";
import Nav from "@/components/navbar/NavProject";

export default async function Page (){
  await new Promise((resolve) => setTimeout(resolve, 1000));
    return(
    <section
        id="Project"
        className="relative w-full pt-24"
    >
      <Nav/>
      <div className="fixed inset-0 -z-10">
        <Aurora
          colorStops={["#092965", "#A3D8FF", "#092965"]}
        />
      </div>
      <div className="relative z-10 mx-auto flex-col text-[whitesmoke]">
        <div className="flex flex-col items-start justify-center px-4 sm:px-0 max-w-[1200px] mx-auto">
          <GradientText
            className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
            >
            LIST OF
          </GradientText>
          <AnimateTitle>
            PROJECT
          </AnimateTitle>
        </div>
        <div className="w-full flex flex-col items-center justify-center overflow-hidden">
          <GradientText
            className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
            >
            HIGHLIGHT
          </GradientText>
          <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
            ONE OF THE BEST PROJECT I EVER DONE
          </span> 
        </div>
        <HighlightSection/>
        <div className="w-full flex flex-col items-center justify-center text-center">
          <GradientText
            className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
            >
              OTHER PROJECTS
          </GradientText>
          <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
              OTHER NOTE WORTHY PROJECTS
          </span> 
        </div>
        <OtherProjectsSection/>
        <div className="relative bottom-0 w-full text-white py-4 flex justify-center items-center text-center">
          <div className="text-sm">
            <MagneticEffect>
              <div className="font-signature text-xl">Marcello Hugo</div>
            </MagneticEffect>
            <MagneticEffect>
              <div className="text-xs">Frond-end Developer</div>
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