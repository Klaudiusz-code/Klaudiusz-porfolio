"use client";

import {
  HiOutlineDesktopComputer,
  HiOutlineShoppingBag,
  HiArrowRight,
} from "react-icons/hi";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";

const services = [
  {
    Icon: HiOutlineDesktopComputer,
    title: "Strony internetowe",
    description:
      "Projektuję i wdrażam strony firmowe, które dobrze wyglądają na każdym urządzeniu, szybko działają i jasno przedstawiają ofertę.",
    features: [
      "Indywidualny projekt",
      "Dostosowanie do telefonów",
      "Podstawowa optymalizacja SEO",
    ],
  },
  {
    Icon: HiOutlineShoppingBag,
    title: "Sklepy internetowe",
    description:
      "Tworzę sklepy WooCommerce z wygodnym procesem zakupowym, płatnościami online i integracjami dopasowanymi do potrzeb firmy.",
    features: [
      "Konfiguracja produktów",
      "Płatności i dostawy",
      "Zarządzanie zamówieniami",
    ],
  },
  {
    Icon: HiOutlineWrenchScrewdriver,
    title: "Opieka techniczna",
    description:
      "Pomagam utrzymać strony i sklepy w dobrym stanie technicznym. Zajmuję się aktualizacjami, kopiami zapasowymi i poprawkami.",
    features: [
      "Aktualizacje i kopie zapasowe",
      "Naprawa błędów",
      "Bieżące wsparcie techniczne",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-20 text-slate-900 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mb-12 max-w-2xl sm:mb-16">
          <p className="mb-3 text-sm font-semibold text-blue-600">Oferta</p>

          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Czym mogę Ci pomóc?
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Od strony internetowej dla firmy po sklep i późniejszą opiekę
            techniczną. Zakres współpracy dopasowuję do projektu.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description, features }) => (
            <article
              key={title}
              className="flex flex-col rounded-xl border border-slate-200 p-6 sm:p-7"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </div>
              </div>

              <h3 className="text-xl font-semibold tracking-tight">{title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>

              <ul className="mt-6 space-y-3 border-t border-slate-100 pt-5">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-slate-700"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href="/kontakt"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Zapytaj o usługę
                <HiArrowRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
