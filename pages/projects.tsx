import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import { ProjectsData } from "@/data";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

const Projects = () => {
  return (
    <>
      <Head>
        <title>
          Projekty - Strony Internetowe, Sklepy Internetowe, SEO | Lubycza
          Królewska, Tomaszów Lubelski, Zamość, Lublin | Klaudiusz Adamaszek -
          Web Developer
        </title>
      </Head>
      <section className="mb-12">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="bg-[#0077cc] px-6 py-12 lg:p-14"
        >
          <div className="cnt mx-auto text-center">
            <h1 className="text-[1.7rem] lg:text-[2.8rem] font-[600] tracking-wide text-[#fff]">
              Zrealizowane projekty
            </h1>
            <p className="text-[#e7e7e7] leading-8 mt-4 mb-6 font-sans font-[400] text-[1rem] md:text-[1.1rem] lg:text-[1.2rem] w-full mx-auto md:max-w-[80%] lg:max-w-[70%] tracking-wide">
              Jestem w stanie stworzyć dla ciebie unikalną i funkcjonalną{" "}
              <Link href="/websites" className="underline underline-offset-2 hover:text-hoverColor">
                Strone,{" "}
              </Link>
              lub{" "}
              <Link href="/online-stores" className="underline underline-offset-2 hover:text-hoverColor">
                Sklep Internetowy
              </Link>
              , który przyciągnie uwagę Twoich klientów i zapewni sukces twojej
              działalności online. Daj mi szansę, a razem zrealizujemy Twój
              projekt marzeń!
            </p>
            <div className="mt-6 text-center">
              <CustomButton
                bgColor="#fff"
                textColor="#0077cc"
                text="Darmowa Wycena Projektu"
                link="/contact"
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.3 }}
          className="cnt mx-auto mt-14"
        >
          <div className="max-w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 w-full gap-6">
            {ProjectsData.map((project, index) => (
              <div key={index} className="flex flex-row jsmb-4">
                <div className="relative border border-bg-gray-300 rounded-md min-h-[230px] w-[350px] flex items-center justify-center">
                  <div className="h-[10rem] w-[10rem] relative">
                    <div className="absolute h-[0.03rem] top-14 w-full bg-gray-300 transform rotate-45 origin-center"></div>
                    <div className="absolute h-[0.03rem] top-14 w-full bg-gray-300 transform -rotate-45 origin-center"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Projects;
