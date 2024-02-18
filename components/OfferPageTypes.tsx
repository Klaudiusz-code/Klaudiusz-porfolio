import React from "react";
import Link from "next/link";
import CustomButton from "./CustomButton";
import FreeProjectEstimation from "./FreeProjectEstimation";

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
    <section className="container  mx-auto mt-28">
      <h3 className="text-bgColor text-[1.5rem] md:text-[2rem] lg:text-[2.4rem] font-sans font-bold text-center block">
        Strony Internetowe dzielimy Na :
      </h3>
      <div className="mt-16 flex flex-row flex-wrap  justify-center gap-y-12 gap-x-16">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center  text-center text-customColor py-6 min-h-[250px] max-w-[350px] bg-slate-100  xl:min-h-[450px] rounded-lg shadow-lg  shadow-[#e0e0e0] hover:shadow-gColor group"
          >
            <div className="absolute -top-8 bg-customColor h-16 w-20 flex items-center justify-center  rounded-lg group-hover:bg-bgColor transition-all duration-300">
              <span className="text-white font-sans font-[600] text-[1.5rem] group-hover:text-customColor">
                {item.num}
              </span>
            </div>
            <div>
              <h2 className="mt-8 text-bgColor font-sans text-[2rem] font-[600]">
                {item.title}
              </h2>
              <p className="text-[#9b9b9b] text-[0.875rem] lg:text-[1.4rem] xl:text-[1.1rem] font-sans mt-2 mb-4 max-w-[90%] mx-auto leading-8">
                {item.description}
              </p>
              <div className="mb-6 lg:mb-3">
                <CustomButton
                  bgColor="#0077cc"
                  textColor="#fff"
                  text="Darmowa Wycena Projektu"
                  link="/contact"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferPageTypes;
