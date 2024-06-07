import React from "react";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import createApolloClient from "@/apollo-client";

import WhyChooseUs from "@/components/WhyChooseUs";
import Acordion from "@/components/Acordion";
import CustomButton from "@/components/CustomButton";

async function getData() {
  const client = createApolloClient();

  const onlineStoresQuery = gql`
    query OnlineStores {
      page(id: "cG9zdDoyNDU=") {
        onlieStores {
          hero {
            title
            description
            button {
              text
              url
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

  const onlineStoresData = await client.query({ query: onlineStoresQuery });
  const homeData = await client.query({ query: homeQuery });

  return {
    hero: onlineStoresData.data.page.onlieStores.hero,
    whyChooseUs: homeData.data.page.home.whyme,
    accordion: homeData.data.page.home.acordin,
  };
}

export default async () => {
  const { hero, whyChooseUs, accordion } = await getData();

  return (
    <>
      <Head>
        <title>Sklep Internetowy - Tomaszów Lubelski, Zamość, Lublin,</title>
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
              text={hero.button.text}
              bgColor="#0077cc"
              textColor="#fff"
              link={hero.button.url}
            />
          </div>
          <div className="md:w-2/5 order-1 md:order-2">
            <Image
              src={'/'}
              alt="kobieta sprawdzająca stronę"
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        </header>

        <div className="font-sans bg-slate-50 py-4 mt-20">
          <div className="cnt mx-auto flex flex-col mt-4 py-6 lg:py-14">
            <div className="w-full text-center">
              <h2 className="text-gray-700 text-3xl md:text-xl xl:text-5xl font-bold">
                <span className="text-customColor">Dlaczego</span> warto posiadać
                sklep internetowy?
              </h2>
              <p className="text-gray-600 mt-3 text-lg md:text-base tracking-wide w-full md:max-w-[90%] lg:max-w-[80%] mx-auto">
                Moja specjalność to tworzenie wyjątkowych sklepów internetowych,
                które są kluczowym elementem sukcesu każdego biznesu w dzisiejszym
                cyfrowym świecie.
              </p>
            </div>
          </div>
        </div>
        <WhyChooseUs data={whyChooseUs} />
        <Acordion data={accordion} />
      </section>
    </>
  );
};
