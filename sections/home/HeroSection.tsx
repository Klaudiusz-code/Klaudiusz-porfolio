"use client";
import { useState, useEffect } from "react";
import CharacteristicsSection from "@/components/CharacteristicsSection";
import CustomButton from "@/components/CustomButton";

type HeroSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
};

const HeroSection = ({
  title,
  description,
  buttonText,
  buttonUrl = "/",
}: HeroSectionProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const end = new Date("2025-12-31T23:59:59");

    const timer = setInterval(() => {
      const now = new Date();
      const distance = end.getTime() - now.getTime();

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
      const seconds = Math.floor((distance / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-[480px] md:min-h-[500px] lg:min-h-[600px] py-8 flex flex-col items-center overflow-hidden bg-white pt-6 md:pt-20 lg:pt-16">
      <div className="container mx-auto relative z-20 flex flex-col items-center px-4">
   
        <div className="flex items-center justify-between gap-2 mt-16 mb-6 px-3 py-1 sm:px-6 sm:py-2 bg-gradient-to-r from-[#FF7F50] to-[#FF4500] rounded-full shadow-lg max-w-sm mx-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#FF4500] font-bold px-3 py-1 rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-xs sm:text-sm"
          >
            Oferta 2026
          </button>
          <span className="flex items-center text-white font-semibold text-xs sm:text-sm tracking-wide">
            <svg
              className="w-3 h-3 mr-1 animate-pulse"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m{" "}
            {timeLeft.seconds}s
          </span>
        </div>

        <div className="w-full text-center">
          <h1 className="font-black text-4xl md:text-5xl xl:text-7xl py-2 text-[#6e92f2] tracking-wider font-monserat leading-[2rem] mb-4">
            {title}
          </h1>
          <p className="text-gray-500 max-w-[80%] mx-auto text-base mt-2 lg:text-2xl tracking-wider leading-relaxed font-monserat font-normal mb-6">
            {description}
          </p>

          <CustomButton
            text={buttonText}
            link={buttonUrl}
            bgColor="#0077cc"
            textColor="#fff"
          />
        </div>
      </div>

      <CharacteristicsSection />

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-2 sm:px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-white rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Zamknięcie */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 sm:top-3 right-2 sm:right-3 text-gray-500 hover:text-gray-800 text-xl sm:text-2xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#D63636] mb-2 text-center leading-snug">
              🎉 Mega Oferta 2026
            </h2>

            <p className="text-center text-gray-800 text-sm sm:text-base mb-3 sm:mb-4">
              Zyskaj nowoczesną stronę internetową w wyjątkowej promocji –
              oferta trwa tylko do końca roku!
            </p>

            <div className="text-center mb-4 bg-[#FFF0F0] border border-[#D63636] rounded-xl px-3 py-1 sm:px-4 sm:py-2">
              <span className="text-[#D63636] font-bold text-sm sm:text-base">
                Mega okazja! Wartość nie do przebicia – tylko teraz!
              </span>
            </div>

            <div className="flex justify-center gap-2 sm:gap-3 mb-4 text-[#D63636] font-semibold text-sm sm:text-base border border-[#D63636] rounded-xl px-2 sm:px-3 py-1 sm:py-1.5">
              <span>{timeLeft.days}d</span>
              <span>{timeLeft.hours}h</span>
              <span>{timeLeft.minutes}m</span>
              <span>{timeLeft.seconds}s</span>
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-5">
              {[
                "Responsywny i nowoczesny projekt graficzny",
                "SEO + optymalizacja treści",
                "Formularze kontaktowe + integracja z social media",
                "Panel CMS do samodzielnej edycji",
                "2 miesiące wsparcia powdrożeniowego",
                "Pełne dopasowanie wizualne do Twojej marki",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 sm:gap-3 bg-gray-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-sm text-sm sm:text-base"
                >
                  <span className="text-[#D63636] font-bold text-lg sm:text-xl mt-0.5 sm:mt-1">
                    ✔
                  </span>
                  <span className="text-gray-800 font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <CustomButton
                text="Złap swoją okazję"
                link="/kontakt"
                bgColor="#D63636"
                textColor="#fff"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HeroSection;
