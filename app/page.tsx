import React from "react";
import { Metadata } from "next";
import { query } from "@/ApolloClient";
import Head from "next/head";
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
import ToolsSection from "@/sections/home/ToolsSection";
import EstimationSection from "@/sections/home/EstimationSection";
import LatestPostsSection from "@/sections/home/LatestPostsSection";
import EncouragingSection from "@/sections/common/EncouragingSection";
import FaqSection from "@/sections/common/FaqSection";
import InstagramCTA from "@/components/InstagramCTA";
import OfferTabs from "@/components/OfferTabs";
import CTA from "@/components/BriefCta";
import ProjectsSection from "@/sections/home/ProjectsSection";

type OpenGraphType = "website" | "article" | "book" | "profile";

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await query<HomePageQuery, HomePageQueryVariables>({
      query: GRAPHQL_QUERY,
    });

    const seoData = data.page?.seo;

    const title =
      seoData?.title ||
      "Tworzenie Stron Internetowych i SEO | Tomaszów Lubelski, Zamość, Biłgoraj - klaudiuszdev.pl";

    const description =
      seoData?.description ||
      "Nowoczesne strony internetowe, SEO i sklepy online dla firm z Tomaszowa Lubelskiego, Zamościa, Biłgoraja i okolic. Klaudiuszdev - web developer.";

    return {
      title,
      description,
      metadataBase: new URL("https://klaudiuszdev.pl"),
      alternates: {
        canonical: "/",
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        title: seoData?.openGraph?.title || title,
        description: seoData?.openGraph?.description || description,
        url: "https://klaudiuszdev.pl",
        siteName: "klaudiuszdev.pl",
        type: "website",
        locale: "pl_PL",
        images: [
          {
            url: "/part.png",
            width: 1200,
            height: 630,
            alt: "Tworzenie stron internetowych - klaudiuszdev",
          },
        ],
      },

      keywords: [
        "tworzenie stron internetowych",
        "strony www Tomaszów Lubelski",
        "strony internetowe Zamość",
        "SEO Tomaszów Lubelski",
        "web developer Biłgoraj",
        "klaudiuszdev",
      ],
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);

    return {
      title:
        "Tworzenie Stron Internetowych | Tomaszów Lubelski, Zamość - klaudiuszdev.pl",
      description:
        "Profesjonalne strony internetowe i SEO dla lokalnych firm z Tomaszowa Lubelskiego, Zamościa i Biłgoraja.",
      metadataBase: new URL("https://klaudiuszdev.pl"),
    };
  }
}
const HomePage = async () => {
  const { data } = await query<HomePageQuery, HomePageQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const seo = data.page?.seo;

  const hero = data.page?.home?.hero;
  const about = data.page?.home?.about;
  const websiteprocces = data.page?.home?.websiteprocces;
  const tools = data.page?.home?.tools;
  const whyme = data.page?.home?.whyme;
  const posts = data.posts;
  const acordin = data.page?.home?.acordin;
  const estimation = data.page?.home?.freeprojectestimation;
  const buttons = estimation?.buttons || [];

  return (
    <>
      <Head>
        <meta
          name="google-site-verification"
          content="_QkqDJ2yyltPwwi4lkThE7vqIHC4e4RdlkgOq1jlidA"
        />
        <title>{seo?.title || "klaudiuszdev.pl"}</title>
        <meta name="description" content={seo?.description || "Klaudiuszdev"} />

        <meta
          property="og:title"
          content={seo?.openGraph?.title || seo?.title || "Klaudiuszdev"}
        />
        <meta
          property="og:description"
          content={
            seo?.openGraph?.description ||
            seo?.description ||
            "Default Description"
          }
        />
        <meta property="og:image" />
        <meta property="og:type" content={seo?.openGraph?.type || "website"} />
      </Head>
      <HeroSection
        title={hero?.title || ""}
        description={hero?.description || ""}
        buttonText={hero?.button?.label || ""}
        buttonUrl={hero?.button?.url || ""}
      />{" "}
      <section className=" py-16">
        <OfferTabs />
      </section>
      <ServicesSection {...({ services: about?.services } as any)} />
      <ProjectsSection />
      <DesignProcessSection />
      <ToolsSection />
      <CTA />
      <EncouragingSection
        title={whyme?.title || ""}
        services={whyme?.boxs || ([] as any)}
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
      <InstagramCTA />
      <FaqSection
        title={acordin?.title || ""}
        description={acordin?.description || ""}
        items={acordin?.acordinItems as any[]}
      />
    </>
  );
};

export default HomePage;
