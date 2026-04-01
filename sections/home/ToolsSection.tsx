"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function LatestProjectSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden">
      
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-16 py-24 md:py-36">
        
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-20 border-b border-slate-100 pb-10">
          <div>
            <p className="text-[11px] font-bold text-blue-500 uppercase tracking-[0.25em] mb-4">
              Ostatnia realizacja
            </p>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-none">
              Śnieżka na dłoni
            </h2>
          </div>
          
          <Link
            href="https://sniezkanadloni.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 text-sm font-medium text-slate-400 hover:text-blue-600 transition-colors"
          >
            sniezkanadloni.pl
            <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="max-w-4xl">
          
          <p className="text-2xl md:text-3xl font-medium tracking-tight text-slate-800 leading-snug mb-10">
            Z pełnym przekonaniem polecam współpracę z Panem Klaudiuszem.
          </p>

          <div className="space-y-6 text-lg text-slate-500 leading-[1.85] font-light">
            <p>
              Wykonał dla mnie stronę internetową obiektu „Ścieżka na Dłoni” i od samego początku wykazał się <span className="text-blue-600 font-medium">pełnym profesjonalizmem oraz ogromną wiedzą</span>. Wszystko zostało zrealizowane terminowo, z dbałością o każdy detal, a wszystkie zgłaszane przeze mnie uwagi były wdrażane na bieżąco i bez żadnych problemów.
            </p>
            <p>
              Całą współpracę realizowaliśmy zdalnie, bez spotkań, a mimo to ustalenia przebiegały bardzo sprawnie i efektywnie. Świetny kontakt, szybkie odpowiedzi i duże zaangażowanie sprawiły, że cały proces był wygodny i bezproblemowy.
            </p>
            
            <p className="text-slate-700 font-normal">
              Strona działa bez zarzutu, jest dopracowana i dokładnie taka, jakiej oczekiwałam. Pan Klaudiusz to osoba rzetelna, pomocna.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-100 max-w-4xl">
          <p className="text-slate-900 text-sm font-medium">
            Właściciel obiektu „Śnieżka na dłoni”
          </p>
        </div>

      </div>
    </section>
  );
}