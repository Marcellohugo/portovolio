import ParallaxText from "./ParallaxText"
import ParallaxPhotoGallery from "./ParallaxPhotoGallery"
import SkillCardStack from "./Stack"
import GradientText from "../ui/text/AnimateSubtitle"

export default function AboutAttribute() {
    return(
      <section id="AboutAttribute" className="relative w-full">
        <div className="relative z-10 text-[whitesmoke] w-full">
          <ParallaxText direction={500} baseVelocity={-1}>
            Frontend Web Developer
          </ParallaxText>
          <ParallaxText direction={-500} baseVelocity={1}>
            Freelance Web Developer
          </ParallaxText>

          <ParallaxPhotoGallery/>

          <div className="w-full flex flex-col items-center justify-center text-center">
            <GradientText
              className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
              >
              PROGRAMMING SKILL
            </GradientText>
            <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
              LIST OF MY SKILL SET
            </span> 
          </div>
          <SkillCardStack/>
        </div>
      </section>
    )
}