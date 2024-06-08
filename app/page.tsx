import React from "react";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import DesignProcessSection from "@/components/sections/DesignProcessSection";
import OffersSection from "@/components/sections/OffersSection";
import ToolsSection from "@/components/sections/ToolsSection";
import EncouragingSection from "@/components/sections/EncouragingSection";
import EstimationSection from "@/components/sections/EstimationSection";
import LatestPostsSection from "@/components/sections/LatestPostsSection";
import FaqSection from "@/components/sections/FaqSection";

import createApolloClient from "@/apollo-client";
import { gql } from "@apollo/client";
import { Metadata } from "next";

const getData = async () => {
  const client = createApolloClient();

  const { data } = (await client.query({
    query: gql`
      query Home {
        page(id: "cG9zdDoyMw==") {
          home {
            hero {
              title
              description
              button {
                label
                url
              }
            }
            about {
              title
              description
              services {
                description
                icon
                title
              }
            }
            websiteprocces {
              title
              description
              itemsBlock {
                num
                title
                description
              }
            }
            offertshome {
              title
              description
              image {
                mediaDetails {
                  sizes {
                    name
                    width
                    height
                    sourceUrl
                  }
                }
              }
            }
            tools {
              title
              description
              charts {
                text
                width
              }
            }
            whyme {
              title
              boxs {
                title
                description
              }
            }
            acordin {
              title
              description
              acordinItems {
                question
                answer
              }
            }
          }
        }
        posts(first: 3) {
          nodes {
            slug
            title
            excerpt
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
      }
    `,
  })) as any;

  return {
    ...data.page.home,
    posts: data.posts,
  };
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Strona główna",
    description: "...",
  };
}

const HomePage = async () => {
  const {
    hero,
    about,
    websiteprocces,
    offertshome,
    tools,
    whyme,
    posts,
    acordin,
  } = await getData();

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
