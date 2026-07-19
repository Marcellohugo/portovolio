import Link from "next/link";
import { buttonClassName } from "../ui/button/Button";
import MagneticEffect from "../ui/button/MagneticEffect";

export default function ProjectButton() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-4">
      <h2 className="text-heading-xl font-bold text-center">See other projects</h2>
      <MagneticEffect>
        <Link href="/projects" className={buttonClassName({ size: "lg", variant: "secondary" })}>
          Load More
        </Link>
      </MagneticEffect>
    </div>
  );
}
