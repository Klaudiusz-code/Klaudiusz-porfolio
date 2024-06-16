
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
    <div className="cnt mt-20 mb-4 text-center mx-auto">
      <h2 className="text-lg font-[600] font-mono text-[#4f7cf7] mt-12 tracking-wide">
        {title}
      </h2>
      <p className="max-w-full md:max-w-[70%] lg:max-w-[60%] mx-auto text-[1rem] lg:text-3xl xl:text-4xl leading-7 text-customColor tracking-wide mt-6 font-source font-bold">
        {description}
      </p>
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 gap-x-24 justify-center">
        {charts?.map((chart: any, index: any) => (
          <div key={index} className="flex flex-col items-center">
            <div className="flex w-full items-center justify-between mb-1">
              <h2 className="text-[1rem] font-[500] text-bgColor">{chart.text}</h2>
              <span className="text-[#4f7cf7] text-sm font-mono font-[600]">
                {chart.width}%
              </span>
            </div>
            <div className="relative w-full h-[1rem] bg-[#f3f3f3] rounded overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-[#4f7cf7]"
                style={{ width: `${chart.width}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToolsSection;
