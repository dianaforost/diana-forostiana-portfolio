"use client";
import GitHubIcon from "@/icons/GitHubIcon";
import LinkedInIcon from "@/icons/LindedInIcon";
import TelegramIcon from "@/icons/TelegramIcon";
import React, { useEffect, useRef, useState } from "react";

const NavBar = () => {
  return (
    <div className="hidden md:flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px] md:fixed md:top-1/2 md:left-1/2 md:transform md:-translate-x-[608px] md:-translate-y-1/2 md:z-10">
      <GitHubIcon width={45} height={45} />
      <LinkedInIcon width={45} height={45} />
      <TelegramIcon width={45} height={45} />
    </div>
  );
};
export default NavBar;
