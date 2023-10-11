import SkillsSection from "@/sections/SkillsSection/SkillsSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import ProjectsSection from "@/sections/ProjectsSection/ProjectsSection";
import LanguagesSection from "@/sections/LanguagesSection/LanguagesSection";
import EducationSection from "@/sections/EducationSection/EducationSection";
import ContactsSection from "@/sections/ContactSection/ContactSection";
import ExperienceSection from "@/sections/ExperienceSection/ExperienceSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <LanguagesSection />
      <EducationSection />
      <ExperienceSection />
      <ContactsSection />
    </main>
  );
}
