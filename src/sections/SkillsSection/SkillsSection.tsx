import { Container } from "@/components/Container/Container";
import ScrollFadeIn from "@/components/ScrollFadeIn/ScrollFadeIn";
const skills = [
  "Html",
  "Css",
  "SASS",
  "JavaScript",
  "React",
  "Redux",
  "Redux Toolkit",
  "Next.js",
  "Tailwind Css",
  "Typescript",
  "Git",
  "Node.js",
  "Express.js",
  "MongoDB",
  "GitHub",
  "RestAPI",
  "Postman",
  "Vercel",
];

export default function SkillsSection() {
  return (
    <section className="skills-bg-mob sm:skills-bg-tab md:skills-bg-desk bg-cover bg-center bg-fixed text-center py-[60px] sm:py-[80px] md:py-[120px] min-h-screen text-white">
      <Container className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px] md:pl-[140px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
            <h2 className="text-[44px] sm:text-[76px] md:text-[92px]">
              Skills
            </h2>
            <ul className="flex flex-wrap gap-[15px]">
              {skills.map((skill, index) => (
                <li
                  key={index}
                  className="link group relative uppercase p-[1.2em] border-[1.5px] border-solid rounded-[1.5em] border-white inline-block bg-gray backdrop-blur-xl"
                >
                  <span className="group-hover:opacity-0 opacity-100">
                    {skill}
                  </span>
                  <div className="absolute rounded-[3em] w-full top-[30%] left-[0] overflow-hidden">
                    <div className="inf group-hover:opacity-100 opacity-0 relative animate-marquee flex gap-[5px] uppercase">
                      <span className="w-max">{skill}</span>
                      <span className="w-max">{skill}</span>
                      <span className="w-max">{skill}</span>
                      <span className="w-max">{skill}</span>
                      <span className="w-max">{skill}</span>
                      <span className="w-max">{skill}</span>
                      <span className="w-max">{skill}</span>
                      <span className="w-max">{skill}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </ScrollFadeIn>
      </Container>
    </section>
  );
}
