import React from "react";

interface Service {
  icon?: {
    sourceUrl: string;
    mediaDetails?: {
      height: number;
      width: number;
    };
  };
  title: string;
  description: string;
}

type EncouragingSectionProps = {
  title: string;
  services: Service[];
};

const EncouragingSection: React.FC<EncouragingSectionProps> = ({
  title,
  services,
}) => {
  return (
    <section className="cnt w-full mx-auto text-center mt-16 md:mt-20 lg:mt-28 mb-12">
      <span className="px-2 py-3 uppercase text-[#4f7cf7] font-mono tracking-wide text-lg font-[600] leading-7 mt-12">
        {title}
      </span>
      <div className="mt-14 flex flex-row flex-wrap justify-center gap-x-8 gap-y-4">
        {services.map((service: Service, index: number) => (
          <div
            className="flex items-center flex-col mt-6 text-center px-2 py-2 rounded-lg min-h-[300px] max-w-[350px] shadow-lg transition-all duration-300 shadow-[#e0e0e0] hover:shadow-gColor"
            key={index}
          >
            {service.icon && service.icon.sourceUrl && (
              <span className="text-[3rem] mt-2 lg:text-[3rem] pt-1 text-customColor">
                <img src={service.icon.sourceUrl} alt={service.title} />
              </span>
            )}
            <h3 className="mt-3 text-[1.7rem] md:text-[1.2rem] lg:text-[1.4rem] text-[#000] font-[400] font-sans">
              {service.title}
            </h3>
            <p className="max-w-[80%] mt-2 lg:mt-3 text-gray-500 leading-7 text-[0.8rem] md:text-[1rem] lg:text-[1.1rem]">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EncouragingSection;
