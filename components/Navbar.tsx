"use client";
import React, { useEffect, useState } from "react";
import { MenuLinks } from "@/data";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [isRouting, setisRouting] = useState(false);
  const path = usePathname();
  const [prevPath, setPrevPath] = useState<string | null>("/");

  useEffect(() => {
    if (prevPath !== path) {
      setisRouting(true);
    }
  }, [path, prevPath]);

  useEffect(() => {
    if (isRouting) {
      setPrevPath(path);
      const timeout = setTimeout(() => {
        setisRouting(false);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [isRouting]);

  return (
    <nav className="container mx-auto flex items-center justify-between pt-6 pb-9 relative z-10">
      <h1 className="text-2xl text-white">
        Klaud<span className="text-customColor text-2xl">iusz</span>.
      </h1>
      <div className="flex justify-center items-center border border-customColor w-[170px] h-10 rounded-sm">
        <span className="text-zinc-300 font-medium text-[0.7rem] tracking-wide">
          adamaszek404gmail.com
        </span>
      </div>
      <div className="flex gap-y-5 xl:flex-col items-center xl:justify-center justify-between w-full bg-customColor lg:bg-transparent fixed bottom-0 md:right-0 lg:right-0 rounded-none lg:w-12 xl:w-12 md:px-40 xl:px-0 h-[80px] xl:h-max xl:right-14 xl:top-1/4 py-8 lg:rounded-2xl">
        {isRouting}
        {MenuLinks.map((link, index) => (
          <div key={index} className="group relative">
            <Link href={link.link}>
              <div
                className={`text-[1.1rem] text-white  bg-whiteOp hover:bg-customColor w-14 h-14 flex items-center justify-center rounded-full transition-all group-hover:opacity-100 ${
                  path === link.link ? "bg-[#34C0C3]" : ""
                }`}
              >
                {link.icon}
              </div>
            </Link>
            <div className="absolute pr-4 right-12 bottom-2 hidden xl:group-hover:flex">
              <div className="bg-zinc-100 transition-all mt-2 realtive flex items-center p-[8px] rounded-sm">
                <div className="text-[15px] font-medium">{link.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
