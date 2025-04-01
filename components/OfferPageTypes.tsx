"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";
import { FaCheck } from "react-icons/fa";
import websblog from "@/public/webs.jpg";
import blogs from "@/public/blog.jpg";
import one from "@/public/onepe.jpg";

const images = [one, websblog, blogs];

interface OfferPageTypesProps {
  data?: {
    title?: string | null;
    items?: Array<{
      title?: string | null;
      description?: string | null;
      benefits?: string[];
    } | null> | null;
  } | null;
}

function OfferPageTypes({ data }: OfferPageTypesProps) {
  return (
    <section className="w-full mx-auto mt-8 px-4 lg:px-2">
      <h3 className="text-center text-3xl font-semibold text-customColor mb-2">
        {data?.title || "Strony Internetowe"}
      </h3>

      <div className="flex flex-col">
        {(data?.items ?? []).map((offer, index) => (
          <div
            key={index}
            className={`w-full ${
              index % 2 === 0 ? "bg-white" : "bg-gray-50"
            } border-b border-gray-200`}
          >
            <div className="cnt mx-auto w-full max-w-[1200px] py-12">
              <div
                className={`flex flex-col lg:flex-row items-center w-full px-4 lg:px-8 gap-8 lg:gap-12 ${
                  index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full lg:w-1/2 h-96 relative rounded-lg overflow-hidden">
                  <Image
                    src={images[index % images.length]}
                    alt={offer?.title || "Oferta"}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>

                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold mb-4">
                    {offer?.title}
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    {offer?.description}
                  </p>

                  {offer?.benefits && (
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-4">Korzyści:</h4>
                      <ul className="space-y-3">
                        {offer.benefits.map((benefit, i) => (
                          <li
                            key={i}
                            className="flex items-center text-sm text-gray-700"
                          >
                            <FaCheck className="text-green-500 mr-3 w-3 h-3" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6">
                    <CustomButton
                      bgColor="#0077cc"
                      textColor="#fff"
                      text="Darmowa Wycena Projektu"
                      link="/kontakt"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default OfferPageTypes;
