import React, { useState } from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

interface AccordionUiProps {
  title: string;
  answer: string;
}

const AccordionUi: React.FC<AccordionUiProps> = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="container w-full lg:max-w-[70%] mx-auto py-3 font-sans">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center rounded-md border border-gray-700  transition-all duration-300 p-4 hover:border-customColor "
      >
        <span className="text-customColor text-[0.9rem] lg:text-[1rem]">
          {title}
        </span>
        {accordionOpen ? (
          <HiX className="text-customColor shrink-0 ml-8 text-[1.1rem]" size={20} />
        ) : (
          <IoIosArrowDown className="text-customColor shrink-0 ml-8" size={20} />
        )}
      </button>
      <div
        className={`grid overflow-hidden mt-1 transition-all duration-300 ease-in-out text-gColor  text-[0.8rem] lg:text-[1rem] text-center md:text-left ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </div>
  );
};

export default AccordionUi;
