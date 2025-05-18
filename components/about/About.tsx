"use client"

import TiltedCard from "../ui/animation/TiltedCard"
import ScrollReveal from "./ScrollReveal"
import ParallaxText from "./ParallaxText"
import AboutTitle from "./AboutTitle"
import AboutSubtitle from "./AboutSubtitle"
import { Button } from "../ui/button/button"
import MagneticEffect from "../ui/button/MagneticEffect"
import SkillCardStack from "./Stack"
import ParallaxPhotoGallery from "./ParallaxPhotoGallery"

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col w-full min-h-screen h-full pt-20 bg-black/90 text-[whitesmoke] overflow-hidden"
    >
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
      <div className="mt-20 w-full overflow-hidden">
        <ParallaxText direction={500} baseVelocity={-1}>
          Frontend Web Developer
        </ParallaxText>
        <ParallaxText direction={-500} baseVelocity={1}>
          Freelance Web Developer
        </ParallaxText>
      </div>

      
      
      <div className="flex flex-col items-start justify-center w-4/5 mx-auto mb-2">
        <AboutSubtitle/>
        <ParallaxPhotoGallery/>
      </div>
      <SkillCardStack/>
    </section>
  )
}
