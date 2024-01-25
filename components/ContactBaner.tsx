import React from "react";
import ButtonContact from "./ButtonContact";

const ContactBaner = () => {
  return (
    <div className="h-[300px] flex items-center justify-center bg-cover mt-32 mb-12 bg-center bg-contactBanner rounded-lg">
      <div className="text-center text-white">
        <h2 className="text-[1.4rem] md:text-[1.5rem] lg:text-[1.7rem] font-bold mb-4 font-sans">
          POROZMAWIAJMY O TWOIM{" "}
          <span className="text-customColor">PROJEKCIE</span>
        </h2>
        <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <ButtonContact buttonText="Napisz do mnie!" />
      </div>
    </div>
  );
};

export default ContactBaner;
