import GradientText from "@/components/ui/text/AnimateSubtitle"
import AnimateTitle from "@/components/ui/text/AnimateTitle"
import StoryOfMyLife from "./Biography"
import RotatingWords from "./RotatingWords"
import Image from "next/image"
import SkillsSection from "./SkillsSection"

export default function AboutMe() {
  return (
    <section className="relative w-full pt-24 ">
      <div className="relative z-10 mx-auto flex-col text-[whitesmoke]">
        <div className="flex flex-col items-start justify-center max-w-[1200px] mx-auto">
          <GradientText
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
        <div className=" relative w-full h-[120px] md:h-[200px] lg:h-[500px] overflow-hidden">
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
              className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
              >
              MARCO
            </GradientText>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center text-center mt-10">
          <GradientText
            className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
            >
            SKILLS AND EXPERTISE
          </GradientText>
          <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
            Explore some skills I'm proficient in to deliver high-quality solutions.
          </span> 
        </div>
        <SkillsSection/>
      </div>
    </section>
  )
}