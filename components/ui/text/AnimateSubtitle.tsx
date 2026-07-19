import React, { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
}

export default function GradientText({
  children,
  className = "",
  colors = ["hsl(var(--primary-dark))", "hsl(var(--primary))", "hsl(var(--primary-dark))", "hsl(var(--primary))", "hsl(var(--primary-dark))"],
  animationSpeed = 10,
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div
      className={`relative flex max-w-full flex-row overflow-hidden rounded-[1.25rem] font-medium transition-shadow duration-500 ${className}`}
    >
      <div
        className="relative z-2 inline-block max-w-full break-words bg-cover font-display text-transparent animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          backgroundSize: "300% 100%",
        }}
      >
        {children}
      </div>
    </div>
  );
}
