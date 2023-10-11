import { Container } from "@/components/Container/Container";
import GitHubIcon from "@/icons/GitHubIcon";
import GmailIcon from "@/icons/GmailIcon";
import LinkedInIcon from "@/icons/LindedInIcon";
import TelegramIcon from "@/icons/TelegramIcon";

const Footer = () => {
  return (
    <footer className="min-h-[50vh] z-20 relative bg-white">
      <Container className="flex flex-col gap-[15px] md:flex-row justify-around py-[40px] sm:py-[60px] md:py-[80px]">
        <h2 className="visually-hidden">Footer</h2>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[24px]">Contacts</h3>
          <ul className="flex flex-col gap-[5px] sm:gap-[15px] md:gap-[20px]">
            <li>
              <h4>Phone number</h4>
              <ul>
                <li>
                  <a
                    href="tel:+380975372174"
                    className="hover:text-darkGray focus:text-darkGray hover:border-b-[1px] hover:border-darkGray hover:pb-[1px] focus:border-b-[1px] focus:border-darkGray focus:pb-[1px] transition duration-300"
                  >
                    +380 (97) 537 21 74
                  </a>
                </li>
                <li>
                  <a
                    href="tel:+48797638432"
                    className="hover:text-darkGray focus:text-darkGray hover:border-b-[1px] hover:border-darkGray hover:pb-[1px] focus:border-b-[1px] focus:border-darkGray focus:pb-[1px] transition duration-300"
                  >
                    +48 797638432
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <h4>Email</h4>
              <ul>
                <li>
                  <a
                    href="mailto:dianaforost@gmail.com"
                    className="hover:text-darkGray focus:text-darkGray hover:border-b-[1px] hover:border-darkGray hover:pb-[1px] focus:border-b-[1px] focus:border-white focus:pb-[1px] transition duration-300"
                  >
                    dianaforost@gmail.com
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-[10px]">
          <h3 className="text-[24px]">Social media</h3>
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
          D
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
