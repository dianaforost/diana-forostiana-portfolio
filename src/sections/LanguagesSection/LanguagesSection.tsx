import { Container } from "@/components/Container/Container";
import ScrollFadeIn from "@/components/ScrollFadeIn/ScrollFadeIn";
const languages = [
  { language: "English", level: "Intermediate / B1" },
  { language: "Ukrainian", level: "Native / C2" },
];

export default function LanguagesSection() {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[120px] text-center">
      <Container className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px] md:pl-[140px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
            <h2 className="text-[44px] sm:text-[76px] md:text-[92px]">
              Language
            </h2>
            <ul className="flex flex-col md:flex-row justify-around">
              {languages.map((language, index) => (
                <li key={index}>
                  <div className="flex flex-col gap-[16px]">
                    <h3 className="text-[32px] sm:text-[56] md:text-[72px] text-[#4F4F4F]">
                      {language.language}
                    </h3>
                    <p className="text-[#7879F1] text-[24px]">
                      {language.level}
                    </p>
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
