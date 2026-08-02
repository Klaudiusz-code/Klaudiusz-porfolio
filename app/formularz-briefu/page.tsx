import FormClient from "../../components/FormClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Zaplanuuj swoją stronę internetową | Darmowy brief projektu | Klaudiuszdev.pl",

  description:
    "Wypełnij darmowy brief i opowiedz o swojej firmie. Na tej podstawie przygotuję propozycję projektu strony WWW, sklepu internetowego lub dedykowanego rozwiązania online.",

  metadataBase: new URL("https://klaudiuszdev.pl"),

  alternates: {
    canonical: "/formularz-briefu",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Zaplanuuj swoją stronę internetową | Darmowy brief projektu | Klaudiuszdev.pl",

    description:
      "Wypełnij darmowy brief i opowiedz o swojej firmie. Na tej podstawie przygotuję propozycję projektu strony WWW, sklepu internetowego lub dedykowanego rozwiązania online.",

    url: "https://klaudiuszdev.pl/formularz-briefu",

    siteName: "KlaudiuszDev",

    locale: "pl_PL",

    type: "website",

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Brief projektu strony internetowej Klaudiuszdev.pl",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Brief na stronę internetową i sklep WooCommerce | Klaudiuszdev.pl",

    description:
      "Wypełnij brief i otrzymaj dopasowaną ofertę na stronę WWW, sklep WooCommerce lub aplikację webową.",
  },
};

export default function Page() {
  return (
    <main className="bg-white mt-14 text-black overflow-x-hidden">
      <FormClient />
    </main>
  );
}
