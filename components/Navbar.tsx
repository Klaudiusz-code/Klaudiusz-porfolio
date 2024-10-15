"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoIosArrowForward, IoIosCall } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

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
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full top-0 z-50 px-4 py-3 lg:py-5 transition-shadow duration-300 ${
        isSticky ? "shadow-lg bg-white" : "shadow-none"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <Link
          href="/"
          className="flex items-center flex-shrink-0 text-2xl text-gray-800 mr-6"
        >
          <Image
            src="/hello.svg"
            alt="logo"
            width={30}
            height={30}
            className="h-auto py-1 lg:py-2 ml-2 w-[54px] lg:w-[60px]"
          />
        </Link>

        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 rounded-md bg-customColor text-white border-none focus:outline-none"
            onClick={toggleMenu}
          >
            <IoIosMenu className="text-3xl" />
          </button>
        </div>

        <div
          className={`fixed inset-0 bg-black bg-opacity-60 z-40 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={closeMenu}
        ></div>

        <div
          className={`fixed top-0 right-0 w-64 bg-white h-full z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
              <h2 className="text-lg font-bold text-gray-600">Menu</h2>
              <button
                className="text-gray-600 hover:text-gray-800"
                onClick={closeMenu}
              >
                <IoCloseOutline className="text-3xl text-customColor" />
              </button>
            </div>
            <div className="flex-grow">
              <ul className="mt-16 space-y-6 px-4">
                {data &&
                  data.menuItems.edges.map((edge: any) => (
                    <li
                      key={edge.node.id}
                      className="border-b border-gray-300 pb-4 transition-colors duration-300 group hover:border-[#4d69c5]"
                    >
                      <Link href={edge.node.path || "/"} passHref>
                        <div
                          onClick={closeMenu}
                          className="cursor-pointer font-medium text-lg text-gray-600 flex items-center justify-between hover:text-[#4d69c5] transition-colors duration-300"
                        >
                          <span className="group-hover:text-[#4d69c5]">
                            {edge.node.label}
                          </span>
                          <IoIosArrowForward className="ml-2 text-xl text-[#4d69c5] group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
            <div className="flex-shrink-0 p-4">
              <Link
                href="tel:+48519668439"
                className="flex items-center justify-center bg-[#6e92f2] text-white px-4 py-2 rounded-sm shadow-sm shadow-[#6e92f2] transition-transform transform hover:scale-105 duration-300"
              >
                <IoIosCall className="mr-2 text-2xl" />
                <span className="text-lg font-semibold">+48 519 668 439</span>
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:items-center lg:space-x-4 lg:ml-auto">
          {data && (
            <ul className="flex items-center space-x-4">
              {data.menuItems.edges.map((edge: any) => (
                <li key={edge.node.id} className="relative group">
                  <Link
                    href={edge.node.path || "/"}
                    className="text-lg text-gray-600 font-medium font-sans px-4 py-2 rounded-md transition duration-300 uppercase tracking-wide"
                  >
                    {edge.node.label}
                    <span className="absolute bottom-[-6px] left-1/2 w-0 h-[2px] bg-[#6e92f2] rounded-full transition-all duration-500 ease-in-out transform -translate-x-1/2 group-hover:w-2/3"></span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
          <Link
            href="tel:+48519668439"
            className="flex items-center justify-center bg-[#6e92f2] text-white px-4 py-2 rounded-sm shadow-sm shadow-[#6e92f2] transition-transform transform hover:scale-105 duration-300"
          >
            <IoIosCall className="mr-2 text-2xl" />
            <span className="text-lg font-semibold">+48 519 668 439</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
