import React from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";

const ButtonProject = () => {
  return (
    <Link href="/projects" passHref>
      <button className="border  border-customColor mt-8 max-w-[120px] md:max-w-[130px] py-2 px-6  xl:min-w-[150px] h-12 rounded-md transitio hover:text-customColor hover:bg-navcolor transition-all duration-150">
        <div className="flex items-center justify-center text-[14px] text-white xl:text-[16px] font-bold">
          Projekty
          <span className="ml-2">
            <GoArrowUpRight />
          </span>
        </div>
      </button>
    </Link>
  );
};

export default ButtonProject;
