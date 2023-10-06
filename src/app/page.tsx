import SkillsSection from "@/sections/SkillsSection/SkillsSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection/ProjectsSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
    </main>
  );
}
