import React from "react";
import CustomButton from "./CustomButton";

export default ({ data }: any) => {
  return (
    <section className="container text-center mx-auto mt-28">
      <h3 className="text-f bg-customColor px-2 py-1 rounded-lg text-white text-[1.1rem] lg:text-[1.3rem] inline-block  font-sans text-center ">

        {data.title}
      </h3>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-y-12 gap-x-16">
        {data.items.map((item: any, index: any) => (
          <div
            key={index}
            className="relative flex flex-col items-center  text-center text-customColor py-6 min-h-[250px] max-w-[350px] bg-[#fff] xl:min-h-[450px] rounded-lg shadow-lg  shadow-slate-50 hover:shadow-gColor group"
          >
            <div className="absolute -top-8 bg-customColor h-16 w-20 flex items-center justify-center  rounded-lg group-hover:bg-bgColor transition-all duration-300">
              <span className="text-white font-sans font-[600] text-[1.5rem] group-hover:text-customColor">
                1
              </span>
            </div>
            <div>
              <h2 className="mt-8 text-bgColor font-sans text-[2rem] font-[600]">
                {item.title}
              </h2>
              <p className="text-[#9b9b9b] text-[0.875rem] lg:text-[1.4rem] xl:text-[1.1rem] font-sans mt-2 mb-4 max-w-[90%] mx-auto leading-8">
                {item.description}
              </p>
              <div className="mb-6 lg:mb-3">
                <CustomButton
                  bgColor="#0077cc"
                  textColor="#fff"
                  text="Darmowa Wycena Projektu"
                  link="/contact"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
