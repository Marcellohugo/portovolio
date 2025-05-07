import { useEffect, useState } from "react";
import RotatingText from "../ui/text/RotatingText";
import Particles from "../ui/background/Particles";
import SpotlightCard from "../ui/animation/SpotlightCard";

type PreloadProps = {
  onStart: () => void;
};

export default function Preload({ onStart }: PreloadProps) {
  const [step, setStep] = useState(1);
  useEffect(() => {
    if (step === 1) {
      const timer = setTimeout(() => setStep(2), 6000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden">
      {step === 1 && (
        <div className="relative z-10 flex items-center justify-center w-full">
          <span className="text-4xl sm:text-6xl md:text-8xl font-bold mr-4 text-white">
            I am
          </span>
          <RotatingText
            texts={['Front-End Dev', 'Full-Stack Dev', 'Funny Guy', 'Marco Marcello Hugo']}
          />
        </div>
      )}

      {step === 2 && (
        <div className="relative z-10 flex flex-col items-center justify-center gap-6">
          <SpotlightCard
            spotlightColor="rgba(255, 255, 255, 0.25)"
            className="flex flex-col items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900 p-6 w-80 h-80"
          >
            <h1 className="text-2xl font-bold text-white text-center">Welcome</h1>
            <p className="mt-2 text-base text-gray-300 text-center">
              Explore my projects and skills.
            </p>
            <button
              className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition"
              onClick={onStart}
            >
              Get Started
            </button>
          </SpotlightCard>
        </div>
      )}
    </div>
  );
}
