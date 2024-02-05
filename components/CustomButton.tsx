import Link from "next/link";
import React from "react";

interface CustomButtonProps {
  text: string;
  link: string;
  bgColor: string
  textColor: string
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, link, bgColor, textColor }) => {
  return (
    <Link href={link} passHref>
      <button
      style={{background: bgColor, color: textColor}}
      className="mt-2 p-3 lg:p-5 h-13 rounded-3xl hover:text-customColor hover:bg-slate-200 transition-all duration-150">
        <span className="text-[0.8rem] font-sans md:text-[0.9rem] lg:text-[1.2rem] xl:text-[16px] font-bold">
          {text}
        </span>
      </button>
    </Link>
  );
};

export default CustomButton;
