import { ArrowRightIcon, CalendarDays, MinusIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button/Button";

const events = [
  {
    period: "November, 2023 – May, 2024",
    title: "Pammits 2024",
    role: "Head of Equipment Division",
    description:
      "Maximized facilities and infrastructure while managing licensing, security, and operational requirements to keep the event organized and efficient.",
    tags: ["Leadership", "Operations", "Problem Solving", "Teamwork"],
  },
  {
    period: "August, 2023 – November, 2023",
    title: "Maba Cup 2023",
    role: "Head of Equipment Division",
    description:
      "Coordinated equipment, facilities, permits, and on-site operational needs throughout the event preparation and execution.",
    tags: ["Coordination", "Logistics", "Communication"],
  },
  {
    period: "2022 – 2023",
    title: "ILITS",
    role: "Equipment Staff",
    description:
      "Supported event operations through equipment preparation and on-site coordination.",
    tags: ["Event Operations", "Equipment"],
  },
  {
    period: "2022 – 2023",
    title: "ITS Expo",
    role: "Equipment Staff",
    description:
      "Helped prepare and manage equipment requirements during the event execution.",
    tags: ["Logistics", "Coordination"],
  },
  {
    period: "2022 – 2023",
    title: "UKM Expo",
    role: "Equipment Staff",
    description:
      "Contributed to venue readiness and operational support for the campus expo.",
    tags: ["Event Operations", "Teamwork"],
  },
  {
    period: "2022 – 2023",
    title: "Kestari Gerigi",
    role: "Division Staff",
    description:
      "Supported the division's event activities through coordination and on-site assistance.",
    tags: ["Coordination", "Communication"],
  },
  {
    period: "2022 – 2023",
    title: "TEDxITS",
    role: "Brand Ambassador",
    description:
      "Represented the event and helped communicate its identity and activities to the audience.",
    tags: ["Public Relations", "Communication"],
  },
];

export default function EventShowcase() {
  const [showAll, setShowAll] = useState(false);
  const itemsToShow = showAll ? events : events.slice(0, 2);

  return (
    <div className="mx-auto w-full max-w-[1200px] px-4 pb-20 pt-8 sm:px-6 sm:pb-28 sm:pt-10 lg:px-8">
      <div className="grid items-stretch gap-4 lg:grid-cols-2">
        {itemsToShow.map((event) => (
          <article
            key={event.title}
            className="group relative flex min-h-[16.5rem] flex-col overflow-hidden rounded-[2rem] border border-white/50 bg-gradient-to-br from-background/95 via-background/80 to-primary/15 p-6 shadow-[0_24px_70px_-40px_rgba(15,23,42,0.65)] backdrop-blur-xl transition-transform duration-300 hover:-translate-y-1 dark:border-white/10 dark:from-card/95 dark:via-card/85 dark:to-primary/10 sm:p-8"
          >
            <div className="relative flex h-full flex-col">
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-card/70 px-3 py-1.5 text-xs font-semibold text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5 text-primary" />
                  {event.period}
                </span>
              </div>

              <div className="mt-10">
                <h3 className="font-display text-3xl font-black tracking-[-0.045em] text-foreground sm:text-4xl">
                  {event.title}
                </h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-[0.12em] text-primary">
                  {event.role}
                </p>
                <p className="mt-5 max-w-2xl text-body-base leading-relaxed text-foreground/80">
                  {event.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-border/80 bg-card/60 px-3 py-1.5 text-xs font-semibold text-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center sm:mt-10">
        <Button
          variant="outline"
          aria-expanded={showAll}
          onClick={() => setShowAll((prev) => !prev)}
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
