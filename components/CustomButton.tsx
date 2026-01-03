import Link from "next/link";
import React from "react";
import { GoArrowUpRight } from "react-icons/go";

type CustomButtonProps = {
  text: string;
  link: string;
  bgColor?: string; // Opcjonalny, jeśli nie podasz, domyślny będzie niebieski
  textColor?: string; // Opcjonalny, domyślnie biały
  fullWidth?: boolean; // Opcjonalny, czy na całą szerokość
  extraClass?: string; // Dodatkowe klasy Tailwind
};

const CustomButton = ({
  text,
  link,
  bgColor = "bg-[#6e92f2]",
  textColor = "text-white",
  fullWidth = false,
  extraClass = "",
}: CustomButtonProps) => {
  return (
    <Link href={link} passHref legacyBehavior={false}>
      <button
        className={`
          relative inline-flex items-center justify-center gap-2
          px-8 py-4 lg:px-10 lg:py-5 
          rounded-lg font-bold text-sm md:text-base lg:text-lg
          transition-all duration-300
          active:scale-95 hover:scale-[1.02]
          shadow-[0_4px_14px_rgba(110,146,242,0.4)] hover:shadow-[0_6px_20px_rgba(110,146,242,0.6)]
          ${bgColor} ${textColor} ${fullWidth ? "w-full" : ""} ${extraClass}
        `}
      >
        <span>{text}</span>
        
        {/* Strzałka z animacją przesunięcia przy hover */}
        <GoArrowUpRight 
          className="text-lg md:text-xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
        />
      </button>
    </Link>
  );
};

export default CustomButton;