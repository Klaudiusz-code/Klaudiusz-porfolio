import React from "react";
import { MyServices } from "@/data";
const ServicesItems = () => {
  return (
    <section className="cnt mt-20">
      <div className="max-w-[80%] mx-auto flex flex-wrap justify-center  gap-12  ">
        {MyServices.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-customColor rounded-lg min-h-[250px] max-w-[300px] shadow-lg transition-all duration-300 shadow-[#e0e0e0] hover:shadow-gColor "
          >
            <span className="text-[2.4rem] pt-3 mt-4">{service.icon}</span>
            <h3 className="mt-2 text-[26px] text-[#4d4c4c] font-[400]">
              {service.name}
            </h3>
            <p className="max-w-[80%] mt-1 text-gColor font-light text-[0.9rem]">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesItems;
