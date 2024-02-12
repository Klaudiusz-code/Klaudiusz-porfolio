import React from "react";
import Acordion from "@/components/Acordin/Acordion";
import ContactBaner from "@/components/ContactBaner";
import WhyChooseUs from "@/components/WhyChooseUs";
import { AiFillCheckSquare } from "react-icons/ai";
import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import OffertStore from "@/public/OffertsStore.png";
const ecommerceWebsiteServiceOptions = [
  {
    title: "Zakup serwera i domeny odpowiedniego dla sklepu online",
  },

  {
    title:
      "Konfiguracja płatności online, w tym bramki płatności i integracja z systemami płatności, takimi jak PayPal, Stripe, Przelewy24",
  },
  {
    title:
      "Integracja systemu zarządzania treścią, który umożliwia łatwe dodawanie, usuwanie i edytowanie produktów oraz treści na stronie sklepu",
  },
  {
    title:
      "Konfiguracja systemu sklepu online wraz z koszykiem zakupowym i procesem zamawiania",
  },
  {
    title:
      "Optymalizacja dla wyszukiwarek internetowych (SEO) w celu poprawy widoczności sklepu online w wynikach wyszukiwania",
  },
  {
    title:
      "Wdrożenie systemu analizy ruchu na stronie, np. Google Analytics, aby śledzić i analizować zachowanie klientów na stronie",
  },
  {
    title:
      "Integracja z systemami wysyłki i dostawy, umożliwiając automatyczne obliczanie kosztów wysyłki oraz śledzenie przesyłek",
  },
  {
    title:
      "Wsparcie techniczne i utrzymanie sklepu online, w tym aktualizacje systemu oraz wsparcie dla klientów",
  },
];
const korzysciSklepuInternetowego = [
  {
    id: 1,
    text: "Nowe możliwości biznesowe i dotarcie do klientów online.",
  },
  {
    id: 2,
    text: "Dostępność 24/7 dla zwiększenia sprzedaży.",
  },
  {
    id: 3,
    text: "Budowanie silnej marki online.",
  },
  {
    id: 4,
    text: "Monitorowanie i analiza danych klientów.",
  },
  {
    id: 5,
    text: "Ekspansja biznesu na nowe rynki.",
  },
  {
    id: 6,
    text: "Rozwój relacji z klientami online.",
  },
];

const onlineStores = () => {
  return (
    <section>
      <header className="bg-customColor text-center py-6">
        <h1 className="text-white font-sans text-[2.2rem] md:text-[2.5rem] xl:text-[3.7rem] ml-3 md:ml-1 lg:ml-0 mb-2 tracking-wide">
          Sklep Internetowy
        </h1>
      </header>
      <div className="cnt mt-12">
        <div className="w-full p-8 md:p-10 lg:p-14 bg-slate-100 shadow-lg rounded-2xl shadow-[#cfcfcf] mt-6  md:mt-8 xl:mt-10 mb-6">
          <h2 className="text-[#2f3d66] text-left font-sans text-[1.8rem] md:text-[1.6rem] xl:text-[2.4rem]">
            Moja Oferta dla Twojejego Sklepu Online:{" "}
          </h2>
          <div className="mt-8">
            <ul className="mt-3 flex flex-wrap">
              {ecommerceWebsiteServiceOptions.map((item, index) => (
                <li
                  key={index}
                  className="mt-1 text-[0.9rem] sm:text-[1.1rem] lg:text-[1.2rem] font-[400] tracking-wide text-[#0077cc] font-sans mb-3 flex items-start"
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
        </div>
        <div className="flex flex-row items-center justify-between font-sans mt-28 p-8 md:p-10 lg:p-14 min-h-[500px] bg-slate-100 shadow-lg rounded-2xl shadow-[#cfcfcf]  group relative">
          <div className="w-full sm:max-w-[40%] md:max-w-[50%] ">
            <h2 className="text-[#2f3d66] text-[1.8rem] md:text-[1.6rem] xl:text-[2.4rem]">
              Korzyści z Posiadania Sklepu Online
            </h2>
            <ul className="mt-5 list-disc pl-4 lg:pl-6">
              {korzysciSklepuInternetowego.map((korzysc) => (
                <li
                  key={korzysc.id}
                  className="text-[0.9rem] sm:text-[1.1rem] lg:text-[1.2rem] mt-3 text-[#0077cc] tracking-wide leading-6"
                >
                  {korzysc.text}
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

          <div className="max-w-[50%] h-full  hidden lg:block">
            <Image
              src={OffertStore}
              width={500}
              height={200}
              className="mx-auto group-hover:-translate-y-4 w-full transition-all duration-500"
              alt="Korzysci Ze Strony Internetowej"
            />
          </div>
        </div>

        <WhyChooseUs />
        <Acordion />
      </div>
      <ContactBaner />
    </section>
  );
};

export default onlineStores;
