import React from "react";
import Image from "next/image";
import { Metadata } from "next";

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
  };
}

const OnlineStoresPage = async () => {
  const { data: a } = await query<
    OnlineStoresPageHomeQuery,
    OnlineStoresPageHomeQueryVariables
  >({ query: GRAPHL_QUERY_HOME });
  const whyme = a.page?.home?.whyme;
  const acordin = a.page?.home?.acordin;

  const { data: b } = await query<
    OnlineStoresPageQuery,
    OnlineStoresPageQueryVariables
  >({ query: GRAPHQL_QUERY });
  const hero = b.page?.onlieStores?.hero;
  const benefits = b.page?.onlieStores?.storesBenefits;

  return (
    <section>
      <header className="flex flex-col md:flex-row items-center justify-between cnt font-sans py-14">
        <div className="md:w-[40%] md:mr-6 order-2 md:order-1">
          <h1 className="text-bgColor leading-9 mt-6 font-semibold font-sans text-3xl md:text-3xl xl:text-5xl mb-2 tracking-wide">
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
            width={500}
            height={200}
            src={"/favicon.ico"}
            alt="kobieta sprawdzająca stronę"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </header>
      <div className="font-sans bg-slate-50 py-4 mt-14">
        <div className="cnt mx-auto flex flex-col mt-4 py-6 lg:py-14">
          <div className="w-full text-center bg-[#F8F8FA] py-12">
            <h2 className="text-gray-800 text-3xl md:text-4xl xl:text-5xl font-bold">
              {benefits?.title}
            </h2>
            <p className="text-gray-700 mt-3 text-lg md:text-xl tracking-wide w-full md:max-w-[80%] lg:max-w-[60%] mx-auto">
              {benefits?.description}
            </p>
            <div className="mt-8 space-y-8">
              {benefits?.benefitsItems?.map((item: any, index: any) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row items-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="md:w-1/4">
                    <span className="text-gray-800 font-semibold text-xl md:text-2xl">
                      {item.title}
                    </span>
                  </div>
                  <div className="w-full md:w-3/4 md:ml-6 pl-4 md:border-l border-gray-300">
                    <span className="text-gray-600 text-left font-light font-source md:text-lg tracking-wide">
                      {item.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <EncouragingSection
        title={whyme?.title || ""}
        services={whyme?.boxs || []}
      />
      <FaqSection
        title={acordin?.title || ""}
        description={acordin?.description || ""}
        items={acordin?.acordinItems as any[]}
      />
    </section>
  );
};

export default OnlineStoresPage;
