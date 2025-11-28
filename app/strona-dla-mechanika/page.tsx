"use client";
import Link from "next/link";
import {
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
  FaCarSide,
  FaTools,
  FaMapMarkedAlt,
} from "react-icons/fa";

const branzeData = {
  mechanik: {
    title: "Nowoczesna strona internetowa dla mechanika i warsztatu",
    subtitle: "Profesjonalna, responsywna i zoptymalizowana pod SEO",
    heroText:
      "Zbuduję dla Ciebie przejrzystą i profesjonalną stronę, która pokaże ofertę Twojego warsztatu i pomoże zdobyć nowych klientów.",
    features: [
      "Profesjonalna wizytówka Twojego warsztatu",
      "Lista usług z opisem i cenami",
      "Szybki kontakt + Google Maps",
    ],
    benefits: [
      "Strona dopasowana do branży motoryzacyjnej",
      "Świetne SEO lokalne — klienci szybko Cię znajdą",
      "Nowoczesny, lekki design na białym tle",
      "Pełna responsywność (telefon/tablet/PC)",
      "Szybkie ładowanie + optymalizacja techniczna",
      "Możliwość rozbudowy o dodatkowe funkcje",
    ],
  },
  fotografia: {
    title: "Nowoczesne strony dla fotografów",
    subtitle: "Portfolio, galerie zdjęć i formularze kontaktowe",
    heroText:
      "Stworzę elegancką i nowoczesną stronę dla fotografów, dzięki której Twoja praca zostanie zauważona.",
    features: [
      "Sekcja portfolio / galerie zdjęć",
      "Formularz kontaktowy",
      "Sekcja 'O mnie' z opisem doświadczenia",
    ],
    benefits: [
      "Profesjonalny wizerunek w sieci",
      "Łatwy kontakt z klientami",
      "Optymalizacja SEO dla lokalnych klientów",
    ],
  },
  nowe: {
    title: "Nowe branże w przygotowaniu",
    subtitle: "Nie znalazłeś swojej branży?",
    heroText:
      "Wkrótce pojawią się kolejne dedykowane strony dla różnych branż. Skontaktuj się, jeśli chcesz być pierwszym!",
    features: [],
    benefits: [],
  },
};

export default function SlugPage({ params }) {
  const { slug } = params;
  const branża = branzeData[slug];

  if (!branża) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-32 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Branża nie znaleziona
        </h1>
        <p className="text-gray-600 mb-6">
          Nie posiadamy jeszcze strony dla tej branży. Sprawdź dostępne branże poniżej.
        </p>
        <Link
          href="/nisze"
          className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Wróć do wyboru branży
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-white text-black mt-24">
      {/* ====== HERO ====== */}
      <section className="w-full py-24 bg-gray-100 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {branża.title}
            </h1>
            {branża.subtitle && (
              <p className="text-lg text-gray-700 max-w-xl mb-8">{branża.subtitle}</p>
            )}
            <p className="text-lg text-gray-700 max-w-xl mb-8">{branża.heroText}</p>

            <div className="flex gap-4">
              <a
                href="tel:+48730735048"
                className="px-8 py-3 bg-black text-white rounded-full font-semibold hover:bg-gray-800 transition"
              >
                Zadzwoń
              </a>
              <a
                href="mailto:kontakt@klaudiuszdev.pl"
                className="px-8 py-3 bg-EDC684 text-black rounded-full font-semibold hover:opacity-90 transition"
              >
                Napisz maila
              </a>
            </div>
          </div>

          <div className="flex-1">
            <div className="w-full h-[300px] bg-gray-300 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={`/background${slug}.jpg`}
                alt={branża.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ====== SEKCJA — CECHY ====== */}
      {branża.features.length > 0 && (
        <section className="max-w-6xl mx-auto px-6 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
            Co zawiera Twoja strona?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {branża.features.map((f, i) => (
              <div
                key={i}
                className="p-10 bg-gray-50 rounded-2xl shadow-md border border-gray-200"
              >
                <FaTools size={40} className="text-EDC684 mb-4" />
                <h3 className="text-xl font-semibold mb-3">{f}</h3>
                <p className="text-gray-700">{f}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ====== DLACZEGO WARTO ====== */}
      {branża.benefits.length > 0 && (
        <section className="bg-gray-100 py-20 border-y border-gray-200">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
              Dlaczego warto?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {branża.benefits.map((text, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaCheckCircle className="text-EDC684 text-2xl" />
                  <p className="text-gray-800 text-lg">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ====== CTA ====== */}
      <section className="bg-black py-20 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-4">
            Potrzebujesz profesjonalnej strony dla swojej branży?
          </h2>
          <p className="text-gray-300 mb-10">
            Skontaktuj się — przygotuję stronę, która zwiększy liczbę klientów i pomoże rozwinąć Twój biznes.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="tel:+48730735048"
              className="px-8 py-4 bg-white text-black rounded-full font-semibold shadow-md hover:bg-gray-200 transition"
            >
              📞 Zadzwoń
            </a>
            <a
              href="mailto:kontakt@klaudiuszdev.pl"
              className="px-8 py-4 bg-EDC684 text-black rounded-full font-semibold hover:opacity-90 transition"
            >
              ✉️ Napisz maila
            </a>
          </div>

          <div className="mt-10">
            <Link
              href="/nisze"
              className="text-gray-400 underline hover:text-gray-200"
            >
              ← Powrót do wyboru branży
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
