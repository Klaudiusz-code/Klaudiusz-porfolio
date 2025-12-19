"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { branze } from "../../data/branze";
import BranzaHeroClient from "@/components/BranzaHeroClient";
import QuickTips from "@/components/QuickTips";
import CTA from "@/components/BriefCta";

interface PageProps {
  params: { slug: string };
}

interface Tip {
  icon: ReactNode;
  label: string;
  text: string;
}

interface Highlight {
  title: string;
  description: string;
}

interface Tip {
  icon: ReactNode;
  label: string;
  text: string;
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
}

export default function BranżaPage({ params }: PageProps) {
  const branża = branze[params.slug as keyof typeof branze];

  if (!branża) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-6 text-center">
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-500 mb-6">
          404
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Nie znaleziono branży
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-xl">
          Niestety, nie znaleziono strony dla podanej branży. Możliwe, że adres
          jest błędny lub dana branża nie została jeszcze dodana.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 transition"
          >
            Powrót do branż
          </Link>
          <Link
            href="/kontakt"
            className="px-8 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold text-lg shadow-md hover:bg-gray-200 transition"
          >
            Skontaktuj się z nami
          </Link>
        </div>
        <div className="mt-16 text-blue-600 text-sm">
          klaudiuszdev.pl &copy; {new Date().getFullYear()}
        </div>
      </div>
    );
  }

  const { colors } = branża;

  return (
    <div
      className="font-sans"
      style={{ backgroundColor: colors.bg, color: colors.text }}
    >
      <BranzaHeroClient branża={branża} />

      {/* CO WYRÓŻNIA */}
      <section className="py-28 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-24 leading-tight">
            Co wyróżnia tę branżę?
          </h2>

          <div className="flex flex-col gap-24">
            {branża.industryHighlights.map((h, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row items-start md:items-center gap-10 transition-all"
              >
                <div
                  className="text-[70px] md:text-[90px] font-black leading-none tracking-tighter text-black/10 group-hover:text-black/20 transition"
                  style={{ color: `${colors.primary}20` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>

                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight text-gray-900">
                    {h.title}
                  </h3>

                  <span className="text-gray-600 text-lg md:text-xl leading-relaxed block">
                    {h.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />

      {/* DLACZEGO WARTO */}
      <section className="py-28 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-20">
            Dlaczego warto?
          </h2>

          <div className="relative flex flex-col md:flex-row items-center md:items-start justify-between gap-16 text-center md:text-left">
            <div
              className="hidden md:block absolute top-12 left-0 right-0 h-[3px] rounded-full z-0"
              style={{ backgroundColor: colors.primary }}
            ></div>

            {branża.benefits.map((b, i) => (
              <div
                key={i}
                className="relative flex-1 flex flex-col items-center z-10"
              >
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-6 shadow"
                  style={{
                    border: `4px solid ${colors.primary}`,
                    backgroundColor: "#fff",
                  }}
                >
                  <span
                    className="font-bold text-2xl"
                    style={{ color: colors.primary }}
                  >
                    {i + 1}
                  </span>
                </div>

                <p className="text-gray-800 text-lg md:text-xl leading-relaxed max-w-xs mx-auto md:mx-0">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* QUICK TIPS */}
      <QuickTips tips={branża.services} accentColor={colors.accent} />

      {/* CTA */}
      <section
        className="py-24 text-center text-white"
        style={{ backgroundColor: colors.primary }}
      >
        <h2 className="text-4xl tracking-wide md:text-5xl font-extrabold mb-6 tracking-tight">
          Oferta od KlaudiuszDEV
        </h2>

        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto leading-relaxed mb-14">
          Tworzę nowoczesne, szybkie i estetyczne strony internetowe idealnie
          dopasowane do Twojej branży. Skontaktuj się, aby rozpocząć projekt.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
          <a
            href="tel:+48730735048"
            className="inline-flex items-center justify-center px-10 py-3 rounded-full font-semibold text-lg bg-white/70 backdrop-blur-sm text-gray-800 shadow-md shadow-black/20 transition-all duration-300 hover:bg-white/90 hover:shadow-xl"
          >
            Zadzwoń
          </a>

          <a
            href="mailto:kontakt@klaudiuszdev.pl"
            className="inline-flex items-center justify-center px-10 py-3 rounded-full font-semibold text-lg text-white border border-white/40 bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 transition-all duration-300 hover:bg-white/20 hover:border-white/60 hover:shadow-xl"
          >
            Napisz maila
          </a>
        </div>

        <Link
          href="/"
          className="block mt-10 text-white/80 hover:text-white transition underline underline-offset-4"
        >
          ← Powrót do branż
        </Link>
      </section>
    </div>
  );
}
