"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  IoIosMenu,
  IoIosClose,
  IoIosArrowForward,
  IoIosCall,
} from "react-icons/io";

const Navbar = ({ data }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`px-1 py-2 lg:py-0 bg-white ${
        isSticky ? "sticky top-0 z-50 shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <Link
          href="/"
          className="flex items-center flex-shrink-0 text-2xl text-gray-800 mr-6"
        >
          <Image
            src="/kd_logo.svg"
            alt="logo"
            width={200}
            height={200}
            className="w-20 h-[5.6rem] sm:w-24 sm:h-[5.5rem] md:w-28 md:h-[5.6rem] lg:w-32 lg:h-[5.7rem] xl:w-36 xl:h-[6rem] p-0 m-0"
          />
        </Link>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-1 mr-2 rounded-md py-1 bg-customColor text-white border-customColor focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <IoIosClose className="text-2xl" />
            ) : (
              <IoIosMenu className="text-2xl" />
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}
        >
          <div className="text-sm lg:flex-grow px-2 lg:px-0 lg:flex lg:justify-end">
            {data && (
              <ul className="lg:flex lg:items-center lg:space-x-4">
                {data.menuItems.edges.map((edge: any) => (
                  <li
                    key={edge.node.id}
                    className="border-b lg:border-b-0 border-[#9abdf0] mb-2 lg:mb-0"
                  >
                    <Link href={edge.node.path || "/"} passHref>
                      <div
                        onClick={closeMenu}
                        className="cursor-pointer text-lg text-zinc-700 font-sans lg:px-1 py-1 lg:py-0 flex items-center justify-between hover:text-[#6082e2] transition duration-300"
                      >
                        <span>{edge.node.label}</span>
                        <IoIosArrowForward className="ml-2 text-xl text-[#6082e2] font-extrabold lg:hidden" />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="mt-2 lg:mt-0 lg:ml-4 w-full lg:w-auto flex justify-center lg:justify-end">
            <Link
              href="tel:+48519668439"
              className="flex items-center bg-customColor text-white px-3 py-2 rounded-lg hover:bg-[#041a89] transition duration-300 w-auto"
            >
              <IoIosCall className="mr-2 text-2xl" />
              +48 519 668 439
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
