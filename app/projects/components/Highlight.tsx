import React from "react";
import Image from "next/image";

export default function HighlightSection() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-8">
      <div className="relative flex w-full max-w-[1200px] flex-col items-center py-8 md:py-10 lg:flex-row">
        <div className="relative h-[300px] w-full sm:h-[420px] lg:h-[500px] lg:w-1/2">
          <div
            className="
              absolute 
              top-4 sm:top-8
              left-0 
              w-[68%] max-w-[420px] aspect-[3/2]
              shadow-lg rounded-2xl overflow-hidden
            "
          >
            <Image
              src="/images/Personal2.png"
              alt="Screenshot 1"
              fill
              sizes="(max-width: 1024px) 68vw, 420px"
              className="object-cover"
            />
          </div>
          <div
            className="
              absolute 
              top-0 
              left-[10%]
              w-[72%] max-w-[440px] aspect-[22/15]
              shadow-xl rounded-2xl overflow-hidden
            "
          >
            <Image
              src="/images/Personal1.png"
              alt="Screenshot 2"
              fill
              sizes="(max-width: 1024px) 72vw, 440px"
              className="object-cover"
            />
          </div>
          <div
            className="
              absolute 
              top-24 sm:top-40
              left-[20%]
              w-[68%] max-w-[400px] aspect-[20/13]
              shadow-2xl rounded-2xl overflow-hidden
            "
          >
            <Image
              src="/images/Personal.png"
              alt="Screenshot 3"
              fill
              sizes="(max-width: 1024px) 68vw, 400px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-6 w-full text-foreground lg:mt-0 lg:w-1/2 lg:pl-12">
          <p className="text-body-base md:text-body-lg text-justify leading-relaxed mb-6 md:mb-8">
            Personal website built with Next.js, NextAuth, and TypeScript. This application has a Real Experience Score of 97 and is presented attractively through appearance and color and supports direct interaction by sending messages via email. Users can see my background, experience, and projects that I have created. You can see my other projects below.
          </p>
        </div>
      </div>
    </section>
  );
}
