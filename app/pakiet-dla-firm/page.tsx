import type { Metadata } from "next";
import {
  HiOutlineGlobeAlt,
  HiOutlineChatBubbleLeftRight,
  HiOutlineWrenchScrewdriver,
  HiArrowRight,
  HiCheck,
  HiXMark,
  HiOutlineMapPin,
} from "react-icons/hi2";

export const metadata: Metadata = {
  title: "Pakiet Zaistnij w sieci - Strona WWW i Google Maps | Klaudiuszdev.pl",
  description:
    "Kompleksowy pakiet dla lokalnych firm: nowoczesna strona WWW, optymalizacja wizytówki Google Maps i podpięcie social mediów.",
  openGraph: {
    title: "Pakiet: Zaistnij w sieci | Klaudiuszdev.pl",
    description:
      "Wszystko pod ręką. Zobacz zakres, realizacje i orientacyjne koszty bez ukrytych haczyków.",
    type: "website",
  },
};

const JsonLd = {
  "@type": "Service",
  serviceType: "Strona internetowa i pozycjonowanie lokalne",
  provider: { "@type": "LocalBusiness", name: "Klaudiuszdev.pl" },
  areaServed: { "@type": "Country", name: "Polska" },
  description:
    "Kompleksowa usługa stworzenia strony internetowej i wizytówki Google Maps dla lokalnych firm.",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Zaistnij w sieci",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Nowoczesna strona WWW" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Wizytówka Google Maps" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Integracja Social Media" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Opieka i wdrożenie" },
      },
    ],
  },
};

const PACKAGE_ITEMS = [
  {
    Icon: HiOutlineGlobeAlt,
    title: "Tworzę stronę, która sprzedaje",
    desc: "Klienci szukający w Google <mark class='bg-blue-50 text-blue-700 rounded px-1'>usług w Twojej okolicy</mark> muszą trafić na miejsce budujące zaufanie.",
    tag: "Strona WWW",
  },
  {
    Icon: HiOutlineMapPin,
    title: "Ustawiam wizytówkę, która przyciąga",
    desc: "Zoptymalizuję profil i połączę go ze stroną, żeby Twoja firma wyświetlała się wyżej w okolicy.",
    tag: "Google Maps",
  },
  {
    Icon: HiOutlineChatBubbleLeftRight,
    title: "Łączę social media w jeden system",
    desc: "Podpinam Twoje profile tak, by płynnie kierowały na stronę, gdzie klient łatwo zostawi kontakt.",
    tag: "Social Media",
  },
  {
    Icon: HiOutlineWrenchScrewdriver,
    title: "Wdrażam wszystko, żebyś nie miał zmartwień",
    desc: "Od podpięcia domeny po pierwsze poprawki po uruchomieniu. Ty zajmujesz się biznesem.",
    tag: "Opieka na start",
  },
];

export default function OfertaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLd) }}
      />

      <main className="relative bg-white min-h-screen selection:bg-blue-100 selection:text-blue-800 overflow-x-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/40 via-white to-white" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/20 rounded-full blur-3xl -z-10 -translate-y-1/2 translate-x-1/3" />

        <div className="max-w-3xl mx-auto px-5 sm:px-6 pt-20 sm:pt-32 mt-4 pb-28 lg:pb-20">
          <header className="mb-14 sm:mb-20">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-white bg-blue-600 px-4 py-1.5 rounded-full mb-8 shadow-md shadow-blue-600/20">
              Kompleksowa usługa
            </span>

            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-[1.05] tracking-tight mb-12">
              Pakiet:
              <br />
              <span className="text-blue-600">Twoja Firma w Sieci</span>
            </h1>

            <div className="relative bg-slate-50/80 backdrop-blur-sm rounded-3xl border border-slate-100 p-6 sm:p-10 mb-8 overflow-hidden">
              <div className="absolute top-2 left-4 sm:top-4 sm:left-6 text-[140px] sm:text-[180px] leading-none font-serif text-blue-100/40 select-none pointer-events-none -z-0">
                “
              </div>

              <div className="relative z-10 space-y-5 text-[15px] sm:text-base text-slate-600 leading-relaxed">
                <p>
                  Szukam usługi, wchodzę na stronę i od razu szukam{" "}
                  <strong className="text-slate-900 font-semibold">
                    cennika
                  </strong>
                  . Nie ma. Jest tylko przycisk „Zadzwoń po wycenę”. Okej, może
                  tam są chociaż jakieś orientacyjne koszty? Też nie. Ja po
                  prostu nie chcę tracić czasu na telefon, żeby usłyszeć kwotę,
                  która i tak okazuje się poza moim budżetem.
                </p>

                <p>
                  Przewijam niżej, szukam godzin otwarcia, szukam jakichś
                  przykładów z ich roboty. Nic. Strona wygląda jak gotowiec z
                  darmowego kreatora. Nie czuję się zachęcony.{" "}
                  <strong className="text-slate-900 font-semibold">
                    Zamykam kartę.
                  </strong>
                </p>

                <p>
                  Wchodzę na Facebooka, żeby sprawdzić profil firmy i zobaczyć
                  realizacje. Ale nie. Muszę przewijać przez posty z prywatnego
                  życia, żeby w końcu dotrzeć do oferty. Nie mam na to czasu.
                  Zostawiam to i szukam czegoś innego.
                </p>
              </div>

              <div className="relative z-10 mt-8 pl-6 border-l-4 border-blue-600">
                <p className="text-2xl sm:text-3xl font-playfair italic text-slate-800 leading-snug">
                  Odpuszczam i szukam czegoś innego.
                </p>
              </div>
            </div>

            <div className="relative bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-600" />
              <div className="p-6 sm:p-8">
                <p className="text-[15px] sm:text-base text-slate-600 leading-relaxed mb-4">
                  Właśnie dlatego stworzyłem pakiet{" "}
                  <strong className="text-slate-900">„Twoja Firma w Sieci”</strong>
                  . Zebrałem wszystko w jedno miejsce. Klient ma od razu przed
                  oczami zakres, realizacje, orientacyjne koszty i jasne zasady.
                </p>
                <p className="text-sm sm:text-[15px] text-slate-500 leading-relaxed">
                  Bez ukrytych haczyków, bez zmuszania do dzwonienia w ciemno.
                  Chciałem, żeby od pierwszego wejścia na stronę wiedział
                  wszystko, czego potrzebuje.
                </p>
              </div>
            </div>
          </header>

          <section id="lista-pakietu" className="mb-14 sm:mb-20 scroll-mt-24">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Co zawiera pakiet
              </h2>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {PACKAGE_ITEMS.map((item) => (
                <div
                  key={item.title}
                  className="group relative bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-100 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/20 group-hover:scale-105 transition-transform duration-300">
                        <item.Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2">
                      {item.title}
                    </h3>

                    <p
                      className="text-[13px] sm:text-sm text-slate-500 leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: item.desc }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            className="mb-14 sm:mb-20"
            aria-labelledby="szczerosc-heading"
          >
            <h2
              id="szczerosc-heading"
              className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight mb-6 sm:mb-8 text-center"
            >
              Bądźmy szczerzy. Czego ten pakiet nie zrobi?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
              {/* Co zyskujesz */}
              <div className="relative bg-white rounded-2xl border border-slate-100 p-6 sm:p-7 shadow-sm hover:shadow-md hover:border-blue-100 transition-all">
                <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 rounded-t-2xl" />
                <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-blue-600 mb-6 flex items-center gap-2 pt-1">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-600"></span>
                  Co zyskujesz na 100%
                </h3>
                <ul className="space-y-4">
                  {[
                    "Koniec z ukrywaniem cennika – klient wie, na co się pisze",
                    "Wygląd profesjonalisty budujący zaufanie od wejścia",
                    "Miejsce, gdzie są godziny, realizacje i kontakt",
                    "Niezależne miejsce w sieci od algorytmów social mediów",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13px] sm:text-sm text-slate-600 leading-relaxed"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HiCheck className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-slate-900 rounded-2xl p-6 sm:p-7 shadow-2xl shadow-slate-900/30 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-slate-700 rounded-t-2xl" />

                <h3 className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2 relative z-10 pt-1">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-500"></span>
                  Czego pakiet nie zrobi
                </h3>
                <ul className="space-y-4 relative z-10">
                  {[
                    "Nie przyniesie dziesiątek klientów z dnia na dzień",
                    "Nie będzie ciągnął się miesiącami i pochłaniał budżetu",
                    "Nie będzie wyglądał jak strona z darmowego kreatora",
                    "Nie zdobędziesz klientów z drugiego końca Polski",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[13px] sm:text-sm text-slate-400 leading-relaxed"
                    >
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <HiXMark className="w-3.5 h-3.5 text-slate-500" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex justify-center mt-8">
              <p className="text-center text-xs sm:text-sm text-slate-500 leading-relaxed bg-white border border-slate-200 px-6 py-3 rounded-2xl shadow-sm max-w-md">
                <strong className="font-semibold text-slate-900">
                  Bezpieczeństwo:
                </strong>{" "}
                Gdy social media tną zasięgi, Twoja strona i wizytówka w Google
                i tak na nich czekają.
              </p>
            </div>
          </section>

          <section className="mb-14 sm:mb-20" aria-labelledby="proces-heading">
            <div className="flex items-center gap-4 mb-6 sm:mb-8">
              <h2
                id="proces-heading"
                className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
              >
                Jak to wygląda w praktyce
              </h2>
              <div className="flex-1 h-px bg-slate-200"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-4 relative">
              {[
                {
                  num: "01",
                  title: "Krótka rozmowa",
                  desc: "Zadzwoń lub wypełnij brief. Omawiamy Twoją branżę i to, jakich klientów szukasz.",
                },
                {
                  num: "02",
                  title: "Tworzenie systemu",
                  desc: "Przygotowuję stronę i wizytówkę. Pokazuję efekty, wprowadzamy poprawki.",
                },
                {
                  num: "03",
                  title: "Start w sieci",
                  desc: "Podpinam wszystko, odpalamy. Zaczynasz pozyskiwać zapytania z Google.",
                },
              ].map((item, index) => (
                <div
                  key={item.num}
                  className="group relative flex flex-col sm:items-center"
                >
                  {index < 2 && (
                    <div className="hidden sm:block absolute top-8 left-[calc(50%+24px)] w-[calc(100%-48px)] border-t-2 border-dashed border-blue-200 z-0"></div>
                  )}

                  <div className="relative z-10 bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 hover:shadow-lg hover:border-blue-100 transition-all duration-300 h-full w-full sm:text-center">
                    <div className="w-12 h-12 rounded-full border-2 border-slate-200 bg-slate-50 group-hover:bg-blue-600 group-hover:border-blue-600 flex items-center justify-center mb-4 mx-auto transition-all duration-300">
                      <span className="text-sm font-bold text-slate-400 group-hover:text-white transition-colors duration-300">
                        {item.num}
                      </span>
                    </div>

                    <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1.5 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-slate-500 text-[13px] sm:text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <footer className="relative">
            <div className="bg-slate-50 rounded-3xl border border-slate-200 p-8 sm:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl opacity-60 translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10">
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-4 leading-tight">
                  Chcesz wiedzieć, czy to pasuje{" "}
                  <br className="hidden sm:block" />
                  do Twojej firmy?
                </h2>
                <p className="text-slate-500 max-w-md mx-auto mb-8 text-sm sm:text-[15px] leading-relaxed">
                  Wypełnij krótki brief. Bez zobowiązań. Na jego podstawie
                  przygotuję dla Ciebie wycenę.
                </p>
                <a
                  href="/formularz-briefu"
                  className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-xl text-[12px] font-bold uppercase tracking-widest transition-all duration-300 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 active:scale-[0.98]"
                >
                  Przejdź do briefu
                  <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
