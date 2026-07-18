import Link from "next/link";
import { Button } from "../ui/button/Button";
import MagneticEffect from "../ui/button/MagneticEffect";

export default function ProjectButton() {
  return (
    <div className="mb-10 flex flex-col items-center justify-center gap-4">
      <h2 className="text-heading-xl font-bold text-center">See other projects</h2>
      <MagneticEffect>
        <Button asChild size="lg" variant="secondary">
          <Link href="/projects">Load More</Link>
        </Button>
      </MagneticEffect>
    </div>
  );
}
