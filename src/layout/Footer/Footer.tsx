import { Container } from "@/components/Container/Container";
import GitHubIcon from "@/icons/GitHubIcon";
import GmailIcon from "@/icons/GmailIcon";
import LinkedInIcon from "@/icons/LindedInIcon";
import TelegramIcon from "@/icons/TelegramIcon";
import data from "../../data/data.json";

const Footer = () => {
  const { footer } = data;
  const { title, footerList, socialTitle, d } = footer;
  return (
    <footer className="min-h-[50vh] z-20 relative bg-white">
      <Container className="flex flex-col gap-[15px] md:flex-row justify-around py-[40px] sm:py-[60px] md:py-[80px]">
        <h2 className="visually-hidden">{title}</h2>
        {footerList.map((item, index) => (
          <div key={index} className="flex flex-col gap-[10px]">
            <h3 className="text-[24px]">{item.title}</h3>
            <ul className="flex flex-col gap-[5px] sm:gap-[15px] md:gap-[20px]">
              {item.number && (
                <li>
                  <h4>{item.number}</h4>
                  <ul>
                    {item.phone.map((phoneNumber, phoneIndex) => (
                      <li key={phoneIndex}>
                        <a
                          href={`tel:${phoneNumber}`}
                          className="hover:text-darkGray focus:text-darkGray hover:border-b-[1px] hover:border-darkGray hover:pb-[1px] focus:border-b-[1px] focus:border-darkGray focus:pb-[1px] transition duration-300"
                        >
                          {phoneNumber}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              )}
              {item.email && (
                <li>
                  <h4>Email</h4>
                  <ul>
                    <li>
                      <a
                        href={`mailto:${item.emailto}`}
                        className="hover:text-darkGray focus:text-darkGray hover:border-b-[1px] hover:border-darkGray hover:pb-[1px] focus:border-b-[1px] focus:border-white focus:pb-[1px] transition duration-300"
                      >
                        {item.emailto}
                      </a>
                    </li>
                  </ul>
                </li>
              )}
            </ul>
          </div>
        ))}
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[24px]">{socialTitle}</h3>
          <ul className="flex gap-[5px] sm:gap-[15px] md:gap-[20px]">
            <li>
              <GitHubIcon
                className="fill-violet hover:fill-darkViolet focus:fill-darkViolet transition duration-300"
                width={45}
                height={45}
              />
            </li>
            <li>
              <LinkedInIcon
                className="fill-violet hover:fill-darkViolet focus:fill-darkViolet transition duration-300"
                width={45}
                height={45}
              />
            </li>
            <li>
              <TelegramIcon
                className="fill-violet hover:fill-darkViolet focus:fill-darkViolet transition duration-300"
                width={45}
                height={45}
              />
            </li>
            <li>
              <GmailIcon
                className="fill-violet hover:fill-darkViolet focus:fill-darkViolet transition duration-300"
                width={45}
                height={45}
              />
            </li>
          </ul>
        </div>
        <p className="text-[200px] text-lighterGray absolute bottom-[0] right-[0]">
          {d}
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
