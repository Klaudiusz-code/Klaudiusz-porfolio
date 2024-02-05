import React from "react";
import { motion } from "framer-motion";
import ContactBaner from "@/components/ContactBaner";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImgAdvantages from "@/public/advantage_img.svg";
import Acordion from "@/components/Acordin/Acordion";
import { AiFillCheckSquare } from "react-icons/ai";
import CustomButton from "@/components/CustomButton";

const Websites = () => {
  const data = [
    {
      title: "Globalna Widoczność",
      description:
        "Dzięki stronie internetowej firma staje się dostępna dla klientów na całym świecie, co pozwala na zwiększenie zasięgu i zdobycie nowych rynków.",
    },
    {
      title: "Profesjonalny Wizerunek",
      description:
        "Strona internetowa jest wizytówką firmy w świecie online. Profesjonalny i atrakcyjny design strony buduje zaufanie klientów oraz podkreśla profesjonalizm firmy.",
    },
    {
      title: "Łatwy Dostęp Do Informacji",
      description:
        "Klienci mogą szybko i łatwo uzyskać informacje o produktach, usługach, godzinach otwarcia i innych kluczowych aspektach firmy.",
    },
  ];

  const websiteServiceOptions = [
    {
      title: "zakup serwera i domeny",
    },
    {
      title:
        "Projektowanie strony przy użyciu systemu zarządzania treścią WordPress, Strapi",
    },
    {
      title: "Konfiguracja kont pocztowych",
    },
    {
      title: "Wdrożenie formularzy kontaktowych",
    },
    {
      title:
        "Integracja Google Analytics i Google Search Console dla śledzenia ruchu na stronie",
    },
    {
      title: "Wzmocnienie zabezpieczeń strony",
    },
    {
      title:
        "Uzupełnienie treścią dostarczoną przez ciebie, lub stworzonej przeze mnie",
    },
  ];

  return (
    <section className="container mx-auto px-2">
      <header>
        <h1 className="text-customColor font-[500] font-sans text-[2rem] md:text-[2.5rem] xl:text-[3.7rem] ml-3 md:ml-1 lg:ml-0 mb-2 tracking-wide">
          Strona Internetowa
        </h1>
      </header>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.7 }}
        className="w-full p-8 md:p-10 lg:p-14 bg-white mt-6 rounded-xl md:mt-8 xl:mt-10 mb-6"
      >
        <h2 className="text-[#2f3d66] text-left font-sans font-[600] text-[1.5rem] md:text-[1.6rem] xl:text-[1.8rem]">
          Moja Oferta dla Twojej Strony Internetowej:{" "}
        </h2>
        <div className="mt-8">
          <ul className="mt-3flex flex-wrap">
            {websiteServiceOptions.map((item, index) => (
              <li
                key={index}
                className="mt-2 ml-2 text-[0.9rem] sm:text-[1.1rem] lg:text-[1.2rem] font-[400] tracking-wide text-[#2f3d66] font-sans mb-3 flex items-start"
              >
                <span className="text-[1.3rem] text-[#0077cc] flex-shrink-0 mr-2 mt-1">
                  <AiFillCheckSquare />
                </span>
                <span className="whitespace-normal">{item.title}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-center md:justify-start mt-6">
            <CustomButton
              text="Darmowa Wycena Projektu"
              bgColor="#0077cc"
              textColor="#fff"
              link="/contact"
            />
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.3 }}
        className="w-full mx-auto text-center mt-16"
      >
        <div className="mt-16 lg:mt-20 bg-[#0077cc] p-8 md:p-10 lg:p-14 rounded-2xl font-sans flex flex-col lg:flex-row">
          <div className="flex flex-col text-left lg:w-2/3 lg:pr-6">
            <h2 className="text-[1.3rem] md:text-[1.4rem] lg:text-[2rem] mb-1 font-sans text-white font-[900]">
              Korzyści Ze Strony Internetowej
            </h2>
            {data.map((item, index) => (
              <div key={index} className="mt-5">
                <h3 className="text-[1.3rem] lg:text-[1.3rem] text-white font-sans font-[600]">
                  {item.title}
                </h3>
                <p className="text-[#f1f1f1] leading-7 w-full md:max-w-[80%] font-sans text-[1rem] lg:text-[1.1rem] mt-1">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
          <div className="hidden lg:block lg:w-1/3">
            <Image
              src={ImgAdvantages}
              className="object-cover h-full w-full"
              alt="Obrazek korzyści ze strony internetowej"
            />
          </div>
        </div>
      </motion.div>
      <div className="mt-16 md:mt-20 lg:mt-24">
        <Acordion />
      </div>
      <WhyChooseUs />
      <ContactBaner />
    </section>
  );
};

export default Websites;
