import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";
import Head from "next/head";
import { ProjectsData } from "@/data";
import ButtonContact from "@/components/ButtonContact";
import ProjectQuoteButton from "@/components/ProjectQuoteButton";

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
      <div className="container mx-auto">
        <div className="w-full mt-24">
          <div className="bg-[#0077cc] rounded-2xl px-6 py-12 lg:p-14">
            <h1 className="text-[1.6rem] lg:text-[2.6rem] font-[600] tracking-wide text-[#fff]">
              Zrealizowane projekty
            </h1>
            <p className="text-[#e7e7e7] leading-8 mt-3 mb-6 font-sans font-[400] text-[1rem] md:text-[1.2rem] lg:text-[1.4rem] w-full md:max-w-[80%] lg:max-w-[70%] tracking-wide">
              Jestem w stanie stworzyć dla ciebie unikalną i funkcjonalną{" "}
              <span className="underline underline-offset-2 hover:text-hoverColor">
                Strone,{" "}
              </span>
              lub{" "}
              <span className="underline underline-offset-2">
                Sklep Internetowy
              </span>
              , który przyciągnie uwagę Twoich klientów i zapewni sukces twojej
              działalności online. Daj mi szansę, a razem zrealizujemy Twój
              projekt marzeń!
            </p>
            <div className="mt-6 text-center md:text-left ">
              <ProjectQuoteButton />
            </div>
          </div>
          <div className="w-full mx-auto mt-14">
            <h1 className="text-cyan-50 font-[900] text-[2.2rem] md:text-[2.8rem] lg:text-[3rem] mt-16 text-center">
              Moje Projekty
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 w-full gap-x-6">
              {ProjectsData.map((project, index) => (
                <div className="flex flex-row mb-4">
                  <div className="border border-gray-700 rounded-sm w-full min-h-[350px] flex items-center justify-center">
                    <div className="h-[10rem] w-[10rem] relative"> 
                      <div className="absolute h-[0.03rem] w-full bg-gray-700 transform rotate-45 origin-center"></div>
                      <div className="absolute h-[0.03rem] w-full bg-gray-700 transform -rotate-45 origin-center"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
