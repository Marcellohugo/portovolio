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
      className="section"
    >
      <div className="section-header">
        <AboutTitle/>
        <AboutSubtitle/>
      </div>

      <div className="section-body">
        <div className="section-body left">
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

        <div className="section-body right">
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
      <div className="mt-10 w-full overflow-hidden">
        <ParallaxText direction={500} baseVelocity={-1}>
          Frontend Web Developer
        </ParallaxText>
        <ParallaxText direction={-500} baseVelocity={1}>
          Freelance Web Developer
        </ParallaxText>
      </div>
    </section>
  )
}
