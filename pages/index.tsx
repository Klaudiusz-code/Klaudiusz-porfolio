import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Button from "@/components/ButtonProject";
import Head from "next/head";
import Image from "next/image";
import Aboutme from "@/components/Aboutme";
import WebsiteDesignProcess from "@/components/WebsiteDesignProcess";

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
      <div className="w-full relative container mx-auto mt-16 flex items-center justify-center text-center flex-col lg:flex-row bg-body-bg ">
        <div className="w-full lg:pr-8 mt-27 md:mt-28 xl:mt-32 lg:order-2">
          <motion.h1
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mx-auto font-[700] text-white w-full font-sans text-[1.7rem] md:max-w-[80%] sm:text-[2rem] lg:text-[2.9rem] mb-4 tracking-wide"
          >
            Ciekawi Cię, jak{" "}
            <span className="underline underline-offset-4 ">skutecznie</span>{" "}
            wypromować swoją firmę czy projekt w sieci?
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h2 className="mx-auto w-full md:max-w-[60%] mt-8 text-gColor font-medium text-[0.9rem] leading-7 lg:leading-9 md:text-[1rem] lg:text-[1.1rem] font-sans">
              Odpowiedź jest prosta – z wykorzystaniem profesjonalnej strony
              internetowej! Jestem pasjonatem web developmentu i chętnie pomogę
              Ci w stworzeniu unikalnej przestrzeni online.
            </h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Button />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Aboutme />
      <div className="mt-32 mb-24">
        <WebsiteDesignProcess />
      </div>
    </>
  );
};

export default Home;
