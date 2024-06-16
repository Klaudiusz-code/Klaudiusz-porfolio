import React from "react";
import { IoIosTimer } from "react-icons/io";
import { GiChart, GiReceiveMoney } from "react-icons/gi";

interface Service {
  icon: string;
  title: string;
  description: string;
}


const iconsKeyMap: Record<string, React.ElementType> = {
  IoIosTimer: IoIosTimer,
  GiChart: GiChart,
  GiReceiveMoney: GiReceiveMoney
};

const getIconByString = (iconKey: string) => {
  const IconComponent = iconsKeyMap[iconKey];
  return IconComponent ? <IconComponent /> : null;
};

type EncouragingSectionProps = {
  title: string;
  services: Service[]; 
};

const EncouragingSection: React.FC<EncouragingSectionProps> = ({
  title,
  services
}: EncouragingSectionProps) => {
  return (
    <section className="cnt w-full mx-auto text-center mt-16 md:mt-20 lg:mt-28 mb-12">
      <span className="px-2 py-3 uppercase text-[#4f7cf7] font-mono tracking-wide text-lg font-[600] leading-7 mt-12">
        {title}
      </span>

      <div className="mt-14 flex flex-row flex-wrap justify-center gap-x-8 gap-y-4">
        {services.map((service: Service, index: number) => {
          const iconKey = service?.icon?.split(":")[0] ?? null;

          return (
            <div
              className="flex items-center flex-col mt-6 text-center px-2 py-2 rounded-lg min-h-[300px] max-w-[350px] shadow-lg transition-all duration-300 shadow-[#e0e0e0] hover:shadow-gColor"
              key={index}
            >
              <span className="text-[3rem] mt-2 lg:text-[3rem] pt-1 text-customColor">
                {iconKey && getIconByString(iconKey)}
              </span>
              <h1 className="mt-3 text-[1.7rem] md:text-[1.2rem] lg:text-[1.4rem] text-[#000] font-[400] font-sans">
                {service.title}
              </h1>
              <p className="max-w-[80%] mt-2 lg:mt-5 text-gray-500 leading-7 text-[0.8rem] md:text-[1rem] lg:text-[1.1rem]">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EncouragingSection;
