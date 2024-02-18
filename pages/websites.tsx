import React from "react";
import { motion } from "framer-motion";
import ContactBaner from "@/components/ContactBaner";
import BenefitsWebsiteImg from "@/public/OffertsWebsite.png";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import Acordion from "@/components/Acordin/Acordion";
import { AiFillCheckSquare } from "react-icons/ai";
import FreeProjectEstimation from "@/components/FreeProjectEstimation";
import CustomButton from "@/components/CustomButton";
import OfferPageTypes from "@/components/OfferPageTypes";
const Websites = () => {
  const data = [
    {
      id: 1,
      description:
        "Dotarcie do globalnej publiczności, zwiększając zasięg i wpływ działalności na międzynarodową skalę.",
    },
    {
      id: 2,
      description:
        "Szybki i łatwy dostęp do różnorodnych informacji na temat firmy, produktów, usług, itp.",
    },
    {
      id: 3,
      description: "Skuteczne narzędzie do promocji firmy i jej oferty.",
    },
    {
      id: 4,
      description:
        "Dotarcie do szerszej grupy odbiorców, zarówno na lokalnym, jak i globalnym rynku.",
    },
    {
      id: 5,
      description: "Dwukierunkowa komunikacja z klientami.",
    },
    {
      id: 6,
      description:
        "Budowanie pozytywnego wizerunku marki poprzez profesjonalną stronę internetową.",
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
    <section>
      <header className="bg-slate-300 text-center py-6">
        <h1 className="text-bgColor font-[500] font-sans text-[2rem] md:text-[2.5rem] xl:text-[3.3rem] ml-3 md:ml-1 lg:ml-0 mb-2 tracking-wide">
          Strona Internetowa
        </h1>
      </header>
      <div></div>
      <div className="cnt mt-12">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="w-full mt-6  md:mt-8 xl:mt-10 mb-6"
        >
          <h2 className="text-[#2f3d66] text-[1.8rem] md:text-[1.6rem] xl:text-[2.4rem]">
            Moja Oferta dla Twojej Strony Internetowej:{" "}
          </h2>

          <ul className="mt-3">
            {websiteServiceOptions.map((item, index) => (
              <li
                key={index}
                className="mt-6 text-[0.9rem] sm:text-[1.1rem] lg:text-[1.2rem] font-[400] tracking-wide text-[#0077cc] font-sans mb-3 flex items-start"
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
        </motion.div>
      </div>
      <div className="min-h-[500px] bg-customColor  shadow-lg  shadow-[#cfcfcf] group relative">
        <div className="cnt mx-auto flex flex-row items-center justify-between font-sans mt-28 p-8 md:p-10 lg:px-3 lg:py-16">
          <div className="w-full lg:max-w-[50%] ">
            <h2 className="text-white text-[1.8rem] md:text-[1.6rem] xl:text-[2.4rem]">
              Korzyści z Posiadania Strony
            </h2>
            <ul className="mt-5 list-disc pl-2 lg:pl-4">
              {data.map((data, index) => (
                <li
                  key={index}
                  className="text-[0.9rem] sm:text-[1.1rem] lg:text-[1.2rem] mt-3 text-gray-300 tracking-wide leading-6"
                >
                  {data.description}
                </li>
              ))}
            </ul>
            <div className="flex justify-center md:justify-start mt-6">
              <CustomButton
                text="Darmowa Wycena Projektu"
                bgColor="#fff"
                textColor="#0077cc"
                link="/contact"
              />
            </div>
          </div>

          <div className="max-w-[50%] h-full hidden lg:block">
            <Image
              src={BenefitsWebsiteImg}
              width={500}
              height={200}
              className="mx-auto w-full group-hover:-translate-y-4 transition-all duration-500"
              alt="Korzysci Ze Strony Internetowej"
            />
          </div>
        </div>
      </div>
      <OfferPageTypes />
      <div className="mt-16 md:mt-20 lg:mt-24">
        <FreeProjectEstimation />

        <Acordion />
      </div>
      <WhyChooseUs />

      <ContactBaner />
    </section>
  );
};

export default Websites;
