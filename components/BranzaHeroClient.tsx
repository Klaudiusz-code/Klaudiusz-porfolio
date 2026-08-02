"use client";

import React from "react";
import {
  FaArrowRight,
  FaComments,
  FaPencilRuler,
  FaCheck,
  FaMobileAlt,
} from "react-icons/fa";

interface BranżaType {
  title: string;
  tagline: string;
  heroText: string;
  heroImage: string;
  colors: { primary: string; bg: string; text: string; accent: string };
}

interface Props {
  branża: BranżaType;
}

const BranzaHeroClient: React.FC<Props> = ({ branża }) => {
  const { colors } = branża;

  const steps = [
    { icon: <FaComments />, label: "01. Brief", desc: "Dopasowanie" },
    { icon: <FaPencilRuler />, label: "02. Design", desc: "Koncepcja" },
    { icon: <FaMobileAlt />, label: "03. Kod", desc: "Realizacja" },
    { icon: <FaCheck />, label: "04. Wdrożenie", desc: "Efekt" },
  ];

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-black text-white pt-24 md:pt-32 pb-24 md:pb-32">
      {/* 1. KINOWE ZDJĘCIE: Delikatny zoom i głęboki, wielowarstwowy gradient */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center scale-110 transition-transform duration-[20s] linear"
        style={{ backgroundImage: `url(${branża.heroImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />

      {/* Delikatna tekstura ziarna (opcjonalny detal premium) */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      ></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center w-full flex flex-col items-center">
        {/* 2. TAGLINE: Kolorowa pigułka wycięta ze szkła */}
        <span
          className="inline-flex items-center gap-2 px-5 py-2.5 mb-10 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full backdrop-blur-xl border shadow-lg transition-transform duration-300 hover:scale-105"
          style={{
            color: colors.accent,
            backgroundColor: `${colors.primary}15`,
            borderColor: `${colors.primary}40`,
            boxShadow: `0 8px 32px ${colors.primary}20`,
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: colors.accent }}
          ></span>
          {branża.tagline}
        </span>

        {/* 3. NAGŁÓWEK: Ogromny, z delikatnym światłem na krawędziach liter */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-8 leading-[0.9] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
          {branża.title}
        </h1>

        {/* 4. OPIS: Szerszy, wyśrodkowany, lepszy krój */}
        <p className="text-lg md:text-xl text-white/70 mb-20 max-w-2xl font-light leading-relaxed">
          {branża.heroText}
        </p>

        {/* 5. KAFELKI: Prawdziwy, ciężki Glassmorphism unoszący się nad zdjęciem */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 w-full max-w-5xl mb-20">
          {steps.map((step, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 shadow-2xl hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 transition-all duration-500"
            >
              {/* Wewnętrzny, delikatny blask na dole kafla */}
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/5 to-transparent rounded-b-2xl pointer-events-none"></div>

              <div
                className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/10 flex items-center justify-center mb-5 text-xl group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300 shadow-inner"
                style={{ color: colors.accent }}
              >
                {step.icon}
              </div>
              <div className="font-bold text-sm md:text-base mb-1.5 tracking-wide text-white/90">
                {step.label}
              </div>
              <div className="text-[10px] md:text-xs text-white/40 font-semibold uppercase tracking-[0.2em]">
                {step.desc}
              </div>
            </div>
          ))}
        </div>

        {/* 6. PRZYCISK: Szklana ramka, która wypełnia się na biało przy najechaniu */}
        <a
          href="/formularz-briefu"
          className="group inline-flex items-center gap-3 px-10 py-5 bg-white/10 backdrop-blur-md text-white font-bold text-base rounded-2xl border border-white/20 hover:bg-white hover:text-slate-900 hover:border-white hover:-translate-y-1 hover:shadow-[0_20px_50px_-15px_rgba(255,255,255,0.3)] transition-all duration-300"
        >
          Wycena indywidualna
          <FaArrowRight className="text-sm" />
        </a>
      </div>
    </section>
  );
};

export default BranzaHeroClient;
