import React, { useState } from "react";
import AcordinUi from "./AcordinUi";

const Acordion = () => {
  return (
    <div>
      <AcordinUi
        title="Jakie technologie i języki programowania stosuję w swoich projektach?"
        answer="Nasze projekty opieramy na najnowszych technologiach i językach programowania, takich jak HTML5, CSS3, JavaScript, oraz korzystamy z popularnych frameworków, aby dostarczyć innowacyjne i responsywne strony internetowe."
      />
      <AcordinUi
        title="Czy mogę samodzielnie zarządzać treścią mojej strony po jej utworzeniu?"
        answer="Tak, projektuje strony internetowe z myślą o łatwym zarządzaniu treściami. Oferuje również szkolenie w obszarze korzystania z systemów zarządzania treścią (CMS), aby umożliwić klientom samodzielne aktualizowanie treści."
      />
      <AcordinUi
        title="Czy oferuje także hosting i utrzymanie stron internetowych?"
        answer="Obecnie skupiam się głównie na projektowaniu stron internetowych. Oferuję kompleksowe wsparcie w utrzymaniu i rozwijaniu Twojej witryny. Jeśli chodzi o hosting, chętnie doradzę Ci w wyborze najbardziej odpowiedniej opcji"
      />
      <AcordinUi
        title="Czy moja strona będzie dostosowana do urządzeń mobilnych?"
        answer="Tak, projektuje strony internetowe z myślą o responsywności, co oznacza, że są one zoptymalizowane dla różnych urządzeń, w tym smartfonów i tabletów."
      />
      <AcordinUi
        title="Jak długo trwa proces tworzenia strony internetowej?"
        answer="Czas potrzebny do stworzenia strony internetowej zależy od skomplikowania projektu. Oferuje elastyczne harmonogramy i trzymam się ustalonych terminów."
      />
    </div>
  );
};

export default Acordion;
