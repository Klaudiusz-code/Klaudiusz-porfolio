import React, { useState } from "react";
import { HiArrowCircleDown, HiX } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const AccordionUi = ({ title, answer }: { title: string; answer: string }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <section className="cnt lg:max-w-[80%] py-1 font-sans border-l-[3px]  border-customColor">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full items-center p-1  transition-all  rounded-xl duration-300"
      >
        {accordionOpen ? (
          <HiX
            className="text-white shrink-0  text-[2rem] bg-customColor rounded-full p-1"
            size={20}
          />
        ) : (
          <FaPlus
            className="text-white shrink-0  text-[2rem] bg-customColor rounded-full p-1"
            size={20}
          />
        )}
        <span className="text-bgColor text-[0.9rem] ml-3 text-left font-[400]  lg:text-[1.2rem]">
          {title}
        </span>
      </button>
      <div
        className={`grid overflow-hidden mt-1 transition-all duration-300 ml-9 ease-in-out text-customColor  text-[0.8rem] lg:text-[1rem] text-left ${
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
