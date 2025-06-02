import AnimateTitle from "@/components/ui/text/AnimateTitle";
import GradientText from "@/components/ui/text/AnimateSubtitle";
import Timeline from "./Timeline";
import { Experience } from "./ExperienceData";

export default function Experience1() {
  return (
    <section className="relative w-full pt-24 ">
      <div className="relative z-10 mx-auto flex-col text-[whitesmoke]">
        <div className="flex flex-col items-start justify-center max-w-[1200px] mx-auto">
          <GradientText
              
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
      </div>
    </section>
  )
}

