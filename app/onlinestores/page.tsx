import React from "react";
import Image from "next/image";
import { Metadata } from "next";
import { getImageUrlBySize } from "@/helpers";

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

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query<OnlineStoresPageQuery, OnlineStoresPageQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const seoData = data.page?.seo;

  return {
    title: seoData?.title || "",
    description: seoData?.description || "",
  };
}

const OnlineStoresPage = async () => {
  const { data: homeData } = await query<OnlineStoresPageHomeQuery, OnlineStoresPageHomeQueryVariables>({
    query: GRAPHL_QUERY_HOME,
  });

  const { data: pageData } = await query<OnlineStoresPageQuery, OnlineStoresPageQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const whyMe = homeData.page?.home?.whyme;
  const accordion = homeData.page?.home?.acordin;
  const hero = pageData.page?.onlieStores?.hero;
  const benefits = pageData.page?.onlieStores?.storesBenefits;

  const fullImage = getImageUrlBySize(hero?.image, "large");

  return (
    <section>
      <header className="flex flex-col md:flex-row items-center justify-between cnt font-sans py-14">
        <div className="md:w-[40%] md:mr-6 order-2 md:order-1">
          <h1 className="text-bgColor leading-9 mt-6 font-semibold text-3xl md:text-3xl xl:text-5xl mb-2 tracking-wide">
            {hero?.title}
          </h1>
          <p className="text-gray-700 text-xl mb-6 mt-4 tracking-wide">
            {hero?.description}
          </p>
          <CustomButton
            text={hero?.button?.text || ""}
            bgColor="#0077cc"
            textColor="#fff"
            link={hero?.button?.url || "/"}
          />
        </div>
        <div className="md:w-2/5 order-1 md:order-2">
          <Image
            width={fullImage?.width}
            height={fullImage?.height}
            src={fullImage?.sourceUrl}
            alt="kobieta sprawdzająca stronę"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </header>
      <div className="font-sans bg-slate-50 cnt py-8 mt-4 lg:mt-20">
          <div className="container mx-auto">
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-blue-700 font-source leading-tight mb-6">
                {benefits?.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mx-auto max-w-3xl mb-12">
                {benefits?.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {benefits?.benefitsItems?.map(
                  (item: any, index: any) => (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden shadow-lg"
                      style={{
                        background:
                          "linear-gradient(to right, #0077cc, #00aaff)",
                        border: "2px solid #fff",
                        borderRadius: "20px",
                        transition: "transform 0.3s ease-in-out",
                        transformOrigin: "center",
                        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <div className="p-6">
                        <h3 className="font-extrabold font-source text-3xl mb-3 text-white">
                          {item.title}
                        </h3>
                        <p className="font-light text-base font-mono leading-relaxed text-gray-200">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                )}
              </div>
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
