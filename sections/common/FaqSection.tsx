'use client';

import React from "react";

import Accordion from "@/components/Accordion";

type FaqSectionProps = {
  title: string;
  description: string;
  items: {
    question: string;
    answer: string;
  }[];
};

const FaqSection = ({ title, description, items = [] }: FaqSectionProps) => {
  return (
    <div className="cnt mb-16 lg:mt-24">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="mb-10 w-full mt-20">
          <h3 className="text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] font-sans font-[400] text-[#10152e]">
            {title}
          </h3>
          <p className="text-bgColor font-[400] text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] mt-2 font-sans">
            {description}
          </p>
        </div>
        <div>
          {items?.map((item: any, index: number) => (
            <Accordion
              key={index}
              title={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
