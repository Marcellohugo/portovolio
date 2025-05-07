"use client"

import TiltedCard from "../ui/animation/TiltedCard"
import ScrollReveal from "../ui/text/ScrollReveal"
import ParallaxText from "../ui/text/ParallaxText"
import AboutTitle from "./AboutTitle"
import AboutSubtitle from "./AboutSubtitle"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import MagneticEffect from "../ui/button/MagneticEffect"

export default function About() {
  return (
    <section
      id="about"
      className="relative top-0 bg-black/90 flex min-h-screen h-full w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-full flex-col items-center justify-center">
        <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">

          <AboutTitle/>
          <AboutSubtitle/>

          <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
            <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:max-w-[90%] lg:text-base">
              <ScrollReveal
                baseRotation = {0}
                enableBlur = {false}
              >
                Saya Marco Marcello Hugo. Selama perjalanan karir saya, saya senang berkecimpung di bidang Front-end Development dan Mobile Development. Dalam mengisi pengalaman di ranah dunia pekerjaan, saya juga aktif terlibat dalam berbagai kegiatan yang berkaitan dengan logistik dan persiapan peralatan.
              </ScrollReveal>
              <Stack spacing={2} direction="row">
                <MagneticEffect>
                  <Button variant="text">Download CV</Button> 
                </MagneticEffect>
                <MagneticEffect>
                  <Button href="about" variant="contained">Get to know me</Button>
                </MagneticEffect>
                
                <MagneticEffect>
                  <Button href="#contact" variant="outlined">Contact Me</Button>
                </MagneticEffect>
              </Stack>
            </div>

            <div className="mb-24 flex w-full justify-center tracking-wide sm:mb-32 md:mb-40 md:gap-6 md:leading-relaxed lg:mb-16 lg:max-w-[90%]">
              <TiltedCard
                imageSrc="/images/Profile.png"
                altText="Kendrick Lamar - GNX Album Cover"
                captionText="Kendrick Lamar - GNX"
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
                    Kendrick Lamar - GNX
                  </p>
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 w-full overflow-hidden">
          <ParallaxText direction={500} baseVelocity={-1}>
            Frontend Web Developer
          </ParallaxText>
          <ParallaxText direction={-500} baseVelocity={1}>
            Freelance Web Developer
          </ParallaxText>
        </div>
      </div>  
    </section>
  )
}
