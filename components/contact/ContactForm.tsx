// file: components/ContactForm.tsx

"use client"

import { formSubmission } from "../../action/formAction"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Loader, Mail } from "lucide-react"
import { useEffect, useRef, useState } from "react" // Import useEffect & useState
import { useFormState, useFormStatus } from "react-dom"
import MagneticEffect from "../ui/button/MagneticEffect"
import { Button } from "../ui/button/Button"
import ContactFormLine from "./ContactFormLine"
import useIsomorphicLayoutEffect from "../../hooks/UseIsomorphicLayoutEffect"

export default function ContactForm() {
  const el = useRef<HTMLDivElement | null>(null)
  const formEl = useRef<HTMLFormElement | null>(null)
  const { pending } = useFormStatus()

  // Definisikan state awal yang sesuai dengan server action
  const initialState = {
    errors: { email: false, name: false, message: false, subject: false },
    success: false,
    message: "",
  }

  const [state, formAction] = useFormState(formSubmission, initialState)
  
  // State untuk mengontrol visibilitas form, agar bisa disembunyikan saat sukses
  const [formVisible, setFormVisible] = useState(true);

  // useEffect untuk menangani efek samping setelah state berubah
  useEffect(() => {
    // Jika pengiriman sukses...
    if (state.success) {
      // 1. Reset field input pada form
      formEl.current?.reset()
      
      // 2. Sembunyikan form untuk menampilkan pesan sukses
      setFormVisible(false);
      
      // 3. (Opsional) Atur timer untuk menampilkan kembali form setelah 5 detik
      const timer = setTimeout(() => {
        setFormVisible(true);
      }, 5000);

      // Membersihkan timer jika komponen di-unmount
      return () => clearTimeout(timer);
    }
  }, [state]) // Jalankan hook ini setiap kali 'state' berubah

  useIsomorphicLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.fromTo(
      ".contact-content",
      { translateY: "-50%" },
      {
        translateY: 0,
        ease: "none",
        scrollTrigger: {
          trigger: ".contact-section",
          scrub: true,
          start: "top bottom",
          end: "top top",
        },
      }
    )
  }, [])

  const { errors } = state

  const handleFocus = (inputId: number) => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.input-line-${inputId}`,
        { translateX: 0 },
        {
          translateX: "66%",
          duration: 1,
          ease: "power1.inOut",
        }
      )
    })

    return () => ctx.revert()
  }

  return (
    <div
      ref={el}
      className="mx-auto mb-12 flex w-full max-w-[90rem] flex-col gap-3 text-4xl"
    >
      {/* Bagian untuk menampilkan pesan feedback (sukses atau gagal) */}
      {/* Pesan ini hanya muncul jika ada pesan di state DAN form sedang tidak terlihat (setelah submit sukses) */}
      {state.message && !formVisible && (
        <div className={`p-4 my-4 rounded-md text-center text-base font-semibold ${state.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {state.message}
        </div>
      )}

      {/* Tampilkan form hanya jika formVisible adalah true */}
      {formVisible && (
        <form ref={formEl} action={formAction}>
            {/* Input Name */}
            <div className="group">
              <div className="relative overflow-hidden">
                <input
                  type="text"
                  placeholder="Your name"
                  name="name"
                  autoComplete="off"
                  onFocus={() => handleFocus(1)}
                  className="peer w-full bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 "
                />
                <ContactFormLine inputId={1} hasError={errors.name} />
              </div>
              {errors.name && (
                <span className="block text-sm font-light text-red-500 lg:text-base">
                  Please enter a valid name
                </span>
              )}
            </div>
            {/* Input Email */}
            <div className="group">
              <div className="relative overflow-hidden">
                <input
                  type="email"
                  name="email"
                  autoComplete="off"
                  placeholder="Your email"
                  onFocus={() => handleFocus(2)}
                  className="peer w-full bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 "
                />
                <ContactFormLine inputId={2} hasError={errors.email} />
              </div>
              {errors.email && (
                <span className="block text-sm font-light text-red-500 lg:text-base">
                  Please enter a valid email address
                </span>
              )}
            </div>
            {/* Input Subject */}
            <div className="group">
              <div className="relative overflow-hidden">
                <input
                  type="text"
                  name="subject"
                  autoComplete="off"
                  placeholder="Subject"
                  onFocus={() => handleFocus(3)}
                  className="peer w-full bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 "
                />
                <ContactFormLine inputId={3} hasError={errors.subject} />
              </div>
              {errors.subject && (
                <span className="block text-sm font-light text-red-500 lg:text-base">
                  Please enter a valid subject
                </span>
              )}
            </div>
            {/* Input Message */}
            <div className="group">
              <div className="relative overflow-hidden">
                <textarea
                  className="peer min-h-[11rem] w-full resize-none bg-transparent py-5 text-xl font-bold text-zinc-200 outline-none transition-colors duration-200 ease-in-out placeholder:text-zinc-200/50 "
                  placeholder="Your Message"
                  name="message"
                  onFocus={() => handleFocus(4)}
                />
                <ContactFormLine inputId={4} hasError={errors.message} />
              </div>
              {errors.message && (
                <span className="block text-sm font-light text-red-500 lg:text-base">
                  Please enter a message at least 3 characters long
                </span>
              )}
            </div>
            <div className="w-full flex justify-center md:justify-start mt-4">
              <MagneticEffect>
                <Button
                  aria-disabled={pending}
                  variant="secondary"
                  size="lg"
                  className="mt-6"
                  type="submit" // Pastikan type adalah "submit"
                >
                  {pending ? (
                    <div className="inline-flex items-center gap-x-2">
                      <Loader className="h-6 w-6 animate-spin" />
                      <span>Sending ...</span>
                    </div>
                  ) : (
                    <div className="inline-flex items-center gap-x-2">
                      <Mail className="h-6 w-6" />
                      <span>Send</span>
                    </div>
                  )}
                </Button>
              </MagneticEffect>
            </div>
        </form>
      )}
    </div>
  )
}