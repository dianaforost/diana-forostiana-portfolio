import { Container } from "@/components/Container/Container";
import ScrollFadeIn from "@/components/ScrollFadeIn/ScrollFadeIn";
import data from "../../data/data.json";

export default function ExperienceSection() {
  const { experience } = data;
  const { title, experienceList } = experience;
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[120px] text-center">
      <Container className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px] md:pl-[140px]">
        <ScrollFadeIn>
          <div className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
            <div className="flex flex-col">
              <h2 className="text-[44px] sm:text-[76px] md:text-[92px]">
                {title}
              </h2>
              <p>5 mounth</p>
            </div>
            <ul className="flex flex-col items-start md:flex-row gap-[15px] justify-around">
              {experienceList.map((experienceItem, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center md:items-start md:flex-row gap-[15px] sm:gap-[20px] md:gap-[25px]"
                >
                  <div className="text-left">
                    <a
                      href={experienceItem.companyLink}
                      className="text-[24px] sm:text-[32] md:text-[36px] border-b-[3px] border-black hover:text-darkGray focus:text-darkGray hover:border-darkGray focus:border-darkGray transition duration-300"
                    >
                      {experienceItem.company}
                    </a>
                    <p className="text-[16px] sm:text-[18px] md:text-[20] text-lightGray">
                      {experienceItem.date}
                    </p>
                    <a
                      href={experienceItem.link}
                      className="text-[16px] sm:text-[18px] md:text-[20] border-b-[3px] border-black hover:text-darkGray focus:text-darkGray hover:border-darkGray focus:border-darkGray transition duration-300"
                    >
                      {experienceItem.position}
                    </a>
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
