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
    <div className="py-6 mt-4 lg:mt-0">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {characteristics.map((item) => (
          <div
            key={item.id}
            className="bg-blue-400 text-white border border-blue-600 rounded-lg overflow-hidden shadow-md p-4 sm:p-5 md:p-4 lg:p-5"
          >
            <div className="mb-4">
              <span className="block bg-blue-500 text-white text-xs font-bold uppercase rounded-md px-2 py-1 mb-3 inline-block">{item.hashtag}</span>
              <h3 className="text-sm sm:text-base md:text-lg lg:text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm md:text-sm lg:text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacteristicsSection;
