"use client";

import React, { useEffect, useState } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;      // kecepatan tiap karakter (ms)
  loop?: boolean;      // apakah mengulang teks
  delay?: number;      // jeda antar loop (ms)
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 300,
  loop = true,
  delay = 2000,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    } else if (loop) {
      const delayTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, delay);
      return () => clearTimeout(delayTimeout);
    }
  }, [index, text, speed, loop, delay]);

  return (
    <div className="text-[clamp(1.6rem,4vw,3rem)] font-display text-center text-foreground">
      {displayedText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

export default TypingText;
