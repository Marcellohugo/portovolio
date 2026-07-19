import Link from "next/link";
import { LuArrowLeft as ArrowLeft } from "react-icons/lu";

export default function BackButton() {
  return (
    <Link
      href="/"
      aria-label="Back to home"
      className="group inline-flex h-11 items-center gap-2 rounded-full border border-border bg-slate-400/80 py-1 pl-1 pr-4 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-primary hover:text-primary dark:bg-background/70"
    >
      <span className="grid h-8 w-8 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:-translate-x-0.5">
        <ArrowLeft className="h-4 w-4" />
      </span>
      <span className="hidden sm:inline">Back home</span>
    </Link>
  );
}
