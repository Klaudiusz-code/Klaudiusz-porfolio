import React from "react";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import CustomButton from "./CustomButton";

type FooterProps = {
  data: any;
};

const Footer = ({ data }: FooterProps) => {
  const { email, text, phone } = data.footer;

  return (
    <footer className="w-full bg-gradient-to-r from-blue-500 to-[#0624B5] py-8">
      <div className="container mx-auto flex flex-col py-8 justify-between items-center text-center lg:text-left px-4">
        <h3 className="text-2xl lg:text-3xl text-white tracking-wide font-bold font-archivo mb-4">
          {text}
        </h3>
        <div className="w-full flex flex-col gap-y-8 lg:flex-row justify-between mt-8 font-sans">
          <div className="flex items-center justify-center">
            <MdEmail className="text-gray-200 h-6 w-6 mr-2" />
            <Link
              href={`mailto:${email}`}
              className="relative lg:text-2xl text-gray-200 tracking-wide text-md group transition duration-300 hover:text-white"
            >
              {email}
              <div className="h-[0.04rem] bg-slate-400 w-full absolute -bottom-2 right-0 group-hover:bg-white transition-all duration-300"></div>
            </Link>
          </div>
          <div>
            <CustomButton
              bgColor=""
              textColor="#ffffff"
              text="Napisz do mnie!"
              link="/contact"
            />
          </div>
          <div className="flex items-center justify-center">
            <MdPhone className="text-gray-200 h-6 w-6 mr-2" />
            <Link
              href={`tel:${phone}`}
              className="relative lg:text-2xl text-gray-200 tracking-wide text-md group transition duration-300 hover:text-white"
            >
              {phone}
              <div className="h-[0.04rem] bg-slate-400 w-full absolute -bottom-2 right-0 group-hover:bg-white transition-all duration-300"></div>
            </Link>
          </div>
        </div>
      </div>

      <p className="text-gray-300 text-base md:text-lg mt-4 text-center">
        © Klaudiusz Adamaszek | Web Development 2024
      </p>
    </footer>
  );
};

export default Footer;
