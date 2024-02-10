import React, { useState } from "react";
import AcordinUi from "./AcordinUi";

const Acordion = () => {
  return (
    <div className="cnt">
      <div className="text-center mb-10 mt-20">
        <h3 className="text-[2.2rem] md:text-[2.5rem] lg:text-[3rem] font-sans font-[600] text-[#10152e]">
          FAQ
        </h3>
        <p className="text-[#10152e] font-[400] text-[1.5rem] md:text-[1.8rem] lg:text-[2rem] mt-2 font-sans">
          Najczęściej Zadawane Pytania.
        </p>
      </div>
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
  );
};

export default Acordion;
