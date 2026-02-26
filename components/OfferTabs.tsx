"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  FaWrench,
  FaMapMarkedAlt,
  FaCheck,
  FaPhone,
  FaCamera,
  FaEnvelope,
  FaSprayCan,
  FaBroom,
  FaPalette,
  FaUsers,
  FaStar,
  FaLeaf,
  FaCar,
  FaImages,
  FaHammer,
  FaDumbbell,
  FaBus,
  FaUtensils,
  FaQuestion,
  FaLock,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaCut,
} from "react-icons/fa";

export interface Highlight {
  title: string;
  description: string;
}

export interface Service {
  icon: React.ReactNode;
  label: string;
  text: string;
}

export interface BranżaType {
  slug: string;
  title: string;
  tagline: string;
  heroText: string;
  heroImage: string;
  gradient?: string;
  colors: {
    primary: string;
    accent: string;
    bg: string;
    text: string;
  };
  benefits: string[];
  industryHighlights: Highlight[];
  services: Service[];
  techSpecs: string[];
}

export const branze: Record<string, BranżaType> = {
  mechanik: {
    slug: "mechanik",
    title: "Strona dla Mechanika i Warsztatu",
    tagline: "Szybkie wykonanie • Profesjonalny wygląd",
    heroImage: "/cbackground.jpg",
    gradient: "from-blue-400 via-blue-500 to-indigo-500",
    colors: {
      primary: "#1E3A8A",
      accent: "#3B82F6",
      bg: "#F3F4F6",
      text: "#1F2937",
    },
    heroText:
      "Strona internetowa, która prezentuje Twój warsztat w profesjonalny sposób i przyciąga nowych klientów z okolicy.",
    services: [
      {
        icon: <FaWrench size={28} />,
        label: "Prezentacja usług",
        text: "Jasne i przejrzyste pokazanie tego, co oferuje warsztat.",
      },
      {
        icon: <FaMapMarkedAlt size={28} />,
        label: "Mapa i dojazd",
        text: "Klient od razu widzi gdzie jesteś — bez błądzenia.",
      },
      {
        icon: <FaCheck size={28} />,
        label: "Profesjonalny wizerunek",
        text: "Strona, która budzi zaufanie i zwiększa liczbę telefonów.",
      },
    ],
    industryHighlights: [
      {
        title: "Klienci oczekują jasnych informacji o warsztacie.",
        description:
          "Brak danych kontaktowych i godzin otwarcia powoduje rezygnację z usług.",
      },
      {
        title: "Łatwy dojazd zwiększa liczbę klientów.",
        description:
          "Dzięki mapie i wskazówkom klient trafia bezproblemowo do Twojego warsztatu.",
      },
      {
        title: "Nowoczesna strona buduje zaufanie.",
        description:
          "Profesjonalny wygląd strony zwiększa liczbę telefonów i zapytań.",
      },
    ],
    techSpecs: [
      "Interaktywna Mapa Google (Dojazd)",
      "Cennik usług i listy napraw",
      "Galeria zdjęć (Przed/Po)",
      "Integracja z WhatsApp/SMS",
      "Działanie 24/7 (Informacje o warsztacie)",
    ],
    benefits: [
      "Więcej klientów z lokalnych wyszukiwań",
      "Lepszy wizerunek firmy",
      "Nowoczesna i szybka strona",
      "Super czytelność na telefonach",
    ],
  },

  fotografia: {
    slug: "fotografia",
    title: "Strona dla Fotografa",
    tagline: "Portfolio • Jakość • Profesjonalizm",
    heroImage: "/backgroundphotography.webp",
    gradient: "from-purple-400 via-violet-500 to-fuchsia-500",
    colors: {
      primary: "#6D28D9",
      accent: "#8B5CF6",
      bg: "#FAF5FF",
      text: "#3B0764",
    },
    heroText:
      "Stworzę portfolio, które w estetyczny sposób zaprezentuje Twoje zdjęcia i pomoże pozyskiwać nowych klientów.",
    services: [
      {
        icon: <FaCamera size={28} />,
        label: "Eleganckie galerie",
        text: "Twoje zdjęcia w nowoczesnym, responsywnym układzie.",
      },
      {
        icon: <FaEnvelope size={28} />,
        label: "Szybki kontakt",
        text: "Klient może łatwo zarezerwować sesję.",
      },
      {
        icon: <FaCheck size={28} />,
        label: "Nowoczesny minimalizm",
        text: "Piękny wygląd dopasowany do branży kreatywnej.",
      },
    ],
    industryHighlights: [
      {
        title: "Profesjonalna strona buduje markę fotografa.",
        description:
          "Dzięki niej klienci postrzegają Cię jako eksperta i chętniej rezerwują sesje.",
      },
      {
        title: "Obecność w social mediach nie wystarczy.",
        description:
          "Pełne portfolio na stronie pozwala klientom zobaczyć wszystkie Twoje prace.",
      },
      {
        title: "Galeria zdjęć zwiększa zaufanie.",
        description:
          "Pokazanie najlepszych realizacji w atrakcyjny sposób przekłada się na więcej zapytań.",
      },
    ],
    techSpecs: [
      "Galeria Lightbox (Powiększanie)",
      "Ochrona praw autorskich (Watermark)",
      "Formularz zapytania o sesję",
      "Linki do Instagram/Pinterest",
      "Szybkie ładowanie zdjęć (WebP)",
      "Podział na kategorie (Ślub, Portret)",
    ],
    benefits: [
      "Więcej rezerwacji sesji",
      "Profesjonalny wizerunek",
      "SEO lokalne",
      "Świetna prezentacja zdjęć",
    ],
  },

  autodetailing: {
    slug: "autodetailing",
    title: "Strona dla Auto Detailingu",
    tagline: "Perfekcyjna czystość • Nowoczesny wygląd • Więcej klientów",
    heroImage: "/backgroundmechanic.jpg",
    gradient: "from-indigo-500 via-blue-500 to-sky-500",
    colors: {
      primary: "#4B5563",
      accent: "#8B5CF6",
      bg: "#F3F4F6",
      text: "#374151",
    },
    heroText:
      "Strona internetowa, która pokazuje Twoje usługi detailingowe w świeży, profesjonalny i nowoczesny sposób.",
    services: [
      {
        icon: <FaStar size={28} />,
        label: "Pakiety Detailingu",
        text: "Wyraźnie zaprezentowane usługi.",
      },
      {
        icon: <FaBroom size={28} />,
        label: "Galerie realizacji",
        text: "Nowoczesne Before / After.",
      },
      {
        icon: <FaPhone size={28} />,
        label: "Wygodny kontakt",
        text: "Szybkie umawianie wizyt.",
      },
    ],
    industryHighlights: [
      {
        title: "Pokaz efektów pracy przyciąga klientów.",
        description: "Klienci wolą szczegółowo zobaczyć rezultaty.",
      },
      {
        title: "Galerie Before/After zwiększają zaufanie.",
        description: "Pokazanie metamorfoz auta daje poczucie jakości.",
      },
      {
        title: "Dobrze zaprojektowana strona wyróżnia na tle konkurencji.",
        description: "Estetyczny wygląd strony zachęca do wyboru.",
      },
    ],
    techSpecs: [
      "Galeria Przed/Po (Slider)",
      "Cennik pakietów detailingowych",
      "Integracja z Kalendarzem",
      "Sekcja O firmie (Załoga)",
      "Szybki kontakt telefoniczny",
    ],
    benefits: [
      "Wzrost liczby klientów",
      "Profesjonalny wizerunek online",
      "Przejrzysta struktura usług",
      "Nowoczesny wygląd strony",
    ],
  },

  ogrodnictwo: {
    slug: "ogrodnictwo",
    title: "Strona dla Plantacji i Ogrodnictwa",
    tagline: "Profesjonalna prezentacja Twojej plantacji",
    heroImage: "/backgroundplants.jpg",
    gradient: "from-green-400 via-lime-400 to-emerald-500",
    colors: {
      primary: "#059669",
      accent: "#10B981",
      bg: "#ECFDF5",
      text: "#065F46",
    },
    heroText:
      "Zwiększ widoczność swojej plantacji i przyciągnij więcej klientów dzięki nowoczesnej, atrakcyjnej stronie internetowej.",
    services: [
      {
        icon: <FaLeaf size={28} />,
        label: "Prezentacja roślin",
        text: "Pokaż wszystkie swoje uprawy.",
      },
      {
        icon: <FaMapMarkedAlt size={28} />,
        label: "Lokalizacja",
        text: "Klient od razu wie gdzie jesteś.",
      },
      {
        icon: <FaCheck size={28} />,
        label: "Profesjonalny wizerunek",
        text: "Nowoczesna strona zwiększa zaufanie.",
      },
    ],
    industryHighlights: [
      {
        title: "Atrakcyjna prezentacja roślin przyciąga.",
        description: "Estetyczne zdjęcia pomagają w wyborze.",
      },
      {
        title: "Łatwy dostęp do kontaktu i mapy.",
        description: "Klienci szybko znajdują informacje.",
      },
      {
        title: "Profesjonalna strona buduje zaufanie.",
        description: "Nowoczesny wizerunek wzmacnia markę.",
      },
    ],
    techSpecs: [
      "Katalog roślin z opisami",
      "Mapa dojazdu do plantacji",
      "Galeria zdjęć z sezonów",
      "Formularz zapytań o uprawy",
      "Opis usług pielęgnacyjnych",
      "Informacje o dostępności (Godziny)",
    ],
    benefits: [
      "Większa widoczność w Google i social mediach",
      "Profesjonalny i przyjazny wizerunek online",
      "Czytelna prezentacja oferty dla klientów",
      "Responsywność na telefonach i tabletach",
    ],
  },

  kosmetyka: {
    slug: "kosmetyka",
    title: "Strona dla Kosmetyczki / Salonu SPA",
    tagline: "Elegancja • Komfort • Profesjonalizm",
    heroImage: "/kosmetyka.jpg",
    gradient: "from-pink-300 via-rose-400 to-fuchsia-400",
    colors: {
      primary: "#DB2777",
      accent: "#F472B6",
      bg: "#FFF1F2",
      text: "#831843",
    },
    heroText:
      "Nowoczesna, elegancka strona dla kosmetyczki lub spa, która profesjonalnie prezentuje Twoje usługi i pomaga zdobywać nowe klientki.",
    services: [
      {
        icon: <FaSprayCan size={28} />,
        label: "Prezentacja zabiegów",
        text: "Czytelna prezentacja oferty.",
      },
      {
        icon: <FaEnvelope size={28} />,
        label: "Łatwy kontakt",
        text: "Twoje klientki mogą szybko zapisać się.",
      },
      {
        icon: <FaCheck size={28} />,
        label: "Luksusowy styl",
        text: "Nowoczesny wygląd buduje prestiż.",
      },
    ],
    industryHighlights: [
      {
        title: "Klientki chcą pełnej oferty przed wizytą.",
        description: "Pokazanie usług zwiększa zaufanie.",
      },
      {
        title: "Estetyczny wygląd strony zachęca do wizyty.",
        description: "Eleganckie zdjęcia budują wizerunek.",
      },
      {
        title: "Rezerwacje online ułatwiają klientkom zapis.",
        description: "Szybkie zapisanie daje przewagę.",
      },
    ],
    techSpecs: [
      "Wizualny cennik zabiegów",
      "Galeria wnętrz salonu",
      "Integracja z systemem rezerwacji (Booksy)",
      "Profil stylistki / Zespół",
      "Sekcja Cennik i Promocje",
      "Elegancki formularz kontaktowy",
    ],
    benefits: [
      "Więcej klientek z Google i social mediów",
      "Elegancka prezentacja zabiegów",
      "Profesjonalny wizerunek salonu",
      "Przyjazna i łatwa nawigacja na telefonie",
    ],
  },
  fryzjerstwo: {
    slug: "fryzjerstwo",
    title: "Strona dla Fryzjera i Salonów",
    tagline: "Styl • Kreatywność • Profesjonalizm",
    heroImage: "/hairdresser.jpg",
    gradient: "from-pink-300 via-rose-400 to-fuchsia-400",
    colors: {
      primary: "#E11D48",
      accent: "#FB7185",
      bg: "#FFF1F2",
      text: "#881337",
    },
    heroText:
      "Stworzę stronę, która prezentuje Twoje fryzury i styl w najlepszym świetle. Zdjęcia, ceny i portfolio w jednym miejscu.",
    services: [
      {
        icon: <FaImages size={28} />,
        label: "Portfolio Przed / Po",
        text: "Zdjęcia prezentujące metamorfozy klientów – Twoja najlepsza wizytówka.",
      },
      {
        icon: <FaPalette size={28} />,
        label: "Cennik Stylizacji",
        text: "Jasne i przejrzyste ceny fryzur, koloryzacji i zabiegów pielęgnacyjnych.",
      },
      {
        icon: <FaUsers size={28} />,
        label: "Nasz Zespół",
        text: "Przedstaw stylistów i barberów, aby klient wiedział do kogo idzie.",
      },
    ],
    industryHighlights: [
      {
        title: "Zdjęcia fryzur to podstawa.",
        description:
          "Klienci patrzą na dłonie stylisty i efekty Twojej pracy przed wyborem.",
      },
      {
        title: "Portfolio online ułatwia podjęcie decyzji.",
        description:
          "Pokazanie metamorfoz w estetyczny sposób zachęca do wizyty w salonie.",
      },
      {
        title: "Jasny cennik online buduje zaufanie.",
        description:
          "Unikaj nieporozumień i pokazuj ceny za poszczególne usługi w jednym miejscu.",
      },
    ],
    techSpecs: [
      "Galeria zdjęć Before / After",
      "Wizytówka Zespołu (Stylistki)",
      "Cennik usług fryzjerskich",
      "Działanie na Instagram / TikTok",
      "Mapa dojazdu do salonu",
      "Szybki formularz kontaktowy",
    ],
    benefits: [
      "Więcej wizyt w salonie",
      "Profesjonalny wizerunek stylisty",
      "Lepsza sprzedaż dodatkowych usług",
      "Więcej zapytań o zapisy",
    ],
  },
};

const getIconForSlug = (slug: string) => {
  switch (slug) {
    case "mechanik":
      return <FaWrench />;
    case "fotografia":
      return <FaCamera />;
    case "autodetailing":
      return <FaCar />;
    case "ogrodnictwo":
      return <FaLeaf />;
    case "kosmetyka":
      return <FaSprayCan />;
    case "fryzjerstwo":
      return <FaCut />;
    case "budowlanka":
      return <FaHammer />;
    case "fitness":
      return <FaDumbbell />;
    case "transport":
      return <FaBus />;
    case "gastronomia":
      return <FaUtensils />;
    default:
      return <FaQuestion />;
  }
};

interface BranżaDisplay {
  type: "active" | "inactive";
  slug: string;
  title: string;
  tagline?: string;
  heroImage?: string;
  gradient?: string;
  description?: string;
}



export default function OfferTabs() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const activeItems: BranżaDisplay[] = Object.values(branze).map((item) => ({
    type: "active",
    slug: item.slug,
    title: item.title,
    tagline: item.tagline,
    heroImage: item.heroImage,
    gradient: item.gradient,
    description: item.heroText,
  }));

  const inactiveItems: BranżaDisplay[] = [
    {
      type: "inactive",
      slug: "budowlanka",
      title: "Budownictwo",
      description: "Strony dla firm remontowych i deweloperów.",
    },
    {
      type: "inactive",
      slug: "fitness",
      title: "Fitness",
      description: "Siłownie, kluby fitness i treningi personalne.",
    },
    {
      type: "inactive",
      slug: "transport",
      title: "Transport",
      description: "Logistyka, przewozy i spedycja.",
    },
    {
      type: "inactive",
      slug: "gastronomia",
      title: "Gastronomia",
      description: "Restauracje, bary i usługi cateringowe.",
    },
    {
      type: "inactive",
      slug: "inne",
      title: "Inne branże",
      description: "Dla wszystkich pozostałych działalności.",
    },
    {
      type: "inactive",
      slug: "nowe",
      title: "Wkrótce",
      description: "Pracujemy nad kolejnymi kategoriami.",
    },
  ];

  const allItems = [...activeItems, ...inactiveItems];

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const isMobile = window.innerWidth < 768;
      const scrollAmount = isMobile ? 300 : 340;

      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#020617] text-white font-sans selection:bg-white selection:text-black overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-[#020617] to-black pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 py-16 md:py-24 max-w-7xl relative z-10 flex flex-col items-center">
        <div className="text-center mb-12 md:mb-20 max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400">
            Wybierz branżę
          </h1>
          <p className="text-neutral-400 text-base md:text-lg leading-relaxed px-2">
            Wybierz odpowiednią kategorię, aby zobaczyć dedykowaną ofertę dla
            Twojej firmy.
          </p>
        </div>

        <div className="w-full relative group/slider">
          <button
            onClick={() => scroll("left")}
    
            className={`
              absolute top-1/2 -translate-y-1/2 z-30 rounded-full 
              bg-slate-900/90 backdrop-blur border border-white/10 
              flex items-center justify-center text-white 
              hover:bg-white hover:text-black transition-all duration-300 shadow-2xl
              
              // Mobile Styles
              left-2 w-10 h-10 opacity-100
              
              // Desktop Overrides
              md:left-0 md:w-16 md:h-16 md:opacity-0 
              md:-translate-x-12 md:group-hover/slider:opacity-100 md:group-hover/slider:-translate-x-4
            `}
          >
            <FaChevronLeft className="text-sm md:text-xl" />
          </button>

          <button
            onClick={() => scroll("right")}
            className={`
              absolute top-1/2 -translate-y-1/2 z-30 rounded-full 
              bg-slate-900/90 backdrop-blur border border-white/10 
              flex items-center justify-center text-white 
              hover:bg-white hover:text-black transition-all duration-300 shadow-2xl
              
              // Mobile Styles
              right-2 w-10 h-10 opacity-100
              
              // Desktop Overrides
              md:right-0 md:w-16 md:h-16 md:opacity-0 
              md:translate-x-12 md:group-hover/slider:opacity-100 md:group-hover/slider:translate-x-4
            `}
          >
            <FaChevronRight className="text-sm md:text-xl" />
          </button>

          <div
            ref={sliderRef}
            className="flex gap-6 md:gap-8 overflow-x-auto pb-20 pt-4 px-2 md:px-12 scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {allItems.map((item, index) => (
              <div
                key={item.slug}
                className="min-w-[280px] md:min-w-[400px] snap-center transition-all duration-500 ease-out hover:-translate-y-3"
              >
                {item.type === "inactive" ? (
                  <div
                    className="relative h-[420px] md:h-[480px] rounded-[1.5rem] md:rounded-[2rem] bg-slate-900 border border-white/5 overflow-hidden flex flex-col items-center justify-center p-6 md:p-8 text-center group/card shadow-xl hover:shadow-2xl hover:shadow-black/40 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                    <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-slate-800 text-neutral-500 flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 border border-white/5 group-hover/card:border-neutral-600 transition-colors shadow-inner">
                      <FaLock />
                    </div>

                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-3 tracking-tight">
                      {item.title}
                    </h3>

                    <p className="text-neutral-500 text-xs md:text-sm leading-relaxed max-w-[220px] mb-6 md:mb-8">
                      {item.description}
                    </p>

                    <button
                      disabled
                      className="relative z-10 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-slate-800/50 text-neutral-500 font-semibold text-[10px] md:text-xs uppercase tracking-widest cursor-not-allowed border border-white/5 hover:border-white/10 transition-colors"
                    >
                      Wkrótce
                    </button>
                  </div>
                ) : (
                  <div
                    className="relative h-[420px] md:h-[480px] rounded-[1.5rem] md:rounded-[2rem] bg-slate-900 border border-white/10 overflow-hidden group/card flex flex-col shadow-2xl shadow-black/60 hover:shadow-blue-900/30 transition-all duration-500 animate-fade-in-up"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    <div className="relative h-[50%] md:h-[55%] overflow-hidden">
                      <img
                        src={item.heroImage}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/10 to-slate-900" />

                      <div className="absolute top-3 md:top-4 right-3 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-black/40 backdrop-blur-md rounded-xl md:rounded-2xl flex items-center justify-center text-white border border-white/10 text-lg md:text-xl shadow-lg">
                        {getIconForSlug(item.slug)}
                      </div>
                    </div>

                    <div className="relative h-[50%] md:h-[45%] p-6 md:p-8 flex flex-col justify-between bg-slate-900 z-10">
                      <div>
                        {item.tagline && (
                          <div
                            className={`text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] mb-2 md:mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                          >
                            {item.tagline}
                          </div>
                        )}

                        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 leading-tight tracking-tight group-hover/card:text-blue-400 transition-colors">
                          {item.title}
                        </h3>
                      </div>

                      <div className="mt-auto pt-4 md:pt-6">
                        <Link
                          href={`/branze/${item.slug}`}
                          className="block w-full"
                        >
                          <button className="w-full relative overflow-hidden group/btn bg-white text-slate-900 py-3 md:py-4 rounded-xl font-bold text-xs md:text-sm flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:-translate-y-1">
                            <span className="relative z-10">Zobacz ofertę</span>
                            <span className="relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300">
                              →
                            </span>

                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700 pointer-events-none" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
