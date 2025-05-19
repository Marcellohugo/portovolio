"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { FaArrowRight } from "react-icons/fa"

interface ProjectProps {
  project: {
    id: number
    title: string
    year: string
    location: string
    category: string
    image: string
  }
  index: number
}

export default function ProjectCard({ project, index }: ProjectProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
    >
      <div className="flex flex-col md:flex-row gap-8">
        {/* Project info */}
        <div className="md:w-1/3 flex flex-col justify-center">
          <h3 className="text-white text-4xl font-bold mb-2 flex items-center group">
            {project.title}
            <FaArrowRight className="ml-4 text-2xl opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300" />
          </h3>
          <div className="text-white/70 mb-4">
            {project.year} | {project.location}
          </div>
          <div className="text-sky-400 uppercase tracking-wider text-sm">{project.category}</div>
        </div>

        {/* Project image */}
        <div className="md:w-2/3 overflow-hidden rounded-lg bg-black/60">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105 opacity-90"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </motion.div>
  )
}
