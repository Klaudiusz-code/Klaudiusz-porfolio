'use client'
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
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-[#4f7cf7] text-3xl lg:text-4xl font-bold uppercase tracking-wide mb-2">
            {title}
          </h3>
          <p className="text-lg text-gray-800">{description}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
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
