import React from "react";
import Acordion from "@/components/Acordin/Acordion";
import ContactBaner from "@/components/ContactBaner";
import WhyChooseUs from "@/components/WhyChooseUs";
import { AiFillCheckSquare } from "react-icons/ai";
import CustomButton from "@/components/CustomButton";
import womanOnlineStores from "@/public/womanOnlineStores.jpg";
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
      <header className="flex flex-col md:flex-row items-center px-2 justify-between cnt font-sans py-14">
        <div className="md:w-[40%] md:mr-6 order-2 md:order-1">
        <h1 className="text-bgColor leading-9 mt-6 font-semibold font-sans text-3xl md:text-3xl xl:text-5xl mb-2 tracking-wide">
            <span className="text-[#0077cc]">Sklep internetowy</span> - Twoje
            centrum sprzedaży online
          </h1>
          <p className="text-[#666] text-lg mb-6 mt-4 tracking-wide">
            Wdrożę dla Ciebie nowoczesny sklep internetowy, który nie tylko
            przyciągnie klientów, ale również zwiększy Twoją sprzedaż w świecie
            e-commerce.
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
            src={womanOnlineStores}
            alt="kobieta sprawdzająca stronę"
            className="rounded-lg max-w-full h-auto"
          />
        </div>
      </header>

      <div className="cnt mt-6 md:mt-16 lg:mt-24">
        <div className="w-full mt-3  md:mt-8 xl:mt-10 mb-6">
          <h2 className="text-[#2f3d66] text-4xl md:text-4xl xl:text-5xl">
            Profesjonalne sklepy internetowe dla Twojej firmy.
          </h2>

          <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
            W dzisiejszym szybko zmieniającym się świecie, sklep internetowy
            jest nieodzownym narzędziem, które pozwala firmom osiągnąć sukces w
            erze e-commerce. Posiadanie własnego sklepu online otwiera przed
            firmą wiele możliwości.
          </p>

          <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
            Sklep internetowy działa przez całą dobę, siedem dni w tygodniu, co
            oznacza, że klient ma dostęp do oferty firmy o każdej porze,
            niezależnie od godzin pracy. To elastyczność, którą zapewnia
            nowoczesna technologia.
          </p>

          <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
            Profesjonalnie zaprojektowany sklep internetowy pomaga w budowaniu
            wizerunku i marki firmy, ułatwiając komunikację z klientami oraz
            zarządzając wszelkimi informacjami dotyczącymi produktów, usług, cen
            i kontaktów.
          </p>

          <p className="mt-3 text-slate-600 w-full sm:max-w-[90%] md:max-w-[80%] leading-7 text-[1.1rem] font-sans">
            Sklep internetowy umożliwia również lepsze zrozumienie klientów.
            Dzięki narzędziom analitycznym można monitorować ruch na stronie
            sklepu, co pozwala śledzić obecność i czas spędzany przez klientów
            na witrynie oraz dostosować odpowiednią strategię marketingową.
          </p>
        </div>
      </div>

      <div className="min-h-[500px] bg-customColor  shadow-lg  shadow-[#cfcfcf] group relative">
        <div className="cnt mx-auto flex flex-row items-center justify-between font-sans mt-28 p-8 md:p-10 lg:px-3 lg:py-16">
          <div className="w-full sm:max-w-[40%] md:max-w-[50%] ">
            <h2 className="text-white text-[1.8rem] md:text-[1.6rem] xl:text-[2.4rem]">
              Korzyści z Posiadania Sklepu Online
            </h2>
            <ul className="mt-5 list-disc pl-4 lg:pl-6">
              {korzysciSklepuInternetowego.map((korzysc) => (
                <li
                  key={korzysc.id}
                  className="text-[0.9rem] sm:text-[1.1rem] lg:text-[1.2rem] mt-3 text-gray-300 tracking-wide leading-6"
                >
                  {korzysc.text}
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
      </div>
      <WhyChooseUs />
      <Acordion />
      <ContactBaner />
    </section>
  );
};

export default onlineStores;
