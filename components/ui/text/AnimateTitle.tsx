import type { ReactNode } from "react";

interface AnimateTitleProps {
  children: ReactNode;
  containerClassName?: string;
  textClassName?: string;
}

export default function AnimateTitle({
  children,
  containerClassName = "",
  textClassName = "",
}: AnimateTitleProps) {
  return (
    <h2 className={`overflow-hidden ${containerClassName}`}>
      <span className={`inline-block text-[clamp(2.5rem,14vw,10rem)] font-bold leading-[1.1] ${textClassName}`}>
        {children}
      </span>
    </h2>
  );
}
