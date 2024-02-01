import React from "react";
import ButtonContact from "./ButtonContact";
import CustomButton from "./CustomButton";

const ContactBaner = () => {
  return (
    <div className="min-h-[400px] flex items-center justify-center bg-cover mt-32  bg-center border-spacing-6  border-[4px] border-customColor mb-2 bg-contactBanner rounded-lg">
      <div className="text-center text-white">
        <h2 className="text-[1.4rem] md:text-[1.5rem] lg:text-[2.2rem] font-bold mb-4 font-sans">
          POROZMAWIAJMY O TWOIM{" "}
          <span className="text-customColor">PROJEKCIE</span>
        </h2>
        <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <CustomButton text="Napisz do mnie!" link="/contact" />
      </div>
    </div>
  );
};

export default ContactBaner;
