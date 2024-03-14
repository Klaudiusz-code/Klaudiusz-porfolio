import React, { useState } from "react";
import AcordinUi from "./AcordinUi";

const Acordion = () => {
  return (
    <div className="cnt mb-16 lg:mt-24">
      <div className="flex flex-col lg:flex-row justify-center">
        <div className="mb-10 w-full mt-20">
          <h3 className="text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] font-sans font-[400] text-[#10152e]">
            <span className="text-customColor font-bold">Najczęściej</span> Zadawane Pytania
          </h3>
          <p className="text-bgColor font-[400] text-[1.3rem] md:text-[1.5rem] lg:text-[1.8rem] mt-2 font-sans">
            Sprawdź o co najczęsciej pytają klienci
          </p>
        </div>
        <div>
          <AcordinUi
            title="Jakie technologie i języki programowania stosuję w swoich projektach?"
            answer="Moje projekty opieram na najnowszych technologiach i językach programowania, takich jak HTML5, CSS3, JavaScript, oraz korzystam z popularnych frameworków, aby dostarczyć innowacyjne i responsywne strony internetowe."
          />
          <AcordinUi
            title="Czy mogę samodzielnie zarządzać treścią mojej strony po jej utworzeniu?"
            answer="Tak, projektuje strony internetowe z myślą o łatwym zarządzaniu treściami. Oferuje również szkolenie w obszarze korzystania z systemów zarządzania treścią (CMS), aby umożliwić klientom samodzielne aktualizowanie treści."
          />
          <AcordinUi
            title="Czy oferuje także hosting i utrzymanie stron, sklepów internetowych?"
            answer="Obecnie skupiam się głównie na projektowaniu stron i sklepów internetowych. Oferuję kompleksowe wsparcie w utrzymaniu i rozwijaniu Twojej witryny. Jeśli chodzi o hosting, chętnie doradzę Ci w wyborze najbardziej odpowiedniej opcji"
          />
          <AcordinUi
            title="Czy moja strona lub sklep będzie dostosowany do urządzeń mobilnych?"
            answer="Tak, moje projekty kodowane są z myślą o responsywności, co oznacza, że są one zoptymalizowane dla różnych urządzeń, w tym smartfonów i tabletów."
          />
          <AcordinUi
            title="Jak długo trwa proces tworzenia strony internetowej?"
            answer="Czas potrzebny do stworzenia strony internetowej zależy od skomplikowania projektu. Oferuje elastyczne harmonogramy i trzymam się ustalonych terminów."
          />
        </div>
      </div>
    </div>
  );
};

export default Acordion;
