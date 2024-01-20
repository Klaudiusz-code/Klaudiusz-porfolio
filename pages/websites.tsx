import React from "react";
import ButtonContact from "@/components/ButtonContact";
import ContactBaner from "@/components/ContactBaner";
import Image from "next/image";
import { BenefitsWeb, ServicesWebsite } from "@/data";
import WhyChooseUs from "@/components/WhyChooseUs";
import ImgAdvantages from "@/public/advantage_img.svg";

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

  return (
    <section className="container mx-auto">
      <div className=" rounded-md text-center p-6">
        <h1 className="text-white font-bold text-6xl mb-3 font-archivo">
          Strona Internetowa
        </h1>
        <p className="text-white text-[1.3rem] mt-4">
          Tworzę szybkie i skuteczne strony www.
        </p>
      </div>

      <div className="w-full mx-auto text-center mt-16">
        <div className="mt-16 bg-[#0077cc] p-4 rounded-lg font-sans">
          <div className="flex p-3">
            <div className="flex flex-col text-left ml-3">
              <h1 className="text-[2rem] mb-1 font-sans text-white font-[900]">
                Korzyści Ze Strony Internetowej
              </h1>
              {data.map((item) => (
                <div className="w-[50%] mt-5">
                  <h1 className="text-[1.2rem] text-white font-sans font-[600]">
                    {item.title}
                  </h1>
                  <p className="text-white text-[0.8rem] mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="hidden lg:block">
              <Image src={ImgAdvantages} alt="obrazek"></Image>
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <ContactBaner />
    </section>
  );
};

export default Websites;
