"use client";
import { Page_Home_About_Services } from "@/gql/graphql";
import React from "react";

import { FaChartBar, FaLaptopCode, FaShoppingCart } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";
import { CgShoppingCart } from "react-icons/cg";

const iconsKeyMap = {
  faLaptopCode: FaLaptopCode,
  CgShoppingCart: CgShoppingCart,
  faChartBar: FaChartBar,
  tfiWrite: TfiWrite,
  ioMdCheckmarkCircleOutline: IoMdCheckmarkCircleOutline,
  ioSettingsOutline: IoSettingsOutline,
} as const;

const iconClassMap = {
  faLaptopCode: "text-blue-500",
  CgShoppingCart: "text-green-500",
  faChartBar: "text-yellow-500",
  tfiWrite: "text-orange-500",
  ioMdCheckmarkCircleOutline: "text-purple-500",
  ioSettingsOutline: "text-red-500",
} as const;

type IconKey = keyof typeof iconsKeyMap;

const getIconByString = (iconKey: IconKey) => {
  const IconComponent = iconsKeyMap[iconKey];
  const iconClass = iconClassMap[iconKey];
  return IconComponent ? <IconComponent className={iconClass} /> : null;
};

type ServicesSectionProps = {
  services: Page_Home_About_Services[] | null | undefined;
};

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section className="cnt mt-20">
      <div className="max-w-[80%] mx-auto flex flex-wrap justify-center gap-12">
        {services?.map((service, index: number) => {
          const iconKey = service?.icon?.split(":")[0] as IconKey;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center text-customColor rounded-lg min-h-[250px] max-w-[300px] shadow-lg transition-all duration-300 shadow-[#e0e0e0] hover:shadow-gColor"
            >
              {iconKey && (
                <span className="text-[2.4rem] pt-3 mt-4">
                  {getIconByString(iconKey)}
                </span>
              )}
              <h3 className="mt-2 text-[26px] text-[#4d4c4c] font-[400]">
                {service.title}
              </h3>
              <p className="max-w-[80%] mt-1 text-gColor font-light text-[0.9rem]">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
