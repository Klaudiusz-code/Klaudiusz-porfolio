import { ServicesWebsite } from "@/data";
import React from "react";

const WhyChooseUs = () => {
  return (
      <div className="w-full mx-auto text-center mt-28 mb-12">
        <span className="p-3 bg-gray-700 text-white font-bold rounded-md">
          Dlaczego Warto Skorzystać z Moich Usług?
        </span>

        <div className="w-full border border-customColor bg-gray-800 rounded-lg  mx-auto font-sans mt-24 lg:mt-32 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center gap-y-4 md:gap-y-0 place-items-center place-content-center">
          {" "}
          {ServicesWebsite.map((service, index) => (
            <div
              className="flex flex-col items-center text-white rounded-md w-[370px] min-h-[190px]"
              key={index}
            >
              <span className="text-[3rem] pt-3 text-customColor">
                {service.icon}
              </span>
              <h1 className="mt-2 text-[1.3rem] font-bold font-sans">
                {service.title}
              </h1>
              <p className="max-w-[80%] mt-1 text-gray-400 font-[600] text-[0.8rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
  );
};

export default WhyChooseUs;