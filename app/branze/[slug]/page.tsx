"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa"; 
import { branze } from "../../data/branze";
import BranzaHeroClient from "@/components/BranzaHeroClient";
import CTA from "@/components/BriefCta";

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
      <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center flex-col gap-4">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-gray-400">Nie znaleziono branży</p>
        <Link href="/" className="text-white hover:underline">
          Wróć na stronę główną
        </Link>
      </div>
    );
  }

  const { colors } = branża;

  return (
    <div
      className="font-sans antialiased text-white bg-[#0a0a0a] selection:bg-[color:var(--primary)] selection:text-white"
      style={{ "--primary": colors.primary, "--accent": colors.accent } as any}
    >
      <BranzaHeroClient branża={branża} />

      <section className="py-32 relative bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-20 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Dlaczego to <span style={{ color: colors.primary }}>działa?</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Ludzie nie kupują stron, kupują rozwiązania problemów.
            </p>
          </div>

          <div className="space-y-16">
            {branża.industryHighlights.map((h, i) => (
              <div
                key={i}
                className={`flex flex-col md:flex-row gap-12 items-center ${
                  i % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-1/2 flex justify-center relative">
                  <div className="relative w-64 h-64 md:w-80 md:h-80 bg-[#111] rounded-full border border-white/5 flex items-center justify-center group hover:border-[color:var(--primary)]/30 transition-colors duration-500">
                    <div
                      className="absolute inset-0 rounded-full bg-[color:var(--primary)] opacity-5 blur-3xl group-hover:opacity-10 transition-opacity"
                      style={{ "--primary": colors.primary } as any}
                    ></div>
                    <div
                      className="text-8xl text-white/10 font-black group-hover:text-[color:var(--primary)]/20 transition-colors duration-500"
                      style={{ "--primary": colors.primary } as any}
                    >
                      {i + 1}
                    </div>
                  </div>
                </div>

                {/* TEKST */}
                <div className="w-full md:w-1/2 text-left">
                  <div className="mb-6">
                    <span
                      className="text-xs font-bold tracking-[0.2em] uppercase text-[color:var(--accent)]"
                      style={{ "--accent": colors.accent } as any}
                    >
                      Przypadek {i + 1}
                    </span>
                    <h3 className="text-3xl font-bold mt-2 mb-4 leading-tight">
                      {h.title}
                    </h3>
                    <div className="h-1 w-20 bg-white/10 mb-6"></div>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* SEKCJA: BRIEF CTA (VALUE CARD STYLE) */}
      <section className="py-24 relative bg-[#050505] border-t border-white/5 overflow-hidden">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[color:var(--primary)] opacity-5 blur-[100px] rounded-full pointer-events-none"
          style={{ "--primary": colors.primary } as any}
        ></div>

        <div className="max-w-3xl mx-auto px-6 relative z-10">
          <div className="relative group">
            <div
              className="absolute -inset-1 bg-gradient-to-r from-[color:var(--primary)] to-[color:var(--accent)] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-[3rem]"
              style={
                {
                  "--primary": colors.primary,
                  "--accent": colors.accent,
                } as any
              }
            ></div>

            <div className="relative bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 md:p-20 text-center overflow-hidden">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[12rem] font-black text-white/[0.02] leading-none select-none pointer-events-none">
                GIFT
              </div>

              {/* Badge: "Bezpłatne" */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                  Oferta Limitowana
                </span>
              </div>

              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 text-white">
                DARMOWY <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
                  PODGLĄD STRONY
                </span>
              </h2>

              <p className="text-lg text-gray-400 mb-10 max-w-xl mx-auto leading-relaxed">
                Wypełnij 5-minutowy brief, a ja przygotuję dla Ciebie unikalną
                koncepcję wizualną. Bez zobowiązań.
              </p>

              <Link
                href="/formularz-briefu"
                className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold text-xl rounded-full hover:bg-[color:var(--accent)] hover:text-white hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
                style={{ "--accent": colors.accent } as any}
              >
                Wypełnij Brief
                <span>→</span>
              </Link>

              <div className="mt-12 pt-8 border-t border-white/5 flex justify-center gap-8 text-sm text-gray-600 font-medium">
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
                <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
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
        </div>
      </section>

      <div className="py-16 bg-white text-black overflow-hidden relative border-y border-gray-200">
        <div className="flex whitespace-nowrap animate-marquee gap-16">
          {[1, 2, 3, 4, 5].map((i) => (
            <span
              key={i}
              className="text-5xl md:text-7xl font-black tracking-tighter uppercase"
            >
              PROFESJONALIZM • RYNEK • WZROST • TECHNOLOGIA •
            </span>
          ))}
        </div>
      </div>

      <section className="py-32 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-16 h-1 bg-[color:var(--primary)]"
                  style={{ "--primary": colors.primary } as any}
                ></div>
                <span
                  className="text-sm font-bold tracking-[0.2em] uppercase text-[color:var(--primary)]"
                  style={{ "--primary": colors.primary } as any}
                >
                  Standard KlaudiuszDev
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Solidna podstawa <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                  Twojego biznesu.
                </span>
              </h2>

              <p className="text-lg text-gray-400 leading-relaxed mb-10">
                Nie obciążam Cię technologią, której nie potrzebujesz. Tworzę
                strony, które są proste w obsłudze, szybkie i w pełni Twoje.
                Zasady współpracy są jasne i przejrzyste.
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
                <div key={i} className="flex gap-6 group">
                  <div
                    className="mt-1 w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[color:var(--primary)] group-hover:bg-[color:var(--primary)] group-hover:text-black transition-colors"
                    style={{ "--primary": colors.primary } as any}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:sticky lg:top-32">
            <div
              className="absolute -inset-4 bg-[color:var(--primary)] opacity-5 blur-[60px] -z-10 rounded-[3rem]"
              style={{ "--primary": colors.primary } as any}
            ></div>

            <div className="bg-[#0a0a0a] border border-white/10 rounded-[2.5rem] p-10 md:p-12 shadow-2xl">
              <div className="flex justify-between items-center mb-10 pb-8 border-b border-white/5">
                <span className="text-xl font-bold">CO ZAWIERA STRONA?</span>
                <span
                  className="text-xs font-mono text-[color:var(--primary)]"
                  style={{ "--primary": colors.primary } as any}
                >
                  SPECYFIKACJA
                </span>
              </div>

              <ul className="space-y-6 mb-12">
                {branża.techSpecs
                  ? branża.techSpecs.map((spec, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-gray-300"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[color:var(--primary)]"
                          style={{ "--primary": colors.primary } as any}
                        ></span>
                        <span className="text-lg font-medium">{spec}</span>
                      </li>
                    ))
                  : branża.benefits.map((spec, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-4 text-gray-300"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[color:var(--primary)]"
                          style={{ "--primary": colors.primary } as any}
                        ></span>
                        <span className="text-lg font-medium">{spec}</span>
                      </li>
                    ))}
              </ul>

              <div className="mt-12 pt-8 border-t border-white/5">
                <Link
                  href="/formularz-briefu"
                  className="block w-full py-4 bg-white text-black font-bold text-lg text-center rounded-2xl hover:bg-[color:var(--accent)] hover:text-white transition-all duration-300"
                  style={{ "--accent": colors.accent } as any}
                >
                  Chcę taką stronę
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKCJA 3: EFEKTY WSPÓŁPRACY (DYNAMICZNE Z benefits) */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Efekty współpracy:
            </h2>
            <div className="w-24 h-1 bg-white/20 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {branża.benefits.map((benefit, i) => (
              <div
                key={i}
                className="group relative p-8 bg-[#0f0f0f] border border-white/5 hover:border-[color:var(--primary)]/50 hover:bg-[#141414] transition-all duration-300 rounded-2xl overflow-hidden"
              >
                {/* Efekt wypchnięcia numeru na hover */}
                <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div
                    className="w-8 h-8 rounded-full bg-[color:var(--primary)] text-black flex items-center justify-center font-bold"
                    style={{ "--primary": colors.primary } as any}
                  >
                    {i + 1}
                  </div>
                </div>

                <div className="flex items-center gap-4 mb-3">
                  <div
                    className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-[color:var(--accent)]"
                    style={{ "--accent": colors.accent } as any}
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
                  <div
                    className="w-full h-[1px] bg-white/10 group-hover:w-full group-hover:bg-[color:var(--primary)]/30 transition-all duration-500"
                    style={{ "--primary": colors.primary } as any}
                  ></div>
                </div>

                <h3 className="text-2xl font-bold text-white leading-tight">
                  {benefit}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA: MINIMALISTYCZNY START */}
      {/* FINAL CTA: COMPACT & CLEAN */}
      <section className="py-20 px-6 text-center bg-black relative">
        <div className="relative z-10 max-w-2xl mx-auto space-y-6">
          {/* HEADLINE - Standardowa wielkość (nie Hero) */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            CZAS <br />
            <span
              className="text-[color:var(--primary)]"
              style={{ "--primary": colors.primary } as any}
            >
              NA START.
            </span>
          </h2>

          {/* TEKST - Normalny */}
          <p className="text-base text-gray-400">
            Porozmawiajmy o Twoim projekcie.
          </p>

          {/* PRZYCISK - Normalna wielkość */}
          <div className="pt-4">
            <a
              href="tel:+48519668439"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-black font-bold text-lg rounded-full hover:bg-[color:var(--accent)] hover:text-white transition-all duration-300"
              style={{ "--accent": colors.accent } as any}
            >
              Zadzwoń teraz
            </a>
          </div>

          {/* LINK */}
          <div className="pt-6">
            <Link
              href="/"
              className="text-xs font-bold text-gray-600 hover:text-white uppercase tracking-widest transition-colors"
            >
              ← Wróć do wyboru branży
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
        result[3],
        16
      )}`
    : "255, 255, 255";
}
