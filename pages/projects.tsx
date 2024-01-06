"use client";
import { ProjectsData } from "@/data";
import React from "react";
import { FaEye, FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full text-center">
        <h1 className="text-[4rem] text-white font-bold">
          <span className="text-customColor">MY</span> PROJECTS
        </h1>
        <div className="grid grid-cols-1 gap-5 mt-14 w-full">
          {ProjectsData.map((project, index) => (
            <div
              className="flex flex-col lg:flex-row items-center mb-4"
              key={index}
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
                  <span className="bg-customColor p-1 text-white rounded-md">
                    {project.service.join(", ")}
                  </span>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
