"use client";
import React from "react";
import { Learn, MySkills } from "@/data";
import { MyServices } from "@/data";
import { motion } from "framer-motion";

const services = () => {
  return (
    <div className="container mx-auto h-screen flex flex-wrap justify-center">
      <div className="w-full mx-auto text-center">
        <h1 className="text-[4rem] text-white font-bold">
          <span className="text-customColor">Moje</span> Usługi
        </h1>
        <div className="flex flex-wrap justify-center mt-14 gap-x-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ ease: "easeInOut", duration: 1.6 }}
            className="flex flex-col border border-gray-700 hover:border-customColor duration-150 rounded-lg w-[361px] text-left min-h-[600px]"
          >
            <div className="ml-10 mt-8">
              <div>
                <h1 className="text-[20px] font-bold text-white">
                  <span className="text-customColor">CO</span> POTRAFIE?
                </h1>
                <ul className="list-none text-white mt-4">
                  {MySkills.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center mb-2 font-medium text-[15px]"
                    >
                      <span className="mr-2 font-extrabold">{skill.icon}</span>
                      <span className="text-gColor font-thin">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-[20px] font-bold text-white">
                  <span className="text-customColor">CZEGO</span> SIĘ UCZE?
                </h1>
                <ul className="list-none text-white mt-4">
                  {Learn.map((skill, index) => (
                    <li
                      key={index}
                      className="flex items-center mb-2 font-medium text-[15px]"
                    >
                      <span className="mr-2 font-extralight">{skill.icon}</span>
                      <span className="text-gColor font-thin">
                        {skill.name}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="flex flex-col items-center gap-y-6"
          >
            {MyServices.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white border border-gray-700 rounded-md w-[361px] min-h-[183px] transition-all duration-200 hover:bg-customColor"
              >
                <span className="text-[2.4rem] pt-3">{service.icon}</span>
                <h1 className="mt-2 text-[26px] font-bold">{service.name}</h1>
                <p className="max-w-[80%] mt-1 text-white font-light text-[0.9rem]">
                  {service.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default services;
