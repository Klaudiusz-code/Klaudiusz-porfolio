import React, { useState } from "react";
import { FaArrowRight , FaArrowDown  } from "react-icons/fa";

type AccordionProps = {
  title: string;
  answer: string;
};

const Accordion = ({ title, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg overflow-hidden  transition-shadow duration-300">
      <div className="p-4">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={toggleAccordion}
        >
          <h3 className="text-lg font-semibold font-sans text-gray-600">
            {title}
          </h3>
          <div className="text-2xl">
            {isOpen ? (
              <FaArrowDown className="text-[#4f7cf7]" />
            ) : (
              <FaArrowRight className="text-[#4f7cf7]" />
            )}
          </div>
        </div>
        <div
          className={`overflow-hidden transition-height duration-500 ease-in-out ${
            isOpen ? "h-auto" : "h-0"
          }`}
          aria-hidden={!isOpen}
          style={{ maxHeight: isOpen ? "1000px" : "0" }}
        >
          <p className="text-base lg:text-lg text-gray-600 font-sans mt-4">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
