"use client"

import Aurora from "@/components/ui/background/Aurora";
import AnimateTitle from "@/components/ui/text/AnimateTitle";
import GradientText from "@/components/ui/text/AnimateSubtitle";
import Timeline from "./components/Timeline";
import { Experience } from "./components/Experience"
import SkillsSection from "./components/SkillsSection";
import StoryOfMyLife from "./components/Biography";
import RotatingWords from "./components/RotatingWords";
import TypingText from "@/components/ui/text/TypingText";
import MagneticEffect from "@/components/ui/button/MagneticEffect";
import Image from "next/image";

export default function Profile() {
    return (
        <section 
            id="Profile" 
            className="relative w-full pt-24 "
        >
          <div className="fixed inset-0 -z-10">
            <Aurora
              colorStops={["#092965", "#A3D8FF", "#092965"]}
            />
          </div>
          <div className="relative z-10 mx-auto flex-coltext-[whitesmoke]">
              <div className="flex flex-col items-start justify-center max-w-[1200px] mx-auto">
                  <GradientText
                      showBorder={false}
                      className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                      >
                      INTRODUCTION
                  </GradientText>
                  <AnimateTitle>
                      ABOUT ME
                  </AnimateTitle>
              </div>
              <div className="w-full flex flex-col items-center justify-center overflow-hidden">
                  <GradientText
                      showBorder={false}
                      className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                      >
                      SHORT BIOGRAPHY
                  </GradientText>
                  <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
                      STORY OF MY LIFE
                  </span> 
              </div>
              <StoryOfMyLife/>
              <RotatingWords/>
              <div className=" relative w-full h-[500px] overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src="/images/Profile1.png"
                    alt="Marco"
                    layout="fill"
                    objectFit="cover"
                    className="w-full h-[500px] bg-black"
                    priority
                  />
                  {/* Overlay Text */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 text-center">
                    <h2 className="text-[clamp(1rem,2vw,1.5rem)] font-bold">IT'S ALL ABOUT</h2>
                    <GradientText
                      showBorder={false}
                      className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                      >
                      MARCO
                    </GradientText>
                  </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center text-center mt-10">
                <GradientText
                  showBorder={false}
                  className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                  >
                  SKILLS AND EXPERTISE
                </GradientText>
                <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
                  Explore some skills I'm proficient in to deliver high-quality solutions.
                </span> 
              </div>
              <SkillsSection/>
              <div className="flex flex-col items-start justify-center max-w-[1200px] mx-auto">
                  <GradientText
                      showBorder={false}
                      className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                      >
                      BACKGROUND
                  </GradientText>
                  <AnimateTitle>
                      EXPERIENCE
                  </AnimateTitle>
              </div>
              <div className="w-full flex flex-col items-center justify-center text-center">
                <GradientText
                  showBorder={false}
                  className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                  >
                  WORK
                </GradientText>
                <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
                  MY CAREER JOURNEY
                </span> 
              </div>
              <Experience/>
              <div className="w-full flex flex-col items-center justify-center text-center">
                <GradientText
                  showBorder={false}
                  className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
                  >
                  ORGANIZATION
                </GradientText>
                <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
                  MY COLLAGE JOURNEY
                </span> 
              </div>
              <div className="w-full flex items-center justify-center">
              <Timeline/>
              </div>

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
                        Copyright © 2023 - 2025 by Marcello Hugo
                      </div>
                    </MagneticEffect>
                  </div>
                </div>
              </div>

          </div>
        </section>
    )
}