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
    <div className="cnt mx-auto mb-8 lg:mb-14 mt-24 lg:mt-16 px-2">
      <div className="flex flex-col items-center mt-28">
        <h2 className="text-center rounded-lg text-[#4f7cf7] uppercase font-[600] tracking-wide text-lg  mb-2">
          {title}
        </h2>

        <p className="text-center max-w-full  lg:max-w-[80%] font-bold mx-auto tracking-wide text-[1rem] lg:text-3xl xl:text-4xl leading-7 text-customColor font-sans  mb-8 lg:mb-10">
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
                <h2 className="mt-8 text-[#000] font-sans text-[1.5rem] font-[400]">
                  {item.title}
                </h2>
                <p className="text-gray-500 text-[0.875rem] lg:text-[0.9rem] xl:text-[1.1rem] font-sans mt-2 mb-4 max-w-[90%] mx-auto leading-8">
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
