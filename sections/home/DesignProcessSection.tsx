"use client";

import CustomButton from "@/components/CustomButton";
import {
  FaCalculator,
  FaPencilAlt,
  FaLaptopCode,
  FaFlask,
} from "react-icons/fa";

type DesignProcessSectionProps = {
  title: string;
  description: string;
  items: {
    num: number;
    title: string;
    description: string;
  }[];
};

const DesignProcessSection = ({
  title,
  description,
  items,
}: DesignProcessSectionProps) => {
  const icons = [
    <FaCalculator />,
    <FaPencilAlt />,
    <FaLaptopCode />,
    <FaFlask />,
  ];

  return (
    <div className="w-full mx-auto mb-8 lg:mb-14 mt-24 lg:mt-16 bg-gradient-to-r from-blue-500 to-[#0624B5] py-24">
      <div className="cnt flex flex-col items-center mt-2">
        <h3 className="text-center text-[#eaebf0] uppercase font-semibold tracking-wide text-lg mb-2">
          {title}
        </h3>
        <p className="text-center max-w-full lg:max-w-[80%] font-bold mx-auto tracking-wide text-[1rem] lg:text-3xl xl:text-4xl leading-7 text-white font-sans mb-8 lg:mb-10">
          {description}
        </p>
        <div className="relative w-full max-w-6xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 rounded-3xl "></div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-center mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <div
                className={`relative bg-white rounded-lg shadow-lg p-8  w-full md:w-5/12 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                <div className="bg-blue-500 text-white py-2 px-4 rounded-full text-sm font-medium inline-block mb-6 shadow-md">
                  Krok {item.num}
                </div>
                <h4 className="text-[#0624B5] font-sans text-xl lg:text-2xl font-semibold mb-3 text-left">
                  {item.title}
                </h4>
                <p className="text-gray-700 text-base font-light leading-relaxed mb-6 text-left">
                  {item.description}
                </p>
                {index === 0 && (
                  <CustomButton
                    text="Darmowa Wycena"
                    bgColor="#0077cc"
                    textColor="#fff"
                    link="/kontakt"
                  />
                )}
              </div>
              <div
                className={`w-20 h-20 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-xl ${
                  index % 2 === 0
                    ? "md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:top-1/2"
                    : "md:absolute md:right-1/2 md:transform md:translate-x-1/2 md:top-1/2"
                }`}
                aria-hidden="true"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-white text-blue-500 rounded-full border-4 border-blue-500">
                  {icons[index]}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProcessSection;