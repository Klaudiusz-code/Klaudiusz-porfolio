import React from "react";
import ButtonContact from "@/components/ButtonContact";
import ContactBaner from "@/components/ContactBaner";
import { BenefitsWeb, ServicesWebsite } from "@/data";
import WhyChooseUs from "@/components/WhyChooseUs";

const Websites = () => {
  return (
    <section className="container mx-auto">
      <div className=" rounded-md text-center p-6">
        <h1 className="text-white font-bold text-6xl mb-3 font-archivo">Strona Internetowa</h1>
        <p className="text-white text-[1.3rem] mt-4">
          Tworzę szybkie i skuteczne strony www.
        </p>
      </div>

      <div className="w-full mx-auto text-center mt-24">
        <span className="p-3 bg-gray-700 text-white font-bold rounded-md">
          Jakie Są Korzyści Ze Strony Internetowej?
        </span>

        <div className="mt-32 bg-gray-800 border border-customColor rounded-lg grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 place-items-center place-content-center font-sans">
          {BenefitsWeb.map((item, index) => (
            <div
              className="w-[370px] min-h-[160px] mt-6 p-2 flex flex-row text-left rounded-md"
              key={index}
            >
              <span className=" text-5xl text-customColor">{item.icon}</span>
              <div className="ml-1 lg:ml-4">
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
      <WhyChooseUs />
      <ContactBaner />
    </section>
  );
};

export default Websites;
