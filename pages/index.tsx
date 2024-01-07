"use client";
import Button from "@/components/Button";
import Image from "next/image";

const Home = () => {
  return (
    <section className="relative container mx-auto mt-24 flex items-center justify-center text-center flex-col lg:flex-row bg-body-bg">
      {" "}
      <div className="lg:w-7/12 lg:pr-8 mt-27 md:mt-28 xl:mt-32 lg:order-2">
        <h1 className="text-customColor text-5xl xl:text-7xl font-bold mb-4 text-center">
          Klaudiusz Adamaszek
        </h1>
        <h2 className="text-gColor font-bold text-2xl xl:text-4xl">
          Web Developer
        </h2>
        <p className="lg:w-full mx-auto text-gColor mt-4 mb-2 font-light text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] leading-7">
          Pasjonat Full Stack JavaScript, łączący potęgę Node.js na backendzie z
          elegancją React na froncie. Tworzę innowacyjne rozwiązania, które
          przekształcają koncepcje w kod. Moje projekty wyróżniają się nie tylko
          techniczną precyzją, ale także dbałością o doświadczenie użytkownika.
        </p>
        <Button />
      </div>
    </section>
  );
};

export default Home;
