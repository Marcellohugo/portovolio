"use client";
import React from "react";
import Image from "next/image";
import { LuCheck as Check } from "react-icons/lu";

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  date: string;
  description: string[];
  logoUrl: string;
}

const ExperienceData: ExperienceItem[] = [
  {
    id: 1,
    title: "Website Maker",
    company: "Marcello Webdev",
    date: "September, 2024 - Now",
    logoUrl: "/icons/logo.png",
    description: [
      "Design and develop interactive websites using the Wix platform as per client requirements.",
      "Optimize site design, responsiveness, and performance for a better user experience.",
      "Work closely with clients to customize features and functionality according to business goals."
    ]
  },
  {
    id: 2,
    title: "Part Time Kaka Pengajar & Operational",
    company: "Rumah Kumbang",
    date: "November, 2023 - April, 2024",
    logoUrl: "/icons/logo2.png",
    description: [
      "Be a mentor for early childhood in helping to develop sensory motor skills with lots of practice such as making artificial volcanoes, cutting paper, folding origami, and other games."
    ]
  },
  {
    id: 3,
    title: "Part Time Barista & Server",
    company: "Kopi Tala Bekasi",
    date: "October, 2021 - December, 2021",
    logoUrl: "/icons/logo3.png",
    description: [
      "Responsible for preparing and serving various types of drinks in accordance with established quality standards, ensuring the cleanliness of the work area and the availability of raw materials are maintained.",
      "Providing friendly customer service including handling orders and transaction processes."
    ]
  }
];

export const Experience: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-10 text-foreground">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-primary/40 md:block" />

          <div className="space-y-4 md:space-y-6">
            {ExperienceData.map((item, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={item.id}
                  className="grid items-center gap-3 md:grid-cols-[minmax(0,1fr)_4rem_minmax(0,1fr)] md:gap-3"
                >
                  <article
                    className={`group overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br from-background/95 via-background/80 to-primary/10 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:from-card/95 dark:via-card/85 dark:to-primary/10 ${isLeft ? "md:col-start-1 md:row-start-1" : "md:col-start-3 md:row-start-1"}`}
                  >
                    <div className="h-1.5 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

                    <div className="flex min-w-0 items-start justify-between gap-3 p-5 pb-4 sm:gap-4 sm:p-6 sm:pb-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-border bg-card/80 p-2 shadow-sm">
                        <Image src={item.logoUrl} alt={`${item.company} logo`} width={40} height={40} />
                      </div>
                      <span className="min-w-0 max-w-full rounded-full border border-border bg-card/70 px-3 py-1.5 text-right text-xs font-semibold leading-relaxed text-muted-foreground">
                        {item.date}
                      </span>
                    </div>

                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">
                        {item.company}
                      </p>
                      <h3 className="mt-2 font-display text-2xl font-black tracking-[-0.04em] text-foreground">
                        {item.title}
                      </h3>
                      <div className="my-5 h-px w-full bg-border/70" />
                      <ul className="space-y-3 text-body-sm leading-relaxed text-foreground/80">
                        {item.description.map((point) => (
                          <li key={point} className="flex items-start gap-2.5">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>

                  <div className="relative z-10 hidden h-16 w-16 place-items-center justify-self-center rounded-full border border-border bg-card shadow-lg md:col-start-2 md:row-start-1 md:grid">
                    <Image src={item.logoUrl} alt="" width={38} height={38} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
