import React from "react";
import { Metadata } from "next";

import { query } from "@/ApolloClient";

import { HomePageQuery, HomePageQueryVariables, Page_Home_About_Services } from "@/gql/graphql";
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
  return {
    title: 'Strona główna',
    description: '...',
  }
}

const HomePage = async () => {
  const { data } = await query<HomePageQuery, HomePageQueryVariables>({ query: GRAPHQL_QUERY });
  const hero = data.page?.home?.hero;
  const about = data.page?.home?.about;
  const websiteprocces = data.page?.home?.websiteprocces;
  const offertshome = data.page?.home?.offertshome;
  const tools = data.page?.home?.tools;
  const whyme = data.page?.home?.whyme;
  const posts = data.posts;
  const acordin = data.page?.home?.acordin;

  return (
    <>
      <HeroSection title={hero?.title || ''} description={hero?.description || ''} buttonText={hero?.button?.label || ''} buttonUrl={hero?.button?.url || ''} />
      <AboutSection title={about?.title || ''} description={about?.description || ''} />
      <ServicesSection services={about?.services as Page_Home_About_Services[]} />
      <DesignProcessSection title={websiteprocces?.title || ''} description={websiteprocces?.description || ''} items={websiteprocces?.itemsBlock as any[]} />
      <OffersSection services={offertshome as any[]} />
      <ToolsSection title={tools?.title || ''} description={tools?.description || ''} charts={tools?.charts as any[]} />
      <EncouragingSection title={whyme?.title || ''} services={whyme?.boxs || []} />
      <EstimationSection
        title="Potrzebujesz Wyceny Projektu? Zrobię to za darmo!"
        description="Skontaktuj się ze mną, chętnie pomogę!"
        phone="519668439"
        button={{
          label: 'Napisz do mnie!',
          url: '/contact'
        }}
      />
      <LatestPostsSection posts={posts?.nodes as any[]} />
      <FaqSection title={acordin?.title || ''} description={acordin?.description || ''} items={acordin?.acordinItems as any[]} />
    </>
  );
};

export default HomePage;
