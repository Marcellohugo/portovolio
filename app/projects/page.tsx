import PageLayout from "@/components/layout/PageLayout";
import SectionHeader from "@/components/shared/SectionHeader";
import HighlightSection from "./components/Highlight";
import OtherProjectsSection from "./components/Project";
import GradientText from "@/components/ui/text/AnimateSubtitle";

export default async function ProjectPage() {
  await new Promise((resolve) => setTimeout(resolve, 700));
  return (
    <PageLayout>
      <div className="text-foreground">
        <SectionHeader subtitle="LIST OF" title="PROJECTS" />
        
        <div className="w-full flex flex-col items-center justify-center text-center mt-12 mb-4 px-4">
          <GradientText className="text-heading-xl">
            HIGHLIGHT
          </GradientText>
          <span className="text-body-lg font-semibold">
            ONE OF THE BEST PROJECTS I EVER DONE
          </span>
        </div>
        <HighlightSection />

        <div className="w-full flex flex-col items-center justify-center text-center mt-16 mb-8 px-4">
          <GradientText className="text-heading-xl">
              OTHER PROJECTS
          </GradientText>
          <span className="text-body-lg font-semibold">
              OTHER NOTEWORTHY PROJECTS
          </span> 
        </div>
        <OtherProjectsSection />
      </div>
    </PageLayout>
  );
}