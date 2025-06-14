import SectionHeader from "@/components/shared/SectionHeader";
import GradientText from "@/components/ui/text/AnimateSubtitle";
import Image from "next/image";
import Biography from "./Biography";
import RotatingWords from "./RotatingWords";
import SkillsSection from "./SkillsSection";

export default function AboutMe() {
  return (
    <section className="w-full">
      <SectionHeader subtitle="INTRODUCTION" title="ABOUT ME" />

      <div className="w-full flex flex-col items-center justify-center text-center mt-12">
        <GradientText className="text-heading-xl">
          SHORT BIOGRAPHY
        </GradientText>
        <span className="text-body-lg font-semibold">
          STORY OF MY LIFE
        </span>
      </div>
      <Biography />
      <RotatingWords />

      <div className="relative w-full h-[200px] md:h-[300px] lg:h-[400px] overflow-hidden my-12">
        <Image
          src="/images/Profile1.png"
          alt="Marco"
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
          priority
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 text-center bg-black/30">
          <h2 className="text-body-lg font-bold">IT'S ALL ABOUT</h2>
          <GradientText className="text-heading-xl">
            MARCO
          </GradientText>
        </div>
      </div>

      <div className="w-full flex flex-col items-center justify-center text-center mt-12">
        <GradientText className="text-heading-xl">
          SKILLS AND EXPERTISE
        </GradientText>
        <span className="text-body-lg text-center max-w-3xl mx-auto px-4">
          Explore some skills I'm proficient in to deliver high-quality solutions.
        </span>
      </div>
      <SkillsSection />
    </section>
  );
}