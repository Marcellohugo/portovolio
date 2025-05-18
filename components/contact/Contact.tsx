import ContactTitle from "./ContactTittle";
import ContactSubtitle from "./ContactSubtittle";
import MagneticEffect from "../ui/button/MagneticEffect";
import Lanyard from "../ui/animation/Lanyard";
import ContactForm from "./ContactForm";

export default function contact() {
    return (
      <section
        id="contact"
        className="section"
      >
        <div className="section-header">
          <ContactTitle/>
          <ContactSubtitle/>
        </div>

      <div className="section-body w-[100%]">
        <div className="left">
          <Lanyard />
        </div>
        <div className="right mr-[5]">
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
                  Copyright © 2023 - 2025 by Frans Jesky
              </div>
            </MagneticEffect>
          </div>
        </div>
      </section>
    )
  }