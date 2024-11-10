import React from "react";
import { Metadata } from "next";
import { query } from "@/ApolloClient";
import { OffertPagQuery, OffertPagQueryVariables } from "@/gql/graphql";
import { FaCheck, FaExclamationTriangle } from "react-icons/fa";
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
  { id: 1, text: "Indywidualny projekt" },
  { id: 2, text: "Optymalizacja SEO" },
  { id: 3, text: "Łatwa administracja" },
  { id: 4, text: "Responsywność" },
  { id: 5, text: "Integracja z płatnościami" },
  { id: 6, text: "Wsparcie techniczne" },
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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 py-16 items-center lg:mt-24">
          <div className="md:pr-6">
            <h1 className="text-xl md:text-2xl font-bold text-customColor mb-4">
              Co oferuję w ramach Strony i Sklepu internetowego?
            </h1>
            <p className="text-3xl md:text-3xl lg:text-4xl text-gray-800 font-medium mb-6">
              Kompleksowe usługi dla Twojej strony i sklepu online!
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-6">
              Zapewniam pełne wsparcie w tworzeniu oraz utrzymaniu Twojej strony
              i sklepu internetowego, od projektu po optymalizację SEO.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 py-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-md w-full max-w-[95%]  sm:max-w-[85%] md:max-w-[80%] lg:max-w-[85%] xl:max-w-[95%] mx-auto"
              >
                <div className="flex-shrink-0 mr-3">
                  <FaCheck className="text-base text-green-500" />
                </div>
                <div className="flex-grow">
                  <span className="text-sm md:text-base text-gray-700 font-normal">
                    {feature.text}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 mt-10 lg:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Potrzebujesz większej widoczności w sieci dla Twojej firmy?
            </h2>
            <h4 className="text-lg md:text-xl lg:text-2xl text-gray-600">
              Zobacz, jak mogę Ci pomóc rozwiązać te wyzwania:
            </h4>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            <div className="bg-white shadow-md  p-6 border-l-4 shadow-red-200 border-[#df4f4f]">
              <h3 className="text-xl md:text-2xl font-semibold text-red-600 mb-4 text-center">
                Problemy, z którymi mogą się spotykać właściciele firm:
              </h3>
              <ul className="text-base md:text-lg text-gray-800 space-y-4">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <FaExclamationTriangle className="text-2xl text-red-600 mt-1 mr-3" />
                    <span className="leading-relaxed">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white shadow-md p-6 border-l-4 border-[#2dcf91] shadow-green-200">
              <h3 className="text-xl md:text-2xl font-semibold text-[#2dcf91] mb-4 text-center">
                Jakie korzyści możesz osiągnąć dzięki moim usługom:
              </h3>
              <ul className="text-base md:text-lg text-gray-800 space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <FaCheck className="text-2xl text-[#2dcf91] mt-1 mr-3" />
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
