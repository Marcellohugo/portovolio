import React from "react";
import Image from "next/image";

export default function HighlightSection() {
  return (
    <section className="flex items-center justify-center px-4 sm:px-8">
      <div className="relative w-full max-w-[1200px] py-8 md:py-10 flex flex-col lg:flex-row items-center">
        <div className="relative w-full md:w-1/2 h-[300px] md:h-[500px]">
          <div
            className="
              absolute 
              top-4 md:top-8 
              left-0 
              w-56 h-36 
              md:w-[420px] md:h-[280px] 
              shadow-lg rounded-2xl overflow-hidden
            "
          >
            <Image
              src="/images/Personal2.png"
              alt="Screenshot 1"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="
              absolute 
              top-0 
              md:top-0 
              left-12 md:left-20 
              w-60 h-40 
              md:w-[440px] md:h-[300px] 
              shadow-xl rounded-2xl overflow-hidden
            "
          >
            <Image
              src="/images/Personal1.png"
              alt="Screenshot 2"
              fill
              className="object-cover"
            />
          </div>
          <div
            className="
              absolute 
              top-24 md:top-40 
              left-20 md:left-40 
              w-60 h-40 
              md:w-[400px] md:h-[260px] 
              shadow-2xl rounded-2xl overflow-hidden
            "
          >
            <Image
              src="/images/Personal.png"
              alt="Screenshot 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="w-full lg:pl-80 text-white mt-6 md:mt-0">
          <p className="text-base md:text-lg text-justify leading-relaxed mb-6 md:mb-8">
            A generative trivia website built with Next.js, Firebase, NextAuth, Google OAuth,
            and TypeScript. Users can generate trivia questions for predefined school
            subjects and answer them with a unique interactive input style. The application
            supports user authentication with Google and stores data in Firestore. You can
            see the source code of this project on my GitHub account or preview the project
            by clicking the button below.
          </p>
        </div>
      </div>
    </section>
  );
}
