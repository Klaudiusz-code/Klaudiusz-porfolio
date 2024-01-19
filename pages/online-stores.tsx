import React from "react";
import Acordion from "@/components/Acordin/Acordion";
import ContactBaner from "@/components/ContactBaner";
import WhyChooseUs from "@/components/WhyChooseUs";
import { BenefitsStores } from "@/data";
import benefitsimg from "@/public/benefitsimg.webp";
import Image from "next/image";

const onlineStores = () => {
  return (
    <section className="container mx-auto">
      <div className=" rounded-md text-center p-6">
        <h1 className="text-white font-bold text-6xl mb-3 font-archivo">
          Sklep Internetowy
        </h1>
        <p className="text-white mt-4">
          Rozwijam Szybkie Strony e-Commerce z Efektywnymi Rozwiązaniami.
        </p>
      </div>
      <div className="w-full mx-auto text-center mt-24 transition-all duration-200">
        <span className="p-3 bg-gray-700 text-white font-bold rounded-md">
          Jakie Korzyści Przynosi Sklep Online?
        </span>
        <div className="w-full flex flex-row  items-center mt-14 bg-white rounded-md justify-center py-6">
          <div className="w-[80%]">
            <Acordion />
          </div>
          <div className="bg-red-500 hidden lg:block">
            <Image
              src={benefitsimg}
              alt="Obrazek - benefity sklepu internetowego"
            ></Image>
          </div>
        </div>
      </div>

      <WhyChooseUs />
      <ContactBaner />
    </section>
  );
};

export default onlineStores;
