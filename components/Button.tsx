import React from "react";
import Link from "next/link";

const Button = () => {
  return (
    <button className="bg-customColor mt-6 max-w-[120px] md:max-w-[130px] p-2 xl:min-w-[150px] h-12 rounded-md transitio hover:text-customColor hover:bg-navcolor transition-all duration-150">
      <Link href="/projects" passHref>
        <span className="text-[14px] text-white xl:text-[16px] font-bold">
          Projekty
        </span>
      </Link>
    </button>
  );
};

export default Button;
