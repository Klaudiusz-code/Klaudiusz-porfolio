"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { branze } from "../../data/branze";
import BranzaHeroClient from "@/components/BranzaHeroClient";

interface PageProps {
  params: { slug: string };
}
interface Tip {
  icon: any;
  label: string;
  text: string;
}

interface Highlight {
  title: string;
  description: string;
}

interface BranżaType {
  slug: string;
  title: string;
  tagline: string;
  heroText: string;
  heroImage: string;
  colors: {
    primary: string;
    accent: string;
    bg: string;
    text: string;
  };
  benefits: string[];
  industryHighlights: Highlight[];
  services: Tip[];
  techSpecs?: string[];
}

export default function BranżaPage({ params }: PageProps) {
  const branża = branze[params.slug as keyof typeof branze];

  if (!branża) {
    return (
      <div className="min-h-screen bg-white text-slate-900 flex items-center justify-center flex-col gap-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-slate-400">Nie znaleziono branży</p>
        <Link
          href="/"
          className="text-slate-600 hover:text-slate-900 hover:underline transition-colors"
        >
          Wróć na stronę główną
        </Link>
      </div>
    );
  }

  const { colors } = branża;

  return (
    <div
      className="font-sans antialiased text-slate-900 bg-white selection:bg-[color:var(--primary)] selection:text-white overflow-x-hidden"
      style={{ "--primary": colors.primary, "--accent": colors.accent } as any}
    >
      <BranzaHeroClient branża={branża} />

      <section className="py-24 md:py-32 relative bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 text-slate-900">
              Dlaczego to <span style={{ color: colors.primary }}>działa?</span>
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto">
              Ludzie nie kupują stron, kupują rozwiązania problemów.
            </p>
          </div>

          <div className="space-y-20">
            {branża.industryHighlights.map((h, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-12 md:gap-16 items-center ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 flex justify-center relative">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 bg-slate-50 rounded-full border border-slate-100 flex items-center justify-center group hover:border-slate-200 transition-colors duration-500">
                    <div
                      className="absolute inset-0 rounded-full opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"
                      style={{ backgroundColor: colors.primary }}
                    ></div>
                    <div
                      className="text-8xl font-black transition-colors duration-500"
                      style={{ color: `${colors.primary}20` }}
                    >
                      {i + 1}
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/2 text-left">
                  <div className="mb-6">
                    <span
                      className="text-xs font-bold tracking-[0.2em] uppercase"
                      style={{ color: colors.accent }}
                    >
                      Przypadek {i + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4 leading-tight text-slate-900">
                      {h.title}
                    </h3>
                    <div
                      className="h-1 w-20 rounded-full mb-6"
                      style={{ backgroundColor: `${colors.primary}30` }}
                    ></div>
                  </div>
                  <p className="text-lg text-slate-500 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="py-24 relative overflow-hidden border-y border-slate-100"
        style={{ backgroundColor: colors.bg }}
      >
        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="relative bg-white rounded-3xl p-10 md:p-16 text-center shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 border border-green-200 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest uppercase text-green-700">
                Oferta Limitowana
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-slate-900">
              DARMOWY <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
                PODGLĄD STRONY
              </span>
            </h2>

            <p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
              Wypełnij 5-minutowy brief, a ja przygotuję dla Ciebie unikalną
              koncepcję wizualną. Bez zobowiązań.
            </p>

            <Link
              href="/formularz-briefu"
              className="inline-flex items-center gap-3 px-10 py-4 bg-slate-900 text-white font-bold text-lg rounded-xl hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Wypełnij Brief
              <FaArrowRight className="text-sm" />
            </Link>

            <div className="mt-12 pt-8 border-t border-slate-100 flex justify-center gap-8 text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                Trwa 5 minut
              </span>
              <span className="w-1 h-1 bg-slate-200 rounded-full"></span>
              <span className="flex items-center gap-2">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                Odpowiedź do 24h
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-1 rounded-full"
                  style={{ backgroundColor: colors.primary }}
                ></div>
                <span
                  className="text-sm font-bold tracking-[0.2em] uppercase"
                  style={{ color: colors.primary }}
                >
                  Standard KlaudiuszDev
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
                Solidna podstawa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">
                  Twojego biznesu.
                </span>
              </h2>

              <p className="text-lg text-slate-500 leading-relaxed">
                Nie obciążam Cię technologią, której nie potrzebujesz. Tworzę
                strony, które są proste w obsłudze, szybkie i w pełni Twoje.
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  title: "Czysty kod",
                  desc: "Struktura zrozumiała dla każdego, łatwa do edycji w przyszłości.",
                },
                {
                  title: "Własność",
                  desc: "Dostajesz pełne prawa do domeny i kodu źródłowego.",
                },
                {
                  title: "Szybkość",
                  desc: "Strona ładuje się błyskawicznie, żeby klient nie czekał.",
                },
                {
                  title: "Bezpieczeństwo",
                  desc: "Certyfikat SSL i bezpieczne formularze kontaktowe.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-5 group">
                  <div
                    className="mt-1 w-9 h-9 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-300 group-hover:text-white transition-all duration-300"
                    style={{ "--primary": colors.primary } as any}
                    // Dynamiczny hover przez inline style w zdarzeniu onHover nie jest eleganckie, użyjmy Tailwindowego group-hover z generycznym kolorem
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      className="group-hover:stroke-white"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:sticky lg:top-32">
            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-100/50 border border-slate-100">
              <div className="flex justify-between items-center mb-10 pb-8 border-b border-slate-100">
                <span className="text-lg font-bold text-slate-900">
                  CO ZAWIERA STRONA?
                </span>
                <span
                  className="text-xs font-mono tracking-wider"
                  style={{ color: colors.primary }}
                >
                  SPECYFIKACJA
                </span>
              </div>

              <ul className="space-y-5 mb-12">
                {(branża.techSpecs || branża.benefits).map((spec, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-slate-600"
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ backgroundColor: colors.primary }}
                    ></span>
                    <span className="text-base font-medium">{spec}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-slate-100">
                <Link
                  href="/formularz-briefu"
                  className="block w-full py-4 bg-slate-900 text-white font-bold text-base text-center rounded-xl hover:bg-slate-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                >
                  Chcę taką stronę
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 4: EFEKTY WSPÓŁPRACY */}
      <section className="py-24 bg-slate-50 border-t border-slate-100 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-slate-900">
              Efekty współpracy:
            </h2>
            <div className="w-24 h-1 bg-slate-200 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branża.benefits.map((benefit, i) => (
              <div
                key={i}
                className="group relative p-8 bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="w-8 h-8 rounded-full text-white flex items-center justify-center text-sm font-bold shadow-md"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {i + 1}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center"
                    style={{ color: colors.accent }}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                    </svg>
                  </div>
                  <div className="flex-1 h-[1px] bg-slate-100 group-hover:bg-slate-200 transition-colors duration-500"></div>
                </div>

                <h3 className="text-xl font-bold text-slate-900 leading-tight">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA: MINIMALISTYCZNY KONIEC */}
      <section className="py-24 px-6 text-center bg-white relative">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-slate-900 leading-tight">
            CZAS <br />
            <span style={{ color: colors.primary }}>NA START.</span>
          </h2>

          <p className="text-base text-slate-400">
            Porozmawiajmy o Twoim projekcie.
          </p>

          <div className="pt-4">
            <a
              href="tel:+48519668439"
              className="inline-flex items-center gap-2 px-10 py-4 bg-slate-900 text-white font-bold text-lg rounded-xl hover:bg-slate-800 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              Zadzwoń teraz
            </a>
          </div>

          <div className="pt-6">
            <Link
              href="/"
              className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest transition-colors"
            >
              ← Wróć do wyboru branży
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
