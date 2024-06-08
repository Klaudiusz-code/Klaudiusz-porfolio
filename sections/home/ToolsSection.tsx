'use client';

import React from "react";

type ToolsSectionProps = {
  title: string;
  description: string;
  charts: {
    text: string;
    width: number;
  }[];
};

const ToolsSection = ({ title, description, charts = [] }: ToolsSectionProps) => {
  return (
    <div className="cnt mt-16 mb-4 text-center mx-auto">
      <h2 className="text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] font-thin text-[#10152e] mt-12 tracking-wide">
        <span className="text-customColor font-bold">Moje </span>
        {title}
      </h2>
      <p className="max-w-full md:max-w-[70%] lg:max-w-[60%] mx-auto text-[#4d4c4c] text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-[400] leading-7 tracking-wide mt-6 font-sans">
        {description}
      </p>{" "}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 gap-x-24 justify-center">
        {charts?.map((chart: any, index: any) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex w-full items-center justify-between mb-1">
              <h2 className="text-[1rem] font-[500] text-bgColor">{chart.text}</h2>
              <span className="text-bgColor text-sm font-sans font-[500]">
                {chart.width}%
              </span>
            </div>
            <div className="relative w-full h-[1.3rem] bg-[#f3f3f3] rounded-md overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-customColor"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
