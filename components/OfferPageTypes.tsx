"use client";

import React from "react";
import CustomButton from "./CustomButton";
import { FaFileAlt, FaBuilding, FaBlog } from "react-icons/fa";
const icons = [FaFileAlt, FaBuilding, FaBlog];

const OfferPageTypes = ({ data }: any) => {
  return (
    <section className="container mx-auto mt-16 lg:mt-20">
      <h3 className="bg-gradient-to-r from-zinc-50 to-gray-100 text-center px-8 py-6 rounded-2xl text-gray-800 text-3xl lg:text-4xl font-semibold mb-12 shadow-xl shadow-gray-300">
        {data.title}
      </h3>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
        {data.items.map((item: any, index: number) => {
          const IconComponent = icons[index];

          return (
            <div
              key={index}
              className="relative flex flex-col items-center text-center text-customColor p-10 min-h-[380px] max-w-[380px] bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="absolute top-[-16px] left-[-16px] bg-gradient-to-r from-green-300 to-blue-400 text-white font-semibold text-lg p-4 rounded-full border-2 border-white transform scale-90 hover:scale-100 transition-all duration-300">
                {index + 1}
              </div>

              <div className="relative mt-16 mb-8">
                <div className="bg-gradient-to-r from-green-300 to-blue-400 rounded-full h-20 w-20 flex items-center justify-center text-white text-3xl mb-6">
                  <IconComponent />
                </div>
                <h2 className="text-gray-800 font-sans text-2xl lg:text-3xl font-semibold mb-4 leading-tight">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-sm lg:text-base xl:text-lg font-sans leading-8 mb-8">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <CustomButton
                    bgColor="#0077cc"
                    textColor="#fff"
                    text="Darmowa Wycena Projektu"
                    link="/kontakt"
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
