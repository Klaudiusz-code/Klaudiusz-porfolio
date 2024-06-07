import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

import { getImageUrlBySize } from "@/helpers";

const OffertsHome = ({ data }: any) => {
  return (
    <div className="bg-customColor min-h-[600px] mt-28 font-sans">
      <div className="cnt mx-auto py-6">
        {data.map((section: any, index: number) => {
          const mediumImage = getImageUrlBySize(section.image, "medium");

          return (
            <div
              className={`flex flex-col lg:flex-row mt-12 lg:mt-6 max-w-[95%] mx-auto justify-center lg:justify-between items-center ${
                index % 2 === 1 ? "" : "lg:flex-row-reverse"
              }`}
              key={index}
            >
              <div
                className={`flex justify-center md:max-w-[70%] lg:max-w-[50%] ${
                  index % 2 === 0 ? "" : "lg:order-2"
                }`}
              >
                <Image
                  src={mediumImage.sourceUrl}
                  width={500}
                  height={200}
                  className="mx-auto group-hover:-translate-y-40 transition-all duration-500"
                  alt="Korzysci Ze Strony Internetowej"
                />
              </div>
              <div
                className={`flex flex-col text-center md:text-left w-full md:max-w-[80%] lg:max-w-[50%] ${
                  index % 2 === 0 ? "lg:order-2" : ""
                } group`}
              >
                <h1 className="text-[1.9rem] lg:text-[2.2rem] text-white font-[400] mb-4 mt-3 lg:mt-0 lg:mb-2">
                  {section.title}
                </h1>
                <p className="mt-2 text-[1rem] font-thin text-[#dbdbdb] leading-7 mb-3 tracking-wide">
                  {section.description}
                </p>
                <CustomButton
                  text={section?.button?.text || 'd1'}
                  link={section?.button?.url || 'd2'}
                  bgColor="#fff"
                  textColor="#0077cc"
                />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default OffertsHome;
