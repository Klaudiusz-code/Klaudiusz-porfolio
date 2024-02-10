import React from "react";
import Image from "next/image";
import OffertsWebsite from "@/public/OffertsWebsite.png";
import OffertsStore from "@/public/OffertsStore.png";
import OffertsSeo from "@/public/OffertsSeo.png";
import OffertsCopyWriting from "@/public/OffertsCopyWriting.png";
import OffertsModernization from "@/public/OffertsModernization.png";
import CustomButton from "./CustomButton";

const sectionsData = [
  {
    image: OffertsWebsite,
    title: "Strona Internetowa",
    description:
      "Ze mną możesz stworzyć unikalną i funkcjonalną stronę internetową, która przyciągnie uwagę Twoich klientów i zapewni sukces Twojej działalności. Zadbam o każdy detal, abyś mógł skupić się na prowadzeniu swojej jednoosobowej firmy.",
    buttonText: "Sprawdź Ofertę Strony",
    buttonLink: "/websites",
  },
  {
    image: OffertsStore,
    title: "Sklep Internetowy",
    description:
      "Rozpocznij sprzedaż online dzięki naszemu sklepowi internetowemu. Z moją pomocą Twoje produkty będą dostępne dla klientów na całym świecie. Zaufaj mnie, abyś mógł rozwijać swoją jednoosobową firmę w e-commerce.",
    buttonText: "Sprawdź Ofertę Sklepu",
    buttonLink: "/online-stores",
  },
  {
    image: OffertsSeo,
    title: "SEO POZYCJONOWANIE",
    description:
      "Dzięki usługom SEO pozycjonowanie Twojej strony internetowej będzie łatwiejsze. Możesz być pewien, że Twoja jednoosobowa firma będzie widoczna dla większej liczby potencjalnych klientów, co przyczyni się do wzrostu ruchu i sprzedaży.",
    buttonText: "Napisz do mnie!",
    buttonLink: "/contact",
  },
  {
    image: OffertsCopyWriting,
    title: "CopyWriting",
    description:
      "Pomogę Ci przygotować unikalne i przekonujące treści, które przyciągną uwagę klientów i zwiększą zaangażowanie na Twojej stronie internetowej. Dzięki temu będziesz mógł skoncentrować się na prowadzeniu swojej jednoosobowej firmy.",
    buttonText: "Napisz do mnie!",
    buttonLink: "/contact",
  },
  {
    image: OffertsModernization,
    title: "Modernizacja Strony",
    description:
      "Czas na odświeżenie swojej strony internetowej! Z moją pomocą zaktualizujesz swój serwis, dostosujesz go do najnowszych standardów i zachwycisz swoich klientów. Skorzystaj z oferty modernizacji i rozwijaj swoją jednoosobową firmę.",
    buttonText: "Napisz do mnie!",
    buttonLink: "/contact",
  },
];

const OffertsHome = () => {
  return (
    <div className="bg-customColor min-h-[600px] mt-28 font-sans">
      <div className="cnt mx-auto py-6">
        {sectionsData.map((section, index) => (
          <div
            className="flex flex-col lg:flex-row mt-6 justify-center lg:justify-between items-center"
            key={index}
          >
            <div
              className={`flex justify-center md:max-w-[70%] lg:max-w-[50%] lg:order-${index % 2 === 0 ? 1 : 2}`}
            >
              <Image
                src={section.image}
                width={500}
                height={200}
                className="mx-auto group-hover:-translate-y-40 transition-all duration-500"
                alt="Korzysci Ze Strony Internetowej"
              />
            </div>
            <div
              className={`flex flex-col text-center md:text-left max-w-[90%] lg:max-w-[50%] lg:order-${index % 2 === 0 ? 2 : 1} group`}
            >
              <h1 className="text-[2.2rem] text-white font-[400]">
                {section.title}
              </h1>
              <p className="mt-2 text-[1rem] font-thin text-[#dbdbdb] leading-7 mb-3 tracking-wide">
                {section.description}
              </p>
              <CustomButton
                text={section.buttonText}
                link={section.buttonLink}
                bgColor="#fff"
                textColor="#0077cc"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OffertsHome;
