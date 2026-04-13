"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

export default function LatestProjectSection() {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[500px] md:w-[800px] md:h-[600px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 md:px-12 py-20 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 border-b border-slate-200/60 pb-6">
          <div className="space-y-2">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] block">
              Ostatnia realizacja
            </span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-tight">
              Śnieżka na dłoni
            </h2>
          </div>

          <Link
            href="https://sniezkanadloni.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-slate-400 hover:text-blue-600 transition-all duration-300 self-start md:self-auto"
          >
            <span className="text-sm font-medium tracking-wide">
              Odwiedź stronę
            </span>
            <span className="w-9 h-9 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center group-hover:border-blue-600 group-hover:shadow-md transition-all duration-300">
              <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>

        <div className="relative">
          <div className="absolute -top-4 -left-2 text-blue-100 opacity-60 z-0 pointer-events-none">
            <FaQuoteLeft className="w-16 h-16 md:w-24 md:h-24" />
          </div>

          <div className="relative z-10 max-w-2xl md:ml-12">
            <p className="text-2xl md:text-4xl font-serif italic text-slate-800 leading-tight mb-8 md:mb-12">
              „Z pełnym przekonaniem polecam współpracę z Panem Klaudiuszem.”
            </p>

            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-[1.7] md:leading-[1.8] font-normal tracking-wide">
              <p className="border-l-2 border-blue-100 pl-4 md:pl-6">
                Wykonał dla mnie stronę internetową obiektu „Ścieżka na Dłoni” i
                od samego początku wykazał się{" "}
                <span className="font-bold text-blue-950">
                  pełnym profesjonalizmem oraz ogromną wiedzą
                </span>
                . Wszystko zostało zrealizowane terminowo, z dbałością o każdy
                detal.
              </p>

              <p>
                Całą współpracę realizowaliśmy zdalnie, bez spotkań, a mimo to{" "}
                <span className="font-bold text-blue-950">
                  ustalenia przebiegały bardzo sprawnie
                </span>
                . Świetny kontakt i szybkie odpowiedzi sprawiły, że cały proces
                był wygodny.
              </p>

              <div className="pt-4 md:pt-6 border-t border-slate-200 mt-6">
                <p className="text-slate-800 font-medium text-base leading-relaxed">
                  Strona działa bez zarzutu, jest dopracowana i dokładnie taka,
                  jakiej oczekiwałam.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Podpis */}
        <div className="mt-16 md:mt-20 flex items-center gap-4 md:ml-12">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <p className="text-slate-900 font-medium tracking-wide text-sm">
            Właściciel obiektu „Śnieżka na dłoni”
          </p>
        </div>
      </div>
    </section>
  );
}
