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
    <section className="relative bg-white py-16 px-4 sm:px-8 lg:px-16 text-center overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Nagłówek */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Nowoczesne Strony i Sklepy Internetowe
        </h1>

        {/* Podtytuł */}
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl">
          Minimalistyczne, szybkie i estetyczne strony, które przyciągają
          klientów i wspierają rozwój Twojego biznesu online.
        </p>

        {/* Lista cech w poziomie */}
        <ul className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 shadow-sm hover:shadow-md transition duration-300"
            >
              <FaCheck className="text-indigo-500 text-base" />
              <span className="text-gray-900 font-medium text-sm sm:text-base">
                {feature}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OffertHero;
