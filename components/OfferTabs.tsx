"use client";

import Link from "next/link";
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
    icon: <FaWrench size={48} />,
    href: "/branze/mechanik",
    heroBg: "/backgroundmechanic.jpg",
  },
  {
    key: "fotografia",
    label: "Fotografowie",
    icon: <FaCamera size={42} />,
    href: "/branze/fotografia",
    heroBg: "/backgroundphotography.webp",
  },
  {
    key: "kosmetyka",
    label: "Kosmetyczki / SPA",
    icon: <FaSprayCan size={42} />,
    href: "/branze/kosmetyka",
    heroBg: "/kosmetyka.jpg",
  },
  {
    key: "budowlanka",
    label: "Rzemieślnicy / Budowlanka",
    icon: <FaHammer size={40} />,
    heroBg: "/default-bg.jpg",
  },
  {
    key: "ogrodnictwo",
    label: "Plantacje i Ogrodnictwo",
    icon: <FaLeaf size={40} />,
    href: "/branze/ogrodnictwo",
    heroBg: "/backgroundplants.jpg",
  },
  {
    key: "fitness",
    label: "Fitness / Siłownie",
    icon: <FaDumbbell size={40} />,
    heroBg: "/default-bg.jpg",
  },
  {
    key: "transport",
    label: "Transport / Przewozy",
    icon: <FaBus size={40} />,
    heroBg: "/default-bg.jpg",
  },
  {
    key: "autodetailing",
    label: "Auto Detailing",
    icon: <FaCar size={42} />,
    href: "/branze/autodetailing",
    heroBg: "/backgroundmechanic.jpg",
  },
  {
    key: "szkoly",
    label: "Szkoły / Edukacja",
    icon: <FaBook size={40} />,
    heroBg: "/default-bg.jpg",
  },
  {
    key: "gastronomia",
    label: "Gastronomia",
    icon: <FaUtensils size={40} />,
    heroBg: "/default-bg.jpg",
  },
  {
    key: "inne",
    label: "Inne",
    icon: <FaQuestion size={40} />,
    heroBg: "/default-bg.jpg",
  },
  {
    key: "nowe",
    label: "Nowe branże w przygotowaniu",
    icon: <FaPlus size={40} />,
    disabled: true,
    heroBg: "/default-bg.jpg",
  },
];

export default function BranzePage() {
  return (
    <div className="w-full bg-black py-24 px-4 sm:px-6 lg:px-10">
      <h2 className="text-5xl font-extrabold text-center mb-16 text-white tracking-tight">
        Wybierz swoją branżę
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {branze.map((b) => {
          const isDisabled = !b.href;

          return (
            <Link
              key={b.key}
              href={b.href ?? "#"}
              className={`
                group relative h-80 w-full rounded-3xl overflow-hidden
                shadow-2xl transition-all duration-300
                border border-white/10 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900
                ${
                  !isDisabled &&
                  "hover:scale-[1.05] hover:border-customColor hover:shadow-[0_1px_8px_rgba(0,120,255,0.5)]"
                }
                ${isDisabled ? "opacity-50 pointer-events-none" : ""}
              `}
            >
              <div className="absolute inset-0 before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-blue-400/20 before:to-transparent before:opacity-0 before:blur-lg before:transform before:rotate-12 group-hover:before:opacity-100 group-hover:before:animate-moveGradient" />

              <img
                src={b.heroBg ?? "/default-bg.jpg"}
                alt={b.label}
                className="absolute inset-0 h-full w-full object-cover brightness-[0.6] blur-[1px] transition-all duration-500 group-hover:scale-105 group-hover:brightness-75"
              />

              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
                <div
                  className="mb-4 text-blue-400 drop-shadow-[0_0_25px_rgba(59,130,246,0.7)]
                  transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_35px_rgba(59,130,246,0.9)]"
                >
                  {b.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-center tracking-wide drop-shadow-[0_0_8px_rgba(0,0,0,0.5)]">
                  {b.label}
                </h3>

                {isDisabled && (
                  <span className="mt-4 px-5 py-2 text-sm border border-blue-400/40 text-blue-400 rounded-full backdrop-blur-sm">
                    Wkrótce
                  </span>
                )}
              </div>
            </Link>
          );
        })}
      </div>

      <p className="text-center text-gray-400 mt-16 max-w-3xl mx-auto text-base leading-relaxed">
        Kliknij w branżę, aby zobaczyć dedykowane strony i oferty. Branże w
        przygotowaniu są oznaczone.
      </p>

      <style jsx>{`
        @keyframes moveGradient {
          0% {
            transform: translateX(-150%) rotate(12deg);
          }
          100% {
            transform: translateX(150%) rotate(12deg);
          }
        }
        .animate-moveGradient {
          animation: moveGradient 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
