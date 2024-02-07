import { ServicesWebsite } from "@/data";
import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="w-full mx-auto text-center mt-12 md:mt-20  lg:mt-28 mb-12">
      <span className="px-2 py-3 text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] bg-gray-700 text-white font-bold rounded-md">
        Dlaczego Warto Skorzystać z Moich Usług?
      </span>

      <div className="mt-14 flex flex-row flex-wrap items-center justify-center gap-y-12 gap-x-16">
        {ServicesWebsite.map((service, index) => (
          <div
            className="flex items-center flex-col flex-wrap  mt-6 text-center px-2 py-6 lg:px-4 lg:py-2 max-w-[430px] min-h-[350px] lg:min-h-[420px] xl:min-h-[420px] rounded-lg bg-[#2a3245] border border-customColor"
            key={index}
          >
            <span className="text-[3rem] mt-8 md:mt-10 lg:mt-14 xl:mt-16 md:text-[3.5rem] lg:text-[4rem] pt-1 text-customColor">
              {service.icon}
            </span>
            <h1 className="mt-3 text-[1.7rem] md:text-[1.2rem] lg:text-[1.9rem] text-[#fff] font-bold font-sans">
              {service.title}
            </h1>
            <p className="max-w-[80%] mt-2 lg:mt-5 text-gray-400 leading-7 font-[400] text-[1rem] md:text-[1.2rem] lg:text-[1.3rem]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
