"use client";

import React from "react";

interface BranżaType {
  title: string;
  tagline: string;
  heroText: string;
  heroImage: string;
  colors: { primary: string; bg: string; text: string };
  benefits: string[];
  industryHighlights: string[];
  icons?: string[];
}

interface Props {
  branża: BranżaType;
}

const BranżaHeroClient: React.FC<Props> = ({ branża }) => {
  const { colors } = branża;

  return (
    <section
      className="relative w-full mt-24"
      style={{
        backgroundImage: `url(${branża.heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/45"></div>

      {/* HERO TEXT */}
      <div className="relative max-w-3xl mx-auto text-center text-white py-16 px-6">
        <span
          className="inline-block px-4 py-1 mb-4 text-sm font-semibold rounded-full"
          style={{ backgroundColor: colors.primary }}
        >
          {branża.tagline}
        </span>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          {branża.title}
        </h1>

        <p className="text-lg md:text-xl opacity-90 leading-relaxed">{branża.heroText}</p>
      </div>

      {/* LEJEK SPRZEDAŻOWY */}
      <div className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-6 pb-20">
        {[
          { n: "1", t: "Napisz do mnie" },
          { n: "2", t: "Omówimy potrzeby" },
          { n: "3", t: "Otrzymasz ofertę" },
          { n: "4", t: "Startujemy projekt" },
        ].map((step, i) => (
          <div key={i} className="flex-1 flex flex-col items-center text-center relative">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
              style={{ backgroundColor: colors.primary }}
            >
              {step.n}
            </div>
            <p className="mt-4 text-white font-medium text-sm md:text-base max-w-[160px]">{step.t}</p>

            {i < 3 && (
              <>
                <div className="hidden md:block absolute top-1/2 left-full w-16 h-[2px] bg-white/40"></div>
                <div className="block md:hidden w-[2px] h-6 bg-white/40 mt-3"></div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="relative text-center pb-28">
        <a
          href="tel:+48730735048"
          className="inline-flex items-center justify-center px-8 py-3 rounded-full font-semibold text-base md:text-lg text-white border border-white/40 bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/20 hover:border-white/60 hover:shadow-xl"
        >
          Zadzwoń i zacznijmy
        </a>
      </div>
    </section>
  );
};

export default BranżaHeroClient;
