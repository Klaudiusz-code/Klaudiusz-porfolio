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
  const [currentPathname, setCurrentPathname] = useState(router.pathname);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      setCurrentPathname(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <nav className="container mx-auto flex items-center justify-between pt-6 pb-9 relative z-10">
      <div className="flex flex-col items-center justify-center text-2xl text-white">
        <a href="/">
          <Image src={Logo} width={110} height={110} alt="Logo"></Image>
        </a>
      </div>
      <ButtonContact />
      <div className="flex gap-y-4 xl:flex-col items-center justify-center gap-x-5 xl:gap-x-0  xl:justify-between w-full  lg:bg-transparent fixed bottom-0 md:right-0 right-0  xl:w-12 md:px-40 xl:px-0 h-[80px] xl:h-max xl:right-14 xl:top-1/4 py-8 lg:rounded-2xl">
        {MenuLinks.map((link, index) => {
          return (
            <Link
              className={`${
                link.link === currentPathname && "bg-teal-400"
              } text-[0.8rem] lg:text-[1rem] xl:text-[1.1rem] text-white  hover:bg-customColor w-11 h-11 lg:w-14 lg:h-14 flex items-center justify-center rounded-full transition-all group-hover:opacity-1000`}
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
