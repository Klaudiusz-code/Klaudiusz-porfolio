"use client";

import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Śnieżka na Dłoni",
    author: "Właściciel obiektu „Śnieżka na Dłoni”",
    url: "https://sniezkanadloni.pl",
    text: [
      "Wykonał dla mnie stronę internetową obiektu „Śnieżka na Dłoni” i od samego początku wykazał się pełnym profesjonalizmem oraz ogromną wiedzą. Wszystko zostało zrealizowane terminowo, z dbałością o każdy detal.",
      "Całą współpracę realizowaliśmy zdalnie, bez spotkań, a mimo to ustalenia przebiegały bardzo sprawnie. Świetny kontakt i szybkie odpowiedzi sprawiły, że cały proces był wygodny.",
      "Strona działa bez zarzutu, jest dopracowana i dokładnie taka, jakiej oczekiwałam.",
    ],
  },
  {
    name: "Gypsy's Bar",
    author: "Daniel, Gypsy's Bar",
    url: "https://gypsysbar.pl",
    text: [
      "Nie planowałem w tym konkretnym momencie tego ruchu, natomiast wizja, profesjonalizm i ekspertyza Pana Klaudiusza zmieniły moje plany.",
      "Od pierwszego kontaktu komunikacja stała na najwyższym poziomie – nie tylko słuchał, ale błyskawicznie łapał unikalny core i wizję mojej marki. Jego zmysł kreacji i techniczna bezbłędność przełożyły się na projekt idealnie oddający klimat biznesu.",
      "Żadnych szablonowych rozwiązań – czyste rzemiosło i terminowość. Rekomenduję z pełnym przekonaniem!",
    ],
  },
  {
    name: "RP.Events",
    author: "Robert, RP.Events",
    url: "https://rpevents.pl",
    text: [
      "Klaudiusz wykonał dla mnie stronę rpevents.pl i jestem bardzo zadowolony zarówno z efektu, jak i z całego procesu współpracy.",
      "Od początku zależało mi na stronie prostej, eleganckiej i nowoczesnej, bardziej w formie wizytówki marki niż rozbudowanego serwisu z milionem zakładek. Klaudiusz dobrze wyczuł ten kierunek i potrafił przełożyć moje uwagi na konkretny projekt, bez forsowania gotowych schematów.",
      "Na duży plus zasługuje też podejście techniczne. Strona została zintegrowana z moim obecnym systemem CRM. Formularz ze strony trafia bezpośrednio do mojego istniejącego procesu obsługi zapytań, razem z informacjami o źródle ruchu, co było dla mnie bardzo ważne.",
      "Cała komunikacja była konkretna, poprawki były wdrażane na bieżąco, a przy bardziej technicznych tematach zawsze dostawałem jasne wyjaśnienie, co i dlaczego jest robione. Gorąco polecam!",
    ],
  },
  {
    name: "Heaven Taste Bar",
    author: "Błażej, Heaven Taste Bar",
    url: "https://heaventastebar.pl",
    text: [
      "Strona została wykonana bardzo starannie, z dużą dbałością o estetykę i detale, a cały proces przebiegał sprawnie i terminowo.",
      "Na każdym etapie mogłem liczyć na szybki kontakt, rzeczowe podejście i otwartość na uwagi. Efekt końcowy w pełni spełnił moje oczekiwania.",
      "Nowoczesna, dopracowana i profesjonalna strona, z której jestem naprawdę zadowolony. Zdecydowanie polecam współpracę.",
    ],
  },
  {
    name: "Komplex-Bud",
    author: "Jan, Komplex-Bud",
    url: "https://komplex-bud.com",
    text: [
      "Dobry kontakt, konkretne podejście i przede wszystkim potrafi słuchać i zrobić dokładnie to, czego oczekujesz.",
      "Strona wyszła w punkt, a logo świetnie dopełniło całość. Jesteśmy bardzo zadowoleni z efektu, dlatego kolejne dwa projekty mamy już wpisane w grafik.",
      "3 projekty i 3 razy 100% zadowolenia. Dzięki za świetną robotę!",
    ],
  },
  {
    name: "MZ Event Solutions",
    author: "Zespół MZ Event Solutions",
    url: "https://mzeventsolutions.com",
    text: [
      "Współpraca z Panem Klaudiuszem od początku do końca przebiegała bardzo profesjonalnie. Projekt powstał praktycznie od zera i był na bieżąco rozwijany oraz dostosowywany do naszych uwag i potrzeb.",
      "Szczególnie doceniamy zaangażowanie, cierpliwość oraz otwartość na sugestie. Każda zgłoszona zmiana była analizowana i wdrażana w przemyślany sposób, dzięki czemu udało się stworzyć stronę, która bardzo dobrze oddaje charakter MZ Event Solutions.",
      "Efekt końcowy jest spójny, nowoczesny i przede wszystkim pokazuje nas jako firmę zajmującą się kompleksową organizacją wydarzeń, a nie tylko pojedynczymi usługami.",
      "Z pełnym przekonaniem możemy polecić współpracę osobom, którym zależy na indywidualnym podejściu oraz stronie tworzonej od podstaw, a nie na gotowym szablonie.",
    ],
  },
  {
    name: "Brothers Bartenders",
    author: "Zespół Brothers Bartenders",
    url: "https://brothers-bartenders.pl",
    text: [
      "Z czystym sumieniem polecamy współpracę z KlaudiuszDev – strona dla Brothers Bartenders przeszła nasze najśmielsze oczekiwania!",
      "Klaudiusz genialnie wyczuł klimat naszej firmy i stworzył nowoczesną, elegancką oraz niezwykle funkcjonalną witrynę, która idealnie prezentuje naszą ofertę obsługi barmańskiej. Kontakt na każdym etapie projektu był błyskawiczny, a wszelkie nasze sugestie i poprawki były wprowadzane od ręki.",
      "Strona działa świetnie na telefonach, jest intuicyjna i już od pierwszych dni przyciąga nowych klientów. Jeśli szukacie profesjonalisty, który dba o każdy detal i terminowo dowozi świetny produkt, KlaudiuszDev to strzał w dziesiątkę!",
    ],
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedReviews, setExpandedReviews] = useState<string[]>([]);

  const toggleReview = (name: string) => {
    setExpandedReviews((current) =>
      current.includes(name)
        ? current.filter((item) => item !== name)
        : [...current, name],
    );
  };

  const getCardDistance = () => {
    const slider = sliderRef.current;
    const card = slider?.querySelector<HTMLElement>("[data-review-card]");

    if (!slider || !card) return 0;

    const gap = parseFloat(window.getComputedStyle(slider).columnGap) || 0;

    return card.getBoundingClientRect().width + gap;
  };

  const scroll = (direction: "prev" | "next") => {
    const slider = sliderRef.current;
    const distance = getCardDistance();

    if (!slider || !distance) return;

    slider.scrollBy({
      left: direction === "next" ? distance : -distance,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const slider = sliderRef.current;
    const distance = getCardDistance();

    if (!slider || !distance) return;

    setActiveIndex(
      Math.min(
        testimonials.length - 1,
        Math.max(0, Math.round(slider.scrollLeft / distance)),
      ),
    );
  };

  const goToReview = (index: number) => {
    const slider = sliderRef.current;
    const cards = slider?.querySelectorAll<HTMLElement>("[data-review-card]");
    const card = cards?.[index];

    if (!slider || !card || !cards?.length) return;

    slider.scrollTo({
      left: card.offsetLeft - cards[0].offsetLeft,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-[0.16em] text-neutral-500">
              Opinie klientów
            </p>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-neutral-950 md:text-5xl">
              Dobra współpraca zostawia efekty.
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <span className="mr-2 text-sm tabular-nums text-neutral-500">
              {activeIndex + 1} / {testimonials.length}
            </span>

            <button
              type="button"
              onClick={() => scroll("prev")}
              aria-label="Poprzednie opinie"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-xl text-neutral-800 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
            >
              ←
            </button>

            <button
              type="button"
              onClick={() => scroll("next")}
              aria-label="Następne opinie"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-xl text-neutral-800 transition-colors hover:border-neutral-900 hover:bg-neutral-900 hover:text-white"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex snap-x snap-mandatory items-stretch gap-5 overflow-x-auto scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((review) => {
            const isExpanded = expandedReviews.includes(review.name);

            return (
              <article
                key={review.name}
                data-review-card
                className="flex min-h-[320px] basis-full shrink-0 snap-start flex-col rounded-2xl border border-neutral-200 bg-white p-6 sm:basis-[calc((100%-20px)/2)] sm:p-7 xl:basis-[calc((100%-40px)/3)]"
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className="text-2xl leading-none text-neutral-400"
                  >
                    “
                  </span>

                  <span className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                    Opinia klienta
                  </span>
                </div>

                <div className="flex-1">
                  <div
                    className={`space-y-3 ${isExpanded ? "" : "line-clamp-5"}`}
                  >
                    {review.text.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-sm leading-6 text-neutral-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleReview(review.name)}
                    aria-expanded={isExpanded}
                    className="mt-3 text-sm font-medium text-neutral-900 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-900"
                  >
                    {isExpanded ? "Zwiń opinię" : "Rozwiń opinię"}
                  </button>
                </div>

                <div className="mt-6 border-t border-neutral-200 pt-4">
                  <p className="font-semibold text-neutral-950">
                    {review.name}
                  </p>

                  <p className="mt-1 text-sm leading-5 text-neutral-500">
                    {review.author}
                  </p>

                  <a
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-neutral-800 transition-colors hover:text-neutral-500"
                  >
                    Zobacz stronę <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {testimonials.map((review, index) => (
            <button
              key={review.name}
              type="button"
              aria-label={`Przejdź do opinii ${index + 1}`}
              aria-current={activeIndex === index ? "true" : undefined}
              onClick={() => goToReview(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeIndex === index
                  ? "w-7 bg-neutral-900"
                  : "w-1.5 bg-neutral-300 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
