import React from "react";
import { Metadata } from "next";
import { query } from "@/ApolloClient";
import { OffertPagQuery, OffertPagQueryVariables } from "@/gql/graphql";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
import {
  FaDesktop,
  FaMobileAlt,
  FaCog,
  FaTools,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";
import CustomButton from "@/components/CustomButton";
import EncouragingSection from "@/sections/common/EncouragingSection";
import GRAPHQL_QUERY from "@/gql-queries/offert_page.graphql";
import OfferPageTypes from "@/components/OfferPageTypes";
import FaqSection from "@/sections/common/FaqSection";

type OpenGraphType = "website" | "article" | "book" | "profile";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await query<OffertPagQuery, OffertPagQueryVariables>({
      query: GRAPHQL_QUERY,
    });

    const seoData = data.page?.seo;
    return {
      title: seoData?.title || "",
      description: seoData?.description || "",
      openGraph: {
        title: seoData?.openGraph?.title || seoData?.title || "",
        description:
          seoData?.openGraph?.description || seoData?.description || "",
        locale: seoData?.openGraph?.locale || "",
        siteName: seoData?.openGraph?.siteName || "",
        type: (seoData?.openGraph?.type as OpenGraphType) || "website",
      },
      metadataBase: new URL("https://klaudiuszdev.pl"),
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);
    return {
      title: "",
      description: "",
      openGraph: {
        title: "",
        description: "",
        locale: "",
        siteName: "",
        type: "website",
      },
      metadataBase: new URL("https://klaudiuszdev.pl"),
    };
  }
}

const challenges = [
  "Trudności z optymalizacją SEO, aby strona była lepiej widoczna w wyszukiwarkach",
  "Brak responsywności strony na urządzeniach mobilnych",
  "Brak wsparcia technicznego i regularnych aktualizacji",
];

const benefits = [
  "Indywidualny projekt strony lub sklepu online dopasowany do Twoich potrzeb i oczekiwań",
  "Responsywność strony, która działa doskonale na każdym urządzeniu",
  "Optymalizacja SEO, aby zwiększyć widoczność Twojej firmy w wyszukiwarkach",
  "Stałe wsparcie techniczne i regularne aktualizacje, aby Twoja strona zawsze działała sprawnie",
];

const features = [
  {
    id: 1,
    text: "Indywidualny projekt",
    icon: <FaDesktop />,
    description: "Tworzę projekt dopasowany do Twoich potrzeb.",
  },
  {
    id: 2,
    text: "Optymalizacja SEO",
    icon: <FaCog />,
    description:
      "Zadbam, by Twoja strona była dobrze widoczna w wyszukiwarkach.",
  },
  {
    id: 3,
    text: "Łatwa administracja",
    icon: <FaTools />,
    description: "Zapewniam prosty panel do zarządzania treścią na stronie.",
  },
  {
    id: 4,
    text: "Responsywność",
    icon: <FaMobileAlt />,
    description: "Twoja strona będzie wyglądać świetnie na każdym urządzeniu.",
  },
  {
    id: 5,
    text: "Integracja z płatnościami",
    icon: <FaCreditCard />,
    description: "Oferuję łatwą integrację z popularnymi systemami płatności.",
  },
  {
    id: 6,
    text: "Wsparcie techniczne",
    icon: <FaHeadset />,
    description: "Pomogę Ci na każdym etapie działania strony.",
  },
];

const Offert = async () => {
  const { data } = await query<OffertPagQuery, OffertPagQueryVariables>({
    query: GRAPHQL_QUERY,
  });
  const whyme = data.page?.offert?.whyme;
  const offerpagetypes = data.page?.offert?.offerpagetypes;
  const acordin = data.page?.offert?.acordion;

  return (
    <section className="mt-16 lg:mt-20">
      <div className="cnt mx-auto py-20 px-4 md:px-8">
        <span className="text-white lg:text-4xl mb-8 font-bold bg-customColor p-4 rounded-md ">
          Oferta Stron i Sklepów WWW
        </span>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 mt-6 lg:mt-10">
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img
              src="/webs.svg"
              className="w-full max-w-md h-auto md:max-w-full"
              alt="webs"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-base md:text-xl font-bold text-customColor mb-4">
              Potrzebujesz Strony, lub Sklepu WWW?
            </h1>
            <p className="text-2xl md:text-4xl text-gray-800 font-medium mb-4">
              Mogę dla Ciebie stworzyć wyjątkową stronę internetową oraz sklep
              online!
            </p>
            <p className="text-base text-gray-600 mb-3">
              Specjalizuję się w projektowaniu autorskich stron internetowych i
              sklepów online. Zapewniam, że aktualizacja i dodawanie nowych
              treści będą proste i intuicyjne. Po publikacji zajmę się
              optymalizacją, aby była odpowiednio widoczna i przyciągała
              potencjalnych klientów.
            </p>
            <CustomButton
              text="Napisz do mnie"
              link="/kontakt"
              bgColor="#0077cc"
              textColor="#fff"
            />
          </div>
        </div>
        <div className="max-w-7xl mx-auto py-16 px-6 lg:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-customColor mb-4">
              Co oferuję w ramach Strony i Sklepu internetowego?
            </h2>
            <h4 className="text-base md:text-lg lg:text-xl text-gray-600">
              Kompleksowe usługi dla Twojej strony i sklepu online!
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-gradient-to-r from-white via-gray-100 to-white p-8 rounded-3xl shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-green-300 to-blue-400 text-white shadow-lg mr-6">
                    {feature.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {feature.text}
                  </h2>
                </div>
                <p className="text-base text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-10 lg:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-customColor mb-4">
              Potrzebujesz większej widoczności w sieci dla Twojej firmy?
            </h2>
            <h4 className="text-base md:text-lg lg:text-xl text-gray-600">
              Zobacz, jak mogę Ci pomóc rozwiązać te wyzwania:
            </h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
              <div className="text-red-600 mb-6">
                <FaExclamationTriangle className="text-6xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-4">
                Problemy, z którymi mogą się spotykać właściciele firm:
              </h3>
              <ul className="text-base md:text-lg text-gray-800 space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8 flex flex-col items-center text-center">
              <div className="text-[#2dcf91] mb-6">
                <FaCheck className="text-6xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-[#2dcf91] mb-4">
                Jakie korzyści możesz osiągnąć dzięki moim usługom:
              </h3>
              <ul className="text-base md:text-lg text-gray-800 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <OfferPageTypes data={offerpagetypes} />

        <EncouragingSection
          title={whyme?.title || ""}
          services={whyme?.boxs || ([] as any)}
        />
        <FaqSection
          title={acordin?.title || ""}
          description={acordin?.description || ""}
          items={acordin?.acordinItems as any[]}
        />
      </div>
    </section>
  );
};

export default Offert;
