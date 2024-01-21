"use client";
import React, { useEffect, useState } from "react";
import { MenuLinks } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import ButtonContact from "./ButtonContact";
import Image from "next/image";
import Logo from "@/public/logo2.png";

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  return (
    <nav className="container mx-auto flex items-center justify-between pt-6 pb-9 relative z-10">
      <div className="flex flex-col items-center justify-center text-2xl text-white">
        <a href="/">
          <Image src={Logo} width={110} height={110} alt="Logo"></Image>
        </a>
      </div>
      <ButtonContact />
      <div className="flex gap-y-5 xl:flex-col items-center xl:justify-center justify-between w-full bg-customColor lg:bg-transparent fixed bottom-0 md:right-0 lg:right-0 rounded-none lg:w-12 xl:w-12 md:px-40 xl:px-0 h-[80px] xl:h-max xl:right-14 xl:top-1/4 py-8 lg:rounded-2xl">
        {MenuLinks.map((link, index) => {
          return (
            <Link
              className={`${
                link.link === pathname && "bg-teal-500"
              } text-[1.1rem] text-white  bg-whiteOp hover:bg-customColor w-14 h-14 flex items-center justify-center rounded-full transition-all group-hover:opacity-1000`}
              href={link.link}
              key={index}
            >
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
export default Navbar;
