"use client";

import React from "react";
import {
  FaCalculator,
  FaPencilAlt,
  FaLaptopCode,
  FaFlask,
} from "react-icons/fa";
import Link from "next/link";

const steps = [
  {
    id: 1,
    icon: <FaCalculator />,
    title: "Analiza",
    description:
      "Poznaję Twoje cele i biznes, aby projekt idealnie trafił do odbiorców.",
  },
  {
    id: 2,
    icon: <FaPencilAlt />,
    title: "Projektowanie",
    description:
      "Tworzę design, który jest estetyczny i intuicyjny dla użytkownika.",
  },
  {
    id: 3,
    icon: <FaLaptopCode />,
    title: "Programowanie",
    description:
      "Buduję szybką i bezpieczną stronę opartą na najlepszych technologiach.",
  },
  {
    id: 4,
    icon: <FaFlask />,
    title: "Wdrożenie",
    description:
      "Testuję, uruchamiam i oddaję w pełni działający produkt w Twoje ręce.",
  },
];

const DesignProcessSection = () => {
  return (
    <section className="bg-white py-20 border-b border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Proces współpracy
          </h2>
          <div className="w-12 h-1 bg-slate-900"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
          {steps.map((step) => (
            <div key={step.id} className="group relative">
              <span className="absolute -top-4 -left-2 text-7xl font-bold text-slate-50 select-none group-hover:text-slate-100 transition-colors">
                0{step.id}
              </span>

              <div className="relative z-10 pt-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-white border border-slate-200 rounded-lg flex items-center justify-center text-slate-700 shadow-sm group-hover:border-slate-900 group-hover:text-slate-900 transition-colors">
                    {step.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>

                <p className="text-slate-600 leading-relaxed pl-16 border-l border-slate-100">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 flex justify-center md:justify-start">
          <Link
            href="/kontakt"
            className="bg-slate-900 text-white font-medium px-8 py-3 rounded hover:bg-slate-800 transition-colors"
          >
            Napisz do mnie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DesignProcessSection;
