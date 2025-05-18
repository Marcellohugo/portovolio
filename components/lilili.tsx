

import { projects } from "@/lib/projectData"
import ProjectCard from "./ProjectCard"
import ProjectButton from "./ProjectButton"
import ProjectsTitle from "./ProjectsTittle"
import ProjectsSubtitle from "./ProjectsSubtittle"

export default function project() {
  return (
    <section
      id="project"
      className="relative bg-black/90 flex min-h-screen h-full w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
          <ProjectsTitle/>
          <ProjectsSubtitle/>
          <ProjectButton />
          
          <div className="w-full flex flex-col items-center justify-center">
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
        </div>
      </div>

    </section>
  )
}