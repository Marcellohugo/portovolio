"use client";

import SectionHeader from "@/components/shared/SectionHeader";
import GradientText from "@/components/ui/text/AnimateSubtitle";
import Timeline from "./Timeline";
import { Experience } from "./ExperienceData";
import EventShowcase from "./EventShowcase";

export default function ExperienceSection() {
  return (
    <section className="relative w-full pt-12 sm:pt-16">
      <SectionHeader
        subtitle="BACKGROUND"
        title="EXPERIENCE"
        titleClassName="whitespace-nowrap text-[clamp(2.4rem,13vw,10rem)] tracking-[-0.04em]"
      />

      <div className="mt-10 flex w-full flex-col items-center justify-center text-center sm:mt-12">
        <GradientText className="text-heading-xl">
          WORK
        </GradientText>
        <span className="text-body-lg font-semibold">
          MY CAREER JOURNEY
        </span>
      </div>
      <Experience />

      <div className="mt-14 flex w-full flex-col items-center justify-center text-center sm:mt-20">
        <GradientText className="text-heading-xl">
          ORGANIZATION
        </GradientText>
        <span className="text-body-lg font-semibold">
          MY COLLEGE JOURNEY
        </span>
      </div>
      <div className="mt-6 flex w-full items-center justify-center sm:mt-8">
        <Timeline />
      </div>

      <div className="mt-16 flex w-full flex-col items-center justify-center text-center sm:mt-24">
        <GradientText className="text-heading-xl">
          EVENT
        </GradientText>
        <span className="text-body-lg font-semibold">
          SELECTED COMMITTEE EXPERIENCES
        </span>
      </div>
      <EventShowcase />
    </section>
  );
}
