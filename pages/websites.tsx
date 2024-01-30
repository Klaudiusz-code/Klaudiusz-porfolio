import React from "react";
import ButtonContact from "@/components/ButtonContact";
import ContactBaner from "@/components/ContactBaner";
import Image from "next/image";
import { BenefitsWeb, ServicesWebsite } from "@/data";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImgAdvantages from "@/public/advantage_img.svg";
import Acordion from "@/components/Acordin/Acordion";

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
      title: "Uzupełnienie treścią dostarczoną przez Ciebie",
    },
  ];

  return (
    <section className="container mx-auto">
      <div className=" rounded-md text-left py-4">
        <h1 className="text-customColor font-[500] font-sans text-[2rem] md:text-[2.5rem] xl:text-[3.7rem] mb-2 tracking-wide">
          Strona Internetowa
        </h1>
      </div>
      <div className="w-full py-2 mt-6 md:mt-8 xl:mt-14 mb-6 ml-3 md:ml-1 lg:ml-0">
        <h1 className="text-white text-left font-sans font-[600] text-[1.5rem] md:text-[1.6rem] xl:text-[1.8rem]">
          Moja Oferta dla Twojej Strony Internetowej:{" "}
        </h1>
        <div className="mt-8">
          <h2 className="mt-2 text-left text-gColor font-sans font-normal text-[0.9rem] md:text-[1.1rem]  xl:text-[1.3rem]">
            Zapewniam kompleksową opiekę nad Twoją stroną internetową z każdej
            strony!
          </h2>
          <ul className="list-disc mt-3 ml-3 md:ml-4 lg:ml-6">
            {websiteServiceOptions.map((item) => (
              <li className="mt-2 text-[0.9rem] tracking-wide font-thin text-gColor font-sans sm:text-[1rem]">
                {item.title}
              </li>
            ))}
          </ul>
          <div className="w-full mt-6 sm:mt-10 flex flex-col">
            <span className=" text-gColor tracking-wide text-[1.1rem] mb-6 font-[600] sm:text-[1rem]">
              Masz Pytanie?
            </span>
            <ButtonContact buttonText="Napisz do mnie" />
          </div>
        </div>
      </div>
      <div className="w-full mx-auto text-center mt-24">
        <div className="mt-24 bg-[#0077cc] p-4 rounded-2xl font-sans">
          <div className="flex p-3">
            <div className="flex flex-col text-left ml-3">
              <h1 className="text-[1rem] md:text-[1.3rem] lg:text-[2rem] mb-1 font-sans text-white font-[900]">
                Korzyści Ze Strony Internetowej
              </h1>
              {data.map((item) => (
                <div className="w-full md:max-w-[80%] lg:max-w-[60%] mt-5">
                  <h1 className="text-[1rem] lg:text-[1.3rem] text-white font-sans font-[600]">
                    {item.title}
                  </h1>
                  <p className="text-white font-sans text-[0.8rem] lg:mt-[1rem] mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <Image src={ImgAdvantages} className="md:h-full" alt="obrazek"></Image>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="text-center mb-10">
          <h1 className="text-[2rem] font-sans font-[600] text-white">FAQ</h1>
          <p className="text-gray-500 font-[400] mt-2 font-sans">
            O to najczęściej zadawane pytania!
          </p>
        </div>
        <Acordion />
      </div>
      <WhyChooseUs />
      <ContactBaner />
    </section>
  );
};

export default Websites;
