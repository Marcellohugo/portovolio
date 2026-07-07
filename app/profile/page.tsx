import PageLayout from "@/components/layout/PageLayout";
import AboutMe from "./components/AboutMe/AboutMe";
import Experience from "./components/Experience/Experience";
import TypingText from "@/components/ui/text/TypingText";

export default async function ProfilePage() {
  await new Promise((resolve) => setTimeout(resolve, 700));
  
  return (
    <PageLayout>
      <AboutMe />
      <Experience />
      <div className="w-full min-h-screen flex flex-col items-center justify-center relative py-20 px-4">
        <TypingText
          text="The only person who can limit your steps is yourself"
          speed={50}
          loop={true}
          delay={2000}
        />
      </div>
    </PageLayout>
  );
}