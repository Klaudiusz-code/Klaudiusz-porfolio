import React from "react";
import { motion } from "framer-motion";
import ButtonContact from "@/components/ButtonContact";
import ContactBaner from "@/components/ContactBaner";
import Image from "next/image";
import { BenefitsWeb, ServicesWebsite } from "@/data";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImgAdvantages from "@/public/advantage_img.svg";
import Acordion from "@/components/Acordin/Acordion";
import Link from "next/link";

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
          <ul className="list-disc mt-3 ml-3 md:ml-3 lg:ml-4">
            {websiteServiceOptions.map((item, index) => (
              <li
                key={index}
                className="mt-2 text-[0.9rem] sm:text-[1.1rem] lg:text-[1.2rem] font-[400] tracking-wide text-[#2f3d66] font-sans "
              >
                {item.title}
              </li>
            ))}
          </ul>
          <div className="w-full mt-6 sm:mt-10 flex flex-row flex-wrap items-center font-sans">
            <span className="text-[#2f3d66] text-[1rem] sm:text-[1.2rem] lg:[1.3rem]  font-[600] ">
              Ciekawa Oferta?
            </span>
            <Link
              href="/contact"
              className="text-customColor text-[1rem] sm:text-[1.2rem] lg:[1.3rem] underline font-bold ml-3 hover:text-navcolor duration-150 transition-all cursor-pointer"
            >
              Napisz do mnie!
            </Link>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1.3 }}
        className="w-full mx-auto text-center mt-16"
      >
        <div className="mt-16 lg:mt-20 bg-[#0077cc] p-2 lg:p-3 rounded-2xl font-sans">
          <div className="flex p-3">
            <div className="flex flex-col text-left ml-3">
              <h2 className="text-[1.3rem] md:text-[1.4rem] lg:text-[2rem] mb-1 font-sans text-white font-[900]">
                Korzyści Ze Strony Internetowej
              </h2>
              {data.map((item, index) => (
                <div
                  key={index}
                  className="w-full md:max-w-[80%] lg:max-w-[60%] mt-5"
                >
                  <h3 className="text-[1.3rem] lg:text-[1.3rem] text-white font-sans font-[600]">
                    {item.title}
                  </h3>
                  <p className="text-[#f1f1f1] font-sans text-[1rem] lg:text-[1.1rem] mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <Image
                src={ImgAdvantages}
                className="md:h-full"
                alt="Obrazek korzyści ze strony internetowej"
              />
            </div>
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
