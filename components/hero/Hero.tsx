'use client'

import Image from "next/image";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import Particles from "../ui/background/Particles";

const entrance = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.7, ease: "easeOut" as const },
});

export default function Hero() {
  const { resolvedTheme } = useTheme();
  const particleColors = useMemo(
    () => resolvedTheme === "light" ? ["#0f172a", "#0369a1"] : ["#ffffff", "#A3D8FF"],
    [resolvedTheme],
  );

  return (
    <section
      id="hero"
      className="relative mx-auto h-[100svh] min-h-[620px] w-full overflow-hidden md:h-screen"
    >
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={particleColors}
          particleCount={240}
          particleSpread={10}
          speed={0.08}
          particleBaseSize={100}
        />
      </div>

      <div className="relative z-10 mx-auto h-full max-w-[1440px] px-4 pt-20 sm:px-10 sm:pt-24 lg:px-16">
        <div className="relative isolate h-full">
          <div className="absolute left-1/2 top-3 z-30 -translate-x-1/2 sm:top-5">
            <motion.div {...entrance()} className="relative inline-flex">
              <span className="inline-flex rounded-full border border-foreground/50 bg-background/60 px-5 py-2 text-sm font-bold shadow-sm backdrop-blur-md sm:px-7 sm:text-base">
                Hello!
              </span>

            </motion.div>
          </div>

          <div className="absolute left-1/2 top-[8%] z-10 w-full max-w-full -translate-x-1/2 px-2 sm:top-[8%] sm:px-0 lg:top-[7%]">
            <h1 className="w-full text-center text-[clamp(1.75rem,5.5vw,5rem)] font-black leading-[0.9] tracking-[-0.055em]">
              <span className="block whitespace-normal sm:whitespace-nowrap">
                I&apos;m <span className="text-primary">Marcello</span>,
              </span>
              <span className="mt-2 block whitespace-normal sm:mt-4 sm:whitespace-nowrap">Creative Developer</span>
            </h1>
          </div>

          <div
            aria-hidden="true"
            className="absolute left-1/2 top-[41%] z-0 aspect-square w-[min(112vw,760px)] -translate-x-1/2 rounded-full border border-primary/30 bg-primary/20 shadow-[0_0_90px_rgba(14,165,233,0.16)] sm:top-[43%] lg:top-[46%]"
          />

          <div className="absolute bottom-0 left-1/2 z-[100] h-[60%] max-h-[480px] w-[min(82vw,420px)] -translate-x-1/2 sm:h-[68%] sm:max-h-[620px] sm:w-[min(55vw,520px)] lg:h-[72%] lg:max-h-[760px] lg:w-[min(40vw,650px)]">
            <Image
              src="/images/Me.png"
              alt="Marco Marcello Hugo"
              fill
              priority
              sizes="(max-width: 639px) 82vw, (max-width: 1023px) 55vw, 650px"
              className="origin-bottom object-cover object-[50%_50%] lg:scale-[0.98] lg:[@media(min-height:1000px)]:object-[50%_70%] lg:[@media(min-height:1000px)]:scale-[1.29]"
            />
          </div>

          <motion.aside
            {...entrance(0.28)}
            className="absolute bottom-[13%] left-0 z-30 hidden max-w-[240px] lg:block"
          >
            <div className="mb-4 h-px w-16 bg-primary" />
            <p className="text-sm font-medium leading-relaxed text-muted-foreground">
              Thoughtful interfaces, responsive experiences, and clean code built for real people.
            </p>
          </motion.aside>

          <motion.aside
            {...entrance(0.34)}
            className="absolute bottom-[13%] right-0 z-30 hidden text-right lg:block"
          >
            <p className="text-3xl font-black leading-none">Creative</p>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Developer
            </p>
          </motion.aside>

        </div>
      </div>
    </section>
  )
}
