import React from "react";
import Image from "next/image";
import { Metadata } from "next";

import { query } from "@/ApolloClient";

import GRAPHL_QUERY_HOME from "@/gql-queries/onlinestores_page_home.graphql";
import GRAPHQL_QUERY from "@/gql-queries/onlinestores_page.graphql";

import CustomButton from "@/components/CustomButton";

import EncouragingSection from "@/sections/common/EncouragingSection";
import FaqSection from "@/sections/common/FaqSection";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'OnlineStores Page',
    description: '...',
  }
}

const OnlineStoresPage = async () => {
  const {
    data: {
      page: {
        home: {
          whyme,
          acordin,
        },
      },
    },
  } = await query({ query: GRAPHL_QUERY_HOME });

  const {
    data: {
      page: {
        onlieStores: {
          hero,
        },
      },
    },
  } = await query({ query: GRAPHQL_QUERY });

  return (
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
            width={500}
            height={200}
            src={'/favicon.ico'}
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
      <EncouragingSection data={whyme} />
      <FaqSection data={acordin} />
    </section>
  );
};

export default OnlineStoresPage;
