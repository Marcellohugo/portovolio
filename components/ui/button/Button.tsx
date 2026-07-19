import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "default" | "secondary" | "outline";
type ButtonSize = "default" | "lg";

const baseClass = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export function buttonClassName({
  variant = "default",
  size = "default",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(
    baseClass,
    variant === "outline"
      ? "border border-foreground text-foreground hover:bg-foreground hover:text-background focus:ring-primary"
      : "bg-primary text-primary-foreground hover:brightness-110 focus:ring-primary",
    size === "lg" ? "h-11 rounded-md px-8" : "h-10 px-4 py-2",
    className,
  );
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={buttonClassName({ variant, size, className })}
      {...props}
    />
  ),
);

Button.displayName = "Button";

export { Button };
