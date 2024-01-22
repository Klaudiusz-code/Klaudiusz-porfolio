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
        <p className="text-white">
          Rozwijam Szybkie Strony e-Commerce z Efektywnymi Rozwiązaniami.
        </p>
      </div>
      <div className="w-full mx-auto text-center mt-16 transition-all duration-200">
        <span className="p-3 bg-gray-700 text-white font-bold rounded-md">
          Jakie Korzyści Przynosi Sklep Online?
        </span>
      </div>

      <WhyChooseUs />
      <ContactBaner />
    </section>
  );
};

export default onlineStores;
