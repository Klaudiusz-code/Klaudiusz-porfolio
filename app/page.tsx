import React from "react";
import { Metadata } from "next";

import { query } from "@/ApolloClient";

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
    title: "Strona główna",
    description: "...",
  };
}

const HomePage = async () => {
  const {
    data: {
      page: {
        home: {
          hero,
          about,
          websiteprocces,
          offertshome,
          tools,
          whyme,
          acordin,
        },
      },
      posts,
    },
  } = await query({ query: GRAPHQL_QUERY });


  return (
    <>
      <HeroSection data={hero} />
      <AboutSection data={about} />
      <ServicesSection data={about} />
      <DesignProcessSection data={websiteprocces} />
      <OffersSection data={offertshome} />
      <ToolsSection data={tools} />
      <EncouragingSection data={whyme} />
      {/* TODO: Należy przenieść dane do ACF */}
      <EstimationSection
        data={{
          title: "Potrzebujesz Wyceny Projektu? Zrobię to za darmo!",
          description: "Skontaktuj się ze mną, chętnie pomogę!",
          phone: "519668439",
          button: {
            label: "Napisz do mnie!",
            url: "/contact",
          },
        }}
      />
      <LatestPostsSection data={posts} />
      <FaqSection data={acordin} />
    </>
  );
};

export default HomePage;
