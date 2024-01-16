import React from "react";
import { motion } from "framer-motion";
import { FaEye, FaGithub } from "react-icons/fa";
import Head from "next/head";
import { ProjectsData } from "@/data";

const Projects = () => {
  return (
    <>
      <Head>
        <title>
          Projekty - Strony Internetowe, Sklepy Internetowe, SEO | Lubycza
          Królewska, Tomaszów Lubelski, Zamość, Lublin | Klaudiusz Adamaszek -
          Web Developer
        </title>
      </Head>
      <div className="container mx-auto">
        <div className="w-full mt-14">
          <h1 className="text-[0.8rem] lg:text-[1.3rem] text-white font-bold">
            <span className="text-customColor">/</span> PROJEKTY
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 1000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
            className="grid grid-cols-1 gap-5 mt-14 w-full"
          >
            {ProjectsData.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 1000 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.6, delay: index * 0.2 }}
                className="flex flex-col lg:flex-row items-center mb-4"
              >
                <div className="border border-gray-700 rounded-sm w-full lg:max-w-[400px] min-h-[380px] flex items-center justify-center">
                  <div className="h-[10rem] w-[10rem] relative">
                    <div className="absolute h-[0.03rem] w-full bg-gray-700 transform rotate-45 origin-center"></div>
                    <div className="absolute h-[0.03rem] w-full bg-gray-700 transform -rotate-45 origin-center"></div>
                  </div>
                </div>

                <div className="flex flex-col items-start ml-2 lg:ml-4 xl:ml-24 mt-4 xl:mt-6">
                  <h1 className="text-3xl text-white font-bold mb-1">
                    {project.name}
                  </h1>
                  <p className="text-left mt-2 text-gColor max-w-[60%]">
                    {project.tit}
                  </p>
                  <div className="flex flex-row mt-6 gap-2">
                    {project.service.map((items) => (
                      <span className="bg-customColor p-1 text-white rounded-md">
                        {items}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-row gap-5 mt-12">
                    <div className="flex items-center justify-center bg-customColor text-white text-xl py-2 w-[5rem] h-[2.5rem] rounded-md">
                      <FaEye />
                    </div>
                    <div className="flex items-center justify-center bg-customColor text-white text-xl py-2 w-[5rem] h-[2.5rem] rounded-md">
                      <FaGithub />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Projects;
