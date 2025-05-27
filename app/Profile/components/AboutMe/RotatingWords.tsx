import { useEffect, useState } from "react";

const words = ["Halo", "Dunia", "Ini", "React", "TypeScript"];

export default function RotatingWords() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 250); // sangat amat sangat cepat

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-10">
      <span className="text-[clamp(1rem,2vw,1.5rem)] leading-[1.4] font-semibold">
        WHAT PEOPLE SAY ABOUT ME
      </span> 
      <h1 className="text-[clamp(1.6rem,4vw,3rem)] font-bold text-white">
        {words[index]}
      </h1>
    </div>
  );
}
