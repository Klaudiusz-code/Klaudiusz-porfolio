import React from "react";

const characteristics = [
  {
    id: 1,
    hashtag: "#Pracowity",
    title: "Jestem pracowity",
    description: "Daję z siebie wszystko!",
  },
  {
    id: 2,
    hashtag: "#SzybkiKontakt",
    title: "Szybko odpowiadam",
    description: "Napisz do mnie już teraz!",
  },
  {
    id: 3,
    hashtag: "#Kreatywny",
    title: "Jestem kreatywny",
    description: "Tworzę unikalne rozwiązania.",
  },
  {
    id: 4,
    hashtag: "#OdkrywamPotencjałWKodzie",
    title: "Kodowanie z pasją",
    description: "Odkrywam potencjał w każdym wierszu kodu.",
  },
];

const CharacteristicsSection = () => {
  return (
    <div className="py-4 mt-4 lg:mt-0">
      <div className="container mx-auto grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-8 md:gap-4">
        {characteristics.map((item) => (
          <div
            key={item.id}
            className="bg-blue-600 text-white border border-blue-700 rounded-lg shadow-md 
                       p-2 sm:p-2 md:p-2 lg:p-3 xl:p-3 flex flex-col justify-center items-start min-h-[80px] sm:min-h-[80px] md:min-h-[100px] lg:min-h-[105px] xl:min-h-[125px]"
          >
            <div className="mb-1 sm:mb-1 md:mb-1 lg:mb-1 xl:mb-1">
              <span className=" bg-blue-500 inline-block text-white text-[8px] sm:text-[9px] md:text-[9px]  xl:text-[11px] font-bold uppercase rounded-md px-1 py-1 sm:px-1 sm:py-0.5 mb-1">
                {item.hashtag}
              </span>
              <h3 className="text-[10px] sm:text-[11px] md:text-[9px] lg:text-[11px] xl:text-[15px] font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[13px]">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacteristicsSection;
