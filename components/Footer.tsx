import React from "react";
import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

type FooterProps = {
  data: any;
};

const Footer = ({ data }: FooterProps) => {
  const { email, phone } = data.footer;

  return (
    <footer className="w-full bg-white border-t border-gray-200 py-4 text-gray-700 text-sm">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
          <Link href={`mailto:${email}`} className="flex items-center text-gray-600 hover:text-gray-900 transition">
            <MdEmail className="h-5 w-5 mr-2" />
            <span className="text-sm">{email}</span>
          </Link>
          <Link href={`tel:${phone}`} className="flex items-center text-gray-600 hover:text-gray-900 transition">
            <MdPhone className="h-5 w-5 mr-2" />
            <span className="text-sm">{phone}</span>
          </Link>
          <Link href="https://www.instagram.com/klaudiuszdev.pl" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-600 hover:text-gray-900 transition">
            <FaInstagram className="h-5 w-5 mr-2" />
            <span className="text-sm">Instagram</span>
          </Link>
        </div>
        <p className="text-gray-600 text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} <span className="text-customColor">Klaudiusz Adamaszek</span> | Web Development
        </p>
      </div>
    </footer>
  );
};

export default Footer;
