import React, { useState } from "react";
import Link from "next/link";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";

const Navbar = ({ menus }: any) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const headerMenu = menus ? menus.find((menu: any) => menu.slug === "header") : null;

  return (
    <nav className="bg-[#fff] p-6">
      <div className="cnt mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-2xl text-gray-800 mr-6">
          siema
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleNav}
            className="flex items-center px-3 py-2 rounded text-customColor border-customColor hover:text-customColor"
          >
            <IoIosMenu className="text-3xl" />
          </button>
        </div>
        <div className={`${isNavOpen ? "block" : "hidden"} w-full lg:flex lg:items-center lg:w-auto lg:justify-end`}>
          <div className="text-sm lg:flex-grow lg:flex lg:justify-end">
            {headerMenu && (
              <ul className="lg:flex lg:items-center lg:space-x-4">
                {headerMenu.menuItems.edges.map((edge: any, index: any) => {
                  console.error('e', edge);

                  return (
                    <li
                      key={edge.node.id}
                      className={`border-b lg:border-b-0 border-customColor mb-4 lg:mb-0 ${index === headerMenu.menuItems.edges.length - 1 ? 'cta' : ''}`}
                    >
                      <Link href={edge.node.path || '/'}>
                        <span className={`text-lg text-[#2d4b4b] font-source lg:px-1 py-2 lg:py-1 flex items-center ${index === headerMenu.menuItems.edges.length - 1 ? 'cta-inner' : 'justify-between'}`}>
                          <span>{edge.node.label}</span>
                          {isNavOpen && (
                            <IoIosArrowForward className="ml-2 text-xl text-[#6082e2] font-extrabold" />
                          )}
                        </span>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
