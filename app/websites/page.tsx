import React from "react";
import { Metadata } from "next";
import Image from "next/image";

import { query } from "@/ApolloClient";
import { getImageUrlBySize } from "@/helpers";

import EncouragingSection from "@/sections/common/EncouragingSection";
import FaqSection from "@/sections/common/FaqSection";
import EstimationSection from "@/sections/home/EstimationSection";

import CustomButton from "@/components/CustomButton";
import OfferPageTypes from "@/components/OfferPageTypes";

import {
  HomePage2Query,
  HomePage2QueryVariables,
  WebsitesPageQuery,
  WebsitesPageQueryVariables,
} from "@/gql/graphql";
import GRAPHQL_QUERY_WEBSITES from "@/gql-queries/websites_page.graphql";
import GRAPHQL_QUERY_HOME from "@/gql-queries/home_page2.graphql";

const getWebsitesData = async () => {
  const { data } = await query<WebsitesPageQuery, WebsitesPageQueryVariables>({
    query: GRAPHQL_QUERY_WEBSITES,
  });

  return {
    hero: data.page?.websites?.hero,
    professionalSites: data.page?.websites?.professionalSites,
    websiteBenefits: data.page?.websites?.websiteBenefits,
    offerpagetypes: data.page?.websites?.offerpagetypes,
  };
};

const getHomeData = async () => {
  const { data } = await query<HomePage2Query, HomePage2QueryVariables>({
    query: GRAPHQL_QUERY_HOME,
  });

  return {
    whyme: data.page?.home?.whyme,
    acordin: data.page?.home?.acordin,
    estimation: data.page?.home?.freeprojectestimation,
  };
};

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query<WebsitesPageQuery, WebsitesPageQueryVariables>({
    query: GRAPHQL_QUERY_WEBSITES,
  });

  const seoData = data.page?.seo;

  return {
    title: seoData?.title || "",
    description: seoData?.description || "",
  };
}

const WebsitesPage = async () => {
  const { hero, websiteBenefits, offerpagetypes } = await getWebsitesData();
  const { whyme, acordin, estimation } = await getHomeData();

  const fullImage = getImageUrlBySize(hero?.image, "large");

  const buttons = estimation?.buttons || [];



  return (
    <>
      <section>
        <header className="flex flex-col md:flex-row items-center justify-between cnt font-sans py-14">
          <div className="md:w-[40%] md:mr-6 order-2 md:order-1">
            <h1 className="text-bgColor leading-9 mt-6 font-semibold font-sans text-3xl md:text-5xl xl:text-5xl mb-2 tracking-wide">
              {hero?.title}
            </h1>
            <p className="text-gray-700 text-lg mb-6 mt-4 tracking-wide">
              {hero?.description}
            </p>
            <CustomButton
              text={hero?.button?.label || ""}
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
                {websiteBenefits?.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mx-auto max-w-3xl mb-12">
                {websiteBenefits?.description}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {websiteBenefits?.benefitsItems?.map(
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

        <OfferPageTypes data={offerpagetypes} />

        <EstimationSection
          title={estimation?.title || ""}
          description={estimation?.description || ""}
          buttons={buttons.map((button) => ({
            label: button?.text || "",
            url: button?.url || "/",
          }))}
        />

        <EncouragingSection
          title={whyme?.title || ""}
          services={whyme?.boxs || ([] as any)}
        />

        <FaqSection
          title={acordin?.title || ""}
          description={acordin?.description || ""}
          items={acordin?.acordinItems as any[]}
        />
      </section>
    </>
  );
};

export default WebsitesPage;
