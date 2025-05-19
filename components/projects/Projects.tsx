import { projects } from "@/lib/projectData"
import ProjectCard from "./ProjectCard"
import ProjectButton from "./ProjectButton"
import ProjectsTitle from "./ProjectsTittle"
import ProjectsSubtitle from "./ProjectsSubtittle"

export default function project() {
  return (
    <section
      id="project"
      className="relative flex flex-col w-full min-h-screen h-full pt-20 bg-black/90 text-[whitesmoke] overflow-hidden"
    >
      <div className="flex flex-col items-start justify-center w-4/5 mx-auto">
        <ProjectsTitle/>
        <ProjectsSubtitle/> 
      </div>

      <div className="flex flex-row items-center justify-center min-h-full mx-auto w-[100%]">
        <div className="mb-24 grid w-full max-w-[1200px] grid-cols-1 gap-x-6 gap-y-6 lg:grid-cols-1">
          {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            repo={project.repo}
            projectLink={project.linkProject}
          />
          ))}
        </div>
      </div>
      <ProjectButton />
    </section>
  )
}