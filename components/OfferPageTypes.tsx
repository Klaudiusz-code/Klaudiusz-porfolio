import React from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";
import CustomButton from "./CustomButton";

const data = [
  {
    num: 1,
    title: "OnePage",
    description:
      "Wizytówka Twojej firmy na jednej stronie — najważniejsze informacje w estetycznym, graficznym połączeniu. Wygodna w użyciu One Page dzieli się na segmenty, które zabierają użytkownika w podróż ścieżką, na której podziwia atrakcyjne widoki Twojej firmy.",
  },
  {
    num: 2,
    title: "Strona firmowa",
    description:
      "Strona firmowa zawiera kilka podstron, które pełnią ustalone przez Ciebie funkcje. Bardziej rozbudowana niż One Page, zaprasza użytkownika do odkrycia kolejnych zakładek, w których czekają na niego dalsze atrakcje oferowane przez Twoją firmę.",
  },
  {
    num: 3,
    title: "Portal internetowy",
    description:
      "Portal internetowy pełni rolę informacyjną. Jest to rodzaj serwisu, w którym użytkownicy szukają aktualności w konkretnych dziedzinach. Rozbudowane sekcje z możliwością wyszukiwania interesujących zagadnień motywują do tworzenia przejrzystych projektów.",
  },
];

const OfferPageTypes = () => {
  return (
    <section className="w-full mx-auto mt-28">
      <h3 className="text-white text-[1.5rem] md:text-[2rem] lg:text-[2.4rem] font-sans font-bold text-center block">
        Strony Internetowe dzielimy Na :
      </h3>
      <div className="mt-16 flex flex-row flex-wrap items-center justify-center gap-y-12 gap-x-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center flex-col flex-wrap justify-center mt-6 text-center p-2 lg:p-4 max-w-[450px] min-h-[0px] xl:min-h-[450px] rounded-lg bg-[#2a3245] group"
          >
            <div className="absolute -top-8 bg-customColor h-16 w-20 flex items-center justify-center  rounded-lg group-hover:bg-[#fff] transition-all duration-300">
              <span className="text-white font-sans font-[600] text-[1.5rem] group-hover:text-customColor">
                {item.num}
              </span>
            </div>
            <div>
              <h2 className="mt-8 text-white font-sans text-[2rem] font-[600]">
                {item.title}
              </h2>
              <p className="text-[#9b9b9b] text-[0.875rem] lg:text-[1.4rem] xl:text-[1.1rem] font-sans mt-2 mb-4 max-w-[90%] mx-auto leading-8">
                {item.description}
              </p>
              <div className="mb-6 lg:mb-3">
                <CustomButton
                  bgColor="#fff"
                  textColor="#2a3245"
                  text="Darmowa Wycena Projektu"
                  link="/contact"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center bg-[#0077cc] min-h-[250px] p-3 mt-28 rounded-2xl font-sans">
        <h2 className="text-[1.6rem] text-[#ffffff] font-[600] mt-8 text-center">
          Nie wiesz, która strona najlepiej odpowiada Twoim potrzebom?
        </h2>
        <p className="text-[1.1rem] text-[#dadada] mt-6">
          Skontaktuj się ze mną, chętnie pomogę!
        </p>
        <div className="flex flex-row items-center gap-x-3 md:gap-x-5 lg:gap-x-8 mt-6 mb-5">
          <Link
            href="tel:+48519668439"
            className=" flex flex-row items-center mt-2 p-3 lg:p-4 h-13 bg-white rounded-3xl transition-all duration-150"
          >
            <span className="text-[0.8rem] text-[#0077cc] font-sans md:text-[0.9rem] lg:text-[1.2rem] xl:text-[16px] font-bold">
              <FaPhoneAlt />
            </span>
            <span className="text-[0.8rem] text-[#0077cc] ml-2 font-sans md:text-[0.9rem] lg:text-[1.2rem] xl:text-[16px] font-bold">
              519-668-439
            </span>
          </Link>
          <CustomButton
            bgColor="#fff"
            textColor="#0077cc"
            text="Skontaktuj Się"
            link="/contact"
          />
        </div>
      </div>
    </section>
  );
};

export default OfferPageTypes;
