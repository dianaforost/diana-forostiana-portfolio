import { Container } from "@/components/Container/Container";
import ScrollFadeIn from "@/components/ScrollFadeIn/ScrollFadeIn";
import dianaforostiana from "../../../public/diana-forostiana.jpg";

export default function EducationSection() {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[120px] text-center">
      <Container className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
            <h2 className="text-[44px] sm:text-[76px] md:text-[92px]">
              Education
            </h2>
            <ul className="flex flex-col md:flex-row justify-around">
              <li className="flex flex-col items-center md:items-start md:flex-row gap-[15px] sm:gap-[20px] md:gap-[25px]">
                <div className="text-left">
                  <h3 className="text-[24px] sm:text-[32] md:text-[36px]">
                    GoIT - start your career in IT
                  </h3>
                  <p className="text-[16px] sm:text-[18px] md:text-[20] text-[#242424]">
                    september 2022- august 2023
                  </p>
                  <p className="text-[16px] sm:text-[18px] md:text-[20]">
                    Full Stack Developer
                  </p>
                </div>
                <img
                  src={dianaforostiana.src}
                  alt="GoIt sertificate"
                  width={450}
                />
              </li>
            </ul>
          </div>
        </ScrollFadeIn>
      </Container>
    </section>
  );
}
