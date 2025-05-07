import ContactTitle from "./ContactTittle";
import ContactSubtitle from "./ContactSubtittle";
import MagneticEffect from "../ui/button/MagneticEffect";
import Lanyard from "../ui/animation/Lanyard";

export default function contact() {
    return (
      <section
        id="contact"
        className="relative top-0 bg-black/90 flex min-h-screen h-full w-full items-center justify-center overflow-hidden"
      >
        <div className="mx-auto flex w-full flex-col items-center justify-center">
          <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
            <ContactTitle/>
            <ContactSubtitle/>
          

            <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
              <div className="flex w-full flex-col md:gap-6">
                <Lanyard />
              </div>
              <div className="flex w-full justify-center tracking-wide sm:mb-32 md:mb-40 md:gap-6 md:leading-relaxed">

              </div>
            </div>

            <div className="relative bottom-0 w-full text-white py-4 flex justify-center items-center text-center">
              <div className="text-sm">
                <MagneticEffect>
                  <div className="font-signature text-xl">Marcello Hugo</div>
                </MagneticEffect>
                <MagneticEffect>
                  <div className="text-xs">Frond-end Developer</div>
                </MagneticEffect>
                <MagneticEffect>
                  <div className="text-[10px] text-gray-400">
                      Copyright © 2023 - 2025 by Frans Jesky
                  </div>
                </MagneticEffect>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }