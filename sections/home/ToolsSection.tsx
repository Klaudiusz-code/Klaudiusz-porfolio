"use client";

import React from "react";
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
        <p className="border-l-2 border-blue-100 pl-4">
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

        <div className="pt-4 border-t border-slate-100 mt-4">
          <p className="text-slate-800 font-medium text-sm leading-relaxed">
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
      "„Współpraca z Panem Klaudiuszem to była czysta przyjemność i wzór usług premium.”",
    content: (
      <>
        <p className="border-l-2 border-blue-100 pl-4">
          Nie planowałem w tym konkretnym momencie tego ruchu, natomiast{" "}
          <span className="font-bold text-blue-950">
            wizja, profesjonalizm i ekspertyza Pana Klaudiusza zmieniła moje
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
          . Jego zmysł kreacji i techniczna bezbłędność przełożyły się na
          projekt idealnie oddający klimat biznesu.
        </p>

        <div className="pt-4 border-t border-slate-100 mt-4">
          <p className="text-slate-800 font-medium text-sm leading-relaxed">
            Żadnych szablonowych rozwiązań – czyste rzemiosło i terminowość.
            Rekomenduję z pełnym przekonaniem!
          </p>
        </div>
      </>
    ),
    author: "Daniel, Gypsys Bar",
  },
  {
    id: 3,
    title: "Heaven Taste Bar",
    url: "http://heaventastebar.pl/",
    quote: "„Współpraca z Klaudiuszem przebiegła wzorowo.”",
    content: (
      <>
        <p className="border-l-2 border-blue-100 pl-4">
          Strona została wykonana bardzo starannie, z{" "}
          <span className="font-bold text-blue-950">
            dużą dbałością o estetykę i detale
          </span>
          , a cały proces przebiegał sprawnie i terminowo.
        </p>

        <p>
          Na każdym etapie mogłem liczyć na{" "}
          <span className="font-bold text-blue-950">
            szybki kontakt, rzeczowe podejście i otwartość na uwagi
          </span>
          . Efekt końcowy w pełni spełnił moje oczekiwania.
        </p>

        <div className="pt-4 border-t border-slate-100 mt-4">
          <p className="text-slate-800 font-medium text-sm leading-relaxed">
            Nowoczesna, dopracowana i profesjonalna strona, z której jestem
            naprawdę zadowolony. Zdecydowanie polecam współpracę.
          </p>
        </div>
      </>
    ),
    author: "Błażej, Heaven Taste Bar",
  },
  {
    id: 4,
    title: "Komplex-Bud",
    url: "https://komplex-bud.com",
    quote: "„Człowiek, który naprawdę ma pojęcie o tym, co robi.”",
    content: (
      <>
        <p className="border-l-2 border-blue-100 pl-4">
          Dobry kontakt, konkretne podejście i przede wszystkim{" "}
          <span className="font-bold text-blue-950">
            potrafi słuchać i zrobić dokładnie to, czego oczekujesz
          </span>
          .
        </p>

        <p>
          Strona wyszła w punkt, a{" "}
          <span className="font-bold text-blue-950">
            logo świetnie dopełniło całość
          </span>
          . Jesteśmy bardzo zadowoleni z efektu, dlatego kolejne dwa projekty
          mamy już wpisane w grafik.
        </p>

        <div className="pt-4 border-t border-slate-100 mt-4">
          <p className="text-slate-800 font-medium text-sm leading-relaxed">
            3 projekty i 3 razy 100% zadowolenia. Dzięki za świetną robotę!
          </p>
        </div>
      </>
    ),
    author: "Jan, Komplex-Bud",
  },
];

export default function LatestProjectSection() {
  return (
    <section className="relative w-full bg-slate-50 overflow-hidden">
      {/* Tło */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-blue-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-8 py-20 md:py-28">
        {/* Nagłówek */}
        <div className="text-center mb-14 md:mb-20">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.25em]">
            Ostatnie realizacje
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Co mówią klienci?
          </h2>
        </div>

        {/* Siatka Kafli */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl p-6 md:p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Góra kafelka */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-xs md:text-sm font-bold text-blue-600 tracking-wide bg-blue-50 px-3 py-1.5 rounded-full">
                  {item.title}
                </h3>
                <FaQuoteLeft className="w-6 h-6 text-slate-100 group-hover:text-blue-100 transition-colors" />
              </div>

              {/* Cytat */}
              <p className="text-xl md:text-2xl font-serif italic text-slate-800 leading-snug mb-6">
                {item.quote}
              </p>

              {/* Treść opinii */}
              <div className="space-y-4 text-sm md:text-base text-slate-600 leading-relaxed mb-8 flex-grow">
                {item.content}
              </div>

              {/* Stopka kafelka */}
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                  <p className="text-slate-900 font-medium tracking-wide text-sm truncate">
                    {item.author}
                  </p>
                </div>

                <Link
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn shrink-0 inline-flex items-center gap-2 text-slate-400 hover:text-blue-600 transition-colors"
                >
                  <span className="text-xs font-medium hidden sm:inline">
                    Odwiedź
                  </span>
                  <span className="w-8 h-8 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center group-hover/btn:bg-blue-50 group-hover/btn:border-blue-200 transition-all">
                    <FaArrowRight className="text-[10px]" />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
