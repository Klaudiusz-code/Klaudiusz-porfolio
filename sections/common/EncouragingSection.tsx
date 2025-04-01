"use client";

import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
}

interface EncouragingSectionProps {
  title: string;
  services: Service[];
}

const ServiceCard = ({
  service,
  isFlipped,
  onClick,
}: {
  service: Service;
  isFlipped: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className="cursor-pointer relative hover:scale-105 transition-transform duration-300"
      style={{ perspective: "1000px" }}
      onClick={onClick}
    >
      <div
        className="relative w-full h-64 transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="absolute inset-0 bg-white rounded-xl border border-gray-100 shadow-lg flex flex-col items-center justify-center p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="bg-blue-100 rounded-full p-3 mb-4">
            <FaCheck className="text-blue-500 text-2xl" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800 text-center">
            {service.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Kliknij, aby zobaczyć szczegóły
          </p>
        </div>
        <div
          className="absolute inset-0 bg-white rounded-xl border border-gray-100 shadow-lg flex items-center justify-center p-6"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-gray-700 text-center">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

const EncouragingSection = ({ title, services }: EncouragingSectionProps) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setFlippedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-customColor mb-12">
          {title}
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              isFlipped={flippedIndex === index}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EncouragingSection;
