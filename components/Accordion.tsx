"use client";

import React, { useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";

type AccordionProps = {
  title: string;
  answer: string;
};

const Accordion = ({ title, answer }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="rounded-lg overflow-hidden shadow-sm transition-shadow duration-200">
      <div className="p-4">
        <button
          className="flex justify-between items-center w-full focus:outline-none"
          onClick={toggleAccordion}
          aria-expanded={isOpen}
        >
          <h3 className="text-lg text-left font-semibold text-gray-600">
            {title}
          </h3>
          <div className="text-2xl">
            <FaChevronDown
              className={`text-[#4f7cf7] transform ${
                isOpen ? "rotate-180" : "rotate-0"
              } transition-transform duration-200`}
            />
          </div>
        </button>
        <div
          ref={contentRef}
          className={`overflow-hidden transition-all duration-300 ease-in-out`}
          style={{ height: isOpen ? contentRef.current?.scrollHeight : 0 }}
        >
          <p className="text-base lg:text-lg text-gray-600 font-sans p-4">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
