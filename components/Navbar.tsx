"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = ({ data }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${
            isScrolled
              ? "bg-white/90 backdrop-blur-xl border-b border-slate-200 py-3"
              : "bg-transparent py-6"
          }
        `}
      >
        <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 z-50 group">
            <Image
              src="/hello.svg"
              alt="logo"
              width={42}
              height={42}
              className="object-contain"
            />
          </Link>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:flex items-center gap-14">
            <ul className="flex items-center gap-10">
              {data?.menuItems?.edges.map((edge: any) => (
                <li key={edge.node.id} className="relative group">
                  <Link
                    href={edge.node.path || "/"}
                    className="
                      text-[15px] font-medium text-slate-700
                      transition-colors
                      group-hover:text-customColor
                    "
                  >
                    {edge.node.label}
                  </Link>
                  <span
                    className="
                      absolute -bottom-1 left-0 h-[2px] w-full
                      bg-customColor
                      scale-x-0 origin-left
                      transition-transform duration-300
                      group-hover:scale-x-100
                    "
                  />
                </li>
              ))}
            </ul>

            {/* SOCIALS */}
            <div className="flex items-center gap-5 border-l border-slate-200 pl-8">
              <a
                className="text-slate-400 hover:text-slate-900 transition-colors"
                href="https://www.instagram.com/klaudiuszdev.pl/"
              >
                <FaInstagram />
              </a>
              <a
                className="text-slate-400 hover:text-slate-900 transition-colors"
                href="https://www.facebook.com/profile.php?id=61586322127679"
              >
                <FaFacebook />
              </a>
            </div>

            {/* CTA */}
            <Link
              href="/kontakt"
              className="
                flex items-center gap-2
                px-7 py-3
                bg-slate-900 text-white
                text-sm font-semibold
                rounded-xl
                hover:bg-customColor hover:text-white
                transition-colors
              "
            >
              Bezpłatna wycena
              <IoIosArrowForward />
            </Link>
          </div>

          {/* ================= MOBILE TRIGGER ================= */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-slate-900 hover:bg-slate-100 transition"
            aria-label="Menu"
          >
            <IoIosMenu className="text-3xl" />
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-40 transition-opacity duration-300
          ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={closeMenu}
        />

        {/* PANEL */}
        <div
          className={`
            absolute right-0 top-0 h-full w-full sm:w-[420px]
            bg-white/95 backdrop-blur-2xl
            shadow-2xl
            transition-transform duration-300
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-slate-200">
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">
              Menu
            </span>
            <button
              onClick={closeMenu}
              className="text-slate-500 hover:text-slate-900 transition"
            >
              <IoCloseOutline className="text-3xl" />
            </button>
          </div>

          {/* LINKS */}
          <div className="flex flex-col h-full px-8 pt-20">
            <ul className="space-y-8">
              {data?.menuItems?.edges.map((edge: any) => (
                <li key={edge.node.id}>
                  <Link
                    href={edge.node.path || "/"}
                    onClick={closeMenu}
                    className="
                      text-3xl md:text-4xl
                      font-semibold
                      text-slate-900
                      tracking-tight
                      hover:text-customColor
                      transition-colors
                    "
                  >
                    {edge.node.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SOCIALS */}
            <div className="mt-16 pt-8 border-t border-slate-200 flex justify-center gap-8">
              <a
                className="text-slate-400 hover:text-slate-900 transition-colors"
                href="#"
              >
                <FaInstagram className="text-xl" />
              </a>
              <a
                className="text-slate-400 hover:text-slate-900 transition-colors"
                href="#"
              >
                <FaLinkedin className="text-xl" />
              </a>
            </div>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/kontakt"
                onClick={closeMenu}
                className="
                  flex items-center justify-center gap-3
                  px-8 py-4
                  bg-slate-900 text-white
                  text-sm font-semibold
                  rounded-xl
                  hover:bg-customColor hover:text-slate-900
                  transition-colors
                "
              >
                Bezpłatna wycena
                <IoIosArrowForward />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
