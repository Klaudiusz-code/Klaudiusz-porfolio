import React from "react";
import ButtonContact from "@/components/ButtonContact";
import ContactBaner from "@/components/ContactBaner";
import { BenefitsWeb, ServicesWebsite } from "@/data";

const Websites = () => {
  return (
    <section className="container mx-auto">
      <div className=" rounded-md text-center p-6">
        <h1 className="text-white font-bold text-5xl">
          Strona Internetowa
        </h1>
        <p className="text-white text-2xl mt-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="w-full mx-auto text-center mt-24">
        <span className="p-3 bg-customColor text-white font-bold rounded-md">
          Jakie Są Korzyści Ze Strony Internetowej?
        </span>

        <div className="mt-32">
          {BenefitsWeb.map((item, index) => (
            <div
              className="mt-6 p-2 flex flex-row items-center border border-gray-700 rounded-md"
              key={index}
            >
              <span className="ml-1 text-5xl text-customColor">
                {item.icon}
              </span>
              <div className="ml-4">
                <span className="text-[1rem] text-white font-bold">
                  {item.title}
                </span>{" "}
                <span className="text-customColor font-bold">-</span>{" "}
                <span className="font-thin text-[1rem] text-gray-400">
                  {item.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full mx-auto text-center mt-28 mb-12">
        <span className="p-3 bg-customColor text-white font-bold rounded-md">
          Dlaczego Warto Skorzystać z Moich Usług?
        </span>

        <div className="mt-32 flex flex-row justify-between">
          {ServicesWebsite.map((service, index) => (
            <div
              className="flex flex-col items-center text-white border border-gray-700 rounded-md w-[370px] min-h-[190px]"
              key={index}
            >
              <span className="text-[3rem] pt-3 text-customColor">
                {service.icon}
              </span>
              <h1 className="mt-2 text-[1.3rem] font-bold">{service.title}</h1>
              <p className="max-w-[80%] mt-1 text-gray-400 font-thin text-[0.8rem]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <ContactBaner />
    </section>
  );
};

export default Websites;
