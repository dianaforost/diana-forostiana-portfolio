import React, { useState, useEffect } from "react";

const greetings: { [key: string]: string } = {
  en: "Hello",
  fr: "Bonjour",
  kr: "안녕하세요",
  ua: "Привіт",
  es: "Hola",
  de: "Guten tag",
  pl: "Dzień dobry",
  ja: "こんにちは",
  it: "Ciao",
  in: "Halo",
  lt: "Sveiki",
  th: "สวัสดี",
};
const Greetings: React.FC = () => {
  const [currentGreeting, setCurrentGreeting] = useState<string>("Hello");
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState<number>(0);

  useEffect(() => {
    const updateGreeting = () => {
      const languages = Object.keys(greetings);
      const nextLanguageIndex = (currentLanguageIndex + 1) % languages.length;
      const nextLanguage = languages[nextLanguageIndex];

      setCurrentGreeting(greetings[nextLanguage]);
      setCurrentLanguageIndex(nextLanguageIndex);
    };

    const intervalId = setInterval(updateGreeting, 3000);

    return () => clearInterval(intervalId);
  }, [currentLanguageIndex]);

  return <span>{currentGreeting},</span>;
};
export default Greetings;
