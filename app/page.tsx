import React from "react";
import Head from "next/head";
import AboutMe from "@/components/AboutMe";
import WebsiteDesignProcess from "@/components/WebsiteDesignProcess";
import ServicesItems from "@/components/ServicesItems";
import FreeProjectEstimation from "@/components/FreeProjectEstimation";
import CustomButton from "@/components/CustomButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import OffertsHome from "@/components/OffertsHome";
import Acordion from "@/components/Acordion";
import Tools from "@/components/Tools";
import Blog from "@/components/Blog";

import createApolloClient from "@/apollo-client";
import { gql } from "@apollo/client";

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
            whyme{
              title
              boxs{
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

export default async () => {
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
      <Head>
        <title>
          Strony Internetowe, Sklepy Internetowe, SEO - Tomaszów Lubelski,
          Zamość, Lublin
        </title>
        <meta
          name="description"
          content="Full Stack JavaScript Developer specjalizujący się w tworzeniu stron i sklepów internetowych."
        />
        <meta
          name="keywords"
          content="strony internetowe, sklepy internetowe, seo, web developer, Lubycza Królewska, Tomaszów Lubelski, Zamość, Lublin"
        />
        <meta
          property="og:title"
          content="Strony Internetowe, Sklepy Internetowe, Seo | Tomaszów Lubelski, Zamość, Lublin | Klaudiusz Adamaszek - Web Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />{" "}
      </Head>

      <section className="bg-customColor">
        <div className="cnt relative mx-auto py-8 md:py-10 lg:py-16 min-h-[450px] md:min-h-[500px] lg:min-h-[700px]  flex items-center justify-center text-center flex-col bg-body-bg">
          <div className="w-full h-full  py-6 xl:mt-4 ">
            <h1
              className="mx-auto font-[700] text-white w-full font-source text-[1.8rem] mt-2  md:max-w-[80%] sm:text-[2rem] lg:text-[2.9rem] mb-3 tracking-wide"
            >
              {hero.title}
            </h1>
            <div
              className="flex flex-col"
            >
              <h2 className="mx-auto max-w-[95%] md:max-w-[70%] mt-6 mb-5 text-[#f8f8f8] font-medium text-[0.9rem] leading-7 lg:leading-9 md:text-[1rem] lg:text-[1.1rem] font-sans">
                {hero.description}
              </h2>
              <div>
                <CustomButton
                  text={hero.button.label}
                  link={hero.button.url}
                  bgColor="#fff"
                  textColor="#0077cc"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <AboutMe data={about} />
        <ServicesItems data={about} />
        <WebsiteDesignProcess data={websiteprocces} />
        <OffertsHome data={offertshome} />
        <Tools data={tools} />
        <WhyChooseUs data={whyme} />
        <FreeProjectEstimation />
        <Blog data={posts} />
        <Acordion data={acordin} />
      </section>
    </>
  );
};
