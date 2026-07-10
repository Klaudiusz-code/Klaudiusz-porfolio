"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoIosMenu, IoIosArrowForward } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

// Zdefiniowanie typów zamiast 'any'
type MenuItemNode = {
  id: string;
  label: string;
  path: string;
};

type NavbarData = {
  menuItems?: {
    edges: { node: MenuItemNode }[];
  };
};

const Navbar = ({ data }: { data: NavbarData }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  // 1. Nasłuchiwanie scrolla dla tła paska
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. BLOKADA SCROLLU CIAŁA STRONY NA MOBILCE (Kluczowe dla UX)
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup na wypadek odmontowania komponentu
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // 3. Zamknięcie menu klawiszem Escape (Dostępność)
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [closeMenu]);

  const menuItems = data?.menuItems?.edges || [];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-out
          ${
            isScrolled
              ? "bg-white/80 backdrop-blur-2xl border-b border-slate-100 shadow-sm py-4"
              : "bg-transparent py-6"
          }
        `}
      >
        <div className="container mx-auto max-w-7xl px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="flex items-center gap-3 z-50 group"
            onClick={closeMenu}
          >
            <Image
              src="/hello.svg"
              alt="Logo"
              width={42}
              height={42}
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-2">
              {menuItems.map((edge) => (
                <li key={edge.node.id}>
                  <Link
                    href={edge.node.path || "/"}
                    className="
                      relative px-5 py-2.5
                      text-[15px] font-medium text-slate-600
                      rounded-full
                      transition-all duration-300
                      hover:bg-slate-100 hover:text-slate-900
                    "
                  >
                    {edge.node.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 border-l border-slate-200 pl-6">
              <a
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
                href="https://www.instagram.com/klaudiuszdev.pl/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                className="p-2 text-slate-400 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-all"
                href="https://www.facebook.com/profile.php?id=61586322127679"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>

            {/* CTA */}
            <Link
              href="/kontakt"
              className="
                group flex items-center gap-2.5
                px-7 py-3
                bg-slate-900 text-white
                text-sm font-semibold
                rounded-full
                hover:bg-customColor
                transition-all duration-300
                shadow-lg shadow-slate-900/20 hover:shadow-customColor/30
              "
            >
              Bezpłatna wycena
              <IoIosArrowForward className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ================= MOBILE TRIGGER ================= */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative z-50 p-3 -mr-3 rounded-xl text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
            aria-expanded={isMenuOpen}
          >
            <div className="relative w-6 h-5">
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute left-0 top-2 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                }`}
              />
              <span
                className={`absolute left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                  isMenuOpen ? "top-2 -rotate-45" : "top-4"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed inset-0 z-40 lg:hidden
          transition-opacity duration-500 ease-out
          ${
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
        `}
        aria-hidden={!isMenuOpen}
      >
        {/* BACKDROP */}
        <div
          className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          onClick={closeMenu}
        />

        {/* PANEL */}
        <div
          className={`
            absolute right-0 top-0 h-full w-full sm:w-[450px]
            bg-gradient-to-b from-white to-slate-50
            shadow-2xl shadow-black/20
            flex flex-col
            transition-transform duration-500 cubic-bezier(0.22, 1, 0.36, 1)
            ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
          role="dialog"
          aria-modal="true"
        >
          {/* HEADER */}
          <div className="flex items-center justify-between px-8 py-8">
            <span className="text-xs font-bold tracking-[0.2em] text-slate-300 uppercase">
              Nawigacja
            </span>
            {/* Przycisk X jest opcjonalny, bo hamburger na zewnątrz animuje się w krzyżyk, ale zostawiam dla jasności */}
            <button
              onClick={closeMenu}
              className="p-2 -mr-2 text-slate-400 hover:text-slate-900 transition-colors"
              aria-label="Zamknij menu"
            >
              <IoCloseOutline className="text-2xl" />
            </button>
          </div>

          {/* LINKS - Główna zawartość */}
          <div className="flex-1 overflow-y-auto px-8 pt-8">
            <ul className="space-y-2">
              {menuItems.map((edge, index) => (
                <li key={edge.node.id}>
                  <Link
                    href={edge.node.path || "/"}
                    onClick={closeMenu}
                    className="
                      group flex items-center gap-5 py-4
                      border-b border-slate-100
                      transition-all duration-500
                    "
                    style={{
                      // Animacja kaskadowa (stagger) - każdy link wchodzi z opóźnieniem
                      opacity: isMenuOpen ? 1 : 0,
                      transform: isMenuOpen
                        ? "translateX(0)"
                        : "translateX(40px)",
                      transitionDelay: isMenuOpen
                        ? `${150 + index * 75}ms`
                        : "0ms",
                    }}
                  >
                    <span className="text-sm font-bold text-slate-200 group-hover:text-customColor transition-colors">
                      0{index + 1}
                    </span>
                    <span className="text-2xl md:text-3xl font-semibold text-slate-800 tracking-tight group-hover:text-customColor transition-colors">
                      {edge.node.label}
                    </span>
                    <IoIosArrowForward className="ml-auto text-slate-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-customColor transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* BOTTOM SECTION - Przyklejone do dołu dla łatwego dostępu kciukiem */}
          <div
            className="px-8 pb-10 pt-6 border-t border-slate-200 bg-white"
            style={{
              opacity: isMenuOpen ? 1 : 0,
              transform: isMenuOpen ? "translateY(0)" : "translateY(20px)",
              transitionDelay: isMenuOpen
                ? `${150 + menuItems.length * 75}ms`
                : "0ms",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            {/* CTA BUTTON */}
            <Link
              href="/kontakt"
              onClick={closeMenu}
              className="
                group flex items-center justify-center gap-3 w-full
                px-8 py-4 mb-8
                bg-slate-900 text-white
                text-base font-semibold
                rounded-2xl
                hover:bg-customColor
                transition-all duration-300
                shadow-xl shadow-slate-900/20
              "
            >
              Bezpłatna wycena
              <IoIosArrowForward className="transition-transform group-hover:translate-x-1" />
            </Link>

            {/* SOCIALS & COPYRIGHT */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <a
                  className="p-2.5 bg-slate-100 text-slate-500 hover:bg-customColor hover:text-white rounded-xl transition-all duration-300"
                  href="https://www.instagram.com/klaudiuszdev.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg" />
                </a>
                <a
                  className="p-2.5 bg-slate-100 text-slate-500 hover:bg-customColor hover:text-white rounded-xl transition-all duration-300"
                  href="https://www.facebook.com/profile.php?id=61586322127679"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-lg" />
                </a>
                <a
                  className="p-2.5 bg-slate-100 text-slate-500 hover:bg-customColor hover:text-white rounded-xl transition-all duration-300"
                  href="#"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg" />
                </a>
              </div>
              <span className="text-xs text-slate-400 tracking-wide">
                © {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
