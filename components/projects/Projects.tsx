import GradientText from "../ui/text/AnimateSubtitle"
import AnimateTitle from "../ui/text/AnimateTitle"
import { projects } from "@/components/projects/projectData"
import ProjectCard from "./ProjectCard"
import ProjectButton from "./ProjectButton"

export default function Projects() {
  return (
    <section
      id="project"
      className="relative w-full"
    >
      <div className="relative z-10 mx-auto flex-col text-foreground dark:text-white">
        {/* First content block: Title, Subtitle, Text, Buttons, Image */}
        <div className="flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 max-w-[1200px] mx-auto">
          <GradientText
            className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
            >
            FEATURED WORKS
          </GradientText>
          <AnimateTitle>
            PROJECTS
          </AnimateTitle>
          <div className="w-full flex flex-col items-center justify-center overflow-hidden">
            <GradientText
              className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
              >
              OVERVIEW
            </GradientText>
            <span
             className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold text-center mb-4"
            >
                LIST OF SELECTED PORTOFOLIO
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-center min-h-full mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-24 grid w-full max-w-[1200px] grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-1">
            {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tech={project.tech}
            />
            ))}
          </div>
        </div>
        <ProjectButton />
      </div>
    </section>
  )
}
