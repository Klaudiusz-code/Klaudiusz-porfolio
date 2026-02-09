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
    <main className="bg-white mt-14 text-black overflow-x-hidden">
      <FormClient />
    </main>
  );
}
