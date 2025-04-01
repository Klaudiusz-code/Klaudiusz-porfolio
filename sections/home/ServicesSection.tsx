import React from "react";

type Service = {
  title: string;
  description: string;
  icon: string;
  image?: {
    sourceUrl?: string;
    mediaDetails: {
      height: number;
      width: number;
    };
  };
};

type ServicesSectionProps = {
  services: Service[] | null | undefined;
};

const ServicesSection = ({ services }: ServicesSectionProps) => {
  return (
    <section className="cnt mt-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mx-auto">
        {services?.map((service, index: number) => {
          const imageUrl = service.image?.sourceUrl;
          const imageAlt = service.title;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center text-customColor rounded-lg min-h-[280px] w-full bg-white border border-gray-100 shadow-lg transition-all duration-300 shadow-[#e0e0e0]"
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt={imageAlt}
                  className="pt-2 mt-1"
                  loading="lazy"
                  style={{ height: service.image?.mediaDetails.height }}
                />
              ) : (
                <div className="pt-2 mt-1 h-[200px] w-[200px] flex items-center justify-center bg-gray-200">
                  Brak zdjęcia
                </div>
              )}
              <h3 className="mt-1 text-[26px] text-gray-600 font-monserat font-[500]">
                {service.title}
              </h3>
              <p className="max-w-[90%] mt-2 text-gray-600 font-monserat font-normal text-[0.9rem]">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServicesSection;
