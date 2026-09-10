"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    title: "Śnieżka na dłoni",
    url: "https://sniezkanadloni.pl",
    quote: "Z pełnym przekonaniem polecam współpracę z Panem Klaudiuszem.",
    content: (
      <>
        <p>
          Wykonał dla mnie stronę internetową obiektu „Ścieżka na Dłoni” i od
          samego początku wykazał się pełnym profesjonalizmem oraz ogromną
          wiedzą. Wszystko zostało zrealizowane terminowo, z dbałością o każdy
          detal.
        </p>
        <p className="mt-4">
          Całą współpracę realizowaliśmy zdalnie, bez spotkań, a mimo to
          ustalenia przebiegały bardzo sprawnie. Świetny kontakt i szybkie
          odpowiedzi sprawiły, że cały proces był wygodny.
        </p>
        <p className="mt-4">
          Strona działa bez zarzutu, jest dopracowana i dokładnie taka, jakiej
          oczekiwałam.
        </p>
      </>
    ),
    author: "Właściciel obiektu „Śnieżka na dłoni”",
  },
  {
    id: 2,
    title: "Gypsys Bar",
    url: "https://gypsysbar.pl",
    quote:
      "Współpraca z Panem Klaudiuszem to była czysta przyjemność i wzór usług premium.",
    content: (
      <>
        <p>
          Nie planowałem w tym konkretnym momencie tego ruchu, natomiast wizja,
          profesjonalizm i ekspertyza Pana Klaudiusza zmieniła moje plany.
        </p>
        <p className="mt-4">
          Od pierwszego kontaktu komunikacja stała na najwyższym poziomie – nie
          tylko słuchał, ale błyskawicznie łapał unikalny core i wizję mojej
          marki. Jego zmysł kreacji i techniczna bezbłędność przełożyły się na
          projekt idealnie oddający klimat biznesu.
        </p>
        <p className="mt-4">
          Żadnych szablonowych rozwiązań – czyste rzemiosło i terminowość.
          Rekomenduję z pełnym przekonaniem!
        </p>
      </>
    ),
    author: "Daniel, Gypsys Bar",
  },
  {
    id: 3,
    title: "RP.Events",
    url: "https://rpevents.pl/",
    quote:
      "Dostałem dokładnie to, czego oczekiwałem: szybką, estetyczną stronę, która dobrze pokazuje markę RP.Events i jednocześnie jest przygotowana pod dalszy rozwój.",
    content: (
      <>
        <p>
          Klaudiusz wykonał dla mnie stronę www.rpevents.pl i jestem bardzo
          zadowolony zarówno z efektu, jak i z całego procesu współpracy.
        </p>
        <p className="mt-4">
          Od początku zależało mi na stronie prostej, eleganckiej i nowoczesnej,
          bardziej w formie wizytówki marki niż rozbudowanego serwisu z milionem
          zakładek. Klaudiusz dobrze wyczuł ten kierunek i potrafił przełożyć
          moje uwagi na konkretny projekt, bez forsowania gotowych schematów.
        </p>
        <p className="mt-4">
          Na duży plus zasługuje też podejście techniczne. Strona została
          zintegrowana z moim obecnym systemem CRM. Formularz ze strony trafia
          bezpośrednio do mojego istniejącego procesu obsługi zapytań, razem z
          informacjami o źródle ruchu, co było dla mnie bardzo ważne.
        </p>
        <p className="mt-4">
          Cała komunikacja była konkretna, poprawki były wdrażane na bieżąco, a
          przy bardziej technicznych tematach zawsze dostawałem jasne
          wyjaśnienie, co i dlaczego jest robione.
        </p>
        <p className="mt-4">Gorąco polecam!</p>
      </>
    ),
    author: "Robert, RP.Events",
  },
  {
    id: 4,
    title: "Heaven Taste Bar",
    url: "http://heaventastebar.pl/",
    quote: "Współpraca z Klaudiuszem przebiegła wzorowo.",
    content: (
      <>
        <p>
          Strona została wykonana bardzo starannie, z dużą dbałością o estetykę
          i detale, a cały proces przebiegał sprawnie i terminowo.
        </p>
        <p className="mt-4">
          Na każdym etapie mogłem liczyć na szybki kontakt, rzeczowe podejście i
          otwartość na uwagi. Efekt końcowy w pełni spełnił moje oczekiwania.
        </p>
        <p className="mt-4">
          Nowoczesna, dopracowana i profesjonalna strona, z której jestem
          naprawdę zadowolony. Zdecydowanie polecam współpracę.
        </p>
      </>
    ),
    author: "Błażej, Heaven Taste Bar",
  },
  {
    id: 5,
    title: "Komplex-Bud",
    url: "https://komplex-bud.com",
    quote: "Człowiek, który naprawdę ma pojęcie o tym, co robi.",
    content: (
      <>
        <p>
          Dobry kontakt, konkretne podejście i przede wszystkim potrafi słuchać
          i zrobić dokładnie to, czego oczekujesz.
        </p>
        <p className="mt-4">
          Strona wyszła w punkt, a logo świetnie dopełniło całość. Jesteśmy
          bardzo zadowoleni z efektu, dlatego kolejne dwa projekty mamy już
          wpisane w grafik.
        </p>
        <p className="mt-4">
          3 projekty i 3 razy 100% zadowolenia. Dzięki za świetną robotę!
        </p>
      </>
    ),
    author: "Jan, Komplex-Bud",
  },
];

export default function LatestProjectSection() {
  return (
    <section className="relative w-full bg-slate-50 py-20 md:py-32 overflow-hidden">
      {/* Dekoracyjny element tła - subtelny akcent kolorystyczny */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/30 -skew-x-12 origin-top translate-x-20 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 md:px-8">
        {/* Nagłówek - Wyśrodkowany, elegancki */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.2em] mb-3 block">
            Referencje
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
            Opinie moich klientów
          </h2>
        </div>

        {/* Siatka Kafli - Karty z "charakterem" */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="group bg-white rounded-2xl p-8 md:p-10 shadow-sm border-t-4 border-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden"
            >
              {/* Dekoracyjna ikona cytatu w tle (bardzo subtelna) */}
              <div className="absolute top-6 right-6 text-blue-50 opacity-20 pointer-events-none">
                <svg
                  className="w-24 h-24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C7.89543 16 7 15.1046 7 14V10C7 8.89543 7.89543 8 9 8H12.017C13.1216 8 14.017 8.89543 14.017 10V13C14.017 14.1046 14.9124 15 16.017 15H19C20.1046 15 21 15.8954 21 17V21H14.017ZM3 21L3 18C3 16.8954 2.10457 16 1 16H-2C-3.10457 16 -4 15.1046 -4 14V10C-4 8.89543 -3.10457 8 -2 8H1C2.10457 8 3 8.89543 3 10V13C3 14.1046 3.89543 15 5 15H8C9.10457 15 10 15.8954 10 17V21H3Z"
                    transform="translate(2, 1)"
                  />
                </svg>
              </div>

              <div className="relative z-10 flex flex-col h-full">
                {/* Nazwa projektu - mała etykieta */}
                <div className="mb-6 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600" />
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    {item.title}
                  </span>
                </div>

                {/* Cytat - Duży i wyrazisty */}
                <blockquote className="text-xl md:text-2xl font-bold text-slate-800 leading-snug mb-6 font-serif">
                  {item.quote}
                </blockquote>

                {/* Treść opinii */}
                <div className="text-slate-600 leading-relaxed mb-8 flex-grow space-y-4">
                  {item.content}
                </div>

                {/* Stopka - Kontrast i link */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <span className="text-sm font-semibold text-slate-900">
                    {item.author}
                  </span>

                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-slate-900 hover:bg-blue-600 transition-colors shadow-md hover:shadow-lg"
                  >
                    Zobacz projekt
                    <FaArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
