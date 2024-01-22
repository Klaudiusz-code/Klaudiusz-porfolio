import React, { useState } from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const AccordionUi = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-3 font-sans">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full rounded-md border border-gray-700  transition-all duration-150 p-4"
      >
        <span className="text-gColor text-[1.1rem]">{title}</span>
        {accordionOpen ? (
          <HiX className="text-gColor shrink-0 ml-8 text-[1.1rem]" size={20} />
        ) : (
          <IoIosArrowDown className="text-gColor shrink-0 ml-8" size={20} />
        )}
      </button>
      <div
        className={`grid overflow-hidden mt-1 transition-all duration-300 ease-in-out text-[#0077cc] font-medium text-sm ${
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
