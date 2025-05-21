import AboutTitle from "./AboutTitle"
import AboutSubtitle from "./AboutSubtitle"
import ScrollReveal from "./ScrollReveal"
import { Button } from "../ui/button/button"
import MagneticEffect from "../ui/button/MagneticEffect"
import TiltedCard from "../ui/animation/TiltedCard"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="relative w-full pt-24 ">
      <div className="relative z-10 mx-auto flex-col px-4 text-[whitesmoke]">

        {/* First content block: Title, Subtitle, Text, Buttons, Image */}
        <div className="flex flex-col items-start justify-center max-w-[1200px] mx-auto">
          <AboutTitle />
          <AboutSubtitle />
        </div>
        <div className="flex flex-row items-center justify-center  mx-auto max-w-[1200px]">
          <div className="flex flex-col items-center justify-center w-1/2 mx-auto mb-52">
            <ScrollReveal baseRotation={0} enableBlur={false}>
              Saya Marco Marcello Hugo. Selama perjalanan karir saya, saya senang berkecimpung di bidang Front-end Development dan Mobile Development. Dalam mengisi pengalaman di ranah dunia pekerjaan, saya juga aktif terlibat dalam berbagai kegiatan yang berkaitan dengan logistik dan persiapan peralatan.
            </ScrollReveal>
            <div className="flex flex-row w-full items-start justify-start space-x-6 mt-4">
              <MagneticEffect>
                <Button variant="outline">Download CV</Button>
              </MagneticEffect>
              <Link href="/About">
                <MagneticEffect>
                  <Button variant="outline">Get to know me</Button>
                </MagneticEffect>
              </Link>
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
    </section>
  )
}
