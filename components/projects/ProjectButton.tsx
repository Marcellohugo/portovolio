"use client"

import { motion, useAnimation, useInView } from "framer-motion"
import { useRouter } from "next/navigation"
import { useEffect, useRef } from "react"
import { Button } from "../ui/button/Button"
import { projectCardAnimation } from "./animationCard"
import MagneticEffect from "../ui/button/MagneticEffect"

export default function ProjectButton() {
  const router = useRouter()

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
      initial="visible"
      aria-hidden="true"
      variants={projectCardAnimation}
      className="mb-10 flex flex-col items-center justify-center gap-4"
    >
      <h2 className="text-[clamp(1.6rem,4vw,3rem)] font-bold text-center">See other projects</h2>
      <MagneticEffect>
        <Button
          size="lg"
          variant="outline"
          onClick={() => router.push("/Projects")}
        >
          Load More
        </Button>
      </MagneticEffect>
    </motion.div>
  )
}
