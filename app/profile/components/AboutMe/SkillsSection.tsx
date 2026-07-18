import React from 'react';
import { Box, ChevronDown, Cloud, Code2, Database, Smartphone, Wrench, Zap } from 'lucide-react';

interface SkillItem {
  icon: JSX.Element;
  label: string;
  description: string;
  items: string[];
}

const skills: SkillItem[] = [
  {
    icon: <Code2 size={28} />,
    label: 'Programming Languages',
    description: 'Languages and styling tools used to build reliable applications.',
    items: ['C#', 'JavaScript', 'TypeScript', 'Kotlin', 'Java', 'SQL', 'TailwindCSS'],
  },
  {
    icon: <Box size={28} />,
    label: 'Frontend Development',
    description: 'Responsive interfaces and component-driven web experiences.',
    items: ['Blazor Server', 'Blazor WebAssembly', 'Razor Components', 'Next.js', 'Vue.js'],
  },
  {
    icon: <Cloud size={28} />,
    label: 'Backend Development',
    description: 'APIs and services built with the .NET and Node.js ecosystems.',
    items: ['.NET', '.NET Core', 'ASP.NET Core', 'ASP.NET Core Web API', 'Node.js', 'Express.js', 'REST API'],
  },
  {
    icon: <Smartphone size={28} />,
    label: 'Mobile Development',
    description: 'Cross-platform and Android application development.',
    items: ['Flutter', 'Android Kotlin'],
  },
  {
    icon: <Database size={28} />,
    label: 'Database Management',
    description: 'Relational data storage and .NET data access patterns.',
    items: ['PostgreSQL', 'Entity Framework Core'],
  },
  {
    icon: <Zap size={28} />,
    label: 'Version Control, DevOps & Deployment',
    description: 'Version control, automation, infrastructure, and deployment workflows.',
    items: ['Git', 'GitHub', 'GitHub Actions', 'AWS', 'Cloudflare', 'Docker', 'Nginx', 'VPS Deployment'],
  },
  {
    icon: <Wrench size={28} />,
    label: 'Tools',
    description: 'Tools for planning, tracking, and documenting project work.',
    items: ['Jira', 'Trello', 'Notion'],
  },
];

const SkillsSection: React.FC = () => {
  return (
    <section className="w-full px-4 py-8 text-center sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto mt-6 grid w-full max-w-[1200px] items-start gap-3 text-left sm:mt-8 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((skill, index) => (
          <details
            key={skill.label}
            name="skill-accordion"
            open={index === 0}
            className="group overflow-hidden rounded-3xl border border-white/50 bg-background/80 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.45)] backdrop-blur-xl dark:border-white/10 dark:bg-card/80"
          >
            <summary className="flex min-h-28 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 [&::-webkit-details-marker]:hidden sm:px-6 sm:py-4">
              <div className="flex min-w-0 items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-primary/10 text-primary">
                  {skill.icon}
                </span>
                <span className="min-w-0">
                  <span className="block text-body-base font-bold text-foreground sm:text-lg">
                    {skill.label}
                  </span>
                  <span className="mt-1 block truncate text-sm text-muted-foreground">
                    {skill.description}
                  </span>
                </span>
              </div>
              <ChevronDown className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-open:rotate-180" />
            </summary>

            <div className="border-t border-border/70 px-4 pb-4 pt-3 sm:px-6 sm:pb-5">
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-border/80 bg-card/70 px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary/60 hover:bg-primary/10 hover:text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
