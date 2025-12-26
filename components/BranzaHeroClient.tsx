"use client";

import React from "react";
import { FaArrowRight, FaComments, FaPencilRuler, FaCheck, FaMobileAlt } from "react-icons/fa";

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
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[#0a0a0a] text-white pt-24 md:pt-32 pb-20">
      
      {/* TŁO */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center opacity-50 scale-105"
        style={{ backgroundImage: `url(${branża.heroImage})` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/80 via-[#0a0a0a]/90 to-[#0a0a0a]" />
      
      <div 
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[color:var(--primary)] opacity-20 blur-[100px] rounded-full pointer-events-none"
        style={{ '--primary': colors.primary } as any}
      ></div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center w-full flex flex-col items-center">
        
        <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] uppercase border border-white/10 rounded-full bg-white/5 backdrop-blur-sm" style={{ color: colors.accent }}>
          {branża.tagline}
        </span>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05] max-w-5xl">
          {branża.title}
        </h1>

        <p className="text-lg md:text-xl text-gray-300 mb-16 max-w-2xl font-normal leading-relaxed">
          {branża.heroText}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-5xl mb-16">
          {steps.map((step, i) => (
            <div key={i} className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-[#111] border border-white/5 hover:border-[color:var(--primary)]/50 hover:bg-[#161616] transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center text-[color:var(--accent)] mb-4 text-lg group-hover:scale-110 transition-transform" style={{ '--accent': colors.accent } as any}>
                {step.icon}
              </div>
              <div className="font-bold text-sm mb-1 tracking-wide">{step.label}</div>
              <div className="text-xs text-gray-500 font-medium uppercase tracking-wider">{step.desc}</div>
            </div>
          ))}
        </div>

        <a
           href="/formularz-briefu"
           className="inline-flex items-center gap-4 px-10 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-[color:var(--accent)] hover:text-white hover:scale-105 transition-all duration-300 shadow-2xl shadow-white/10"
           style={{ '--accent': colors.accent } as any}
        >
          Wycena indywidualna
          <FaArrowRight className="text-base" />
        </a>
        
      </div>
    </section>
  );
};

export default BranzaHeroClient;