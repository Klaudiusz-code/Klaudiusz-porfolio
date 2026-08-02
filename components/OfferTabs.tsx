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
  colors: { primary: string; accent: string; bg: string; text: string };
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
    tagline: "Perfekcyjna czystość • Nowoczesny wygląd",
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
    tagline: "Zieleń • Profesjonalizm • Estetyka",
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
    title: "Strona dla Kosmetyczki / SPA",
    tagline: "Elegancja • Komfort • Relaks",
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
      "Więcej klientek z Google i social mediach",
      "Elegancka prezentacja zabiegów",
      "Profesjonalny wizerunek salonu",
      "Przyjazna i łatwa nawigacja na telefonie",
    ],
  },
  fryzjerstwo: {
    slug: "fryzjerstwo",
    title: "Strona dla Fryzjera i Salonów",
    tagline: "Styl • Kreatywność • Sznyt",
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

const getTaglineColor = (slug: string) => {
  switch (slug) {
    case "mechanik":
      return "text-blue-600";
    case "fotografia":
      return "text-violet-600";
    case "autodetailing":
      return "text-sky-600";
    case "ogrodnictwo":
      return "text-green-600";
    case "kosmetyka":
      return "text-pink-600";
    case "fryzjerstwo":
      return "text-rose-600";
    default:
      return "text-slate-500";
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
      const scrollAmount = isMobile ? 280 : 400;
      sliderRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  /* STRZAŁKI: Widoczne zawsze. Na mobile mniejsze i przyklejone do wewnątrz, na desktopie wysunięte poza kontener */
  const arrowBaseClasses =
    "absolute top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/90 backdrop-blur-sm border border-slate-200/80 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 shadow-xl opacity-80 hover:opacity-100";

  return (
    <div className="w-full bg-[#fafafa] text-slate-900 font-sans selection:bg-slate-300 selection:text-slate-900 overflow-hidden relative antialiased">
      <div className="container mx-auto px-4 sm:px-6 py-16 md:py-24 max-w-7xl relative z-10 flex flex-col items-center">
        {/* NAGŁÓWEK */}
        <div className="text-center mb-10 md:mb-16 max-w-2xl">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400 mb-4">
            Oferty branżowe
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight mb-5">
            Rozwiązania dopasowane
            <br className="hidden sm:block" /> do Twojej branży
          </h2>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
            Każda branża ma swoje unikalne potrzeby. Wybierz swoją i sprawdź, co
            dokładnie przygotowaliśmy.
          </p>
        </div>

        <div className="w-full relative group/slider">
          {/* STRZAŁKA LEWA - na mobile przy lewej krawędzi kontenera, na desktopie wysunięta */}
          <button
            onClick={() => scroll("left")}
            className={`${arrowBaseClasses} left-1 md:-left-6`}
            aria-label="Poprzednie"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* STRZAŁKA PRAWA - na mobile przy prawej krawędzi kontenera, na desktopie wysunięta */}
          <button
            onClick={() => scroll("right")}
            className={`${arrowBaseClasses} right-1 md:-right-6`}
            aria-label="Następne"
          >
            <FaChevronRight className="text-sm" />
          </button>

          {/* SLIDER */}
          <div
            ref={sliderRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-6 pt-2 pl-4 pr-14 md:pl-2 md:pr-2 scroll-smooth snap-x snap-mandatory no-scrollbar"
            style={{ scrollbarWidth: "none" }}
          >
            {allItems.map((item) => (
              <div
                key={item.slug}
                className="min-w-[calc(100vw-5rem)] sm:min-w-[300px] md:min-w-[360px] lg:min-w-[380px] snap-center flex-shrink-0 transition-all duration-300 ease-out hover:-translate-y-1.5"
              >
                {item.type === "inactive" ? (
                  /* NIEAKTYWNE */
                  <div className="relative h-[320px] sm:h-[380px] md:h-[440px] rounded-2xl md:rounded-3xl bg-white border border-slate-100 flex flex-col items-center justify-center p-8 text-center group/card shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-200 flex items-center justify-center text-xl mb-5 group-hover/card:bg-slate-100 transition-colors">
                      <FaLock />
                    </div>
                    <h3 className="text-lg font-bold text-slate-700 mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-[220px] mb-6">
                      {item.description}
                    </p>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 border border-slate-100 px-4 py-1.5 rounded-full">
                      Wkrótce
                    </span>
                  </div>
                ) : (
                  /* AKTYWNE */
                  <div className="relative h-[320px] sm:h-[380px] md:h-[440px] rounded-2xl md:rounded-3xl bg-white border border-slate-100 overflow-hidden group/card flex flex-col shadow-sm hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300">
                    <div className="relative h-[45%] sm:h-[55%] md:h-[60%] overflow-hidden">
                      <img
                        src={item.heroImage}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent" />
                    </div>

                    <div className="flex-1 p-5 sm:p-6 md:p-7 flex flex-col bg-white">
                      {item.tagline && (
                        <span
                          className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] ${getTaglineColor(
                            item.slug,
                          )} mb-1.5 sm:mb-2`}
                        >
                          {item.tagline}
                        </span>
                      )}

                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 leading-snug tracking-tight group-hover/card:text-blue-600 transition-colors line-clamp-2">
                        {item.title}
                      </h3>

                      <div className="mt-auto pt-4 sm:pt-5">
                        <Link
                          href={`/branze/${item.slug}`}
                          className="block w-full"
                        >
                          <button className="w-full py-2.5 sm:py-3 rounded-xl border-2 border-slate-200 text-slate-600 font-bold text-[11px] sm:text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-300 group/btn hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:shadow-lg hover:shadow-slate-900/20">
                            Poznaj szczegóły
                            <FaArrowRight className="text-[10px] group-hover/btn:translate-x-1 transition-transform" />
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
