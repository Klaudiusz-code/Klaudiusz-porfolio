import React from "react";

const CharacteristicsSection = () => {
  return (
    <div className="py-6 mt-10 lg:mt-0">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl">
        <div className="bg-blue-100 text-blue-900 rounded-lg overflow-hidden border border-blue-200">
          <div className="py-3 px-4">
            <span className="text-xs font-semibold">#Pracowity</span>
            <h3 className="text-lg font-semibold text-blue-900 mt-2">
              Jestem pracowity
            </h3>
            <p className="text-sm text-gray-700">Daję z siebie wszystko!</p>
          </div>
        </div>

        <div className="bg-green-100 text-green-900 rounded-lg overflow-hidden border border-green-200">
          <div className="py-3 px-4">
            <span className="text-xs font-semibold">#SzybkiKontakt</span>
            <h3 className="text-lg font-semibold text-green-900 mt-2">
              Szybko odpowiadam
            </h3>
            <p className="text-sm text-gray-700">Napisz do mnie już teraz!</p>
          </div>
        </div>

        <div className="bg-yellow-100 text-yellow-900 rounded-lg overflow-hidden border border-yellow-200">
          <div className="py-3 px-4">
            <span className="text-xs font-semibold">#Kreatywny</span>
            <h3 className="text-lg font-semibold text-yellow-900 mt-2">
              Jestem kreatywny
            </h3>
            <p className="text-sm text-gray-700">
              Tworzę unikalne rozwiązania.
            </p>
          </div>
        </div>

        <div className="bg-purple-100 text-purple-900 rounded-lg overflow-hidden border border-purple-200">
          <div className="py-3 px-4">
            <span className="text-xs font-semibold">#Innowacyjny</span>
            <h3 className="text-lg font-semibold text-purple-900 mt-2">
              Jestem innowacyjny
            </h3>
            <p className="text-sm text-gray-700">
              Stale poszukuję nowych rozwiązań.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacteristicsSection;
