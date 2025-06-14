"use client"

import GradientText from "../ui/text/AnimateSubtitle";
import AnimateTitle from "../ui/text/AnimateTitle";
import dynamic from "next/dynamic";
import React from "react";
import MagneticEffect from "../ui/button/MagneticEffect";
import ContactForm from "./ContactForm";

const LanyardNoSSR = dynamic(
  () => import("../ui/animation/Lanyard"), 
  { ssr: false }
);

export default function contact() {
    return (
      <section
        id="contact"
        className="relative w-full pt-24"
      >
      <div className="relative z-10 mx-auto flex-col text-[whitesmoke]">
        <div className="flex flex-col items-start justify-center px-4 sm:px-0 max-w-[1200px] mx-auto">
          <GradientText
            className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
            >
            CONTACT INFORMATION
          </GradientText>
          <AnimateTitle>
            CONTACT
          </AnimateTitle>
          <div className="w-full flex flex-col items-center justify-center overflow-hidden">
            <GradientText
              className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
              >
              STAY IN TOUCH
            </GradientText>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-[1200px]">
          {/* ContactForm tampil dulu di mobile, tapi di desktop tetap di kanan */}
          <div className="order-2 md:order-2 w-full md:w-1/2 px-4">
            <ContactForm />
          </div>

          {/* LanyardNoSSR tampil kedua di mobile, tapi di desktop tetap di kiri */}
          <div className="order-1 md:order-1 w-full md:w-1/2 px-4">
            <LanyardNoSSR />
          </div>
        </div>
        
      </div>
      </section>
    )
  }