import ContactTitle from "./ContactTittle";
import ContactSubtitle from "./ContactSubtittle";
import MagneticEffect from "../ui/button/MagneticEffect";
import Lanyard from "../ui/animation/Lanyard";
import ContactForm from "./ContactForm";

export default function contact() {
    return (
      <section
        id="contact"
        className="relative w-full pt-24"
      >
      <div className="relative z-10 mx-auto flex-col px-4 text-[whitesmoke]">
        <div className="flex flex-col items-start justify-center max-w-[1200px] mx-auto">
          <ContactTitle/>
          <ContactSubtitle/>
        </div>

        <div className="flex flex-row items-center justify-center mx-auto w-[100%]">
          <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
            <Lanyard />
          </div>
          <div className="flex flex-col items-center justify-center w-1/2 max-w-[50%] pr-10">
            <ContactForm/>
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
                  Copyright © 2023 - 2025 by Marcello Hugo
              </div>
            </MagneticEffect>
          </div>
        </div>
      </div>
      </section>
    )
  }