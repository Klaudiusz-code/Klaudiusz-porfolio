import React from "react";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import WhyChooseUs from "@/components/WhyChooseUs";
import Acordion from "@/components/Acordin/Acordion";
import FreeProjectEstimation from "@/components/FreeProjectEstimation";
import CustomButton from "@/components/CustomButton";
import OfferPageTypes from "@/components/OfferPageTypes";
import womanWeb from "@/public/womanWeb.jpeg";
const Websites = () => {
  const data = [
    {
      number: 1,
      title: "Zwiększenie wiarygodności",
      desc: "Posiadanie profesjonalnej strony internetowej buduje zaufanie wśród klientów. Przejrzysty i estetyczny wygląd witryny oraz obecność istotnych informacji o firmie, produktach i usługach sprawiają, że firma wydaje się bardziej wiarygodna i profesjonalna.",
    },
    {
      number: 2,
      title: "Zwiększenie widoczności",
      desc: "Profesjonalna strona internetowa, zoptymalizowana pod kątem SEO, może pomóc Twojej firmie w uzyskaniu wyższych pozycji w wynikach wyszukiwania Google, co oznacza większą widoczność dla potencjalnych klientów",
    },
    {
      number: 3,
      title: "Dostępność 24/7",
      desc: "W przeciwieństwie do tradycyjnych punktów sprzedaży, strona internetowa jest dostępna dla klientów przez całą dobę, 7 dni w tygodniu. Dzięki temu klienci mogą dowiedzieć się więcej o firmie i jej produktach w dogodnym dla siebie czasie, co zwiększa szansę na konwersję",
    },
    {
      number: 4,
      title: "Łatwa aktualizacja informacji",
      desc: "Profesjonalna strona internetowa umożliwia szybkie i łatwe aktualizowanie informacji o produktach, usługach, cenach czy kontaktach. Dzięki temu firma może błyskawicznie reagować na zmiany na rynku i utrzymywać swoją ofertę zawsze aktualną i atrakcyjną dla klientów.",
    },
    {
      number: 5,
      title: "Możliwość zbierania danych i analizy",
      desc: "Poprzez narzędzia analityczne, takie jak Google Analytics, właściciele stron mogą śledzić zachowania użytkowników na stronie, analizować ruch, pozyskiwać dane demograficzne o swojej publiczności itp. Te informacje mogą być wykorzystane do lepszego zrozumienia klientów i dostosowywania oferty do ich potrzeb.",
    },
    {
      number: 6,
      title: "Usprawnienie komunikacji z klientami",
      desc: "Strona internetowa umożliwia łatwy kontakt z klientami poprzez formularze kontaktowe, czaty online, integracje z mediach społecznościowych itp. To ułatwia komunikację i współpracę z klientami, co może przyczynić się do budowy lojalności i zwiększenia satysfakcji klientów.",
    },
  ];

  return (
    <>
      <Head>
      <title>
          Strona Internetowa - Tomaszów Lubelski,
          Zamość, Lublin,
        </title>
      </Head>
      <section>
        <header className="flex flex-col md:flex-row items-center justify-between cnt font-sans py-14">
          <div className="md:w-[40%] md:mr-6 order-2 md:order-1">
            <h1 className="text-bgColor leading-9 mt-6 font-semibold font-sans text-3xl md:text-3xl xl:text-5xl mb-2 tracking-wide">
              <span className="text-customColor">Strona internetowa</span> -
              znam sekret wyróżnienia Twojego biznesu
            </h1>
            <p className="text-gray-700 text-lg mb-6 mt-4 tracking-wide">
              Zaprojektuje i stworzę stronę internetową, która wyróżni Twoją
              firmę w cyfrowym świecie.
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
            <h2 className="text-[#2f3d66] text-4xl md:text-4xl xl:text-5xl">
              Profesjonalne strony internetowe dla firm.
            </h2>

            <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
              W dzisiejszym dynamicznym świecie, strona internetowa jest
              kluczowym narzędziem, które pozwala firmom na osiągnięcie sukcesu
              w erze cyfrowej. Posiadanie strony internetowej otwiera przed
              firmą wiele możliwości.
            </p>
            <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
              Strona działa przez całą dobę, siedem dni w tygodniu, co oznacza,
              że klient ma dostęp do informacji o firmie o dowolnej porze,
              niezależnie od godzin pracy. To elastyczność, którą zapewnia
              nowoczesna technologia.
            </p>
            <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
              Dobrze zaprojektowana strona internetowa pomaga budować wizerunek
              i markę firmy, ułatwia komunikację z klientami oraz zarządza
              wszelkimi informacjami dotyczącymi produktów, usług, cen i
              kontaktów.
            </p>
            <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
              Strona internetowa pozwala również lepiej zrozumieć klientów,
              dzięki narzędziom analitycznym można monitorować ruch na stronie
              internetowej, co pozwala śledzić obecność i czas spędzany przez
              klientów na witrynie oraz dostosować pod to odpowiednią strategię
              marketingową.{" "}
            </p>
          </motion.div>
        </div>

        <div className="font-sans bg-slate-50 py-4 mt-20">
          <div className="cnt mx-auto flex flex-col mt-4 py-6 lg:py-14">
            <div className="w-full text-center">
              <h2 className="text-gray-700 text-3xl md:text-xl xl:text-5xl font-bold">
                <span className="text-customColor">Dlaczego</span> Twoja firma
                potrzebuje unikalnej strony internetowej?
              </h2>
              <p className="text-gray-600 mt-3 text-lg md:text-base tracking-wide w-full md:max-w-[90%] lg:max-w-[80%] mx-auto">
                Moja specjalność to tworzenie wyjątkowych stron internetowych,
                które stanowią kluczową część sukcesu każdej firmy w dzisiejszym
                cyfrowym świecie.
              </p>
              <div className="mt-8 flex flex-row  flex-wrap gap-x-8 ">
                {data.map((item, index) => (
                  <div
                    key={index}
                    className=" flex flex-col mt-6 border max-w-[90%] mx-auto border-customColor bg-white p-5 rounded-xl"
                  >
                    <div className="text-customColor text-left text-xl">
                      <span className="bg-customColor py-1 px-3 rounded-md text-white">
                        {item.number}
                      </span>
                      <span className="ml-3 text-gray-700">{item.title}</span>
                    </div>
                    <span className="text-gray-600 mt-2 text-left font-light md:text-lg tracking-wide">
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <OfferPageTypes />
        <FreeProjectEstimation />
        <WhyChooseUs />
        <Acordion />
      </section>
    </>
  );
};

export default Websites;
