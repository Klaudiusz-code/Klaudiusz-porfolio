import React from "react";
import Link from "next/link";
import { FaArrowRight, FaGift } from "react-icons/fa";
import { FiClock, FiFileText, FiEye } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 overflow-hidden bg-[#0B0F19] text-white py-24 md:py-32 border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.4] pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 text-blue-400 text-sm font-bold uppercase tracking-widest">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              Oferta specjalna
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Twoja wizja, <br />
              <span className="text-white/50">mój plan działania.</span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed">
              Wypełnij krótki brief, a pokażę Ci darmowy podgląd Twojej
              przyszłej strony internetowej.
            </p>

            <div className="flex gap-8 pt-4 border-t border-white/5">
              <div>
                <p className="text-2xl font-bold text-white">0 zł</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Koszt wyceny
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">24h</p>
                <p className="text-xs text-slate-500 uppercase tracking-wider">
                  Czas na decyzję
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="mb-8 text-center">
                <p className="text-sm font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                  Prosta wymiana
                </p>
                <h3 className="text-3xl md:text-4xl font-bold leading-tight">
                  Wypełnij <span className="text-blue-400">Brief</span> i
                  odbierz
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-400 drop-shadow-[0_0_15px_rgba(96,165,250,0.5)]">
                    DARMOWY PODGLĄD
                  </span>
                  <br />
                  Twojej strony
                </h3>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
                <div className="flex-1 w-full bg-[#111827] border border-white/5 rounded-2xl p-5 flex items-center gap-4 group hover:border-blue-500/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:bg-blue-500/10 transition-all">
                    <FiFileText className="text-xl" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold">
                      Krok 1
                    </p>
                    <p className="text-white font-bold">Twój Biznes</p>
                  </div>
                </div>

                <div className="text-slate-600">
                  <FaArrowRight className="rotate-90 md:rotate-0 text-xl" />
                </div>

                <div className="flex-1 w-full bg-[#111827] border-2 border-blue-500/30 rounded-2xl p-5 flex items-center gap-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-blue-500/5"></div>
                  <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]">
                    <FiEye className="text-xl" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-xs text-blue-400 uppercase font-bold">
                      Krok 2
                    </p>
                    <p className="text-white font-bold">Widok Efektu</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center">
                <Link
                  href="/formularz-briefu"
                  className="group relative w-full md:w-auto px-10 py-6 bg-white text-slate-900 font-black text-[14px] md:text-xl uppercase tracking-wider rounded-xl hover:scale-105 transition-all duration-300 shadow-[0_10px_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_20px_50px_-12px_rgba(59,130,246,0.6)] flex items-center justify-center gap-3"
                >
                  <FaGift className="text-blue-600" />
                  Chcę Darmowy Podgląd
                  <FaArrowRight className="transition-transform group-hover:translate-x-2" />
                </Link>
              </div>

              <p className="text-center text-xs text-slate-500 mt-6 font-mono">
                <FiClock className="inline mr-1 mb-0.5" /> Zajmie to mniej niż 5
                minut
              </p>
            </div>

            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-[3rem] blur-2xl -z-10 opacity-50"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
