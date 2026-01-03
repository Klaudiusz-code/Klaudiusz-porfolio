"use client";

import { useState } from "react";
import Link from "next/link";
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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative bg-white overflow-hidden pt-28 md:pt-36 lg:pt-40 pb-6 selection:bg-[#6e92f2] selection:text-white">
      
      {/* === BELKA: OFERTA NOWOROCZNA === */}
      <div className="container mx-auto px-4 mb-14 z-30 relative">
        <div className="relative w-full max-w-4xl mx-auto group">
          <div className="absolute -inset-[2px] bg-gradient-to-r from-[#6e92f2] via-purple-500 to-[#6e92f2] rounded-2xl opacity-70 blur transition duration-500 group-hover:opacity-100 group-hover:blur-md animate-tilt"></div>
          
          <div className="relative w-full bg-slate-900 rounded-xl p-1 flex flex-col sm:flex-row items-center justify-between overflow-hidden">
            
            {/* Lewa strona */}
            <div className="w-full flex-1 px-5 py-3 flex items-center gap-3 justify-center sm:justify-start">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#6e92f2] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#6e92f2]"></span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
                <span className="text-white font-bold tracking-wide text-sm uppercase">
                  Oferta Noworoczna
                </span>
                <span className="hidden sm:inline-block w-px h-3 bg-slate-600"></span>
                <span className="text-slate-300 text-xs sm:text-sm">
                  Nowy rok • najlepszy moment na stronę • warunki startowe
                </span>
              </div>
            </div>

            <div className="hidden sm:block w-px h-8 bg-slate-800 mx-2"></div>
            
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold text-sm transition-colors border-l border-slate-800 sm:border-0 flex items-center justify-center gap-2 group/btn"
            >
              Sprawdź warunki
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform text-[#6e92f2]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center mb-6 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#6e92f2]/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        
        <h1 className="font-black text-4xl md:text-5xl xl:text-7xl text-transparent bg-clip-text bg-gradient-to-b from-[#6e92f2] to-slate-800 tracking-tighter font-monserat mb-6">
          {title}
        </h1>

        <p className="text-slate-500 max-w-[80%] mx-auto text-base lg:text-xl leading-relaxed mb-10 font-light">
          {description}
        </p>

        <CustomButton
          text={buttonText}
          link={buttonUrl}
          bgColor="#0f172a"
          textColor="#fff"
        />
      </div>

      <CharacteristicsSection />

      {/* === MODAL === */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md px-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="relative w-full max-w-sm bg-slate-900 border border-slate-700 rounded-2xl shadow-[0_0_60px_-12px_rgba(110,146,242,0.3)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-5 border-b border-slate-800 flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-800">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <span className="text-[#6e92f2]">✦</span>
                  Oferta na start roku
                </h2>
                <p className="text-xs text-slate-400 mt-0.5">
                  Najlepszy moment na decyzję
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-slate-500 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            <div className="p-6">
              <div className="bg-slate-800/50 rounded-lg p-3 mb-5 border border-slate-700/50 text-xs text-slate-300 leading-relaxed">
                Początek roku to najlepszy moment, żeby poukładać obecność online
                na kolejne 12 miesięcy. W tym okresie oferuję{" "}
                <strong className="text-white">
                  preferencyjne warunki cenowe
                </strong>{" "}
                dla firm, które chcą wejść w nowy rok z dopracowaną,
                szybką i skuteczną stroną.
              </div>

              <div className="space-y-3 mb-6">
                {[
                  "Indywidualny projekt dopasowany do Twojej branży",
                  "Pełna responsywność (RWD)",
                  "Wysoka wydajność i szybkość",
                  "Panel do łatwej edycji treści",
                  "Wdrożenie i konfiguracja",
                  "Wsparcie po starcie"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between">
                    <span className="text-sm text-slate-200">{item}</span>
                    <div className="h-1.5 w-1.5 rounded-full bg-[#6e92f2]" />
                  </div>
                ))}
              </div>

             <Link
                href="/formularz-briefu"
                className="group relative w-full flex items-center justify-center gap-3 bg-white text-slate-900 font-bold text-sm uppercase tracking-wider py-4 rounded-xl hover:scale-[1.02] transition-all duration-300 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_30px_-5px_rgba(255,255,255,0.4)]"
              >
                <span>Wypełnij Brief</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes tilt {
          0% { transform: rotate(0deg); }
          25% { transform: rotate(0.5deg); }
          75% { transform: rotate(-0.5deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-tilt {
          animation: tilt 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
