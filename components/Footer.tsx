import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";

const Footer = ({ data }: any) => {
  const { email, text, phone } = data.footer;
  console.log(data.footer)

  return (
    <footer className="w-full bg-[#0c0c0c] py-8">
      <div className="cnt mx-auto flex flex-col py-8 justify-between items-center text-center lg:text-left px-2">
        <h3 className="text-2xl lg:text-3xl text-gray-200 tracking-wide font-bold font-archivo mb-2 text-center">
          {text}
        </h3>
        <div className="w-full flex flex-col gap-y-12 lg:flex-row justify-between mt-12 font-sans">
          <div>
            <Link
              href="/"
              className="relative lg:text-2xl text-gray-300 tracking-wide text-md mb-4 mt-2 lg:w-3/4 group"
            >
              {email}
              <div className="h-[0.04rem] bg-slate-400 w-full absolute -bottom-4 right-0 group-hover:bg-blue-400 transition-all duration-300"></div>
            </Link>
          </div>
          <div>
            <CustomButton
              bgColor="#363636"
              textColor="#fff"
              text="Napisz do mnie!"
              link="/contact"
            />
          </div>
          <div>
            <Link
              href="/"
              className="relative lg:text-2xl text-gray-300 tracking-wide text-md mb-4 mt-2 lg:w-3/4 group"
            >
              {phone}
              <div className="h-[0.04rem] bg-slate-400 w-full absolute -bottom-4 right-0 group-hover:bg-blue-400 transition-all duration-300"></div>
            </Link>
          </div>
        </div>
      </div>
      <p className="text-gray-400 text-lg mt-4 text-center">
        © Klaudiusz Adamaszek | Web Development 2024
      </p>
    </footer>
  );
};

export default Footer;
