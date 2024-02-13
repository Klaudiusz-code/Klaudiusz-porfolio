import React, { useState } from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const AccordionUi = ({ title, answer }: { title: string; answer: string }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <section className="cnt lg:max-w-[70%] py-3 font-sans">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center bg-[#ffffff] p-4 shadow-lg transition-all  rounded-xl duration-300 shadow-[#e0e0e0] hover:shadow-gColor  "
      >
        <span className="text-customColor text-[0.9rem] text-left font-[400] mt-2 lg:text-[1.2rem]">
          {title}
        </span>
        {accordionOpen ? (
          <HiX
            className="text-customColor shrink-0 ml-8 text-[2rem]"
            size={20}
          />
        ) : (
          <FaPlus className="text-customColor shrink-0 ml-8" size={20} />
        )}
      </button>
      <div
        className={`grid overflow-hidden mt-1 transition-all duration-300 ease-in-out text-customColor  text-[0.8rem] lg:text-[1rem] text-center md:text-left ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
    </section>
  );
};

export default AccordionUi;
