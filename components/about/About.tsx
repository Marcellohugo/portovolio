import AboutTitle from "./AboutTitle"
import AboutSubtitle from "./AboutSubtitle"
import ScrollReveal from "./ScrollReveal"
import { Button } from "../ui/button/button"
import MagneticEffect from "../ui/button/MagneticEffect"
import TiltedCard from "../ui/animation/TiltedCard"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="relative w-full pt-24">
      <div className="relative z-10 mx-auto flex-col text-[whitesmoke]">

        {/* Title & Subtitle */}
        <div className="flex flex-col items-start justify-center max-w-[1200px] mx-auto">
          <AboutTitle />
          <div className="">

          </div>
          <AboutSubtitle />
        </div>

        {/* Wrapper asli: kolom di mobile, row di desktop */}
        <div className="flex flex-col sm:flex-row items-center justify-center mx-auto max-w-[1200px]">
          
          {/* Teks */}
          <div className="w-full sm:w-1/2 flex flex-col items-center justify-center mb-20 sm:mb-52 px-4">
            <ScrollReveal baseRotation={0} enableBlur={false}>
              Saya Marco Marcello Hugo. Selama perjalanan karir saya, saya senang berkecimpung di bidang Front-end Development dan Mobile Development. Dalam mengisi pengalaman di ranah dunia pekerjaan, saya juga aktif terlibat dalam berbagai kegiatan yang berkaitan dengan logistik dan persiapan peralatan.
            </ScrollReveal>
            <div className="flex flex-row w-full items-center justify-center sm:items-start sm:justify-start space-x-6 mt-4">
              <Link href="/Profile">
                <MagneticEffect>
                  <Button variant="secondary">Get to know me</Button>
                </MagneticEffect>
              </Link>
            </div>
          </div>

          {/* Desktop Image (tetap sama) */}
          <div className="hidden sm:flex sm:flex-col sm:items-center sm:justify-center sm:w-1/2">
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

        {/* Mobile Image: muncul hanya di ≤sm, di bawah seluruh wrapper */}
        <div className="sm:hidden flex w-full justify-center mb-12 px-4">
          <TiltedCard
            imageSrc="/images/Profile.png"
            altText="Marco Marcello Hugo"
            captionText="Stop staring at me!"
            containerHeight="300px"
            containerWidth="300px"
            imageHeight="300px"
            imageWidth="300px"
            rotateAmplitude={8}
            scaleOnHover={1.1}
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />
        </div>

      </div>
    </section>
)
}
