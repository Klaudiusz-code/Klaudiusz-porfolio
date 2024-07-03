import React from "react";
import { FaCheck } from "react-icons/fa";
interface Service {
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
    <section className="container mx-auto mt-16 md:mt-20 lg:mt-28 mb-12 px-4">
      <h2 className="text-[#4f7cf7] uppercase font-bold tracking-wide text-2xl text-center">
        {title}
      </h2>
      <div className="max-w-[60rem] mx-auto px-1 mt-8">
        <ul className="divide-y divide-gray-200">
          {services.map((service, index) => (
            <li key={index} className="py-4 flex items-start">
              <span className="text-green-600 text-xl mt-1 mr-4">
                <FaCheck />
              </span>
              <div className="ml-2 md:ml-0">
                <h3 className="text-lg font-semibold mb-1 text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-800">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EncouragingSection;
