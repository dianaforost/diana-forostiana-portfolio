import { Container } from "@/components/Container/Container";
import ScrollFadeIn from "@/components/ScrollFadeIn/ScrollFadeIn";
import ReadMore from "@/components/ReadMore/ReadMore";
import data from "../../data/data.json";

export default function ProjectsSection() {
  const { projects } = data;
  const { title, projectsList } = projects;
  return (
    <>
      <section className="bg-white py-[80px] sm:py-[120px] md:py-[140px]">
        <Container className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px] md:pl-[140px]">
          <h2 className="text-[44px] sm:text-[76px] md:text-[92px]">{title}</h2>
          {projectsList.map((project, index) => (
            <div
              className="w-full bg-white md:sticky top-[0] rounded-[1rem]"
              key={index}
            >
              <ScrollFadeIn>
                <div className="flex flex-col md:min-h-[556px] py-[1rem] px-[1rem] md:p-[1rem] card__content justify-between">
                  <h3 className="uppercase text-[32px] sm:text-[56px] md:text-[60px]">
                    {project.title}
                  </h3>
                  <ReadMore text={project.text} maxLength={250} />
                  <p className="italic mt-[5px]">{project.type}</p>
                  <div className="flex flex-wrap gap-x-4 gap-y-4 mt-[1rem]">
                    {project.languages?.map((language, index) => (
                      <div
                        key={index}
                        className="uppercase border-l-4 p-[0.6rem] rounded-l-[3px] border-solid border-[#C852FF]"
                      >
                        <p>{language}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-[15px] sm:gap-[20px] md:gap-[25px] mt-[25px] sm:mt-[30px] md:mt-[35px]">
                    {project.links?.map((link, index) => (
                      <a
                        href={link}
                        key={index}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="follow-button border-[3px] border-solid border-[#C852FF] py-[20px] px-[3%] hover:bg-[#C852FF40] focus:bg-[#C852FF40]"
                      >
                        {project.linksText[index]}
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollFadeIn>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
