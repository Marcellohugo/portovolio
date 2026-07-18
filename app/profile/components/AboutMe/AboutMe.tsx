"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import GradientText from "@/components/ui/text/AnimateSubtitle";
import Image from "next/image";
import Biography from "./Biography";
import RotatingWords from "./RotatingWords";
import SkillsSection from "./SkillsSection";
import CertificationsSection from "./CertificationsSection";

export default function AboutMe() {
  return (
    <section className="w-full pb-8 sm:pb-12">
      <SectionHeader subtitle="INTRODUCTION" title="ABOUT ME" />

      <div className="mt-10 flex w-full flex-col items-center justify-center text-center sm:mt-14">
        <GradientText className="text-heading-xl">
          SHORT BIOGRAPHY
        </GradientText>
        <span className="text-body-lg font-semibold">
          STORY OF MY LIFE
        </span>
      </div>
      <div className="mt-8 sm:mt-10">
        <Biography />
      </div>
      <RotatingWords />

      <div className="relative h-[200px] w-full overflow-hidden md:h-[300px] lg:h-[400px]">
        <Image
          src="/images/Profile1.png"
          alt="Marco"
          fill
          sizes="100vw"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 text-center bg-black/30">
          <h2 className="text-body-lg font-bold">IT&apos;S ALL ABOUT</h2>
          <GradientText className="text-heading-xl">
            MARCO
          </GradientText>
        </div>
      </div>

      <div className="mt-14 flex w-full flex-col items-center justify-center text-center sm:mt-20">
        <GradientText className="text-heading-xl">
          SKILLS AND EXPERTISE
        </GradientText>
        <span className="text-body-lg text-center max-w-3xl mx-auto px-4">
          Explore some skills I&apos;m proficient in to deliver high-quality solutions.
        </span>
      </div>
      <SkillsSection />
      <CertificationsSection />
    </section>
  );
}
