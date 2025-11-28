import {
  FaWrench,
  FaMapMarkedAlt,
  FaCheck,
  FaPhone,
  FaCamera,
  FaEnvelope,
  FaBroom,
  FaStar,
  FaLeaf,
} from "react-icons/fa";

export const branze = {
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
      "Mechanicy najczęściej tracą klientów przez brak informacji w Google",
      "Strony bez adresu i mapy Google powodują odpływ klientów",
      "Nowoczesny wygląd zwiększa liczbę zapytań nawet o 40%",
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
      "Strona to Twoje portfolio — musi wyglądać świetnie",
      "Instagram to za mało — klienci chcą profesjonalnej prezentacji",
      "Wysokiej jakości galeria potwierdza Twoje umiejętności",
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
        text: "Wyraźnie zaprezentowane usługi — klient od razu widzi różnice.",
      },
      {
        icon: <FaBroom size={28} />,
        label: "Galerie realizacji",
        text: "Nowoczesne Before / After — klucz do budowania zaufania.",
      },
      {
        icon: <FaPhone size={28} />,
        label: "Wygodny kontakt",
        text: "Szybkie umawianie wizyt i łatwy dostęp do informacji.",
      },
    ],
    industryHighlights: [
      "Detailing potrzebuje mocnej prezentacji wizualnej",
      "Estetyczna galeria mocno zwiększa szanse na kontakt",
      "Profesjonalna strona to przewaga nad konkurencją",
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
        label: "Prezentacja roślin i usług",
        text: "Pokaż wszystkie swoje uprawy i usługi w atrakcyjny sposób.",
      },
      {
        icon: <FaMapMarkedAlt size={28} />,
        label: "Lokalizacja i kontakt",
        text: "Klient od razu wie, gdzie Cię znaleźć i jak się skontaktować.",
      },
      {
        icon: <FaCheck size={28} />,
        label: "Profesjonalny wizerunek",
        text: "Nowoczesna strona zwiększa zaufanie i liczbę zapytań.",
      },
    ],
    industryHighlights: [
      "Dobrze pokazana oferta roślin przyciąga więcej klientów",
      "Łatwy kontakt i lokalizacja redukują straty klientów",
      "Estetyczny wygląd strony buduje wizerunek profesjonalisty",
    ],
    benefits: [
      "Większa widoczność w Google i social mediach",
      "Profesjonalny i przyjazny wizerunek online",
      "Czytelna prezentacja oferty dla klientów",
      "Responsywność na telefonach i tabletach",
    ],
  },
};
