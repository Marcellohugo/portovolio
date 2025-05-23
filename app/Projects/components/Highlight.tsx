import React from "react";
import Image from "next/image";

export default function HighlightSection() {
  return (
    <section className="flex items-center justify-center px-8">
      <div className="relative w-full max-w-[1200px] flex items-center">
        {/* LEFT: overlapping screenshots */}
        <div className="relative w-1/2 h-[500px]">
          {/* Back img */}
          <div className="absolute top-8 left-0 w-[420px] h-[280px] shadow-lg rounded-2xl overflow-hidden">
            <Image
              src="/images/project-1.png"
              alt="Screenshot 1"
              fill
              className="object-cover"
            />
          </div>
          {/* Middle img */}
          <div className="absolute top-0 left-20 w-[440px] h-[300px] shadow-xl rounded-2xl overflow-hidden">
            <Image
              src="/images/project-1.png"
              alt="Screenshot 2"
              fill
              className="object-cover"
            />
          </div>
          {/* Front img */}
          <div className="absolute top-40 left-40 w-[400px] h-[260px] shadow-2xl rounded-2xl overflow-hidden">
            <Image
              src="/images/project-1.png"
              alt="Screenshot 3"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* RIGHT: title, description, buttons */}
        <div className="w-1/2 pl-16 text-gray-800">
          <p className="text-lg leading-relaxed mb-8 max-w-lg">
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
