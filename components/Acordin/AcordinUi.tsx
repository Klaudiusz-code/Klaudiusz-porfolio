import React, { useState } from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";
import { IoIosArrowDown } from "react-icons/io";

const AccordionUi = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="py-2 font-sans">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full border-b  border-b-gray-200 transition-all duration-150 p-2"
      >
        <span className="text-[#6382bd]">{title}</span>
        {accordionOpen ? (
          <HiX className="text-[#6382bd] shrink-0 ml-8" size={20} />
        ) : (
          <IoIosArrowDown className="text-[#6382bd] shrink-0 ml-8" size={20} />
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out bg-slate-300 text-[#6382bd] py-1 font-medium text-sm ${
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
