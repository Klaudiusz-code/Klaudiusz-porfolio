import React from "react";
import Head from "next/head";
import Image from "next/image";
import { motion } from "framer-motion";
import createApolloClient from "@/apollo-client";
import { gql } from "@apollo/client";

import WhyChooseUs from "@/components/WhyChooseUs";
import Acordion from "@/components/Acordin/Acordion";
import FreeProjectEstimation from "@/components/FreeProjectEstimation";
import CustomButton from "@/components/CustomButton";
import OfferPageTypes from "@/components/OfferPageTypes";

import { getImageUrlBySize, getMenus } from "@/helpers";

export async function getServerSideProps() {
  const client = createApolloClient();

  const websitesQuery = gql`
    query Websites {
      page(id: "cG9zdDoxMTI=") {
        websites {
          hero {
            title
            description
            button {
              label
              url
            }
            image {
              mediaDetails {
                sizes {
                  width
                  height
                  name
                  sourceUrl
                }
              }
            }
          }
          professionalSites {
            title
            description
          }
          websiteBenefits {
            title
            description
            benefitsItems {
              title
              description
            }
          }
          offerpagetypes {
            title
            items {
              title
              description
            }
          }
        }
      }
    }
  `;

  const homeQuery = gql`
    query Home {
      page(id: "cG9zdDoyMw==") {
        home {
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
    }
  `;

  const websitesData = await client.query({ query: websitesQuery });
  const homeData = await client.query({ query: homeQuery });

  return {
    props: {
      hero: websitesData.data.page.websites.hero,
      professionalSites: websitesData.data.page.websites.professionalSites,
      websiteBenefits: websitesData.data.page.websites.websiteBenefits,
      whyme: homeData.data.page.home.whyme,
      acordin: homeData.data.page.home.acordin,
      offerpagetypes: websitesData.data.page.websites.offerpagetypes,
    },
  };
}

const Websites = ({
  hero,
  websiteBenefits,
  whyme,
  acordin,
  offerpagetypes,
}: any) => {
  const mediumImage = getImageUrlBySize(hero.image, "medium");

  return (
    <>
      <Head>
        <title>Strona Internetowa - Tomaszów Lubelski, Zamość, Lublin,</title>
      </Head>
      <section>
        <header className="flex flex-col md:flex-row items-center justify-between cnt font-sans py-14">
          <div className="md:w-[40%] md:mr-6 order-2 md:order-1">
            <h1 className="text-bgColor leading-9 mt-6 font-semibold font-sans text-3xl md:text-3xl xl:text-5xl mb-2 tracking-wide">
              {hero.title}
            </h1>
            <p className="text-gray-700 text-lg mb-6 mt-4 tracking-wide">
              {hero.description}
            </p>
            <CustomButton
              text={hero.button.label}
              bgColor="#0077cc"
              textColor="#fff"
              link={hero.button.url}
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
                {websiteBenefits.title}
              </h2>
              <p className="text-gray-600 mt-3 text-lg md:text-base tracking-wide w-full md:max-w-[90%] lg:max-w-[80%] mx-auto">
                {websiteBenefits.description}
              </p>
              <div className="mt-8 flex flex-row  flex-wrap gap-x-8 ">
                {websiteBenefits.benefitsItems.map((item: any, index: any) => (
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
        <FreeProjectEstimation />
        <WhyChooseUs data={whyme} />
        <Acordion data={acordin} />
      </section>
    </>
  );
};

export default Websites;
