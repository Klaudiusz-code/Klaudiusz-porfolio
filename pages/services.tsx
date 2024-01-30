"use client";
import React from "react";
import { MySkills } from "@/data";
import { MyServices } from "@/data";
import Head from "next/head";
import { SlArrowRight } from "react-icons/sl";

import { motion } from "framer-motion";
import ButtonContact from "@/components/ButtonContact";
import ContactBaner from "@/components/ContactBaner";

const services = () => {
  return (
    <>
      <Head>
        <title>
          Usługi - Strony Internetowe, Sklepy Internetowe, SEO | Lubycza
          Królewska, Tomaszów Lubelski, Zamość, Lublin | Klaudiusz Adamaszek -
          Web Developer
        </title>
      </Head>
      <div className="container mx-auto font-sans">
        <div className="w-full text-center mt-2">
          <h1 className="tex-white font-sans font-[900] text-white text-[1.8rem] md:text-[2.1rem] lg:text-[2.8rem] tracking-wide">
            OFERTA & NARZĘDZIA
          </h1>
          <p className="text-gColor text-[0.9rem] md:text-[1rem] lg:text-[1.3rem] font-sans font-[400]">
            Co mogę dla ciebie zrobić!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-8 justify-center">
          {MyServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center text-white border border-gray-700 rounded-md min-h-[183px] transition-all duration-100 even:bg-customColor hover:bg-customColor"
            >
              <span className="text-[2.4rem] pt-3">{service.icon}</span>
              <h1 className="mt-2 text-[26px] font-bold">{service.name}</h1>
              <p className="max-w-[80%] mt-1 text-white font-light text-[0.9rem]">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-5  rounded-lg p-1">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-24 justify-center">
          {MySkills.map((item, index) => (
            <div className="flex flex-col items-center" key={index}>
              <div className="flex w-full  items-center justify-between mb-1">
                <h2 className="text-[1rem] font-[500] text-white">
                  {item.name}
                </h2>
                <span className="text-white text-sm font-sans font-[500]">
                  {item.width}
                </span>
              </div>
              <div className="relative w-full h-[1.3rem] bg-white rounded-md overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-customColor transition-all duration-500 ease-in-out"
                  style={{ width: item.width }}
                />
              </div>
            </div>
          ))}
        </div>
        <ContactBaner />
      </div>
    </>
  );
};

export default services;
