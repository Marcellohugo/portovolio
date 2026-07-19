import { LuAward as Award, LuCalendarDays as CalendarDays, LuChevronDown as ChevronDown } from "react-icons/lu";
import GradientText from "@/components/ui/text/AnimateSubtitle";

type Certification = {
  title: string;
  issuer: string;
  year: string;
};

const certificationGroups: { title: string; items: Certification[] }[] = [
  {
    title: "Technical Training Certifications",
    items: [
      { title: "Introduction to Machine Learning with Python", issuer: "Udemy", year: "2024" },
      { title: "Short Class Figma for UI/UX Design", issuer: "MySkill", year: "2023" },
      { title: "Short Class Data Visualization for Data Analysis", issuer: "MySkill", year: "2023" },
    ],
  },
  {
    title: "Non-Technical Training Certifications",
    items: [
      { title: "Intermediate Level Student Managerial Skills Training", issuer: "BEM FEB UNESA", year: "2024" },
      { title: "Student Managerial Skills Training Facilitator Training", issuer: "BEM FTEIC ITS", year: "2023" },
      { title: "Basic Level Student Managerial Skills Training", issuer: "HMTC ITS", year: "2023" },
      { title: "Pre-Basic Level Student Managerial Skills Training", issuer: "BEM FTEIC ITS", year: "2023" },
      { title: "ITS Student Entrepreneurship Skills Training", issuer: "ITS", year: "2022" },
    ],
  },
];

export default function CertificationsSection() {
  return (
    <section className="w-full px-4 pb-12 pt-4 sm:px-6 sm:pb-16 lg:px-8">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-6 flex w-full flex-col items-center justify-center text-center sm:mb-8">
          <GradientText className="text-heading-xl">
            CERTIFICATIONS
          </GradientText>
          <span className="text-body-lg font-semibold">
            PROFESSIONAL CREDENTIALS
          </span>
        </div>

        <div className="space-y-2">
          {certificationGroups.map((group, index) => (
            <details
              key={group.title}
              name="certification-accordion"
              open={index === 0}
              className="group overflow-hidden rounded-3xl border border-white/50 bg-background/80 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-card/80"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 p-4 [&::-webkit-details-marker]:hidden sm:gap-4 sm:p-6">
                <span className="flex min-w-0 items-center gap-3 sm:gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <Award className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 break-words font-display text-base font-bold tracking-[-0.03em] text-foreground sm:text-xl">
                    {group.title}
                  </span>
                </span>
                <span className="flex shrink-0 items-center gap-3">
                  <span className="hidden rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary min-[380px]:inline-flex">
                    {group.items.length}
                  </span>
                  <ChevronDown className="h-5 w-5 text-primary transition-transform duration-300 group-open:rotate-180" />
                </span>
              </summary>

              <div className="divide-y divide-border/70 border-t border-border/70">
                {group.items.map((item) => (
                  <div key={item.title} className="flex min-w-0 gap-3 p-4 sm:p-6">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Award className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-semibold leading-snug text-foreground">{item.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground">{item.issuer}</p>
                    </div>
                    <time className="inline-flex shrink-0 items-center gap-1 self-start text-xs font-semibold text-primary">
                      <CalendarDays className="h-3.5 w-3.5" />
                      {item.year}
                    </time>
                  </div>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
