import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Aboutme from "@/components/Aboutme";
import WebsiteDesignProcess from "@/components/WebsiteDesignProcess";
import ServicesItems from "@/components/ServicesItems";
import FreeProjectEstimation from "@/components/FreeProjectEstimation";
import CustomButton from "@/components/CustomButton";
import WhyChooseUs from "@/components/WhyChooseUs";
import OffertsHome from "@/components/OffertsHome";
import Acordion from "@/components/Acordin/Acordion";
import Tools from "@/components/Tools";
import ContactBaner from "@/components/ContactBaner";
import Blog from "@/components/Blog";

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

      <section className="bg-customColor">
        <div className="cnt relative mx-auto py-8 md:py-10 lg:py-16 min-h-[450px] md:min-h-[500px] lg:min-h-[700px]  flex items-center justify-center text-center flex-col bg-body-bg">
          <div className="w-full h-full  py-6 xl:mt-4 ">
            <motion.h1
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mx-auto font-[700] text-white w-full font-sans text-[1.8rem] mt-2  md:max-w-[80%] sm:text-[2rem] lg:text-[2.9rem] mb-3 tracking-wide"
            >
              Ciekawi Cię, jak skutecznie wypromować swoją firmę czy projekt w
              sieci?
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, delay: 1.2 }}
              className="flex flex-col"
            >
              <h2 className="mx-auto max-w-[95%] md:max-w-[70%] mt-6 mb-5 text-[#f8f8f8] font-medium text-[0.9rem] leading-7 lg:leading-9 md:text-[1rem] lg:text-[1.1rem] font-sans">
                Odpowiedź jest prosta – z wykorzystaniem profesjonalnej strony
                internetowej! Jestem pasjonatem web developmentu i chętnie
                pomogę Ci w stworzeniu unikalnej przestrzeni online.
              </h2>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.7 }}
              >
                <CustomButton
                  text="POROZMAWIAJMY"
                  link="/contact"
                  bgColor="#fff"
                  textColor="#0077cc"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      <section>
        <Aboutme />
        <ServicesItems />
        <WebsiteDesignProcess />
        <OffertsHome />
        <Tools />
        <WhyChooseUs />
        <FreeProjectEstimation />
        <Blog />
        <Acordion />
      </section>
    </>
  );
};

export default Home;
