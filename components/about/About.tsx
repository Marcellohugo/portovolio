import Link from "next/link";
import { Button } from "@/components/ui/button/Button";
import MagneticEffect from "@/components/ui/button/MagneticEffect";
import ScrollReveal from "@/components/about/ScrollReveal";
import TiltedCard from "@/components/ui/animation/TiltedCard";
import SectionHeader from "@/components/shared/SectionHeader";
import GradientText from "@/components/ui/text/AnimateSubtitle";

export default function About() {
  return (
    <section 
      id="about" 
      className="relative w-full pt-24"
    >
      <div className="relative z-10 mx-auto flex-col text-foreground">
        <SectionHeader subtitle="INTRODUCTION" title="PROFILE" />

        <div className="w-full flex flex-col items-center justify-center text-center mt-12 mb-8">
          <GradientText className="text-heading-xl">
            HOLLA, AMIGO!
          </GradientText>
        </div>

        {/* Layout disatukan untuk mobile dan desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center mx-auto max-w-[1200px] px-4 gap-8 md:gap-12 mb-20">
          
          {/* Teks dan Tombol */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            <ScrollReveal baseRotation={0} enableBlur={false}>
              Saya Marco Marcello Hugo. Selama perjalanan karir saya, saya senang berkecimpung di bidang Front-end Web Development dan Mobile Development. Dalam mengisi pengalaman di ranah perkuliahan, saya juga aktif terlibat dalam berbagai organisasi serta kegiatan yang berkaitan dengan logistik dan peralatan.
            </ScrollReveal>
            <div className="mt-6">
              <Link href="/profile">
                <MagneticEffect>
                  <Button variant="secondary">Get to know me</Button>
                </MagneticEffect>
              </Link>
            </div>
          </div>

          {/* Gambar */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <TiltedCard
              imageSrc="/images/Profile.png"
              altText="Marco Marcello Hugo"
              captionText="Stop staring at me!"
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>
        </div>

      </div>
    </section>
  );
}