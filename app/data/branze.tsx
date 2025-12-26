import { ReactNode } from "react";
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
} from "react-icons/fa";

export interface Highlight {
  title: string;
  description: string;
}

export interface Service {
  icon: ReactNode;
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
