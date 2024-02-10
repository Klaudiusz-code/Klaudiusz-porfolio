"use client";
import React from "react";
import Link from "next/link";

const Aboutme = () => {
  return (
    <section className="cnt flex flex-col mx-auto items-center text-center justify-center">
      <h2 className="text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] font-thin text-[#10152e] mt-12 tracking-wide">
        <span className="text-customColor font-bold">Tworzę</span> Sklepy i
        Strony Internetowe
      </h2>
      <div className="max-w-[90%] md:max-w-[70%] lg:max-w-[60%] text-center">
        <p className=" text-[#4d4c4c] text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-[400] leading-7 tracking-wide mt-8 font-sans">
          Witam, jestem Klaudiusz, freelancer z zamiłowaniem do programowania.
          Specjalizuję się zarówno w front-endzie, jak i backendzie, posiadając
          także umiejętności z zakresu SEO. Moja pasja do tworzenia projektów,
          które wyróżniają się i przynoszą rzeczywiste rezultaty, napędza moją
          codzienną pracę. Dodatkowo, zawsze staram się spojrzeć na projekty z
          perspektywy marketingowej, aby skuteczniej dotrzeć do odpowiedniej
          publiczności i maksymalnie wykorzystać ich potencjał.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
