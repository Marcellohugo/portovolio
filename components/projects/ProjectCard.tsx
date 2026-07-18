import Image from "next/image";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { projectCardAnimation, projectCardDescriptionAnimation, projectCardImageAnimation, projectCardTechAnimation, projectCardTitleAnimation } from "./animationCard";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
}

export default function ProjectCard({ title, description, image, tech }: ProjectCardProps) {
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
            <span key={i} className="text-caption font-medium bg-primary/15 text-primary px-2 py-1 rounded-full">
              {t}
            </span>
          ))}
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
          sizes="(max-width: 767px) 100vw, 50vw"
          className="w-full h-auto object-contain rounded-2xl"
        />
      </motion.div>
    </motion.div>
  );
}
