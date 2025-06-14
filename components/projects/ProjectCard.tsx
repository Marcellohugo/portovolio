import { FaGithub, FaLink } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { projectCardAnimation, projectCardDescriptionAnimation, projectCardImageAnimation, projectCardLinksAnimation, projectCardTechAnimation, projectCardTitleAnimation } from "./animationCard";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  repo: string;
  projectLink: string;
}

export default function ProjectCard({ title, description, image, tech, repo, projectLink }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const ctrls = useAnimation();

  useEffect(() => {
    if (isInView) {
      ctrls.start("visible");
    }
  }, [ctrls, isInView]);

  return (
    <motion.div
      ref={ref}
      animate={ctrls}
      initial="hidden"
      variants={projectCardAnimation}
      className="relative z-10 w-full overflow-hidden rounded-3xl border border-foreground/20 bg-card p-4 sm:p-6 grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Kolom Teks */}
      <div className="flex flex-col justify-between">
        <motion.div variants={projectCardTitleAnimation}>
          <h3 className="text-heading-lg font-bold text-foreground">
            {title}
          </h3>
        </motion.div>
        
        <motion.p variants={projectCardDescriptionAnimation} className="mt-2 text-body-base text-muted-foreground">
          {description}
        </motion.p>
        
        <motion.div variants={projectCardTechAnimation} className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="text-caption font-medium bg-primary-dark/50 text-primary px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
        </motion.div>

        <motion.div variants={projectCardLinksAnimation} className="flex items-center gap-4 mt-6">
          <Link href={repo} target="_blank" className="rounded-full bg-foreground/10 p-3 transition-all hover:bg-primary hover:text-primary-dark" aria-label="Open Github Repo">
            <FaGithub className="h-5 w-5 text-foreground" />
          </Link>
          <Link href={projectLink} target="_blank" className="rounded-full bg-foreground/10 p-3 transition-all hover:bg-primary hover:text-primary-dark" aria-label="Open Live Demo">
            <FaLink className="h-5 w-5 text-foreground" />
          </Link>
        </motion.div>
      </div>

      {/* Kolom Gambar */}
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
  );
}