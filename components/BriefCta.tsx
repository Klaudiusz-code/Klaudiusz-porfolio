"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiFileText, FiEdit3, FiEye } from "react-icons/fi";

const steps = [
  {
    icon: FiFileText,
    title: "Wypełniasz brief",
    desc: "Opowiadasz o swojej firmie, ofercie i oczekiwaniach względem strony.",
  },
  {
    icon: FiEdit3,
    title: "Przygotowuję projekt",
    desc: "Tworzę wizualny podgląd strony głównej dopasowany do Twojego biznesu.",
  },
  {
    icon: FiEye,
    title: "Oceniasz efekt",
    desc: "Sprawdzasz projekt i decydujesz, czy chcesz przejść do realizacji.",
  },
];

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-blue-950 py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center sm:mb-16">
          <p className="mb-4 text-sm font-semibold tracking-wide text-blue-300">
            Zacznij bez zobowiązań
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Zobacz projekt swojej strony
            <span className="mt-1 block text-blue-300">
              zanim zdecydujesz się na realizację.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-100/75 sm:text-lg">
            Przygotuję bezpłatny podgląd strony dopasowany do Twojej firmy.
            Zobaczysz proponowany kierunek wizualny, zanim podejmiesz decyzję o
            współpracy.
          </p>
        </div>

        <div className="relative mx-auto mb-14 max-w-5xl sm:mb-16">
          <div className="absolute left-[16.66%] right-[16.66%] top-6 hidden h-px bg-white/15 md:block" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {steps.map(({ icon: Icon, title, desc }, index) => (
              <article
                key={title}
                className="relative flex gap-4 md:flex-col md:items-center md:text-center"
              >
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-blue-950 text-blue-300">
                  <Icon className="h-5 w-5" />
                </div>

                <div className="pt-0.5 md:pt-0">
                  <p className="mb-2 text-xs font-medium tracking-wider text-blue-300/70">
                    KROK {index + 1}
                  </p>

                  <h3 className="text-base font-semibold text-white">
                    {title}
                  </h3>

                  <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-blue-100/70">
                    {desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="border-t border-white/15 pt-10 text-center sm:pt-12">
          <Link
            href="/formularz-briefu"
            className="group inline-flex w-full items-center justify-center gap-3 rounded-md bg-white px-7 py-4 text-sm font-semibold text-blue-950 transition-colors hover:bg-blue-50 sm:w-auto sm:px-9"
          >
            Zamów bezpłatny podgląd
            <FaArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
          </Link>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-blue-100/65">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />0 zł za
              podgląd
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              Bez zobowiązań
            </span>

            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-300" />
              Bez presji na współpracę
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
