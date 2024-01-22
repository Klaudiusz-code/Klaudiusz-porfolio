import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "@/components/ButtonProject";
import Head from "next/head";
import Image from "next/image";
import Aboutme from "@/components/Aboutme";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Strony Internetowe, Sklepy Internetowe, SEO - Tomaszów Lubelski,
          Zamość, Lublin
        </title>
        <meta
          name="description"
          content="Full Stack JavaScript Developer specjalizujący się w tworzeniu stron i sklepów internetowych."
        />
        <meta
          name="keywords"
          content="strony internetowe, sklepy internetowe, seo, web developer, Lubycza Królewska, Tomaszów Lubelski, Zamość, Lublin"
        />
        <meta
          property="og:title"
          content="Strony Internetowe, Sklepy Internetowe, Seo | Tomaszów Lubelski, Zamość, Lublin | Klaudiusz Adamaszek - Web Developer"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />{" "}
      </Head>
      <motion.div
        initial={{ opacity: 0, scale: 0.2 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6 }}
        className="w-full relative container mx-auto mt-16 flex items-center justify-center text-center flex-col lg:flex-row bg-body-bg "
      >
        <div className="w-full  lg:pr-8 mt-27 md:mt-28 xl:mt-32 lg:order-2">
          {" "}
          {/* <h1 className="text-white text-[5rem] mb-4 text-center font-rubik font-bold tracking-wide">
            <span className="text-customColor">Klaudiusz</span> Adamaszek
          </h1> */}
          <h1 className="mx-auto font-[900] text-white max-w-[75%] font-sans text-[2.9rem] mb-4 tracking-wide">
            Ciekawi Cię, jak{" "}
            <span className="underline underline-offset-4 ">skutecznie</span>{" "}
            wypromować swoją firmę czy projekt w sieci?
          </h1>
          <h2 className="mx-auto max-w-[60%] mt-8 text-gColor font-medium text-[1.1rem] font-sans">
            Odpowiedź jest prosta – z wykorzystaniem profesjonalnej strony
            internetowej! Jestem pasjonatem web developmentu i chętnie pomogę Ci
            w stworzeniu unikalnej przestrzeni online.
          </h2>
          {/* <p className="text-white font-rubik font-[900] text-[1.6rem] ">
            <TypeAnimation
              sequence={["Web Developer", 5000]}
              wrapper="span"
              speed={1}
              style={{ fontSize: "1.8em", display: "inline-block" }}
              repeat={Infinity}
            />
          </p> */}
          <Button />
        </div>
      </motion.div>
      <Aboutme />
    </>
  );
};

export default Home;
