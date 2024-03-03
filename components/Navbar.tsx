import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { IoIosMenu, IoIosArrowDown } from "react-icons/io";
import ButtonContact from "./ButtonContact";
import { TbWorldWww } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
type MenuItem = {
  link: string;
  name: string;
  children?: MenuItem[];
  icon?: React.ReactNode;
  desc?: string;
};

type MenuItems = MenuItem[];

type DropdownProps = {
  items: MenuItems;
};

const MenuLinks: MenuItem[] = [
  {
    link: "/",
    name: "Start",
  },
  {
    name: "Oferta",
    link: "/oferta",
    children: [
      {
        icon: <TbWorldWww />,
        link: "/websites",
        name: "Strona Internetowa",
        desc: "Stwórz szybką stronę internetową.",
      },
      {
        icon: <FiShoppingCart />,
        link: "/online-stores",
        name: "Sklep Internetowy",
        desc: "Zwiększ sprzedaż online.",
      },
    ],
  },
  {
    link: "/projects",
    name: "Realizacje",
  },
  {
    link: "/contact",
    name: "Kontakt",
  },
];

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const currentPathname = usePathname();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const scrollMenu = () => {
      if (window.scrollY >= 80) {
        setMenu(true);
      } else {
        setMenu(false);
      }
    };

    window.addEventListener("scroll", scrollMenu);

    return () => window.removeEventListener("scroll", scrollMenu);
  }, []);

  const Dropdown = ({ items }: DropdownProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const openDropdown = () => {
      setIsOpen(true);
    };

    const closeDropdown = () => {
      setIsOpen(false);
    };

    useEffect(() => {
      const handleScroll = () => {
        setIsSticky(window.scrollY >= 80);
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

    return (
      <div
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
        className={`relative ${isSticky ? "sticky" : ""} top-0 z-40`}
      >
        <button
          onClick={toggleDropdown}
          className="text-customColor flex justify-between text-lg items-center font-sans"
        >
          Oferta
          <span className="ml-1">
            <IoIosArrowDown />
          </span>
        </button>
        {isOpen && (
          <div
            className={`bg-white min-w-[330px] p-4 rounded-md transition-all duration-500 md:absolute`}
          >
            {items.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="hover:text-customColor flex flex-row  font-sans hover:bg-slate-100 p-2 rounded-lg transition-all duration-300"
              >
                <span className="text-customColor text-2xl mt-3">
                  {item.icon}
                </span>
                <div className="flex flex-col justify-center ml-2">
                  <span className="block py-1  text-base">{item.name}</span>
                  <span className="text-gColor text-sm">{item.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className={`transition-all duration-500 z-50 ${
        menu ? "fixed bg-slate-100 w-full" : "bg-transparent"
      }`}
    >
      <div
        className={`cnt flex items-center justify-between relative z-10 transition-all duration-150 ${
          menu ? "pt-2 pb-2" : "pt-6 pb-6"
        }`}
      >
        <div className="flex flex-col items-center justify-center text-2xl text-white">
          <Link href="/">
            <span className="text-customColor text-[1.4rem] font-[600] font-sans">
              Klaudiusz.
            </span>
          </Link>
        </div>
        <div className="flex items-center">
          <nav className="hidden md:flex gap-y-4 gap-x-6 flex-row items-center justify-center font-sans ">
            {MenuLinks.map((link, index) =>
              link.children && link.children.length > 0 ? (
                <Dropdown key={index} items={link.children as MenuItems} />
              ) : (
                <Link
                  className={`${
                    link.link === currentPathname && "text-[#34C0C9]"
                  } text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] text-bgColor flex flex-row items-center hover:text-bgColor`}
                  href={link.link}
                  key={index}
                >
                  <span className="font-[400] text-customColor">
                    {link.name}
                  </span>
                </Link>
              )
            )}
            <ButtonContact buttonText="Darmowa Wycena" />
          </nav>
          <div className="md:hidden">
            <button
              className="inline-flex cursor-pointer items-center justify-center p-2 text-[1.9rem] rounded-md text-customColor focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={toggleNav}
            >
              <IoIosMenu />
            </button>
            <nav
              className={`absolute top-full left-0 w-full bg-white p-4 transition-height duration-500 ${
                isNavOpen ? "block" : "hidden"
              }`}
            >
              {MenuLinks.map((link, index) =>
                link.children && link.children.length > 0 ? (
                  <Dropdown key={index} items={link.children as MenuItems} />
                ) : (
                  <Link
                    className={`${
                      link.link === currentPathname && "text-[#34C0C9]"
                    } text-[0.9rem]  text-lg text-bgColor flex flex-row items-center hover:text-bgColor`}
                    href={link.link}
                    key={index}
                  >
                    <span className="font-[400] text-customColor">
                      {link.name}
                    </span>
                  </Link>
                )
              )}
              <div className="mt-3">
                <ButtonContact buttonText="Darmowa Wycena" />
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
