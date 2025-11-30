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
        <div className="flex items-center justify-between gap-2 mt-16 mb-6 px-3 py-1 sm:px-6 sm:py-2 bg-gradient-to-r from-[#FF8C42] to-[#FF5733] rounded-full shadow-lg max-w-xs sm:max-w-md mx-auto">
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-white text-[#FF5733] font-bold px-2 py-1 sm:px-4 sm:py-1.5 rounded-full shadow-md hover:scale-105 transition-transform duration-300 text-xs sm:text-sm"
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
          <h1 className="font-black text-4xl md:text-5xl xl:text-7xl py-2 text-[#6e92f2] tracking-wider font-monserat leading-[2rem] mb-6">
            {title}
          </h1>
          <p className="text-gray-500 max-w-[80%] mx-auto text-base mt-2 lg:text-2xl tracking-wider leading-relaxed font-monserat font-normal mb-8">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2 sm:px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md sm:max-w-lg bg-white rounded-2xl shadow-xl overflow-hidden p-4 sm:p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl sm:text-3xl font-bold"
            >
              &times;
            </button>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#D63636] mb-3 text-center">
              🎉 Mega Oferta 2026
            </h2>

            <p className="text-center text-gray-800 text-sm sm:text-base mb-3">
              Wyjątkowa promocja – oferta trwa tylko do końca roku!
            </p>

            <div className="mb-4 px-4 py-3 sm:px-6 sm:py-4 bg-gradient-to-r from-[#FFE6E6] to-[#FFD6D6] border border-[#D63636] rounded-2xl text-center shadow-md">
              <span className="block text-[#D63636] font-bold text-sm sm:text-base mb-1">
                🔥 Mega okazja! Tylko teraz!
              </span>
              <span className="block text-[#D63636] font-medium text-xs sm:text-sm">
                Mega szansa, tylko przez ograniczony czas!
              </span>
            </div>

            {/* Licznik */}
            <div className="mb-4 px-2 py-1 sm:px-4 sm:py-2 bg-[#FFF0F0] border border-[#D63636] rounded-2xl text-center shadow-md">
              <span className="block text-[#D63636] font-bold text-xs sm:text-sm mb-1">
                ⏳ Do końca oferty zostało:
              </span>
              <div className="flex justify-center gap-1 sm:gap-3 flex-wrap sm:flex-nowrap text-[#D63636] font-semibold text-xs sm:text-base">
                {[
                  { val: timeLeft.days, label: "dni" },
                  { val: timeLeft.hours, label: "godzin" },
                  { val: timeLeft.minutes, label: "minut" },
                  { val: timeLeft.seconds, label: "sekund" },
                ].map((t, idx) => (
                  <div
                    key={idx}
                    className="px-2 py-1 sm:px-3 sm:py-2 bg-white rounded-lg shadow-sm flex flex-col items-center"
                  >
                    <span className="text-base sm:text-lg font-bold">
                      {t.val}
                    </span>
                    <span className="text-gray-600 text-[10px] sm:text-sm">
                      {t.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <ul className="space-y-2 sm:space-y-2 mb-4 text-xs sm:text-sm">
              {[
                "Responsywny i nowoczesny projekt",
                "SEO + optymalizacja treści",
                "Formularze + social media",
                "Panel CMS do edycji",
                "2 miesiące wsparcia powdrożeniowego",
                "Dopasowanie wizualne do Twojej marki",
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 bg-gray-50 px-2 py-1 sm:px-3 sm:py-2 rounded-lg shadow-sm"
                >
                  <span className="text-[#D63636] font-bold text-xs sm:text-sm mt-0.5">
                    ✔
                  </span>
                  <span className="text-gray-800 text-xs sm:text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex justify-center mt-2">
              <CustomButton
                text="Złap okazję"
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
