import AnimateTitle from "@/components/ui/text/AnimateTitle";
import GradientText from "@/components/ui/text/AnimateSubtitle";

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeader({ subtitle, title, className, titleClassName }: SectionHeaderProps) {
  return (
    <div className={`mx-auto flex max-w-[1200px] flex-col items-start justify-center px-4 sm:px-6 lg:px-8 ${className}`}>
      <GradientText className="text-heading-lg">
        {subtitle}
      </GradientText>
      <AnimateTitle textClassName={titleClassName}>
        {title}
      </AnimateTitle>
    </div>
  );
}
