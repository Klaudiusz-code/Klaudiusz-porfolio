import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import CustomButton from "./CustomButton";
const FreeProjectEstimation = () => {
  return (
    <div className="w-full flex flex-col items-center bg-customColor  min-h-[250px] p-3 mt-20 mb-14 font-sans">
      <h2 className="text-[1.6rem] text-[#ffffff] font-[600] mt-8 text-center">
        Potrzebujesz Wyceny Projektu? Zrobię to za darmo!
      </h2>
      <p className="text-[1.1rem] text-[#dadada] mt-6">
        Skontaktuj się ze mną, chętnie pomogę!
      </p>
      <div className="flex flex-row items-center gap-x-3 md:gap-x-5 lg:gap-x-8 mt-6 mb-5">
        <Link
          href="tel:+48519668439"
          className=" flex flex-row items-center mt-2 p-3 lg:p-4 h-13 bg-white rounded-3xl transition-all duration-150"
        >
          <span className="text-[0.8rem] text-[#0077cc] font-sans md:text-[0.9rem] lg:text-[1.2rem] xl:text-[16px] font-bold">
            <FaPhoneAlt />
          </span>
          <span className="text-[0.8rem] text-[#0077cc] ml-2 font-sans md:text-[0.9rem] lg:text-[1.2rem] xl:text-[16px] font-bold">
            519-668-439
          </span>
        </Link>
        <CustomButton
          bgColor="#fff"
          textColor="#0077cc"
          text="Napisz do mnie!"
          link="/contact"
        />
      </div>
    </div>
  );
};

export default FreeProjectEstimation;
