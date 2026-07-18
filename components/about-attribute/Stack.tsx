import type { ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import {
  SiAmazon,
  SiBlazor,
  SiCloudflare,
  SiDocker,
  SiDotnet,
  SiExpress,
  SiGit,
  SiGithub,
  SiGithubactions,
  SiJira,
  SiJavascript,
  SiKotlin,
  SiLinux,
  SiNextdotjs,
  SiNodedotjs,
  SiNotion,
  SiNginx,
  SiOpenapiinitiative,
  SiPostgresql,
  SiSqlite,
  SiTailwindcss,
  SiTrello,
  SiTypescript,
  SiFlutter,
  SiVuedotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

type Skill = {
  icon: ReactNode;
  name: string;
};

type SkillGroup = {
  title: string;
  description: string;
  skills: Skill[];
};

const groups: SkillGroup[] = [
  {
    title: "Programming Languages",
    description: "Languages and styling tools used to build reliable applications.",
    skills: [
      { icon: <SiDotnet />, name: "C#" },
      { icon: <SiJavascript />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <SiKotlin />, name: "Kotlin" },
      { icon: <FaJava />, name: "Java" },
      { icon: <SiSqlite />, name: "SQL" },
      { icon: <SiTailwindcss />, name: "TailwindCSS" },
    ],
  },
  {
    title: "Frontend Development",
    description: "Responsive interfaces and component-driven web experiences.",
    skills: [
      { icon: <SiBlazor />, name: "Blazor Server" },
      { icon: <SiBlazor />, name: "Blazor WebAssembly" },
      { icon: <SiDotnet />, name: "Razor Components" },
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiVuedotjs />, name: "Vue.js" },
    ],
  },
  {
    title: "Backend Development",
    description: "APIs and services built with the .NET and Node.js ecosystems.",
    skills: [
      { icon: <SiDotnet />, name: ".NET" },
      { icon: <SiDotnet />, name: ".NET Core" },
      { icon: <SiDotnet />, name: "ASP.NET Core" },
      { icon: <SiDotnet />, name: "ASP.NET Core Web API" },
      { icon: <SiNodedotjs />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express.js" },
      { icon: <SiOpenapiinitiative />, name: "REST API" },
    ],
  },
  {
    title: "Mobile Development",
    description: "Cross-platform and Android application development.",
    skills: [
      { icon: <SiFlutter />, name: "Flutter" },
      { icon: <SiKotlin />, name: "Android Kotlin" },
    ],
  },
  {
    title: "Database Management",
    description: "Relational data storage and .NET data access patterns.",
    skills: [
      { icon: <SiPostgresql />, name: "PostgreSQL" },
      { icon: <SiDotnet />, name: "Entity Framework Core" },
    ],
  },
  {
    title: "Version Control, DevOps & Deployment",
    description: "Version control, automation, infrastructure, and deployment workflows.",
    skills: [
      { icon: <SiGit />, name: "Git" },
      { icon: <SiGithub />, name: "GitHub" },
      { icon: <SiGithubactions />, name: "GitHub Actions" },
      { icon: <SiAmazon />, name: "AWS" },
      { icon: <SiCloudflare />, name: "Cloudflare" },
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiNginx />, name: "Nginx" },
      { icon: <SiLinux />, name: "VPS Deployment" },
    ],
  },
  {
    title: "Tools",
    description: "Tools for planning, tracking, and documenting project work.",
    skills: [
      { icon: <SiJira />, name: "Jira" },
      { icon: <SiTrello />, name: "Trello" },
      { icon: <SiNotion />, name: "Notion" },
    ],
  },
];

export default function SkillCardStack() {
  return (
    <section className="mx-auto w-full max-w-[1200px] px-4 pb-24 pt-10 sm:px-6 sm:pb-32 sm:pt-14 lg:px-8">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map((group) => (
          <details
            key={group.title}
            name="tech-stack-accordion"
            className="group h-full overflow-hidden rounded-2xl border border-border bg-card/80 text-foreground shadow-sm transition-colors open:border-primary/50"
          >
            <summary className="flex h-28 cursor-pointer list-none items-center justify-between gap-3 p-4 [&::-webkit-details-marker]:hidden">
              <span>
                <span className="block font-display text-lg font-bold tracking-[-0.03em]">{group.title}</span>
                <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-muted-foreground">{group.description}</span>
              </span>
              <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
            </summary>

            <div className="border-t border-border/70 p-4">
              <div className="flex flex-wrap items-center gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="group/chip inline-flex items-center gap-1.5 rounded-full border border-border/80 bg-background/60 px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
                  >
                    <span className="text-primary group-hover/chip:text-primary-foreground">
                      {skill.icon}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
