"use client";
import React from "react";
import CustomButton from "./CustomButton";
import { FaFileAlt, FaBuilding, FaBlog } from "react-icons/fa";

const icons = [FaFileAlt, FaBuilding, FaBlog];

const OfferPageTypes = ({ data }: any) => {
  return (
    <section className="container text-center mx-auto mt-16 lg:mt-20">
      <h3 className="bg-customColor px-4 py-2 rounded-lg text-white text-[1.2rem] lg:text-[1.5rem] inline-block font-sans mb-8">
        {data.title}
      </h3>
      <p className="text-center max-w-full lg:max-w-[80%] font-bold mx-auto tracking-wide text-[1.2rem] lg:text-2xl xl:text-3xl leading-7 text-gray-800 font-sans mb-12">
        {data.description}
      </p>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-y-16 gap-x-16">
        {data.items.map((item: any, index: number) => {
          const IconComponent = icons[index];

          return (
            <div
              key={index}
              className="relative flex flex-col items-center text-center text-customColor p-8 min-h-[300px] max-w-[350px] bg-white rounded-2xl shadow-lg transition-transform duration-300 transform hover:translate-y-[-10px] hover:scale-105 hover:shadow-2xl group"
            >
              <div className="absolute top-0 right-0 bg-customColor text-white font-bold text-4xl p-4 rounded-bl-2xl shadow-lg">
                {index + 1}
              </div>
              <div className="relative mt-12 mb-6">
                <div className="bg-customColor rounded-full h-16 w-16 flex items-center justify-center text-white text-4xl mb-6">
                  <IconComponent />
                </div>
                <h2 className="text-gray-800 font-sans text-xl lg:text-2xl font-semibold mb-4">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm lg:text-base xl:text-lg font-sans mt-2 mb-6 leading-8">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <CustomButton
                    bgColor="#0077cc"
                    textColor="#fff"
                    text="Darmowa Wycena Projektu"
                    link="/contact"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OfferPageTypes;
