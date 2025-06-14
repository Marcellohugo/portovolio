import AnimateTitle from "@/components/ui/text/AnimateTitle";
import GradientText from "@/components/ui/text/AnimateSubtitle";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
}

export default function SectionHeader({ subtitle, title, className }: SectionHeaderProps) {
  return (
    <div className={`flex flex-col items-start justify-center max-w-[1200px] mx-auto px-4 sm:px-0 ${className}`}>
      <GradientText className="text-heading-lg">
        {subtitle}
      </GradientText>
      <AnimateTitle>
        {title}
      </AnimateTitle>
    </div>
  );
}