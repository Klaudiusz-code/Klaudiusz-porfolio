'use client'
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IoIosMenu, IoIosClose, IoIosArrowForward, IoIosCall } from "react-icons/io";

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
    <nav className={`bg-white p-6 ${isSticky ? "sticky top-0 z-50 shadow-lg" : ""}`}>
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-2xl text-gray-800 mr-6">
          siema
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center py-2 rounded text-customColor border-customColor hover:text-customColor focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <IoIosClose className="text-4xl" />
            ) : (
              <IoIosMenu className="text-3xl" />
            )}
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "blocka " : "hidden"
          } w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}
        >
          <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
            {data && (
              <ul className="lg:flex lg:items-center lg:space-x-4">
                {data.menuItems.edges.map((edge: any) => (
                  <li
                    key={edge.node.id}
                    className="border-b lg:border-b-0 border-[#9abdf0] mb-4 lg:mb-0"
                  >
                    <Link href={edge.node.path || "/"} passHref>
                      <div
                        onClick={closeMenu}
                        className="cursor-pointer text-lg text-zinc-700 font-sans lg:px-1 py-2 lg:py-1 flex items-center hover:text-[#6082e2] transition duration-300 justify-between"
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
          <div className="mt-4 lg:mt-0 lg:ml-4">
            <Link
              href="tel:+48519668439"
              className="flex items-center bg-customColor text-white px-4 py-2 rounded-lg hover:bg-[#041a89] transition duration-300"
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
