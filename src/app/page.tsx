import SkillsSection from "@/sections/SkillsSection/SkillsSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection/ProjectsSection";
import LanguagesSection from "@/sections/LanguagesSection/LanguagesSection";
import EducationSection from "@/sections/EducationSection/EducationSection";
import ContactsSection from "@/sections/ContactSection/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <LanguagesSection />
      <EducationSection />
      <ContactsSection />
    </main>
  );
}
