import React from "react";
import Link from "next/link";
import { FaRegPaperPlane, FaRegCommentAlt, FaPhoneSquareAlt } from "react-icons/fa"; // Zmienione ikony

type Button = {
  label: string;
  url: string;
};

type EstimationSectionProps = {
  title: string;
  description: string;
  buttons: Button[];
};

const EstimationSection = ({
  title,
  description,
  buttons,
}: EstimationSectionProps) => {
  return (
    <div className="w-full min-h-[350px] flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-blue-600 p-8 mt-20 mb-14 font-sans border border-gray-200 rounded-xl shadow-lg">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl text-white font-bold mt-8 mb-4">{title}</h2>
        <p className="text-lg md:text-xl text-gray-100 mt-4 max-w-4xl mx-auto">{description}</p>

        <div className="flex flex-wrap justify-center gap-x-6 gap-y-6 mt-8">
          {buttons && buttons.length > 0 &&
            buttons.map((button, index) => (
              <Link key={index} href={button.url}>
                <div
                  className="flex items-center justify-center space-x-3 w-auto py-3 px-6 rounded-lg border-2 border-white text-white hover:border-blue-400 hover:text-blue-400 hover:bg-white hover:shadow-2xl transition-all duration-300 transform hover:scale-110"
                  style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
                >
                  {/* Zmienione ikony */}
                  {index === 0 && <FaRegPaperPlane className="text-2xl" />}
                  {index === 1 && <FaRegCommentAlt className="text-2xl" />}
                  {index === 2 && <FaPhoneSquareAlt className="text-2xl" />}
                  {/* Tekst */}
                  <span className="text-sm font-semibold">{button.label}</span>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default EstimationSection;
