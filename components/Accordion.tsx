'use client'
import React, { useState, useRef, useEffect } from "react";
import { HiX } from "react-icons/hi";
import { FaPlus } from "react-icons/fa";

const Accordion = ({ title, answer }: { title: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentHeight, setContentHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [isOpen]);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-[#9abdf0] hover:shadow-lg duration-200 shadow-customColor p-6 rounded-lg overflow-hidden">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <div>
          <span className="text-[#2d4b4b] text-lg font-medium lg:text-xl">
            {title}
          </span>
        </div>
        <div>
          {isOpen ? (
            <HiX className="text-[#4f7cf7] text-2xl" />
          ) : (
            <FaPlus className="text-[#4f7cf7] text-2xl" />
          )}
        </div>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${contentHeight}` }}
        className="overflow-hidden transition-max-height duration-300 ease-in-out text-gray-700 text-base lg:text-lg mt-4"
      >
        {answer}
      </div>
    </div>
  );
};

export default Accordion;