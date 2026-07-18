import ParallaxText from "@/components/about-attribute/ParallaxText"
import ParallaxPhotoGallery from "@/components/about-attribute/ParallaxPhotoGallery"
import SkillCardStack from "@/components/about-attribute/Stack"
import GradientText from "@/components/ui/text/AnimateSubtitle"

export default function AboutAttribute() {
    return(
      <section id="AboutAttribute" className="relative w-full">
        <div className="relative z-10 w-full text-foreground dark:text-white">
          <ParallaxText direction={500} baseVelocity={-1}>
            Frontend Web Developer
          </ParallaxText>
          <ParallaxText direction={-500} baseVelocity={1}>
            Freelance Web Developer
          </ParallaxText>

          <ParallaxPhotoGallery/>

          <div className="mt-20 flex w-full flex-col items-center justify-center text-center sm:mt-28">
            <GradientText className="text-[clamp(1.6rem,4vw,3rem)] font-semibold leading-[1.5]">
              TECH STACK
            </GradientText>
            <span className="text-[clamp(1rem,2vw,1.5rem)] font-semibold leading-[1.4]">
              TECHNOLOGIES & TOOLS
            </span>
          </div>
          <SkillCardStack/>
        </div>
      </section>
    )
}
