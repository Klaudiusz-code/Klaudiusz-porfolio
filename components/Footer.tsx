import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";

const ContactIcon = [
  {
    icon: <IoMdMail />,
    desc: "adamaszek404@gmail.com",
    link: "mailto:adamaszek404@gmail.com",
  },
  {
    icon: <FaPhone />,
    desc: "519-668-439",
    link: "tel:+48519668439",
  },
];

const MenuLinks = [
  {
    link: "/",
    name: "Start",
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

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a1b20] py-4 font-sans">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left p-2">
        <div className="flex flex-col lg:w-1/3">
          <h3 className="text-3xl lg:text-4xl text-gray-300 font-semibold mb-2">
            Potrzebujesz pomocy w projekcie?
          </h3>
          <p className="text-gray-200 tracking-wide text-md mb-4 mt-2">
            Jesteś w dobrym miejscu! Jako freelancer zajmuję się tworzeniem
            responsywnych stron internetowych oraz sklepów online.
          </p>

          <div className="flex justify-center lg:justify-start lg:w-1/3 space-x-4 mb-4 lg:mb-0">
            {ContactIcon.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 text-2xl transition duration-300"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>
        <nav className="lg:w-1/3">
          <ul className="flex flex-col justify-center gap-y-4 items-center">
            {MenuLinks.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="text-gray-300 underline  hover:text-gray-300 transition text-xl duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <p className="text-white text-lg mt-4 text-center">
        © Klaudiusz Adamaszek | Web Development 2024
      </p>
    </footer>
  );
};

export default Footer;
