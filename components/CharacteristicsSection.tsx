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
    <div className="py-4 mt-4 md:mt-16 lg:mt-28">
      <div className="container mx-auto grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
        {characteristics.map((item, index) => (
          <div
            key={item.id}
            className={`text-[#666666] p-4 flex flex-col justify-center items-start ${
              index > 0 ? "md:border-l border-gray-200" : ""
            }`}
          >
            <div className="mb-2">
              <span className="inline-block text-[#666666] text-xs sm:text-sm font-medium uppercase rounded-md py-1 mb-1">
                {item.hashtag}
              </span>
              <h3 className="text-sm sm:text-base lg:text-xl text-gray-800 font-semibold mb-1 py-1 tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CharacteristicsSection;
