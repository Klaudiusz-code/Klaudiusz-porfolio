import { ServicesWebsite } from "@/data";
import React from "react";

const WhyChooseUs = () => {
  return (
    <div className="w-full mx-auto text-center mt-12 md:mt-20  lg:mt-28 mb-12">
      <span className="px-2 py-3 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] bg-gray-700 text-white font-bold rounded-md">
        Dlaczego Warto Skorzystać z Moich Usług?
      </span>

      <div className="w-full border border-customColor bg-gray-800 rounded-lg  mx-auto font-sans mt-16 md:mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-y-4 md:gap-y-0 place-items-center place-content-center">
        {" "}
        {ServicesWebsite.map((service, index) => (
          <div
            className="flex flex-col items-center justify-center text-white rounded-md max-w-[370px] min-h-[190px]"
            key={index}
          >
            <span className="text-[2rem] md:text-[2.5rem] lg:text-[3rem] pt-1  text-customColor">
              {service.icon}
            </span>
            <h1 className="mt-1 text-[1rem] md:txt-[1.1rem] lg:text-[1.3rem] font-bold font-sans">
              {service.title}
            </h1>
            <p className="max-w-[80%] mt-1 text-gray-400 font-[600] text-[0.7rem] lg:text-[0.8rem]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
