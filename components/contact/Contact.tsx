import ContactTitle from "./ContactTittle";
import ContactSubtitle from "./ContactSubtittle";
import MagneticEffect from "../ui/button/MagneticEffect";
import Lanyard from "../ui/animation/Lanyard";
import ContactForm from "./ContactForm";

export default function contact() {
    return (
      <section
        id="contact"
        className="relative flex flex-col w-full min-h-screen h-full pt-20 bg-black/90 text-[whitesmoke] overflow-hidden"
      >
        <div className="flex flex-col items-start justify-center w-4/5 mx-auto">
          <ContactTitle/>
          <ContactSubtitle/>
        </div>

      <div className="flex flex-row items-center justify-center min-h-full mx-auto w-[100%]">
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
          <Lanyard />
        </div>
        <div className="flex flex-col items-center justify-center w-1/2 mx-auto mr-[5]">
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