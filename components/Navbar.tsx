'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";

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
      if (window.scrollY > 300) {
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
      className={`bg-white p-6 ${
        isSticky ? "sticky top-0 z-50 shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-2xl text-gray-800 mr-6">
          Siema
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 rounded text-customColor border-customColor hover:text-customColor"
            onClick={toggleMenu}
          >
            <IoIosMenu className="text-3xl" />
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}
        >
          <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
            {data && (
              <ul className="lg:flex lg:items-center lg:space-x-4">
                {data.menuItems.edges.map((edge: any, index: any) => (
                  <li
                    key={edge.node.id}
                    className={`border-b lg:border-b-0 border-[#9abdf0] mb-4 lg:mb-0 ${
                      index === data.menuItems.edges.length - 1 ? "cta" : ""
                    }`}
                  >
                    <Link href={edge.node.path || "/"} passHref>
                      <div
                        onClick={closeMenu}
                        className={`cursor-pointer text-lg text-[#2d4b4b] font-source lg:px-1 py-2 lg:py-1 flex items-center hover:text-[#6082e2] ${
                          index === data.menuItems.edges.length - 1
                            ? "cta-inner"
                            : "justify-between"
                        }`}
                      >
                        <span>{edge.node.label}</span>
                        {index !== data.menuItems.edges.length - 1 && (
                          <IoIosArrowForward className="ml-2 text-xl text-[#6082e2] font-extrabold" />
                        )}
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
