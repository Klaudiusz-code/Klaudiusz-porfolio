"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  title: string;
  description: string;
  items: FaqItem[];
};

const FaqItem = ({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="w-full border-b border-slate-100 last:border-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between py-8 text-left group"
      >
        <div className="flex-1 pr-12">
          <div className="flex items-center gap-4 mb-3 opacity-50 group-hover:opacity-100 transition-opacity">
             <span className="font-mono text-xs font-bold text-slate-400 uppercase">0{index + 1}</span>
             <div className="h-px w-12 bg-slate-300"></div>
          </div>

          <h3 className={`text-2xl md:text-4xl font-bold leading-tight tracking-tight transition-colors duration-300 ${isOpen ? "text-[#6e92f2]" : "text-slate-900"}`}>
            {question}
          </h3>
        </div>

        <div className="flex-shrink-0 pt-2 pl-4 border-l border-slate-100 group-hover:border-[#6e92f2]/20 transition-colors">
          <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#6e92f2] border-[#6e92f2] rotate-90" : "bg-white border-slate-200 text-slate-400 group-hover:border-[#6e92f2]"}`}>
            {isOpen ? <FaMinus className="text-white" /> : <FaPlus className="text-sm" />}
          </div>
        </div>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pl-0 md:pl-4 pb-12 pr-8">
          <div className="max-w-4xl">
             <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-normal">
              {answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const FaqSection = ({ title, description, items }: FaqSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        <div className="mb-20 text-left">
         <span className="inline-block py-1 px-3 rounded bg-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            Najczęsciej zadawane
          </span>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.95] mb-8">
            {title}
          </h2>
          
          <p className="text-lg md:text-xl text-slate-500 font-light max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        <div className="border-t border-slate-200">
          {items.map((item, index) => (
            <FaqItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;