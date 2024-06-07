import React from "react";

import { FaChartBar, FaLaptopCode, FaShoppingCart } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { TfiWrite } from "react-icons/tfi";

const iconsKeyMap = {
  'faLaptopCode': FaLaptopCode,
  'faShoppingCart': FaShoppingCart,
  'faChartBar': FaChartBar,
  'tfiWrite': TfiWrite,
  'ioMdCheckmarkCircleOutline': IoMdCheckmarkCircleOutline,
  'ioSettingsOutline': IoSettingsOutline,
} as any;

const getIconByString = (iconKey: string) => {
  return iconsKeyMap[iconKey]();
}

const ServicesItems = ({ data }: any) => {
  return (
    <section className="cnt mt-20">
      <div className="max-w-[80%] mx-auto flex flex-wrap justify-center  gap-12  ">
        {data.services.map((service: any, index: number) => {
          const iconKey = service?.icon?.split(':')[0] ?? null;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center text-customColor rounded-lg min-h-[250px] max-w-[300px] shadow-lg transition-all duration-300 shadow-[#e0e0e0] hover:shadow-gColor "
            >
              {iconKey && <span className="text-[2.4rem] pt-3 mt-4">{getIconByString(iconKey)}</span>}
              <h3 className="mt-2 text-[26px] text-[#4d4c4c] font-[400]">
                {service.title}
              </h3>
              <p className="max-w-[80%] mt-1 text-gColor font-light text-[0.9rem]">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  );
};

export default ServicesItems;
