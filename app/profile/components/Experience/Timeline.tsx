import { useState } from 'react';
import { Button } from "@/components/ui/button/Button";
import { LuArrowRight as ArrowRightIcon, LuCalendarDays as CalendarDays, LuMinus as MinusIcon } from "react-icons/lu";

type TimelineItem = {
  id: string;
  period: string;
  title: string;
  role: string;
  description: string;
  tags: string[];
};

const timelineData: TimelineItem[] = [
  {
    id: '1',
    period: 'October, 2023 – February, 2025',
    title: 'BEM ITS',
    role: 'Ministry of Internal Affairs Staff | Seasonal',
    description:
      'As an active member of the Directorate General of Internal Harmonization, he plays a role in managing the Forky (Intra-Campus Coordination Forum) Work Program, which includes responsibility for preparing activity schedules, coordinating event implementation, as well as official correspondence and permits to the ITS Bureaucracy.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  {
    id: '2',
    period: 'November, 2023 – November, 2024',
    title: 'Kepemanduan LKMM ITS',
    role: 'Pemandu FTEIC | Seasonal',
    description:
      'Becoming a managerial skills training guide for ITS students, by delivering informative, communicative, and easy-to-understand materials that are relevant to the training needs of participants.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  {
    id: '3',
    period: 'February, 2023 – January, 2024',
    title: 'Schematics ITS',
    role: 'Head of Perkamzin Division 2 | Seasonal',
    description:
      'Maximizing facilities and infrastructure with in-depth knowledge regarding licensing processes, security, and applicable regulations, to ensure that operations run in an orderly and efficient manner.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  {
    id: '4', 
    period: 'November, 2020 – November, 2021', 
    title: 'MPK SMAN 3 Bekasi', 
    role: 'Deputy General Chairman 1 | Seasonal',
    description: "Actively participate in every stage of the preparation, implementation, and monitoring of the MPK work program to ensure that all activities carried out are in line with the organization's vision and achieve existing goals.",
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
  { id: '5',
    period: 'October, 2017 – October, 2018',
    title: 'OSIS SMPN 84 Jakarta',
    role: 'Deputy Chairman 1 | Seasonal',
    description: 'Coordinate division heads during extracurricular plenary meetings to ensure smooth running of activities.',
    tags: ['Managerial', 'Leadership', 'Problem Solving', 'Communication Skills', 'Teamwork'],
  },
];

export default function Timeline() {
  const [showAll, setShowAll] = useState(false);

  const itemsToShow = showAll ? timelineData : timelineData.slice(0, 2);

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 sm:px-6 lg:px-8">
      <div className="grid items-stretch gap-5 lg:grid-cols-2">
        {itemsToShow.map((item) => (
          <article
            key={item.id}
            className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br from-background/95 via-background/80 to-primary/10 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:from-card/95 dark:via-card/85 dark:to-primary/10"
          >
            <div className="h-1.5 bg-gradient-to-r from-primary via-primary/50 to-transparent" />

            <div className="flex flex-1 flex-col p-6 sm:p-7">
              <time className="inline-flex w-fit max-w-full items-center gap-2 whitespace-normal rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-semibold leading-relaxed text-muted-foreground">
                <CalendarDays className="h-3.5 w-3.5 shrink-0 text-primary" />
                {item.period}
              </time>
              <h3 className="mt-6 font-display text-2xl font-black tracking-[-0.04em] text-foreground sm:text-3xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-primary">
                {item.role}
              </p>
              <p className="mt-5 text-body-base leading-relaxed text-foreground/80">
                {item.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-lg border border-border/80 bg-card/60 px-3 py-1.5 text-xs font-semibold text-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center sm:mt-10">
        <Button
          variant="outline"
          aria-expanded={showAll}
          onClick={() => setShowAll(prev => !prev)}
        >
          {showAll ? (
            <>
              Hide More <MinusIcon className="ml-2 h-4 w-4" />
            </>
          ) : (
            <>
              Read More <ArrowRightIcon className="ml-2 h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
