import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";
type CustomButtonProps = {
  text: string;
  link: string;
  bgColor: string;
  textColor: string;
};

const CustomButton = (props: CustomButtonProps) => {
  const { text, link, bgColor, textColor } = props;

  return (
    <Link href={link} passHref>
      <button
        style={{color: textColor }}
        className="mt-2 px-4 py-4 lg:px-6 lg:py-4 h-13 rounded-lg bg-gradient-to-br from-blue-400 to-blue-600 hover:text-customColor hover:scale-105 transition-all duration-200 relative"
      >
        <span className="flex items-center justify-center">
          <span className="text-[0.80rem] md:[0.85rem] xl:text-[1rem] font-bold mr-2">
            {text}
          </span>
          <GoArrowUpRight className="text-lg sm:text-lg md:text-xl" />{" "}
        </span>
      </button>
    </Link>
  );
};

export default CustomButton;
