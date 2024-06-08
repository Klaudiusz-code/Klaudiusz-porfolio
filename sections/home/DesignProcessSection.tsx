'use client';

import ButtonContact from "@/components/ButtonContact";

type DesignProcessSectionProps = {
  title: string;
  description: string;
  items: {
    num: string;
    title: string;
    description: string;
  }[];
};

const DesignProcessSection = ({ title, description, items }: DesignProcessSectionProps) => {
  return (
    <div className="cnt mx-auto mb-8 lg:mb-14 mt-24 lg:mt-14 px-2">
      <div className="flex flex-col items-center mt-28">
        <h2 className="text-center rounded-lg p-3 text-[#4d4c4c] text-2xl lg:text-4xl xl:text-5xl font-bold mb-6 font-sans lg:mb-8">
          {title}
        </h2>

        <p className="text-center max-w-full  lg:max-w-[80%] mx-auto text-[1rem] lg:text-xl xl:text-1xl leading-7 text-gColor font-sans font-[400] mb-8 lg:mb-10">
          {description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-8 lg:gap-8 mx-auto">
          {items.map((item: any, index: number) => (
            <div
              key={index}
              className="relative flex items-center flex-col flex-wrap justify-center mt-6 text-center p-2 lg:p-4 bg-white shadow-lg  shadow-[#e0e0e0] hover:shadow-gColor  max-w-[380px] min-h-[350px] xl:min-h-[420px] rounded-lg  group"
            >
              <div className="absolute -top-8 bg-customColor h-16 w-20 flex items-center justify-center  rounded-lg group-hover:bg-bgColor transition-all duration-300">
                <span className="text-white font-sans font-[600] text-[1.5rem]">
                  {item.num}
                </span>
              </div>
              <div>
                <h2 className="mt-8 text-[#4d4c4c] font-sans text-[1.5rem] font-[400]">
                  {item.title}
                </h2>
                <p className="text-[#9b9b9b] text-[0.875rem] lg:text-[0.9rem] xl:text-[1.1rem] font-sans mt-2 mb-4 max-w-[90%] mx-auto leading-8">
                  {item.description}
                </p>
                {/* TODO: Przenieść przycisk do ACF! */}
                {index === 0 && <ButtonContact buttonText="Darmowa Wycena" />}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignProcessSection;
