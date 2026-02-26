"use client";

import React from "react";

const Icons = {
  Layout: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  Globe: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  ),
  Tool: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  ),
  Check: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
};
const services = [
  {
    title: "Sklep lub Strona",
    subtitle: "Solidne narzędzie sprzedaży.",
    description:
      "Buduję strony i sklepy, które są przejrzyste dla klienta i łatwe w obsłudze dla Ciebie. Dobre techniczne podstawy to podstawa zaufania.",
    features: [
      "Stabilne działanie",
      "Łatwy panel edycji",
      "Szybkość działania",
    ],
  },
  {
    title: "Widoczność",
    subtitle: "Być tam, gdzie szukają.",
    description:
      "Dbam o techniczną poprawność Twojej strony w Google. To gwarantuje, że Twoja firma jest widoczna dla klientów z Twojej okolicy.",
    features: ["Google Maps", "Podstawy techniczne SEO", "Dostępność mobilna"],
  },
  {
    title: "Stała Wsparcie",
    subtitle: "Odpowiadam za stabilność.",
    description:
      "Strona wymaga regularnej uwagi. Prowadzę aktualizacje, dbam o bezpieczeństwo i zajmuję się bieżącą obsługą – od edycji tekstów po dodawanie zdjęć.",
    features: [
      "Edycja treści",
      "Aktualizacja zdjęć",
      "Serwis i bezpieczeństwo",
    ],
  },
];

const ServicesSection = () => {
  return (
    <section className="py-32 bg-white text-slate-800 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <span className="inline-block py-1 px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-[0.2em] mb-8 shadow-sm">
            KlaudiuszDev - Klaudiusz Adamaszek
          </span>

          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Nazywam się <strong>Klaudiusz</strong>. Jestem programistą i
              tworzę strony internetowe oraz sklepy. Rozumiem, że nie chcesz
              tracić czasu na techniczne problemy.
            </p>
            <p className="text-lg text-slate-500 leading-relaxed font-light">
              Dlatego dbam o stabilność Twojej strony i jestem bezpośrednim
              kontaktem – nie musisz przechodzić przez dział obsługi klienta.
              Moim celem jest technika, która działa i wspiera Twój biznes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          <article className="group bg-white rounded-3xl p-10 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:border-blue-200 group-hover:scale-105 transition-all duration-300">
                <Icons.Layout />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {services[0].title}
              </h3>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
                {services[0].subtitle}
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                {services[0].description}
              </p>
              <ul className="space-y-3">
                {services[0].features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-blue-600 transition-colors" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="group bg-white rounded-3xl p-10 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-16 h-16 bg-white border border-slate-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:border-blue-200 group-hover:scale-105 transition-all duration-300">
                <Icons.Globe />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                {services[1].title}
              </h3>
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-4">
                {services[1].subtitle}
              </p>
              <p className="text-slate-500 leading-relaxed mb-8 text-sm">
                {services[1].description}
              </p>
              <ul className="space-y-3">
                {services[1].features.map((f, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-700 text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-blue-600 transition-colors" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="group md:col-span-2 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-[2rem] p-10 md:p-14 relative overflow-hidden shadow-2xl shadow-blue-900/20 border border-blue-800/50">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            ></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icons.Tool />
                  </div>
                  <span className="px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    Rekomendowane
                  </span>
                </div>

                <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                  {services[2].title}
                </h3>
                <p className="text-blue-200 font-bold text-xs uppercase tracking-widest mb-8">
                  {services[2].subtitle}
                </p>

                <p className="text-blue-100/80 leading-relaxed mb-10 text-lg font-light">
                  {services[2].description}
                </p>

                <a
                  href="/kontakt"
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-all shadow-xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-1"
                >
                  Zacznij współpracę
                  <svg
                    className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-10 backdrop-blur-sm relative">
                <div className="absolute top-0 right-0 p-8 opacity-20">
                  <Icons.Tool />
                </div>

                <p className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-8">
                  W ramach opieki:
                </p>
                <ul className="space-y-5">
                  {services[2].features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 text-white text-lg font-medium"
                    >
                      <span className="text-blue-400 bg-blue-900/50 rounded-full p-1">
                        <Icons.Check />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
