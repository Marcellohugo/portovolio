import AnimateTitle from "../ui/text/AnimateTitle";
import GradientText from "../ui/text/AnimateSubtitle";
import ScrollReveal from "./ScrollReveal";
import { Button } from "../ui/button/Button";
import MagneticEffect from "../ui/button/MagneticEffect";
import TiltedCard from "../ui/animation/TiltedCard";
import Link from "next/link";

export default function About() {
  return (
    <section 
    id="about" 
    className="relative w-full pt-24"
    >
      <div className="relative z-10 mx-auto flex-col text-[whitesmoke]">
        {/* Title & Subtitle */}
        <div className="flex flex-col items-start justify-center max-w-[1200px] mx-auto">
          <GradientText
            className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
            >
            INTRODUCTION
          </GradientText>
          <AnimateTitle>
            PROFILE
          </AnimateTitle>
          <div className="w-full flex flex-col items-center justify-center overflow-hidden">
            <GradientText
              className="items-center justify-center text-[clamp(1.6rem,4vw,3rem)] leading-[1.5] font-semibold"
              >
              HOLLA, AMIGO!
            </GradientText>
          </div>
        </div>

        {/* === VERSI MOBILE: Gambar di Atas, Paragraf di Bawah === */}
        <div className="sm:hidden flex flex-col items-center mx-auto max-w-[1200px] px-4 mb-12">
          {/* Gambar Mobile */}
          <TiltedCard
            imageSrc="/images/Profile.png"
            altText="Marco Marcello Hugo"
            captionText="Stop staring at me!"
            showMobileWarning={false}
            showTooltip={false}
            displayOverlayContent={false}
          />

          {/* Sedikit jarak sebelum paragraf */}
          <div className="mt-8 w-full flex flex-col items-center justify-center">
            <ScrollReveal baseRotation={0} enableBlur={false}>
              Saya Marco Marcello Hugo. Selama perjalanan karir saya, saya senang berkecimpung di bidang Front-end Development dan Mobile Development. Dalam mengisi pengalaman di ranah dunia pekerjaan, saya juga aktif terlibat dalam berbagai kegiatan yang berkaitan dengan logistik dan persiapan peralatan.
            </ScrollReveal>
            <div className="flex flex-row w-full items-center justify-center space-x-6 mt-4">
              <Link href="/Profile">
                <MagneticEffect>
                  <Button variant="secondary">Get to know me</Button>
                </MagneticEffect>
              </Link>
            </div>
          </div>
        </div>

        {/* === VERSI TABLET/DESKTOP: Teks dan Gambar berdampingan === */}
        <div className="hidden sm:flex flex-row items-center justify-center mx-auto max-w-[1200px] px-4 mb-20">
          {/* Paragraf + Tombol (kiri) */}
          <div className="w-full sm:w-1/2 flex flex-col items-start justify-center pr-8">
            <ScrollReveal baseRotation={0} enableBlur={false}>
              Saya Marco Marcello Hugo. Selama perjalanan karir saya, saya senang berkecimpung di bidang Front-end Development dan Mobile Development. Dalam mengisi pengalaman di ranah dunia pekerjaan, saya juga aktif terlibat dalam berbagai kegiatan yang berkaitan dengan logistik dan persiapan peralatan.
            </ScrollReveal>
            <div className="flex flex-row w-full items-start justify-start space-x-6 mt-4">
              <Link href="/Profile">
                <MagneticEffect>
                  <Button variant="secondary">Get to know me</Button>
                </MagneticEffect>
              </Link>
            </div>
          </div>

          {/* Gambar Desktop/Tablet (kanan) */}
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <TiltedCard
              imageSrc="/images/Profile.png"
              altText="Marco Marcello Hugo"
              captionText="Stop staring at me!"
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="tilted-card-demo-text text-center text-[18px] font-medium">
                  Haii, this is me
                </p>
              }
            />
          </div>
        </div>

      </div>
    </section>
  );
}
