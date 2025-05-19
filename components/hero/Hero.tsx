"use client"
import VideoInText from "./VideoInText"
import { motion } from "framer-motion"
import ComputerCanvas from "./Computers"

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen w-full flex items-center justify-center relative overflow-hidden">
      <div className="h-screen w-full bg-white">
        <ComputerCanvas />
      </div>

    </section>
  )
}
