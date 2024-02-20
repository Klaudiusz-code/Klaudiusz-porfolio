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
import womanWeb from "@/public/womanWeb.jpeg";
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
      <header className="flex flex-col md:flex-row items-center justify-between cnt font-sans py-14">
        <div className="md:w-2/4 md:mr-6 order-2 md:order-1">
          <h1 className="text-bgColor leading-9 mt-6 font-semibold font-sans text-3xl md:text-4xl xl:text-6xl mb-2 tracking-wide">
            <span className="text-customColor">Strona internetowa</span> - znam
            sekret wyróżnienia Twojego biznesu
          </h1>
          <p className="text-gray-700 text-lg mb-6 mt-4 tracking-wide">
            Zaprojektuje i stworzę stronę internetową, która wyróżni Twoją firmę
            w cyfrowym świecie.
          </p>
          <CustomButton
            text="Darmowa Wycena Projektu"
            bgColor="#0077cc"
            textColor="#fff"
            link="/contact"
          />
        </div>
        <div className="md:w-2/5 order-1 md:order-2">
          <Image
            src={womanWeb}
            alt="kobieta sprawdzająca stronę"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </header>

      <div className="cnt mt-6 md:mt-16 lg:mt-24">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.7 }}
          className="w-full mt-3  md:mt-8 xl:mt-10 mb-6"
        >
          <h2 className="text-[#2f3d66] text-4xl md:text-5xl xl:text-6xl">
            Profesjonalne strony internetowe dla firm.
          </h2>

          <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
            W dzisiejszym dynamicznym świecie, strona internetowa jest kluczowym
            narzędziem, które pozwala firmom na osiągnięcie sukcesu w erze
            cyfrowej. Posiadanie strony internetowej otwiera przed firmą wiele
            możliwości.
          </p>
          <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
            Strona działa przez całą dobę, siedem dni w tygodniu, co oznacza, że
            klient ma dostęp do informacji o firmie o dowolnej porze,
            niezależnie od godzin pracy. To elastyczność, którą zapewnia
            nowoczesna technologia.
          </p>
          <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
            Dobrze zaprojektowana strona internetowa pomaga budować wizerunek i
            markę firmy, ułatwia komunikację z klientami oraz zarządza wszelkimi
            informacjami dotyczącymi produktów, usług, cen i kontaktów.
          </p>
          <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
            Strona internetowa pozwala również lepiej zrozumieć klientów, dzięki
            narzędziom analitycznym można monitorować ruch na stronie
            internetowej, co pozwala śledzić obecność i czas spędzany przez
            klientów na witrynie oraz dostosować pod to odpowiednią strategię
            marketingową.{" "}
          </p>
        </motion.div>
      </div>

      <div className="min-h-[500px] bg-customColor  shadow-lg  shadow-[#cfcfcf] group relative">
        <div className="cnt mx-auto flex flex-row items-center justify-between font-sans mt-28 p-8 md:p-10 lg:px-3 lg:py-16">
          <div className="w-full sm:max-w-[40%] md:max-w-[50%] ">
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
