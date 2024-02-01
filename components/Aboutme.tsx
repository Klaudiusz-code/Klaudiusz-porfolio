"use client";
import React from "react";
import Link from "next/link";
import { offertsLinks } from "@/data";

const Aboutme = () => {
  return (
    <section className="container mx-auto mb-16 p-2 mt-4 md:mt-8 xl:mt-12">
      <div className="flex flex-col justify-center lg:flex-row lg:justify-between mt-24  border border-gray-700 rounded-xl p-8">
        <div className="max-w-full md:max-w-[80%] lg:max-w-[50%]">
          <span className="text-white text-2xl font-semibold text-[1rem] md:text-[1.1rem] lg:text-[1.4rem]">
            <span className="text-customColor">/</span> O Mnie
          </span>
          <h1 className="mt-6 text-white text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] font-extrabold">
            KIM JESTEM?
          </h1>
          <p className="mt-2 text-gColor text-[0.9rem] lg:text-[1.2rem] font-thin leading-7 font-sans">
            Cześć! Jestem entuzjastą programowania, specjalizującym się zarówno
            w front-endzie, jak i backendzie, a także posiadającym umiejętności
            w obszarze SEO. Moja pasja do tworzenia projektów, które wyróżniają
            się i przynoszą realne rezultaty, napędza moją codzienną pracę.
            Dodatkowo, zawsze staram się spojrzeć na projekty z perspektywy
            marketingowej, aby skuteczniej dotrzeć do odpowiedniej publiczności
            i maksymalnie wykorzystać ich potencjał.
          </p>
        </div>
        <div className="mt-6 lg:mt-0 flex flex-col">
          <span className="text-white text-2xl font-semibold text-[1.4rem]">
            <span className="text-customColor">/</span> Wybierz Ofertę
          </span>
          <div className="mt-4 md:mt-12 flex flex-col justify-center font-sans">
            {offertsLinks.map((item, index) => (
              <Link
                href={item.link}
                key={index}
                className="hover:scale-110 duration-150"
              >
                <span className="text-[1.7rem] sm:text-[1.8rem] md:text-[2.3rem] lg:text-[2.8rem] xl:text-[3.2rem] underline font-black text-[#a5a5a5] hover:text-white transition-all">
                  {item.title}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;