import "./globals.css";

import Script from "next/script";

import { query } from "@/ApolloClient";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import GRAPHQL_QUERY from "@/gql-queries/menus.graphql";
import { MenusQuery, MenusQueryVariables } from "@/gql/graphql";

export const metadata = {
  title: {
    default: "KlaudiuszDev | Strony i sklepy internetowe",
    template: "%s | KlaudiuszDev",
  },
  description:
    "Tworzę nowoczesne strony internetowe, sklepy internetowe i rozwiązania webowe dla firm. Projektowanie stron WWW, WordPress, WooCommerce, modernizacja stron i stała opieka. Tomaszów Lubelski, Zamość, Biłgoraj, Lublin i cała Polska.",
  metadataBase: new URL("https://klaudiuszdev.pl"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data } = await query<MenusQuery, MenusQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const header =
    data.menus?.nodes.find((node: any) => node.slug === "header") || {};

  const footer =
    data.menus?.nodes.find((node: any) => node.slug === "footer") || {};

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://klaudiuszdev.pl/#business",

    name: "KlaudiuszDev",
    url: "https://klaudiuszdev.pl/",
    telephone: "+48 519 668 439",

    description:
      "KlaudiuszDev tworzy nowoczesne strony internetowe, sklepy internetowe i rozwiązania webowe dla firm oraz lokalnych biznesów. Projektuję strony internetowe, landing page, sklepy WooCommerce i WordPress, modernizuję istniejące strony oraz zapewniam stałą opiekę nad stronami i sklepami. Współpracuję z firmami z Tomaszowa Lubelskiego, Zamościa, Biłgoraja i Lublina oraz z klientami z całej Polski.",

    priceRange: "$$",

    areaServed: [
      {
        "@type": "City",
        name: "Tomaszów Lubelski",
      },
      {
        "@type": "City",
        name: "Zamość",
      },
      {
        "@type": "City",
        name: "Biłgoraj",
      },
      {
        "@type": "City",
        name: "Lublin",
      },
      {
        "@type": "Country",
        name: "Polska",
      },
    ],

    serviceType: [
      "Projektowanie stron internetowych",
      "Tworzenie stron WWW",
      "Tworzenie sklepów internetowych",
      "WordPress",
      "WooCommerce",
      "Modernizacja stron internetowych",
      "Opieka nad stronami internetowymi",
    ],

    makesOffer: [
      {
        "@type": "Offer",
        name: "Projektowanie stron WWW",
      },
      {
        "@type": "Offer",
        name: "Sklepy internetowe",
      },
      {
        "@type": "Offer",
        name: "WordPress i WooCommerce",
      },
      {
        "@type": "Offer",
        name: "Modernizacja stron internetowych",
      },
      {
        "@type": "Offer",
        name: "Opieka nad stronami i sklepami",
      },
    ],

    hasMap:
      "https://maps.google.com/maps?cid=13696561928228768870",
  };

  return (
    <html lang="pl">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-94LB4ZY02J"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-94LB4ZY02J');
            `,
          }}
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100..900&family=Roboto:wght@100;400;700&display=swap"
          rel="stylesheet"
        />

        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>

      <body>
        <Navbar data={header} />

        {children}

        <Footer data={footer} />
      </body>
    </html>
  );
}