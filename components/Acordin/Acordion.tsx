import React, { useState } from "react";
import AcordinUi from "./AcordinUi";

const Acordion = () => {
  return (
    <div className="p-4 rounded-lg">
      <AcordinUi
        title="Wygodne Zakupy Z Dowolnego Miejsca"
        answer="Sklepy internetowe umożliwiają łatwe i szybkie dokonywanie zakupów z dowolnego miejsca, co eliminuje potrzebę wychodzenia z domu. Komfortowy proces zakupowy dostępny 24/7"
      />
      <AcordinUi
        title="Bogaty Asortyment i Szeroki Wybór"
        answer="Sklepy online oferują ogromny wybór produktów i marek, umożliwiając klientom porównywanie opcji."
      />
      <AcordinUi
        title="Atrakcyjne Promocje i Zniżki"
        answer="Klienci mogą skorzystać z licznych promocji, rabatów i okazji, co pozwala zaoszczędzić pieniądze."
      />
      <AcordinUi
        title="Szybka Dostawa i Śledzenie Przesyłki"
        answer="Sklepy online zapewniają szybką dostawę, a klient ma możliwość śledzenia przesyłki w czasie rzeczywistym. "
      />
    </div>
  );
};

export default Acordion;
