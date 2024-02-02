"use client";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { MenuLinks } from "@/data";
import Link from "next/link";
import ButtonContact from "./ButtonContact";
import Image from "next/image";
import Logo from "@/public/logo2.png";

const Navbar = () => {
  const currentPathname = usePathname();

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between pt-6 pb-9 relative z-10">
        <div className="flex flex-col items-center justify-center text-2xl text-white">
          <Link href="/">
            <Image src={Logo} width={110} height={110} alt="Logo"></Image>
          </Link>
        </div>
        <div className="mr-2 lg:mr-0">
          <ButtonContact buttonText="Darmowa Wycena" />
        </div>
        <div className="flex gap-y-4 bg-gray-700 xl:flex-col items-center justify-center h-[12px] md:h-13 gap-x-5 xl:gap-x-0  xl:justify-between w-full  fixed bottom-0 md:right-0 right-0  xl:w-12 md:px-40 xl:px-8  xl:h-max xl:right-14 xl:top-1/4 py-5 lg:rounded-[1.8rem]">
          {MenuLinks.map((link, index) => {
            return (
              <Link
                className={`${
                  link.link === currentPathname && "bg-[#34C0C9]"
                } text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] text-white hover:bg-customColor w-9 h-9 lg:w-12 lg:h-12 flex items-center justify-center rounded-full transition-all group-hover:opacity-1000`}
                href={link.link}
                key={index}
              >
                <div>{link.icon}</div>
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
