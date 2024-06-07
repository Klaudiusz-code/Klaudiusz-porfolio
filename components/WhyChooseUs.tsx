import React from "react";

export default ({ data }: any) => {
  return (
    <section className="cnt w-full mx-auto text-center mt-16 md:mt-20  lg:mt-28 mb-12">
      <span className="px-2 py-3 text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] font-thin text-[#10152e] mt-12 tracking-wide">
        {data.title}
      </span>

      <div className="mt-14 flex flex-row flex-wrap  justify-center gap-x-8 gap-y-4 ">
        {data.boxs.map((service: any, index: any) => (
          <div
            className="flex items-center flex-col   mt-6 text-center px-2 py-2   rounded-lg min-h-[300px] max-w-[350px] shadow-lg transition-all duration-300 shadow-[#e0e0e0] hover:shadow-gColor"
            key={index}
          >
            <span className="text-[3rem] mt-2 lg:text-[3rem] pt-1 text-customColor">
              1
            </span>
            <h1 className="mt-3 text-[1.7rem] md:text-[1.2rem] lg:text-[1.4rem] text-[#000] font-bold font-sans">
              {service.tile}
            </h1>
            <p className="max-w-[80%] mt-2 lg:mt-5 text-gray-400 leading-7 font-[400] text-[0.8rem] md:text-[1rem] lg:text-[1.1rem]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
