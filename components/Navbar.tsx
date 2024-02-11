import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { MenuLinks } from "@/data";
import Link from "next/link";
import ButtonContact from "./ButtonContact";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const currentPathname = usePathname();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <>
      <section className="cnt flex items-center justify-between pt-6 pb-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-2xl text-white">
          <Link href="/">
            <span className="text-customColor text-[1.4rem] font-[600] font-sans">
              Klaudiusz.
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="hidden md:flex gap-y-4 gap-x-9 flex-row items-center justify-center font-sans">
            {MenuLinks.map((link, index) => (
              <Link
                className={`${
                  link.link === currentPathname && "text-[#34C0C9]"
                } text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] text-bgColor hover:text-customColor`}
                href={link.link}
                key={index}
              >
                <span className="font-[400] text-customColor">{link.name}</span>
              </Link>
            ))}
            <ButtonContact buttonText="Darmowa Wycena" />
          </nav>
          <div className="md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 text-[1.9rem] rounded-md text-customColor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNav}
            >
              <IoIosMenu />
            </button>
            {isNavOpen && (
              <nav className="absolute top-full left-0 w-full  bg-white p-4">
                {MenuLinks.map((link, index) => (
                  <Link
                    className={`block py-2 text-center ${
                      link.link === currentPathname && "text-[#0077cc]"
                    } hover:text-customColor`}
                    href={link.link}
                    key={index}
                    onClick={closeNav}
                  >
                    <span className="text-customColor font-[400]">
                      {link.name}
                    </span>
                  </Link>
                ))}
                <div className="w-full mx-auto block text-center">
                  <ButtonContact buttonText="Darmowa Wycena" />
                </div>
              </nav>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
