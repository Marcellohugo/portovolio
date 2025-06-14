import MagneticEffect from "@/components/ui/button/MagneticEffect";

export default function Footer() {
  return (
    <footer className="w-full text-foreground py-8 flex justify-center items-center text-center">
      <div className="text-sm">
        <MagneticEffect>
          <div className="font-signature text-xl">Marcello Hugo</div>
        </MagneticEffect>
        <MagneticEffect>
          <div className="text-body-sm">Front-end Developer</div>
        </MagneticEffect>
        <MagneticEffect>
          <div className="text-caption text-muted-foreground mt-2">
            Copyright © 2025 by Marcello Hugo
          </div>
        </MagneticEffect>
      </div>
    </footer>
  );
}