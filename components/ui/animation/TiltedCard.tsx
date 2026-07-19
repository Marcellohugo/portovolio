"use client";

import type { ComponentProps } from "react";
import { useRef } from "react";
import type { SpringOptions } from "framer-motion";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface TiltedCardProps {
  imageSrc: ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
}

const springValues: SpringOptions = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

const cardSize = "h-[230px] w-[230px] sm:h-[300px] sm:w-[300px] lg:h-[380px] lg:w-[380px]";

function motionSettings() {
  if (window.matchMedia("(max-width: 639px)").matches) return { rotate: 0, scale: 1 };
  if (window.matchMedia("(max-width: 1023px)").matches) return { rotate: 8, scale: 1.05 };
  return { rotate: 14, scale: 1.1 };
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const lastY = useRef(0);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateCaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  function handleMouse(event: React.MouseEvent<HTMLElement>) {
    const rotate = motionSettings().rotate;
    if (!rotate || !ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = event.clientX - rect.left - rect.width / 2;
    const offsetY = event.clientY - rect.top - rect.height / 2;

    rotateX.set((offsetY / (rect.height / 2)) * -rotate);
    rotateY.set((offsetX / (rect.width / 2)) * rotate);
    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
    rotateCaption.set(-(offsetY - lastY.current) * 0.6);
    lastY.current = offsetY;
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateCaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className={`relative flex items-center justify-center [perspective:800px] ${cardSize}`}
      onMouseMove={handleMouse}
      onMouseEnter={() => {
        scale.set(motionSettings().scale);
        opacity.set(1);
      }}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className={`relative [transform-style:preserve-3d] ${cardSize}`}
        style={{ rotateX, rotateY, scale }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute inset-0 h-full w-full rounded-[15px] object-cover will-change-transform [transform:translateZ(0)]"
        />
      </motion.div>

      <motion.figcaption
        className="pointer-events-none absolute left-0 top-0 z-[3] hidden rounded-[4px] border border-border bg-card px-[10px] py-[4px] text-[10px] text-foreground opacity-0 sm:block"
        style={{ x, y, opacity, rotate: rotateCaption }}
      >
        {captionText}
      </motion.figcaption>
    </figure>
  );
}
