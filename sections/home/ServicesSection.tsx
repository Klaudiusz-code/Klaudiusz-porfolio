import React from "react";

type Service = {
  title: string;
  description: string;
  icon: string; 
  image?: {
    sourceUrl?: string
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
      <div className="sm:max-w-[60%] md:max-w-[80%] mx-auto flex flex-wrap justify-center gap-12">
        {services?.map((service, index: number) => {
          const imageUrl = service.image?.sourceUrl;
          const imageAlt = service.title;

          return (
            <div
              key={index}
              className="flex flex-col items-center text-center text-customColor rounded-lg min-h-[280px] w-full lg:max-w-[300px] bg-white shadow-lg transition-all duration-300 shadow-[#e0e0e0] hover:shadow-gColor"
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
              <h3 className="mt-1 text-[26px] text-gray-700 font-[400]">
                {service.title}
              </h3>
              <p className="max-w-[90%] text-gray-500 font-light text-[0.9rem]">
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
