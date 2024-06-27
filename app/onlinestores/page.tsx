import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { getImageUrlBySize } from "@/helpers";
import {
  FaGlobe,
  FaClock,
  FaMoneyBillWave,
  FaSyncAlt,
  FaCog,
  FaChartLine,
} from "react-icons/fa";
import { query } from "@/ApolloClient";
import {
  OnlineStoresPageHomeQuery,
  OnlineStoresPageHomeQueryVariables,
  OnlineStoresPageQuery,
  OnlineStoresPageQueryVariables,
} from "@/gql/graphql";

import GRAPHL_QUERY_HOME from "@/gql-queries/onlinestores_page_home.graphql";
import GRAPHQL_QUERY from "@/gql-queries/onlinestores_page.graphql";

import CustomButton from "@/components/CustomButton";
import EncouragingSection from "@/sections/common/EncouragingSection";
import FaqSection from "@/sections/common/FaqSection";

type OpenGraphType = "website" | "article" | "book" | "profile";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await query<
      OnlineStoresPageQuery,
      OnlineStoresPageQueryVariables
    >({
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

const OnlineStoresPage = async () => {
  const { data: homeData } = await query<
    OnlineStoresPageHomeQuery,
    OnlineStoresPageHomeQueryVariables
  >({
    query: GRAPHL_QUERY_HOME,
  });

  const { data: pageData } = await query<
    OnlineStoresPageQuery,
    OnlineStoresPageQueryVariables
  >({
    query: GRAPHQL_QUERY,
  });

  const whyMe = homeData.page?.home?.whyme;
  const accordion = homeData.page?.home?.acordin;
  const hero = pageData.page?.onlieStores?.hero;
  const benefits = pageData.page?.onlieStores?.storesBenefits;

  const fullImage = getImageUrlBySize(hero?.image, "large");

  const icons = [
    FaGlobe,
    FaClock,
    FaMoneyBillWave,
    FaSyncAlt,
    FaCog,
    FaChartLine,
  ];

  return (
    <section>
      <header className="flex flex-col py-16 md:flex-row items-center justify-between cnt font-sans px-6 md:px-12">
          <div className="md:w-[50%] order-2 md:order-1 text-center md:text-left mb-6 md:mb-0 md:pr-6">
            <h1 className="text-bgColor leading-9 mt-6 font-semibold text-3xl md:text-5xl mb-4 tracking-wide">
              {hero?.title}
            </h1>
            <p className="text-gray-700 text-lg mb-6 tracking-wide">
              {hero?.description}
            </p>
            <CustomButton
              text="Darmowa Wycena Projektu"
              bgColor="#0077cc"
              textColor="#fff"
              link={hero?.button?.url || "/"}
            />
          </div>
          <div className="md:w-1/2 order-1 md:order-2 mb-6 md:mb-0">
            <Image
              width={fullImage?.width}
              height={fullImage?.height}
              src={fullImage?.sourceUrl}
              alt="kobieta sprawdzająca stronę"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </header>
      <div className="bg-white py-12 md:py-16 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-8 md:mb-10 font-roboto text-center">
            {benefits?.title}
          </h2>
          <p className="text-lg text-gray-700 mb-8 md:mb-12 font-roboto text-center">
            {benefits?.description}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {benefits?.benefitsItems?.map((item, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div
                  key={index}
                  className="relative bg-white rounded-lg shadow-md border border-blue-200 overflow-hidden flex flex-col"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-200 to-blue-100 rounded-full blur-lg opacity-25"></div>
                  </div>
                  <div className="flex justify-center items-center p-4">
                    <div className="rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-3">
                      <IconComponent size={48} className="text-white" />
                    </div>
                  </div>
                  <div className="p-6 flex flex-col items-center">
                    <h3 className="text-xl md:text-2xl font-extrabold text-gray-900 mb-3 font-roboto text-center">
                      {item?.title}
                    </h3>
                    <p className="text-base text-gray-600 font-mono text-center">
                      {item?.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <EncouragingSection
        title={whyMe?.title || ""}
        services={whyMe?.boxs || ([] as any)}
      />
      <FaqSection
        title={accordion?.title || ""}
        description={accordion?.description || ""}
        items={accordion?.acordinItems || ([] as any)}
      />
    </section>
  );
};

export default OnlineStoresPage;
