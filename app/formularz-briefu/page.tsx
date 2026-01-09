// app/formularz-briefu/page.tsx

import FormClient from "../../components/FormClient";

export const metadata = {
  title: "Brief dla Twojej firmy • klaudiuszdev.pl",
  description:
    "Wypełnij brief i pozwól mi stworzyć projekt dopasowany do Twojej firmy, klientów i potrzeb. Szybko, profesjonalnie i bez zobowiązań.",
  keywords: [
    "brief firmy",
    "projekt strony internetowej",
    "klaudiuszdev",
    "projekt graficzny",
    "branding",
  ],
  authors: [{ name: "Klaudiusz Adamaszek", url: "https://klaudiuszdev.pl" }],
  openGraph: {
    title: "Brief dla Twojej firmy • klaudiuszdev.pl",
    description:
      "Wypełnij brief i pozwól mi stworzyć projekt dopasowany do Twojej firmy, klientów i potrzeb.",
    url: "https://klaudiuszdev.pl",
    siteName: "klaudiuszdev.pl",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brief dla Twojej firmy",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="bg-white text-black overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="bg-white py-24 md:py-32 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-center gap-3 text-sm text-gray-400">
            <span className="h-px w-12 bg-[#4F7CFF]" />
            <span>Nowe projekty • 2026</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            Zrozumienie Twojej firmy <br />
            <span className="text-[#4F7CFF]">
              to pierwszy krok do dobrego projektu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-14">
            Ten brief pozwala mi poznać Twoją firmę, klientów i realne potrzeby.
            Dzięki temu projekt nie jest tylko ładny — jest użyteczny.
          </p>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="max-w-5xl mx-auto mb-32 px-6">
        <h2 className="text-3xl md:text-4xl mt-16 font-bold text-center mb-6">
          Brief dla Twojej firmy
        </h2>
        <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          Kilka prostych pytań, dzięki którym przygotuję sensowną i dopasowaną
          propozycję.
        </p>

        <FormClient />
      </section>
    </main>
  );
}
