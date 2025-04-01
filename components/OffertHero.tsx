import { FaCheck } from "react-icons/fa";
import React from "react";
import CustomButton from "./CustomButton";

const features = [
  "Indywidualny projekt",
  "Responsywny design",
  "Optymalizacja SEO",
];

const OffertHero = () => {
  return (
    <div className="relative bg-gradient-to-b from-white to-gray-100 rounded-xl py-20 px-4 sm:px-6 lg:px-16 text-center md:text-left">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-10">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 tracking-wide leading-tight mb-6">
            Nowoczesne Strony i Sklepy Internetowe
          </h1>
          <p className="text-lg text-gray-700 mb-6 max-w-lg">
            Tworzę estetyczne, szybkie i skuteczne strony, które przyciągną klientów i pomogą rozwinąć Twój biznes online.
          </p>
          <ul className="space-y-3 mb-6 flex flex-col items-center md:items-start">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-gray-700 text-lg">
                <FaCheck className="text-green-500 mr-2" />
                {feature}
              </li>
            ))}
          </ul>
          <CustomButton text="Skontaktuj się ze mną" link="/kontakt" bgColor="#FFD700" textColor="#fff" />
        </div>
        <div className="justify-center md:justify-end hidden md:flex">
          <img
            src="/webs.svg"
            className="w-full max-w-md md:max-w-lg drop-shadow-xl rounded-lg"
            alt="Przykładowy projekt strony"
          />
        </div>
      </div>
    </div>
  );
};

export default OffertHero;