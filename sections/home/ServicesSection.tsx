"use client";

import React from "react";

const Icons = {
  Layout: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
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
  ShoppingBag: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" />
    </svg>
  ),
  Tool: () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
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
      width="16"
      height="16"
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

const ServicesSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 lg:py-32 bg-white text-slate-800 overflow-hidden relative">
      <div className="absolute bottom-0 right-0 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 max-w-7xl">
        {/* NAGŁÓWEK - Płynne skalowanie tekstu */}
        <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-14 md:mb-20 lg:mb-24">
          <span className="inline-block py-1 px-3 sm:px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-4 sm:mb-6 md:mb-8 shadow-sm">
            KlaudiuszDev - Klaudiusz Adamaszek
          </span>

          <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 md:space-y-6">
            <p className="text-[15px] sm:text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              Nazywam się <strong>Klaudiusz</strong>. Tworzę solidne strony
              internetowe, wydajne sklepy oparte o WooCommerce oraz zapewniam
              ich ciągłą opiekę. W razie potrzeby piszę też prostsze aplikacje
              webowe, które usprawniają pracę.
            </p>
            <p className="text-[13px] sm:text-sm md:text-base text-slate-500 leading-relaxed font-light">
              Cenię czysty kod i stabilne rozwiązania. Jestem osobą
              bezpośrednią, więc komunikacja ze mną jest szybka i bez
              pośredników.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          <article className="group bg-white rounded-2xl sm:rounded-[1.5rem] md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border border-slate-100 text-blue-600 rounded-xl sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8 shadow-sm group-hover:border-blue-200 group-hover:scale-105 transition-all duration-300">
                <Icons.Layout />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1.5 sm:mb-2 md:mb-3 tracking-tight">
                Strony Internetowe
              </h3>
              <p className="text-blue-600 font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-2.5 sm:mb-3 md:mb-4">
                Szybkość, użyteczność, wizerunek
              </p>
              <p className="text-slate-500 leading-relaxed mb-5 sm:mb-6 md:mb-8 text-[13px] sm:text-sm">
                Buduję strony, które ładują się błyskawicznie i są poprawnie
                zoptymalizowane pod Google. Stawiam na przejrzysty układ i dobry
                UX, aby każdy użytkownik od razu znalazł to, czego szuka.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {[
                  "Nowoczesne technologie (Next.js / React)",
                  "Podstawy techniczne SEO",
                  "Perfekcyjne dopasowanie do mobile",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 sm:gap-3 text-slate-700 text-[11px] sm:text-xs md:text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-blue-600 transition-colors mt-1 sm:mt-1.5 md:mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* KAFEL 2: SKLEPY INTERNETOWE */}
          <article className="group bg-white rounded-2xl sm:rounded-[1.5rem] md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white border border-slate-100 text-blue-600 rounded-xl sm:rounded-xl md:rounded-2xl flex items-center justify-center mb-5 sm:mb-6 md:mb-8 shadow-sm group-hover:border-blue-200 group-hover:scale-105 transition-all duration-300">
                <Icons.ShoppingBag />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 mb-1.5 sm:mb-2 md:mb-3 tracking-tight">
                Sklepy Internetowe
              </h3>
              <p className="text-blue-600 font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-2.5 sm:mb-3 md:mb-4">
                Wydajna sprzedaż na WooCommerce
              </p>
              <p className="text-slate-500 leading-relaxed mb-5 sm:mb-6 md:mb-8 text-[13px] sm:text-sm">
                Konfiguruję zaawansowane sklepy na WooCommerce, dbając o
                płynność zakupów i integrację z systemami płatności. Jeśli
                standardowe rozwiązania nie wystarczają, tworzę również
                dedykowane aplikacje webowe usprawniające procesy w firmie.
              </p>
              <ul className="space-y-1.5 sm:space-y-2 md:space-y-3">
                {[
                  "Kompleksowe sklepy WooCommerce",
                  "Bezproblemowe płatności i kurierzy",
                  "Proste aplikacje wspierające sprzedaż",
                ].map((f, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 sm:gap-3 text-slate-700 text-[11px] sm:text-xs md:text-sm font-medium"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-200 group-hover:bg-blue-600 transition-colors mt-1 sm:mt-1.5 md:mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          {/* KAFEL 3: DUŻY CIEMNY - OPIEKA */}
          <article className="group md:col-span-2 bg-gradient-to-br from-blue-900 to-slate-900 text-white rounded-[1.25rem] sm:rounded-[1.5rem] md:rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-14 relative overflow-hidden shadow-2xl shadow-blue-900/20 border border-blue-800/50">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: "radial-gradient(white 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            ></div>
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-blue-600 rounded-full blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 lg:gap-16 items-center">
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4 mb-4 sm:mb-6 md:mb-8">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-xl sm:rounded-xl md:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                    <Icons.Tool />
                  </div>
                  <span className="px-2.5 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    Stała współpraca
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 tracking-tight">
                  Opieka i Serwis
                </h3>
                <p className="text-blue-200 font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest mb-4 sm:mb-6 md:mb-8">
                  Bezpieczeństwo, aktualizacje, rozwój
                </p>

                <p className="text-blue-100/80 leading-relaxed mb-6 sm:mb-8 md:mb-10 text-[13px] sm:text-sm md:text-base lg:text-lg font-light">
                  Strona i sklep to żywy organizm. Prowadzę regularny serwis dla
                  WordPress i WooCommerce – od aktualizacji i kopii zapasowych,
                  po dbanie o techniczne aspekty SEO. Zapewniam również bieżące
                  wsparcie dla stworzonych aplikacji webowych.
                </p>

                <a
                  href="/kontakt"
                  className="group/btn inline-flex items-center gap-2 sm:gap-2.5 md:gap-3 px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-white text-blue-900 font-bold rounded-lg sm:rounded-lg md:rounded-xl hover:bg-blue-50 transition-all shadow-xl shadow-white/10 hover:shadow-white/20 hover:-translate-y-1 text-[13px] sm:text-sm md:text-base"
                >
                  Porozmawiajmy o Twoim projekcie
                  <svg
                    className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform"
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

              <div className="bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl md:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 backdrop-blur-sm relative">
                <div className="absolute top-0 right-0 p-5 sm:p-6 md:p-8 opacity-20">
                  <Icons.Tool />
                </div>

                <p className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-widest text-blue-300 mb-4 sm:mb-6 md:mb-8">
                  W ramach opieki zapewniam:
                </p>
                <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                  {[
                    "Utrzymanie WordPress i WooCommerce",
                    "Kopie zapasowe i bezpieczeństwo",
                    "Poprawki techniczne i dbanie o SEO",
                    "Wsparcie dla stworzonych aplikacji",
                  ].map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 sm:gap-3 md:gap-4 text-white text-sm sm:text-base md:text-lg font-medium"
                    >
                      <span className="text-blue-400 bg-blue-900/50 rounded-full p-0.5 sm:p-1 shrink-0 mt-0.5">
                        <Icons.Check />
                      </span>
                      <span>{f}</span>
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
