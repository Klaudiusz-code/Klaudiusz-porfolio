"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaCheck, FaMobileAlt, FaFeather } from "react-icons/fa";

export default function LatestProjectSection() {
  return (
    <section className="relative w-full bg-white text-slate-600 py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.2] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
        <div className="max-w-3xl mb-24">
          <span className="text-sm font-medium text-slate-400 uppercase tracking-[0.2em] mb-4 block">
            Ostatnia realizacja
          </span>

          <h2 className="text-3xl md:text-4xl font-medium text-slate-800 tracking-tight leading-[1.2] mb-6">
            Ogród <span className="text-blue-500">Zagrosze</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed font-light max-w-xl">
            Projekt, w którym priorytetem było cisza, przestrzeń i naturalna
            estetyka. Design, który nie dominuje nad treścią, ją ją wyraża.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7 relative group">
            <div className="relative aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden">
              <Image
                src="/instogrod.jpg"
                alt="Projekt strony Ogród Zagrosze"
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center space-y-12">
            <h3 className="text-2xl font-medium text-slate-800 leading-relaxed">
              Detale, które <br />
              <span className="text-slate-400 font-normal">robią różnicę</span>
            </h3>

            <ul className="space-y-10">
              {[
                {
                  icon: <FaMobileAlt />,
                  title: "Adaptacyjność",
                  desc: "Strona płynnie dostosowuje się do każdej wielkości ekranu, zachowując elegancki układ.",
                },
                {
                  icon: <FaFeather />,
                  title: "Minimalizm",
                  desc: "Usunąłem hałas wizualny, pozostawiając tylko to, co istotne dla użytkownika.",
                },
                {
                  icon: <FaCheck />,
                  title: "Jakość kodu",
                  desc: "Szybkie ładowanie i bezbłędne działanie to standard, nie dodatek.",
                },
              ].map((item, index) => (
                <li key={index} className="flex gap-4">
                  <div className="flex-shrink-0 pt-1 text-slate-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-base font-medium text-slate-700 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <Link
                href="https://www.ogrodzagrosze.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3 border border-slate-200 rounded-full text-slate-500 font-medium hover:border-slate-800 hover:text-slate-900 transition-all duration-500"
              >
                Zobacz projekt
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
