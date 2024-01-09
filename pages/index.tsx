"use client";
import Button from "@/components/Button";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.6 }}
      className="relative container mx-auto mt-24 flex items-center justify-center text-center flex-col lg:flex-row bg-body-bg"
    >
      {" "}
      <div className="lg:w-7/12 lg:pr-8 mt-27 md:mt-28 xl:mt-32 lg:order-2">
        <h1 className="text-customColor text-5xl xl:text-7xl font-bold mb-4 text-center">
          Klaudiusz Adamaszek
        </h1>
        <h2 className="text-gColor font-bold text-1xl xl:text-xl">
          <TypeAnimation
            sequence={["Web Developer", 5000]}
            wrapper="span"
            speed={1}
            style={{ fontSize: "1.8em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h2>
        <p className="lg:w-full mx-auto text-gColor mt-4 mb-2 font-light text-[0.7rem] md:text-[0.9rem] lg:text-[1rem] leading-7">
          Jestem entuzjastą Full Stack JavaScript, który łączy potęgę Node.js w
          warstwie backendu z elegancją React w obszarze frontendu. Moje
          projekty wyróżniają się nie tylko techniczną precyzją, ale także
          troską o doświadczenie użytkownika
        </p>
        <Button />
      </div>
    </motion.div>
  );
};

export default Home;
