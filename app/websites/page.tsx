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

import { HomePage2Query, HomePage2QueryVariables, WebsitesPageQuery, WebsitesPageQueryVariables } from "@/gql/graphql";
import GRAPHQL_QUERY_WEBSITES from "@/gql-queries/websites_page.graphql";
import GRAPHQL_QUERY_HOME from "@/gql-queries/home_page2.graphql";

const getWebsitesData = async () => {
  const { data } = await query<WebsitesPageQuery, WebsitesPageQueryVariables>({ query: GRAPHQL_QUERY_WEBSITES });

  return {
    hero: data.page?.websites?.hero,
    professionalSites: data.page?.websites?.professionalSites,
    websiteBenefits: data.page?.websites?.websiteBenefits,
    offerpagetypes: data.page?.websites?.offerpagetypes,
  };
};

const getHomeData = async () => {
  const { data } = await query<HomePage2Query, HomePage2QueryVariables>({ query: GRAPHQL_QUERY_HOME });

  return {
    whyme: data.page?.home?.whyme,
    acordin: data.page?.home?.acordin,
    estimation: data.page?.home?.freeprojectestimation
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
// TODO: Bałagan z sekcjami i danymi

const WebsitesPage = async () => {
  const { hero, websiteBenefits, offerpagetypes } = await getWebsitesData();
  const { whyme, acordin,estimation } = await getHomeData();

  const mediumImage = getImageUrlBySize(hero?.image, "medium");

  const buttons = estimation?.buttons || [];

  return (
    <>
      <section>
        <header className="flex flex-col md:flex-row items-center justify-between cnt font-sans py-14">
          <div className="md:w-[40%] md:mr-6 order-2 md:order-1">
            <h1 className="text-bgColor leading-9 mt-6 font-semibold font-sans text-3xl md:text-3xl xl:text-5xl mb-2 tracking-wide">
              {hero?.title}
            </h1>
            <p className="text-gray-700 text-lg mb-6 mt-4 tracking-wide">
              {hero?.description}
            </p>
            <CustomButton
              text={hero?.button?.label || ''}
              bgColor="#0077cc"
              textColor="#fff"
              link={hero?.button?.url || '/'}
            />
          </div>
          <div className="md:w-2/5 order-1 md:order-2">
            <Image
              width={mediumImage?.width}
              height={mediumImage?.height}
              src={mediumImage?.sourceUrl}
              alt="kobieta sprawdzająca stronę"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </header>

        <div className="font-sans bg-slate-50 py-4 mt-20">
          <div className="cnt mx-auto flex flex-col mt-4 py-6 lg:py-14">
            <div className="w-full text-center">
              <h2 className="text-gray-700 text-3xl md:text-xl xl:text-5xl font-bold">
                {websiteBenefits?.title}
              </h2>
              <p className="text-gray-600 mt-3 text-lg md:text-base tracking-wide w-full md:max-w-[90%] lg:max-w-[80%] mx-auto">
                {websiteBenefits?.description}
              </p>
              <div className="mt-8 flex flex-row  flex-wrap gap-x-8 ">
                {websiteBenefits?.benefitsItems?.map((item: any, index: any) => (
                  <div
                    key={index}
                    className=" flex flex-col mt-6 max-w-[90%] mx-auto bg-white p-5 rounded-lg shadow-lg  shadow-slate-200 hover:shadow-gColor"
                  >
                    <div className="text-customColor text-left">
                      <span className="text-gray-600 font-[400] text-3xl">{item.title}</span>
                    </div>
                    <span className="text-gray-600 mt-4 text-left font-light font-source md:text-xl tracking-wide">
                      {item.description}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <OfferPageTypes data={offerpagetypes} />
        {/* TODO: Należy przenieść dane do ACF */}
        <EstimationSection
          title={estimation?.title || ''}
          description={estimation?.description || ''}
          buttons={buttons.map(button => ({
            label: button?.text || '',
            url: button?.url || '/',
          }))}
        />
        <EncouragingSection title={whyme?.title || ''} services={whyme?.boxs || []} />
        <FaqSection title={acordin?.title || ''} description={acordin?.description || ''} items={acordin?.acordinItems as any[]} />
      </section>
    </>
  );
};

export default WebsitesPage;