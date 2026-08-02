import { Metadata } from "next";

import { query } from "@/ApolloClient";
import { HomePageQuery, HomePageQueryVariables } from "@/gql/graphql";
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

export async function generateMetadata(): Promise<Metadata> {
  try {
    const { data } = await query<HomePageQuery, HomePageQueryVariables>({
      query: GRAPHQL_QUERY,
    });

    const seoData = data.page?.seo;

    const title =
      seoData?.title ||
      "KlaudiuszDev.pl | Tworzenie Stron Internetowych, Sklepów WooCommerce i Aplikacji Webowych";

    const description =
      seoData?.description ||
      "KlaudiuszDev.pl tworzy nowoczesne strony internetowe, sklepy WooCommerce i aplikacje webowe dla firm. Szybkie, responsywne i zoptymalizowane rozwiązania SEO.";

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

        siteName: "KlaudiuszDev.pl",

        locale: "pl_PL",

        type: "website",

        images: [
          {
            url: "/part.png",
            width: 1200,
            height: 630,
            alt: "KlaudiuszDev.pl - strony internetowe i sklepy WooCommerce",
          },
        ],
      },

      twitter: {
        card: "summary_large_image",
        title,
        description,
        images: ["/part.png"],
      },
    };
  } catch (error) {
    console.error("Error fetching SEO data:", error);

    return {
      title:
        "KlaudiuszDev.pl | Tworzenie Stron Internetowych i Sklepów WooCommerce",

      description:
        "Profesjonalne strony internetowe, sklepy WooCommerce i aplikacje webowe dla firm. KlaudiuszDev.pl - nowoczesne rozwiązania online.",

      metadataBase: new URL("https://klaudiuszdev.pl"),

      alternates: {
        canonical: "/",
      },
    };
  }
}

const HomePage = async () => {
  const { data } = await query<HomePageQuery, HomePageQueryVariables>({
    query: GRAPHQL_QUERY,
  });

  const hero = data.page?.home?.hero;

  const about = data.page?.home?.about;

  const whyme = data.page?.home?.whyme;

  const posts = data.posts;

  const acordin = data.page?.home?.acordin;

  const estimation = data.page?.home?.freeprojectestimation;

  const buttons = estimation?.buttons || [];

  return (
    <>
      <HeroSection
        // @ts-ignore
        title={
          hero?.title ||
          "Tworzę profesjonalne strony internetowe, sklepy WooCommerce i aplikacje webowe"
        }
        description={
          hero?.description ||
          "Pomagam firmom rozwijać biznes online poprzez szybkie, nowoczesne i skuteczne rozwiązania internetowe."
        }
        buttonText={hero?.button?.label || ""}
        buttonUrl={hero?.button?.url || ""}
      />

      <section className="py-16">
        <OfferTabs />
      </section>

      <ServicesSection
        {...({
          services: about?.services,
        } as any)}
      />

      <ProjectsSection />

      <DesignProcessSection />

      <ToolsSection />

      <CTA />

      <EncouragingSection
        title={whyme?.title || ""}
        // @ts-ignore
        services={whyme?.boxs || []}
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
