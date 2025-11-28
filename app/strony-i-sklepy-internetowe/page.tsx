import React from "react";
import { Metadata } from "next";
import { query } from "@/ApolloClient";
import { OffertPagQuery, OffertPagQueryVariables } from "@/gql/graphql";
import {
  FaDesktop,
  FaMobileAlt,
  FaCog,
  FaTools,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";
import EncouragingSection from "@/sections/common/EncouragingSection";
import GRAPHQL_QUERY from "@/gql-queries/offert_page.graphql";
import OfferPageTypes from "@/components/OfferPageTypes";
import FaqSection from "@/sections/common/FaqSection";
import OffertHero from "@/components/OffertHero";

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
  const offerItems = (offerpagetypes?.items ?? []).map((item) => ({
    title: item?.title || "",
    description: item?.description || "",
    benefits: (item?.benefit ?? []).map((benefit) => benefit?.title || ""),
  }));

  return (
    <section className="mt-16 lg:mt-20">
      <div className="cnt mx-auto py-20 px-4 md:px-8">
        <OffertHero />
        <div className="max-w-7xl mx-auto py-16 px-6 lg:py-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-customColor mb-4">
              Co oferuję w ramach Strony i Sklepu internetowego?
            </h2>
            <h4 className="text-lg md:text-xl lg:text-2xl text-gray-700">
              Kompleksowe usługi dla Twojej strony i sklepu online!
            </h4>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {features.map((feature) => (
              <div
                key={feature.id}
                className="bg-white border border-gray-100 p-8 rounded-3xl shadow-xl transition-all transform hover:shadow-2xl hover:translateY-2"
              >
                <div className="flex items-center mb-6">
                  <div className="p-5 rounded-full bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg mr-6">
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
      </div>
      <OfferPageTypes
        data={{
          title: offerpagetypes?.title || "",
          items: offerItems,
        }}
      />
      <div className="cnt mx-auto py-20 px-4 md:px-8">
        <EncouragingSection
          title={whyme?.title || ""}
          services={whyme?.boxs || ([] as any)}
        />
        <FaqSection
          title={acordin?.title || ""}
          description={acordin?.description || ""}
          items={acordin?.acordinItems || ([] as any)}
        />
      </div>
    </section>
  );
};

export default Offert;
