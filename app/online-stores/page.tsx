import React from "react";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import createApolloClient from "@/apollo-client";

import WhyChooseUs from "@/components/WhyChooseUs";
import Acordion from "@/components/Acordion";
import CustomButton from "@/components/CustomButton";
import womanOnlineStores from "@/public/womanOnlineStores.jpg";

async function getData() {
  const client = createApolloClient();

  const onlineStoresQuery = gql`
    query OnlineStores {
      page(id: "cG9zdDoyNDU=") {
        onlieStores {
          hero {
            title
            description
            button {
              text
              url
            }
          }
        }
      }
    }
  `;

  const homeQuery = gql`
    query Home {
      page(id: "cG9zdDoyMw==") {
        home {
          whyme {
            title
            boxs {
              title
              description
            }
          }
          acordin {
            title
            description
            acordinItems {
              question
              answer
            }
          }
        }
      }
    }
  `;

  const onlineStoresData = await client.query({ query: onlineStoresQuery });
  const homeData = await client.query({ query: homeQuery });

  return {
    hero: onlineStoresData.data.page.onlieStores.hero,
    whyChooseUs: homeData.data.page.home.whyme,
    accordion: homeData.data.page.home.acordin,
  };
}

export default async () => {
  const { hero, whyChooseUs, accordion } = await getData();

  return (
    <>
      <Head>
        <title>Sklep Internetowy - Tomaszów Lubelski, Zamość, Lublin,</title>
      </Head>
      <section>
        <header className="flex flex-col md:flex-row items-center justify-between cnt font-sans py-14">
          <div className="md:w-[40%] md:mr-6 order-2 md:order-1">
            <h1 className="text-bgColor leading-9 mt-6 font-semibold font-sans text-3xl md:text-3xl xl:text-5xl mb-2 tracking-wide">
              {hero.title}
            </h1>
            <p className="text-gray-700 text-lg mb-6 mt-4 tracking-wide">
              {hero.description}
            </p>
            <CustomButton
              text={hero.button.text}
              bgColor="#0077cc"
              textColor="#fff"
              link={hero.button.url}
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

      {/* <div className="cnt mt-6 md:mt-16 lg:mt-24">
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
      </div> */}

      <div className="font-sans bg-slate-50 py-4 mt-20">
        <div className="cnt mx-auto flex flex-col mt-4 py-6 lg:py-14">
          <div className="w-full text-center">
            <h2 className="text-gray-700 text-3xl md:text-xl xl:text-5xl font-bold">
              <span className="text-customColor">Dlaczego</span> warto posiadać
              sklep internetowy?
            </h2>
            <p className="text-gray-600 mt-3 text-lg md:text-base tracking-wide w-full md:max-w-[90%] lg:max-w-[80%] mx-auto">
              Moja specjalność to tworzenie wyjątkowych sklepów internetowych,
              które są kluczowym elementem sukcesu każdego biznesu w dzisiejszym
              cyfrowym świecie.
            </p>
            {/* <div className="mt-8 flex flex-row  flex-wrap gap-x-8 ">
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
            </div> */}
          </div>
        </div>
      </div>
      <WhyChooseUs data={whyChooseUs} />
      <Acordion data={accordion} />
    </section>
    </>
  );
};
