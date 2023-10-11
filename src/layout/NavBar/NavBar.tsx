import GitHubIcon from "@/icons/GitHubIcon";
import LinkedInIcon from "@/icons/LindedInIcon";
import TelegramIcon from "@/icons/TelegramIcon";
import React from "react";

const NavBar = () => {
  return (
    <nav className="md:fixed md:z-10 md:top-1/2 md:left-1/2 md:transform md:-translate-x-[608px] md:-translate-y-1/2">
      <ul className="hidden md:flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
        <li>
          <GitHubIcon
            className="fill-lightVaiolet hover:fill-darkerViolet focus:fill-darkerViolet transition duration-300"
            width={45}
            height={45}
          />
        </li>
        <li>
          <LinkedInIcon
            className="fill-lightVaiolet hover:fill-darkerViolet focus:fill-darkerViolet transition duration-300"
            width={45}
            height={45}
          />
        </li>
        <li>
          <TelegramIcon
            className="fill-lightVaiolet hover:fill-darkerViolet focus:fill-darkerViolet transition duration-300"
            width={45}
            height={45}
          />
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
