import { FaGithub, FaLinkedin } from "react-icons/fa"
import Image from "next/image"
import Link from "next/link"

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"
import {
  projectCardAnimation,
  projectCardDescriptionAnimation,
  projectCardImageAnimation,
  projectCardLinksAnimation,
  projectCardTechAnimation,
  projectCardTitleAnimation,
} from "./animationCard"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  tech: string[]
  repo: string
  projectLink: string
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  repo,
  projectLink,
}: ProjectCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref)
  const ctrls = useAnimation()

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible")
    }
  }, [ctrls, isInView])

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      className="relative z-10 w-full overflow-hidden rounded-3xl border border-foreground/20 bg-zinc-900 p-6 flex flex-col md:grid md:grid-cols-2 gap-6"
    >
      {/* Left Content: Text & Links */}
      <div className="flex flex-col justify-between">
        {/* Links */}
        <motion.div
          animate={ctrls}
          initial="hidden"
          variants={projectCardLinksAnimation}
          className="flex items-center gap-3 sm:gap-4"
        >
          <Link
            href={repo}
            target="_blank"
            className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
            aria-label="Open Github Repo"
          >
            <FaGithub className="h-6 w-6 text-zinc-100 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          </Link>
          <Link
            href={projectLink}
            target="_blank"
            className="rounded-full bg-foreground p-2 transition-all duration-300 ease-in-out hover:bg-foreground/50"
            aria-label="Open Live Demo"
          >
            <FaLinkedin className="h-6 w-6 text-zinc-100 md:h-8 md:w-8 lg:h-10 lg:w-10" />
          </Link>
        </motion.div>

        {/* Text */}
        <div className="mt-4">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
            <motion.span variants={projectCardTitleAnimation}>
              {title}
            </motion.span>
          </h3>
          <p className="mt-2 sm:mt-4 text-[10px] sm:text-xs md:text-sm font-semibold text-foreground/50">
            <motion.span variants={projectCardDescriptionAnimation}>
              {description}
            </motion.span>
          </p>
          <motion.div
            variants={projectCardTechAnimation}
            className="mt-4 sm:mt-6 flex flex-wrap gap-2 sm:gap-4"
          >
            {tech.map((t, i) => (
              <span key={i} className="text-[9px] sm:text-xs md:text-sm font-medium text-foreground/50">
                {t}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Right Content: Image */}
      <motion.div
        animate={ctrls}
        initial="hidden"
        variants={projectCardImageAnimation}
        className="w-full flex justify-center items-center"
      >
        <Image
          width={600}
          height={400}
          src={image}
          alt={title}
          className="w-full h-auto object-contain rounded-2xl"
        />
      </motion.div>
    </motion.div>
  )
}
