import React from "react";
import { Metadata } from "next";
import {
  FaRocket,
  FaBuilding,
  FaCartShopping,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa6";

export async function generateMetadata(): Promise<Metadata> {
  const title = "Oferta - Tworzenie Stron i Sklepów | Klaudiusz Dev";
  const description =
    "Tworzę szybkie strony internetowe, sklepy e-commerce i landing page'e. Nowoczesne technologie, dbam o SEO i wydajność. Sprawdź ofertę!";

  return {
    title,
    description,
    metadataBase: new URL("https://klaudiuszdev.pl"),
    alternates: {
      canonical: "/strony-i-sklepy-internetowe",
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: "https://klaudiuszdev.pl/strony-i-sklepy-internetowe",
      siteName: "Klaudiusz Dev",
      locale: "pl_PL",
      type: "website",
    },
  };
}

// --- DANE OFERTY ---
const services = [
  {
    id: 1,
    icon: <FaRocket className="w-6 h-6 text-[#0077cc]" />,
    title: "Landing Page & Wizytówki",
    description:
      "Proste, szybkie i nastawione na jeden konkretny cel. Idealne rozwiązanie, aby szybko zaistnieć w sieci lub wspierać kampanie reklamowe.",
    features: [
      "Szybki czas realizacji (4 - 8 Dni)",
      "Nowoczesny i responsywny design",
      "Optymalizacja pod urządzenia mobilne",
      "Podstawowa optymalizacja SEO",
    ],
  },
  {
    id: 2,
    icon: <FaBuilding className="w-6 h-6 text-[#0077cc]" />,
    title: "Strony pod Markę",
    description:
      "Rozbudowane projekty dla firm, które chcą budować autorytet. Zawierają blog, portfolio lub zaawansowane prezentacje usług.",
    features: [
      "Unikalny projekt graficzny (UI/UX)",
      "System zarządzania treścią (CMS)",
      "Zintegrowany blog lub portfolio",
      "Zaawansowana optymalizacja SEO",
    ],
  },
  {
    id: 3,
    icon: <FaCartShopping className="w-6 h-6 text-[#0077cc]" />,
    title: "Sklepy E-commerce",
    description:
      "Pełnoprawne platformy sprzedażowe. Łatwe zarządzanie produktami, bezproblemowe płatności i intuicyjny proces zakupowy.",
    features: [
      "Integracja z płatnościami (PayU, Przelewy24)",
      "Zarządzanie stanami magazynowymi",
      "Podpięcie kurierów i form dostawy",
      "Panel do zarządzania zamówieniami",
    ],
  },
];

// --- DANE FAQ ---
const faqs = [
  {
    id: 1,
    question: "Ile kosztuje stworzenie strony internetowej?",
    answer:
      "Każdy projekt wyceniam indywidualnie, ponieważ zależy to od stopnia skomplikowania. Prosta wizytówka to inna kwota niż rozbudowany sklep. Po pierwszej rozmowie zawsze dostajesz konkretną kwotę.",
  },
  {
    id: 2,
    question: "Czy będę mógł samodzielnie edytować stronę?",
    answer:
      "Tak. Do każdej strony dodaję panel administracyjny (CMS), w którym bez żadnej wiedzy technicznej zmienisz teksty, dodasz zdjęcia czy nową usługę.",
  },
  {
    id: 3,
    question: "Co z hostingiem i domeną?",
    answer:
      "Pomagam w wyborze odpowiedniego hostingu i zakupie domeny. Nie jestem hostingodawcą, więc sam decydujesz, gdzie kupisz te usługi – to gwarantuje Ci pełną własność.",
  },
];

// --- KOMPONENT ---
const Offert = () => {
  return (
    <main className="bg-white text-gray-900">
      {/* 1. HERO - ZDOBIONE, ALE NORMALNE */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-44 lg:pb-32 bg-gradient-to-b from-slate-50 via-[#0077cc]/[0.03] to-white">
        {/* Dekoracyjne koło z ramką - daje efekt "premium designu" bez krzyku */}
        <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full border-[40px] border-[#0077cc]/[0.07] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0077cc]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#0077cc]/10 text-[#0077cc] px-4 py-1.5 rounded-full text-sm font-semibold mb-8">
            Oferta
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
            <span className="text-gray-900 block">Strony i sklepy</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0077cc] to-[#00a3ff] block mt-2">
              internetowe
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed">
            Tworzę nowoczesne strony wizytówki, rozbudowane portale oraz sklepy
            e-commerce.
          </p>

          <a
            href="/kontakt"
            className="group inline-flex items-center gap-2 bg-[#0077cc] hover:bg-[#005fa3] text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg shadow-[#0077cc]/25 hover:shadow-xl hover:shadow-[#0077cc]/30 hover:-translate-y-0.5"
          >
            Zapytaj o wycenę
            <FaArrowRight className="text-sm transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </section>

      {/* 2. OFERTA - 3 KOLUMNY, BARDZO CZYSTE */}
      <section className="py-24 bg-gray-50/50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Co mogę dla Ciebie zrobić?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Dopasowuję rozwiązania do branży i budżetu, skupiając się na
              realnych wynikach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-2xl p-8 border border-gray-200 flex flex-col transition-all duration-300 hover:shadow-lg hover:border-gray-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6 border border-gray-100">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {service.features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 text-sm text-gray-600"
                    >
                      <FaCheck className="text-[#0077cc] mt-0.5 flex-shrink-0 text-xs" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/kontakt"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-[#0077cc] hover:gap-3 transition-all"
                >
                  Więcej szczegółów <FaArrowRight className="text-[10px]" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FAQ - MINIMALISTYCZNE, BEZ TŁA */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
              Pytania i odpowiedzi
            </h2>
          </div>

          <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
            {faqs.map((faq) => (
              <details key={faq.id} className="group py-6 cursor-pointer">
                <summary className="flex items-center justify-between font-medium text-gray-900 hover:text-[#0077cc] transition-colors list-none">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-gray-400 group-open:text-[#0077cc] transition-transform duration-300">
                    <span className="block transition-transform duration-300 group-open:rotate-45 text-2xl leading-none">
                      +
                    </span>
                  </span>
                </summary>
                <div className="mt-4 text-gray-500 leading-relaxed pr-10">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA - TWÓJ TEKST NA BRIEF */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            Masz pomysł na stronę?
          </h2>
          <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
            Odezwij się do mnie. Bez presji, bez darmowych wycen-generatorów.
            Prawdziwa rozmowa o Twoim biznesie.
          </p>
          <a
            href="/brief"
            className="inline-flex items-center gap-2 bg-[#0077cc] hover:bg-[#005fa3] text-white font-bold px-10 py-4 rounded-xl transition-colors shadow-lg"
          >
            Napisz do mnie
            <FaArrowRight className="text-sm" />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Offert;
