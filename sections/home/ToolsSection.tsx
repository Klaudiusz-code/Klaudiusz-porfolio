"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FaArrowRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    title: "Śnieżka na dłoni",
    url: "https://sniezkanadloni.pl",
    quote: "„Z pełnym przekonaniem polecam współpracę z Panem Klaudiuszem.”",
    content: (
      <>
        <p className="border-l-2 border-blue-100 pl-4 md:pl-6">
          Wykonał dla mnie stronę internetową obiektu „Ścieżka na Dłoni” i od
          samego początku wykazał się{" "}
          <span className="font-bold text-blue-950">
            pełnym profesjonalizmem oraz ogromną wiedzą
          </span>
          . Wszystko zostało zrealizowane terminowo, z dbałością o każdy detal.
        </p>

        <p>
          Całą współpracę realizowaliśmy zdalnie, bez spotkań, a mimo to{" "}
          <span className="font-bold text-blue-950">
            ustalenia przebiegały bardzo sprawnie
          </span>
          . Świetny kontakt i szybkie odpowiedzi sprawiły, że cały proces był
          wygodny.
        </p>

        <div className="pt-4 md:pt-6 border-t border-slate-200 mt-6">
          <p className="text-slate-800 font-medium text-base leading-relaxed">
            Strona działa bez zarzutu, jest dopracowana i dokładnie taka, jakiej
            oczekiwałam.
          </p>
        </div>
      </>
    ),
    author: "Właściciel obiektu „Śnieżka na dłoni”",
  },
  {
    id: 2,
    title: "Gypsys Bar",
    url: "https://gypsysbar.pl",
    quote:
      "„Współpraca z Panem Klaudiuszem przy tworzeniu strony internetowej dla mojej firmy to była czysta przyjemność i wzór tego, jak powinny wyglądać usługi premium.”",
    content: (
      <>
        <p className="border-l-2 border-blue-100 pl-4 md:pl-6">
          Nie planowałem w tym konkretnym momencie tego ruchu, natomiast{" "}
          <span className="font-bold text-blue-950">
            wizja, profesjonalizm i ekspertyza Pana Klaudiusza zmieniła moja
            plany
          </span>
          .
        </p>

        <p>
          Od pierwszego kontaktu komunikacja stała na najwyższym poziomie – nie
          tylko słuchał, ale{" "}
          <span className="font-bold text-blue-950">
            błyskawicznie łapał unikalny core i wizję mojej marki
          </span>
          . Jego zmysł kreacji, dbałość o detale oraz techniczna bezbłędność
          przełożyły się na projekt, który idealnie oddaje klimat i
          pozycjonowanie biznesu.
        </p>

        <div className="pt-4 md:pt-6 border-t border-slate-200 mt-6">
          <p className="text-slate-800 font-medium text-base leading-relaxed">
            Żadnych szablonowych rozwiązań czy dróg na skróty – czyste
            rzemiosło, terminowość i pełne zaangażowanie na każdym etapie. Jeśli
            szukasz kogoś, kto nie tylko zakoduje stronę, ale stworzy
            zintegrowane dzieło sztuki użytkowej i podniesie prestiż Twojej
            firmy, Klaudiusz jest jedynym właściwym wyborem. Rekomenduję z
            pełnym przekonaniem!
          </p>
        </div>
      </>
    ),
    author: "Daniel, Gypsys Bar",
  },
];

export default function LatestProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeData = testimonials[activeIndex];

  return (
    <section className="relative w-full bg-slate-50 overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[500px] md:w-[800px] md:h-[600px] bg-blue-50/40 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-content {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 md:px-12 py-20 md:py-32">
        {/* Nagłówek z wyraźnymi przyciskami */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16 border-b border-slate-200/60 pb-6">
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em] block">
              Ostatnie realizacje
            </span>

            {/* Wyraźne "pills" - nie da się ich nie zauważyć */}
            <div className="flex flex-wrap gap-3">
              {testimonials.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveIndex(index)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 border ${
                    activeIndex === index
                      ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                      : "bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-800"
                  }`}
                >
                  {item.title}
                </button>
              ))}
            </div>
          </div>

          <Link
            href={activeData.url}
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

        {/* Treść opinii */}
        <div className="relative">
          <div className="absolute -top-4 -left-2 text-blue-100 opacity-60 z-0 pointer-events-none">
            <FaQuoteLeft className="w-16 h-16 md:w-24 md:h-24" />
          </div>

          <div
            key={activeData.id}
            className="relative z-10 max-w-2xl md:ml-12 animate-content"
          >
            <p className="text-2xl md:text-4xl font-serif italic text-slate-800 leading-tight mb-8 md:mb-12">
              {activeData.quote}
            </p>

            <div className="space-y-6 text-base md:text-lg text-slate-600 leading-[1.7] md:leading-[1.8] font-normal tracking-wide">
              {activeData.content}
            </div>
          </div>
        </div>

        {/* Podpis */}
        <div
          key={`author-${activeData.id}`}
          className="mt-16 md:mt-20 flex items-center gap-4 md:ml-12 animate-content"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
          <p className="text-slate-900 font-medium tracking-wide text-sm">
            {activeData.author}
          </p>
        </div>
      </div>
    </section>
  );
}
