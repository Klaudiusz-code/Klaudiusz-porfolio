"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaWrench,
  FaCamera,
  FaSprayCan,
  FaHammer,
  FaLeaf,
  FaDumbbell,
  FaBus,
  FaCar,
  FaBook,
  FaUtensils,
  FaQuestion,
  FaPlus,
} from "react-icons/fa";

interface Branża {
  key: string;
  label: string;
  icon: JSX.Element;
  href?: string;
  heroBg?: string;
  disabled?: boolean;
}

const branze: Branża[] = [
  {
    key: "mechanik",
    label: "Mechanik / Warsztat",
    icon: <FaWrench size={36} />,
    href: "/branze/mechanik",
    heroBg: "/backgroundmechanic.jpg",
  },
  {
    key: "fotografia",
    label: "Fotografowie",
    icon: <FaCamera size={28} />,
    href: "/branze/fotografia",
    heroBg: "/backgroundphotography.webp",
  },
  {
    key: "kosmetyka",
    label: "Kosmetyczki / SPA",
    icon: <FaSprayCan size={28} />,
  },
  {
    key: "budowlanka",
    label: "Rzemieślnicy / Budowlanka",
    icon: <FaHammer size={28} />,
  },
  {
    key: "ogrodnictwo",
    label: "Plantacje i Ogrodnictwo",
    icon: <FaLeaf size={28} />,
    href: "/branze/ogrodnictwo",
  },
  {
    key: "fitness",
    label: "Fitness / Siłownie",
    icon: <FaDumbbell size={28} />,
  },
  {
    key: "transport",
    label: "Transport / Przewozy",
    icon: <FaBus size={28} />,
  },
  {
    key: "autodetailing",
    label: "Auto Detailing / Car Detailing",
    icon: <FaCar size={30} />,
    href: "/branze/autodetailing",
  },
  { key: "szkoly", label: "Szkoły / Edukacja", icon: <FaBook size={28} /> },
  { key: "gastronomia", label: "Gastronomia", icon: <FaUtensils size={28} /> },
  { key: "inne", label: "Inne", icon: <FaQuestion size={28} /> },
  {
    key: "nowe",
    label: "Nowe branże w przygotowaniu",
    icon: <FaPlus size={28} />,
    disabled: true,
  },
];

export default function BranzePage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-gray-900">
        Wybierz swoją branżę
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
        {branze.map((b: Branża) =>
          b.href ? (
            <Link
              key={b.key}
              href={b.href}
              onMouseEnter={() => setHovered(b.key)}
              onMouseLeave={() => setHovered(null)}
              className={`
                relative flex flex-col items-center justify-center p-6 rounded-2xl border transition-transform duration-300 shadow-md
                ${hovered === b.key ? "scale-105 shadow-xl" : ""}
                ${
                  ["mechanik", "fotografia", "autodetailing","ogrodnictwo"].includes(b.key)
                    ? "bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 text-blue-600 border-blue-400 font-semibold"
                    : "bg-gray-100 text-gray-800 border-gray-300"
                }
              `}
            >
              <div
                className={`mb-3 transition-transform duration-300 ${
                  hovered === b.key ? "rotate-3 scale-110" : ""
                }`}
              >
                {b.icon}
              </div>
              <span className="text-center text-base sm:text-lg md:text-xl font-medium">
                {b.label}
              </span>
            </Link>
          ) : (
            <div
              key={b.key}
              className={`flex flex-col items-center justify-center p-6 rounded-2xl border shadow
                ${
                  b.disabled
                    ? "bg-blue-50 border-blue-400 text-blue-600 opacity-70 animate-pulse cursor-not-allowed"
                    : "bg-gray-100 border-gray-300 text-gray-400 opacity-50 cursor-not-allowed"
                }
              `}
            >
              <div className="mb-3">{b.icon}</div>
              <span className="text-center text-base sm:text-lg font-medium">
                {b.label}
              </span>
            </div>
          )
        )}
      </div>

      {/* LEGEND */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-12">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-b from-blue-50 via-blue-100 to-blue-50 rounded-full border border-blue-400"></div>
          <span className="text-gray-700 text-xs sm:text-sm">
            Aktywna branża / polecana
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-blue-50 rounded-full border border-blue-400 opacity-70 animate-pulse"></div>
          <span className="text-gray-500 text-xs sm:text-sm">
            Nowe branże w przygotowaniu
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gray-100 rounded-full border border-gray-300 opacity-50"></div>
          <span className="text-gray-400 text-xs sm:text-sm">
            Branża nieaktywna / w przygotowaniu
          </span>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-4 sm:mt-6 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
        Kliknij w branżę, aby zobaczyć dedykowane strony i oferty. Kolory kafli
        pokazują status dostępności danej branży.
      </p>
    </div>
  );
}
