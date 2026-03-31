"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiFileText, FiEdit3, FiEye } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="relative w-full bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 text-white py-20 md:py-28 lg:py-36 overflow-hidden">
      {/* Światła w tle - skalowane, żeby nie obciążać słabszych urządzeń */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-white/5 rounded-full blur-[100px] md:blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-blue-900/30 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10 max-w-5xl">
        {/* Nagłówek - rośnie wraz z ekranem, zachowuje czytelność */}
        <div className="text-center mb-14 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-light tracking-tight leading-tight mb-5 md:mb-6">
            Zobacz swoją stronę
            <br />
            <span className="font-medium">zanim cokolwiek zapłacisz.</span>
          </h2>
          <p className="text-blue-100 text-base md:text-lg leading-relaxed font-light max-w-lg lg:max-w-xl mx-auto">
            Prosty proces, dzięki któremu w 24 godziny zobaczysz, jak może
            wyglądać Twój biznes w sieci. Bez zobowiązań.
          </p>
        </div>

        {/* Oś czasu (Timeline) - responsywna magia */}
        <div className="relative mb-14 md:mb-20 lg:mb-24">
          {/* Linia pozioma (tylko od tabletu w górę) */}
          <div className="hidden md:block absolute top-6 lg:top-7 left-[16%] right-[16%] h-px bg-white/20"></div>

          {/* Linia pionowa (tylko na mobile) */}
          <div className="md:hidden absolute left-5 top-8 bottom-8 w-px bg-white/20"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 relative">
            {[
              {
                icon: <FiFileText className="text-base md:text-lg" />,
                title: "Wypełniasz brief",
                desc: "Opisujesz swój biznes i to, co jest dla Ciebie ważne.",
              },
              {
                icon: <FiEdit3 className="text-base md:text-lg" />,
                title: "Projektuję widok",
                desc: "Przygotowuję wizualizację głównej strony Twojej witryny.",
              },
              {
                icon: <FiEye className="text-base md:text-lg" />,
                title: "Odbierasz podgląd",
                desc: "Oceniasz efekt i decydujesz, czy idziemy dalej.",
              },
            ].map((step, index) => (
              <div
                key={index}
                className="relative flex items-start md:flex-col md:items-center md:text-center pl-12 md:pl-0"
              >
                {/* Kółko z ikoną - dopasowane do dotyku na mobile */}
                <div className="absolute left-0 md:relative w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white shrink-0 z-10">
                  {step.icon}
                </div>

                {/* Tekst - optymalny padding na mobile */}
                <div className="md:mt-4 lg:mt-5 pt-0.5 md:pt-0">
                  <h3 className="text-sm md:text-base font-semibold text-white mb-1 md:mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-blue-100/80 font-light leading-relaxed max-w-xs md:max-w-none mx-auto">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sekcja końcowa - Przycisk i mikro-dowody */}
        <div className="text-center">
          {/* Przycisk: na całą szerokość na mobile, wyśrodkowany na desktopie */}
          <Link
            href="/formularz-briefu"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 bg-white text-blue-700 font-semibold rounded-full shadow-xl shadow-blue-900/30 hover:shadow-blue-900/50 hover:scale-[1.02] sm:hover:scale-105 transition-all duration-300 text-base"
          >
            Chcę darmowy podgląd
            <FaArrowRight className="text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          {/* Tagi na dole - łamią się w ładny blok na bardzo małych ekranach */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-4 gap-y-2 text-blue-100/60 text-xs font-light">
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-blue-200 rounded-full shrink-0"></span>
              0 zł
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-blue-200 rounded-full shrink-0"></span>
              5 minut
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-1 h-1 bg-blue-200 rounded-full shrink-0"></span>
              Bez spamu
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
