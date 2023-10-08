"use client";
import { Container } from "@/components/Container/Container";
import Greetings from "@/components/Greetings/Greetings";
import ScrollIcon from "@/icons/ScrollIcon";

export default function HeroSection() {
  return (
    <section className="hero-section bg-fixed relative bg-[#D9D9D9] bg-cover bg-center hero-bg-mob sm:hero-bg-tab md:hero-bg-desk text-white py-[80px] sm:py-[120px] md:py-[220px] min-h-screen">
      <Container className="flex flex-col items-center text-center gap-[24px] sm:gap-[30px] md:gap-[42px]">
        <h1 className="flex flex-col text-[24px] sm:text-[32px] md:text-[48px] w-max">
          <Greetings />
          <span>
            I am <span className="font-bold">Diana Forostiana</span>
          </span>
        </h1>
        <p className="text-[16px] sm:text-[20px] md:text-[26px]">
          I am a Junior Full Stack Developer. Designing a program that is truly
          helpful to the user is my ultimate goal on every project. As a
          developer, I would like to be a part of a team and create something
          really usefull and gorgeous.
        </p>
        <div className="flex gap-[15px] sm:gap-[20px] md:gap-[25px]">
          <a
            href="#"
            className="link relative after:absolute after:w-full after:content-[''] after:bottom-[0] after:left-[0] after:border-b-[1px] after:border-white group relative uppercase p-[1.1em] rounded-[3em] inline-block"
          >
            <span className="group-hover:opacity-0 group-focus:opacity-0 opacity-100">
              {" "}
              Contact me
            </span>
            <div className="absolute rounded-[3em] w-full top-[30%] left-[0] overflow-hidden">
              <div className="inf group-hover:opacity-100 group-focus:opacity-100 opacity-0 relative animate-marquee flex gap-[5px] uppercase">
                <span className="w-max">Contact me</span>
                <span className="w-max">Contact me</span>
                <span className="w-max">Contact me</span>
                <span className="w-max">Contact me</span>
                <span className="w-max">Contact me</span>
                <span className="w-max">Contact me</span>
                <span className="w-max">Contact me</span>
                <span className="w-max">Contact me</span>
              </div>
            </div>
          </a>
          <a
            href="#"
            className="link relative after:absolute after:w-full after:content-[''] after:border-b-[1px] after:bottom-[0] after:left-[0] after:border-white group relative uppercase p-[1.1em] rounded-[3em] inline-block"
          >
            <span className="group-hover:opacity-0 group-focus:opacity-0 opacity-100">
              About me
            </span>
            <div className="absolute rounded-[3em] w-full top-[30%] left-[0] overflow-hidden">
              <div className="inf group-hover:opacity-100 group-focus:opacity-100 opacity-0 relative animate-marquee flex gap-[5px] uppercase">
                <span className="w-max">About me</span>
                <span className="w-max">About me</span>
                <span className="w-max">About me</span>
                <span className="w-max">About me</span>
                <span className="w-max">About me</span>
                <span className="w-max">About me</span>
                <span className="w-max">About me</span>
                <span className="w-max">About me</span>
              </div>
            </div>
          </a>
        </div>
        <div className="absolute bottom-[20px] right-[20px] flex flex-col gap-[10px]">
          <p className="uppercase">Scroll</p>
          <ScrollIcon width={59} height={72} />
        </div>
      </Container>
    </section>
  );
}
