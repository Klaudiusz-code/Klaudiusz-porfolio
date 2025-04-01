"use client";

import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: string;
  description: string;
  items: FaqItem[];
};

const AccordionItem = ({ question, answer }: FaqItem) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-6 py-4 bg-white rounded-lg shadow-md transition-all duration-300 focus:outline-none hover:bg-gray-50"
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <FaChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          } text-gray-600`}
        />
      </button>
      <div
        className={`px-6 pt-2 overflow-hidden transition-all duration-500 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-gray-700 text-base">{answer}</p>
      </div>
    </div>
  );
};

const FaqSection = ({ title, description, items }: FaqSectionProps) => {
  return (
    <section className="py-20 bg-white border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900">{title}</h2>
          <p className="mt-4 text-lg text-gray-700">{description}</p>
        </div>
        <div className="space-y-6">
          {items.map((item, index) => (
            <AccordionItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
