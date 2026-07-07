"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import GradientText from "@/components/ui/text/AnimateSubtitle";
import Timeline from "./Timeline";
import { Experience } from "./ExperienceData";

export default function ExperienceSection() {
  return (
    <section className="relative w-full pt-12">
      <SectionHeader subtitle="BACKGROUND" title="EXPERIENCE" />

      <div className="w-full flex flex-col items-center justify-center text-center mt-12">
        <GradientText className="text-heading-xl">
          WORK
        </GradientText>
        <span className="text-body-lg font-semibold">
          MY CAREER JOURNEY
        </span>
      </div>
      <Experience />

      <div className="w-full flex flex-col items-center justify-center text-center mt-16">
        <GradientText className="text-heading-xl">
          ORGANIZATION
        </GradientText>
        <span className="text-body-lg font-semibold">
          MY COLLEGE JOURNEY
        </span>
      </div>
      <div className="w-full flex items-center justify-center mt-8">
        <Timeline />
      </div>
    </section>
  );
}