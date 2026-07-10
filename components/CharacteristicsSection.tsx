"use client";

import React from "react";

const characteristics = [
  { id: 1, hashtag: "#Kontakt", title: "Zawsze odbieram", description: "Dzwonisz lub piszesz – ja jestem na miejscu. Bez sekretarek, bez pośredników." },
  { id: 2, hashtag: "#Kod", title: "Porządek w plikach", description: "Nie piszę na szybko. Struktura kodu jest jasna, bezpieczna i łatwa do rozbudowy." },
  { id: 3, hashtag: "#Kwota", title: "Jedna cena", description: "Kosztorys zrobiony na starcie to cena ostateczna. Nie dopłacasz za poprawki." },
  { id: 4, hashtag: "#Czas", title: "Szacuje realnie", description: "Terminy są możliwe do spełnienia. Dostajesz to, co zamówiłeś, wtedy kiedy trzeba." },
];

const CharacteristicsSection = () => {
  return (
    // Usunięto bg-white i górne py-24, bo to teraz robi kontener rodzica (Wyspa)
    <div className="pb-24 relative text-slate-900" id="charakterystyki">
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-10 gap-x-8 md:gap-12">
          {characteristics.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col gap-4 pl-6 border-l-2 border-transparent hover:border-[#6e92f2] hover:bg-slate-50 -ml-2 pr-2 py-2 rounded-r-xl transition-all duration-300 group"
            >
              <span className="self-start text-[10px] font-mono font-bold uppercase tracking-wider transition-all duration-300 group-hover:bg-[#6e92f2] group-hover:text-white px-2 py-1 rounded text-slate-400">
                {item.hashtag}
              </span>

              <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-[#6e92f2] transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="max-w-xl">
            <h4 className="text-xl font-bold text-slate-900 mb-1">
              Powiedz mi, co masz na myśli.
            </h4>
            <p className="text-slate-500 text-sm leading-relaxed">
              Wypełnij brief. Nie musisz znać się na technologiach – to moja domena. Wystarczy, że powiesz, co ma powstać.
            </p>
          </div>

          <a
            href="/formularz-briefu"
            className="inline-flex items-center gap-4 text-[#6e92f2] font-bold uppercase tracking-widest text-sm hover:gap-6 transition-all duration-300 group"
          >
            Wypełnij Brief
            <span className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-[#6e92f2] group-hover:text-white transition-colors duration-300">
              <span className="text-xl leading-none">&rarr;</span>
            </span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default CharacteristicsSection;