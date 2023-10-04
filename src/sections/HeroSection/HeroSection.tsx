"use client";
import { Container } from "@/components/Container/Container";
import Greetings from "@/components/Greetings/Greetings";

export default function HeroSection() {
  return (
    <section>
      <Container className="flex flex-col gap-[24px] sm:gap-[30px] md:gap-[42px]">
        <h1 className="flex flex-col text-[24px] sm:text-[32px] md:text-[48px] w-max">
          <Greetings />I am Diana Forostiana
        </h1>
        <p className="text-[16px] sm:text-[20px] md:text-[26px]">
          I am a Junior Full Stack Developer. Designing a program that is truly
          helpful to the user is my ultimate goal on every project. As a
          developer, I would like to be a part of a team and create something
          really usefull and gorgeous.
        </p>
        <div className="flex gap-[15px] sm:gap-[20px] mdgap-[25px]">
          <a
            href="#"
            className="link bg-[#0075FF] uppercase p-[1.1em] border-[1.5px] border-solid rounded-[3em] border-black inline-block"
          >
            <span className="linkContent"> Contact me</span>
            <div className="infinit rounded-[3em] w-full top-[30%] left-[0] overflow-hidden">
              <div className="inf flex gap-[5px] uppercase">
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
            className="link uppercase p-[1.1em] border-[1.5px] border-solid rounded-[3em] border-white inline-block"
          >
            <span className="linkContent">About me</span>
            <div className="infinit rounded-[3em] w-full top-[30%] left-[0] overflow-hidden">
              <div className="inf flex gap-[5px] uppercase">
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
          <button className="button">Наведите на меня</button>
        </div>
      </Container>
    </section>
  );
}
