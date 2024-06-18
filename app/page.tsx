import React from "react";
import { Metadata } from "next";

import { query } from "@/ApolloClient";

import {
  HomePageQuery,
  HomePageQueryVariables,
  Page_Home_About_Services,
} from "@/gql/graphql";
import GRAPHQL_QUERY from "@/gql-queries/home_page.graphql";

import HeroSection from "@/sections/home/HeroSection";
import AboutSection from "@/sections/home/AboutSection";
import ServicesSection from "@/sections/home/ServicesSection";
import DesignProcessSection from "@/sections/home/DesignProcessSection";
import OffersSection from "@/sections/home/OffersSection";
import ToolsSection from "@/sections/home/ToolsSection";
import EstimationSection from "@/sections/home/EstimationSection";
import LatestPostsSection from "@/sections/home/LatestPostsSection";
import EncouragingSection from "@/sections/common/EncouragingSection";
import FaqSection from "@/sections/common/FaqSection";

export async function generateMetadata(): Promise<Metadata> {
  const { data } = await query<HomePageQuery, HomePageQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const seoData = data.page?.seo;

  return {
    title: seoData?.title || "",
    description: seoData?.description || "",
  };
}

const HomePage = async () => {
  const { data } = await query<HomePageQuery, HomePageQueryVariables>({
    query: GRAPHQL_QUERY,
  });
  const seo = data.page?.seo;

  const hero = data.page?.home?.hero;
  const about = data.page?.home?.about;
  const websiteprocces = data.page?.home?.websiteprocces;
  const offertshome = data.page?.home?.offertshome;
  const tools = data.page?.home?.tools;
  const whyme = data.page?.home?.whyme;
  const posts = data.posts;
  const acordin = data.page?.home?.acordin;
  const estimation = data.page?.home?.freeprojectestimation;
  const buttons = estimation?.buttons || [];
  return (
    <>
      <HeroSection
        title={hero?.title || ""}
        description={hero?.description || ""}
        buttonText={hero?.button?.label || ""}
        buttonUrl={hero?.button?.url || ""}
      />
      <AboutSection
        title={about?.title || ""}
        description={about?.description || ""}
      />
      <ServicesSection
        services={about?.services as Page_Home_About_Services[] as any}
      />
      <DesignProcessSection
        title={websiteprocces?.title || ""}
        description={websiteprocces?.description || ""}
        items={websiteprocces?.itemsBlock as any[]}
      />
      <ToolsSection
        title={tools?.title || ""}
        description={tools?.description || ""}
        charts={tools?.charts as any[]}
      />
      <EncouragingSection
        title={whyme?.title || ""}
        services={whyme?.boxs || [] as any}
      />

      <EstimationSection
        title={estimation?.title || ""}
        description={estimation?.description || ""}
        buttons={buttons.map((button) => ({
          label: button?.text || "",
          url: button?.url || "/",
        }))}
      />
      <LatestPostsSection posts={posts?.nodes as any[]} />
      <FaqSection
        title={acordin?.title || ""}
        description={acordin?.description || ""}
        items={acordin?.acordinItems as any[]}
      />
    </>
  );
};

export default HomePage;
