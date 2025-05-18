import { projects } from "@/lib/projectData"
import ProjectCard from "./ProjectCard"
import ProjectButton from "./ProjectButton"
import ProjectsTitle from "./ProjectsTittle"
import ProjectsSubtitle from "./ProjectsSubtittle"

export default function project() {
  return (
    <section
      id="project"
      className="section"
    >
      <div className="section-header">
        <ProjectsTitle/>
        <ProjectsSubtitle/>
        
      </div>

      <div className="section-body w-[100%]">
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