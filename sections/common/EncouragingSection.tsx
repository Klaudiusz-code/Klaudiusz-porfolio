import React from "react";
import { FaCheck } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
}

interface EncouragingSectionProps {
  title: string;
  services: Service[];
}

const EncouragingSection: React.FC<EncouragingSectionProps> = ({
  title,
  services,
}) => {
  return (
    <section className="container mx-auto mt-16 md:mt-20 lg:mt-28 mb-12 px-4">
      <div className="text-center mb-16">
        <h2 className="text-2xl md:text-3xl font-bold text-customColor mb-4">
          {title}
        </h2>
      </div>

      <div className="space-y-12">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 sm:p-8 md:p-10 rounded-2xl shadow-lg transition-all duration-500 max-w-6xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center gap-8 mb-8">
              <div className="relative w-16 h-16 sm:w-16 sm:h-full bg-gradient-to-b  rounded-l-lg mb-4 sm:mb-0">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-400 flex items-center justify-center bg-transparent rounded-full text-2xl shadow-lg">
                  <FaCheck />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-lg">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EncouragingSection;
