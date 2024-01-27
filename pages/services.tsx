"use client";
import React from "react";
import { MySkills } from "@/data";
import { MyServices } from "@/data";
import Head from "next/head";
import { SlArrowRight } from "react-icons/sl";

import { motion } from "framer-motion";
import ButtonContact from "@/components/ButtonContact";

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
      <div className="container mx-auto flex flex-wrap justify-center font-sans">
        <div className="w-full mx-auto text-center mt-14">
          <h1 className="text-[0.8rem] lg:text-[2.8rem] text-white font-bold">
            OFERTA & NARZĘDZIA
          </h1>
          <h2 className="text-gColor font-sans mt-2 text-[1.5rem]">
            Co mogę dla ciebie zrobić?
          </h2>
          <div className="w-full flex justify-center mt-6 lg:mt-12 gap-x-11">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-x-8 gap-y-6">
              {MyServices.map((service, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-white border border-gray-700 rounded-md w-[361px] min-h-[183px] transition-all duration-100 hover:bg-customColor"
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
        </div>
      </div>

      <div className="container mx-auto mt-10 mb-10 shadow-lg rounded-lg p-8">
        <div className="grid grid-cols-3 gap-4">
          {MySkills.map((item, index) => (
            <div className="flex flex-col" key={index}>
              <h2 className="text-lg font-semibold text-white mb-2">
                {item.name}
              </h2>
              <div className="relative w-[20rem] h-6 border border-gray-600 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-customColor transition-all duration-500 ease-in-out"
                  style={{ width: item.width }}
                />
                <span className="absolute z-50 -top-5 -mt-4 text-gray-600 text-sm">
                  {item.width}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default services;
