"use client";
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
    <div className="cnt mb-16 lg:mt-12 px-4 lg:px-0">
      <div className="flex flex-col justify-center">
        <div className="mb-10 w-full mt-20 text-center">
          <h3 className="uppercase text-[#4f7cf7] font-mono tracking-wide font-bold text-lg mt-12">
            {title}
          </h3>
          <p className="text-center max-w-full mt-4 lg:max-w-[80%] font-bold mx-auto tracking-wide text-[1rem] lg:text-3xl xl:text-4xl leading-7 text-customColor font-sans mb-8 lg:mb-10">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          {items?.map((item: any, index: number) => (
            <div key={index}>
              <Accordion title={item.question} answer={item.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;