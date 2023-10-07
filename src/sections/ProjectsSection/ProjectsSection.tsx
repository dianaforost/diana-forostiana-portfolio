import { Container } from "@/components/Container/Container";
import consulting from "../../../public/images/consulting.jpg";
import taskpro from "../../../public/images/taskpro.jpg";
import news from "../../../public/images/news.jpg";
import carptravel from "../../../public/images/carp-travel.jpg";
import show from "../../../public/images/show.jpg";
import ScrollFadeIn from "@/components/ScrollFadeIn/ScrollFadeIn";
import ReadMore from "@/components/ReadMore/ReadMore";
const projects = [
  {
    img: consulting.src,
    title: "Im consulting",
    text: "Welcome to IM CONSULTING, where the vision of success takes shape. We are proud to introduce a commercial website that embodies the collaboration between our dedicated team at SoftRyzen and our visionary client, Mr. Illya Mushkovsky. IM CONSULTING is not just a website; it's a digital showcase of expertise, experience, and a commitment to helping businesses thrive. Mr. Illya Mushkovsky, a renowned business trainer, top consultant, crisis manager, and coach, brings his wealth of knowledge and insights to the forefront. Our website serves as a dynamic business card, designed to establish a personal brand and attract new clients and partners. Explore Mr. Mushkovsky's extensive background, discover the services he offers, and gain access to invaluable resources to navigate the complexities of the business world.",
    type: "Team project",
    languages: [
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "tailwindcss",
      "react-hook-form",
      "react-hook-form-persist",
      "nodemailer",
      "react-scroll",
      "axios",
      "swiper",
      "yup",
    ],
    links: [
      "https://github.com/SoftRyzen-internship/IM-CONSULTING",
      "https://imconsulting.com.ua/",
    ],
    linksText: ["Open on GitHub", "Open page"],
  },
  {
    img: carptravel.src,
    title: "Carp Travel",
    // text: "text",
    text: "Discover a world of adventure and entertainment in the heart of the Carpathian Mountains! Our website is your gateway to an unforgettable experience amidst the stunning natural beauty of this European wonder. Whether you're an outdoor enthusiast, a cultural explorer, or simply seeking relaxation, the Carpathians have something for everyone. Carp Travel - your best guide to the world of mountain adventures! A one-page landing page for informing customers, attracting customers / partners and receiving feedback from customers. Two sliders, two forms for feedback have been implemented. Libraries: react-hook-form, react-scroll, swiper",
    type: "Individual project",
    languages: [
      "CSS",
      "JavaScript",
      "React",
      "Next.js",
      "tailwindcss",
      "react-hook-form",
      "react-hook-form-persist",
      "react-input-mask",
      "react-scroll",
      "swiper",
      "yup",
    ],
    links: [
      "https://github.com/dianaforost/softryzen-test-task",
      "https://softryzen-text-task.vercel.app/",
    ],
    linksText: ["Open on GitHub", "Open page"],
  },
  {
    img: taskpro.src,
    title: "Task Pro",
    text: "Welcome to our platform for seamless task planning, organization, and effortless task management. We provide you with the tools you need to streamline your workflow and increase productivity. Our intuitive interface allows you to create tasks with ease, prioritize them, and assign due dates. With the power of drag-and-drop, you can effortlessly move tasks between customizable columns, ensuring you always stay organized. Whether you're managing personal projects, collaborating with a team, or juggling multiple responsibilities, our platform adapts to your needs. Say goodbye to the chaos of scattered to-do lists and welcome a new era of structured, visual task management. Join us today and experience a smarter way to plan, create, and manage tasks. Say hello to productivity and start achieving your goals efficiently!",
    type: "Team project",
    languages: [
      "JavaScript",
      "React",
      "Redux",
      "sass",
      "Styled components",
      "React-datepicker",
      "react-calendar",
      "react-toastify",
      "redux-persist",
      "formik",
      "axios",
      "yup",
    ],
    links: [
      "https://github.com/dianaforost/project-magic-task-manager",
      "https://torn80beta.github.io/project-magic-task-manager/",
    ],
    linksText: ["Open on GitHub", "Open page"],
  },
  {
    img: show.src,
    title: "Show",
    text: "Are you a dedicated movie buff or a TV series aficionado? Look no further! SHOW is your ultimate online hub for all things related to films and television. We offer a vast treasure trove of information, from release years to in-depth reviews. Implemented pagination.",
    type: "Individual project",
    languages: ["JavaScript", "React", "Css", "axios"],
    links: [
      "https://github.com/dianaforost/goit-react-hw-05-movies",
      "https://dianaforost.github.io/goit-react-hw-05-movies/",
    ],
    linksText: ["Open on GitHub", "Open page"],
  },
  {
    img: news.src,
    title: "News",
    text: "A simple news app connected to NyTimes backend API, Weather API and FireBae API. You can register, log in, log out, add/remove or filter news, view news by specific categories, sort news by specific date, pagination implemented. Website designed for easy use",
    type: "Team project",
    languages: ["JavaScript", "sass", "firebase", "axios", "notiflix"],
    links: [
      "https://github.com/alisaromantsova/NewsApp",
      "https://alisaromantsova.github.io/NewsApp/",
    ],
    linksText: ["Open on GitHub", "Open page"],
  },
  // { img: group4.src, title: "Phonebook", text: "text" },
];

export default function ProjectsSection() {
  return (
    <section className="py-[60px] sm:py-[80px] md:py-[120px]">
      <Container className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
        <h2 className="text-[20px] md:text-[24px] hidden">Projects</h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col gap-[15px] sm:gap-[20px] md:gap-[25px]"
          >
            <ScrollFadeIn>
              <h3 className="uppercase text-[38px] sm:text-[76px] md:text-[92px]">
                {project.title}
              </h3>
              <div className="flex flex-col md:flex-row justify-between">
                <div>
                  <img
                    src={project.img}
                    width={550}
                    className="mx-[auto] border-[1px] border-solid border-[#828282]"
                  />
                </div>
                <div className="md:w-[50%] py-[1rem] md:p-[1rem]">
                  <ReadMore text={project.text} maxLength={250} />
                  {/* <h4 className="text-[16px] md:text-[18px]">{project.text}</h4> */}
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
              </div>
            </ScrollFadeIn>
          </div>
        ))}
      </Container>
    </section>
  );
}
