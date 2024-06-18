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
    <div className="w-full mx-auto mb-8 lg:mb-14 mt-24 lg:mt-16 bg-gradient-to-r from-blue-400 to-blue-600 py-24">
      <div className="flex flex-col items-center mt-2">
        <h2 className="text-center rounded-lg text-[#eaebf0] uppercase font-semibold tracking-wide text-lg mb-2">
          {title}
        </h2>
        <p className="text-center max-w-full lg:max-w-[80%] font-bold mx-auto tracking-wide text-[1rem] lg:text-3xl xl:text-4xl leading-7 text-white font-sans mb-8 lg:mb-10">
          {description}
        </p>
        <div className="cnt mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col items-center justify-between text-center p-6 lg:p-8 bg-white rounded-2xl border border-gray-200 transition-all duration-300 group transform hover:-translate-y-2 hover:scale-105 shadow-md hover:shadow-lg"
            >
              <div className="absolute top-0 left-0 bg-blue-500 rounded-tl-2xl rounded-br-2xl py-2 px-4 text-white font-semibold text-sm">
                Krok {item.num}
              </div>
              <div className="mt-8">
                <div className="bg-blue-500 rounded-full h-16 w-16 flex items-center justify-center text-white text-3xl mb-6">
                  {icons[index]}
                </div>
                <h2 className="text-[#000] font-sans text-lg lg:text-xl font-medium">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-sm lg:text-base xl:text-lg font-sans mt-2 mb-4 max-w-[90%] mx-auto leading-8">
                  {item.description}
                </p>
                {index === 0 && (
                  <CustomButton
                    text="Darmowa Wycena"
                    bgColor="#0077cc"
                    textColor="#fff"
                    link="/contact"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProcessSection;
