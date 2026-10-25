import Link from "next/link";
import {
  HiOutlineChatAlt2,
  HiOutlineDocumentText,
  HiOutlineDesktopComputer,
  HiOutlineCode,
} from "react-icons/hi";

const steps = [
  {
    id: "1",
    Icon: HiOutlineChatAlt2,
    title: "Rozmowa i ustalenia",
    description:
      "Poznaję Twoją firmę, ofertę i oczekiwania. Ustalamy zakres strony, potrzebne funkcje i budżet.",
  },
  {
    id: "2",
    Icon: HiOutlineDocumentText,
    title: "Wycena i akceptacja",
    description:
      "Przygotowuję ofertę z zakresem prac i ceną. Po jej akceptacji ustalamy szczegóły rozpoczęcia projektu.",
  },
  {
    id: "3",
    Icon: HiOutlineDesktopComputer,
    title: "Projekt i podgląd",
    description:
      "Przygotowuję projekt strony, abyś mógł zobaczyć kierunek wizualny i ocenić go przed dalszą realizacją.",
  },
  {
    id: "4",
    Icon: HiOutlineCode,
    title: "Realizacja i publikacja",
    description:
      "Po akceptacji projektu przechodzę do właściwej realizacji. Testuję stronę, wprowadzam ustalone poprawki i przygotowuję ją do publikacji.",
  },
];

export default function DesignProcessSection() {
  return (
    <section className="bg-blue-950 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-sm font-semibold text-blue-300">
            Jak pracuję
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Od pomysłu do gotowej strony
          </h2>

          <p className="mt-4 text-base leading-7 text-blue-100/75">
            Każdy etap omawiam z Tobą na bieżąco. Wiesz, co ustalamy, za co
            płacisz i na jakim etapie jest projekt.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:gap-x-14 lg:gap-y-12">
          {steps.map(({ id, Icon, title, description }) => (
            <article key={id} className="flex gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-blue-800 bg-blue-900/50 text-blue-300">
                <Icon className="h-5 w-5" />
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold tracking-wide text-blue-300/70">
                  ETAP {id}
                </p>

                <h3 className="text-lg font-semibold text-white">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-blue-100/75">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 border-t border-blue-800 pt-8">
          <p className="mb-5 text-sm text-blue-100/75">
            Masz pomysł na stronę? Porozmawiajmy o zakresie i wycenie.
          </p>

          <Link
            href="/kontakt"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-blue-950 transition-colors hover:bg-blue-100"
          >
            Omówmy Twój projekt
          </Link>
        </div>
      </div>
    </section>
  );
}
