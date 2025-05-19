"use client"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import AboutTitle from "./AboutTitle"
import AboutSubtitle from "./AboutSubtitle"
import ScrollReveal from "./ScrollReveal"
import { Button } from "../ui/button/button"
import MagneticEffect from "../ui/button/MagneticEffect"
import TiltedCard from "../ui/animation/TiltedCard"
import ParallaxText from "./ParallaxText"
import ParallaxPhotoGallery from "./ParallaxPhotoGallery"
import SkillCardStack from "./Stack"

export default function About() {
  return (
    <section id="projects" className="relative w-full min-h-screen pt-24 pb-32">
      {/* Semi-transparent background overlay */}
      <div className="absolute inset-0 bg-/30 backdrop-blur-sm z-0"></div>
      <div className="flex-row mx-auto relative z-10 text-[whitesmoke]">
        <div className="container flex-row mx-auto px-4 relative">
          <div className="flex flex-col items-start justify-center w-4/5 mx-auto mb-2">
            <AboutTitle/>
            <AboutSubtitle/>
          </div>

          <div className="flex flex-row items-center justify-center min-h-full mx-auto w-[80%]">
            <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-52">
              <ScrollReveal
                baseRotation = {0}
                enableBlur = {false}
              >
                Saya Marco Marcello Hugo. Selama perjalanan karir saya, saya senang berkecimpung di bidang Front-end Development dan Mobile Development. Dalam mengisi pengalaman di ranah dunia pekerjaan, saya juga aktif terlibat dalam berbagai kegiatan yang berkaitan dengan logistik dan persiapan peralatan.
              </ScrollReveal>
              <div className="flex flex-row w-full items-start justify-start space-x-6 mt-4">
                <MagneticEffect>
                  <Button variant="outline">Download CV</Button> 
                </MagneticEffect>
                <MagneticEffect>
                  <Button variant="outline">Get to know me</Button>
                </MagneticEffect>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-20">
              <TiltedCard
                imageSrc="/images/Profile.png"
                altText="Marco Marcello Hugo"
                captionText="Stop staring at me!"
                containerHeight="400px"
                containerWidth="400px"
                imageHeight="400px"
                imageWidth="400px"
                rotateAmplitude={12}
                scaleOnHover={1.2}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text">
                    Haii, this is me
                  </p>
                }
              />
            </div>
          </div>
        </div>

        {/* <div className="w-full">
          <ParallaxText direction={500} baseVelocity={-1}>
            Frontend Web Developer
          </ParallaxText>
          <ParallaxText direction={-500} baseVelocity={1}>
            Freelance Web Developer
          </ParallaxText>
        </div> */}

        {/* <div className="flex-col items-start justify-center">
          <AboutTitle/>
          <AboutSubtitle/>
        </div> */}

      </div>
      
      
    </section>
  )
}
