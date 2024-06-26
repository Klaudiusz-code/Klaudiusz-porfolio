import React from "react";
import CustomButton from "./CustomButton";

const ContactBanner = () => {
  return (
    <section className="min-h-[400px] flex items-center justify-center bg-cover mt-32  bg-center border-spacing-6  mb-0 bg-contactBanner">
      <div className="text-center text-white">
        <h2 className="text-[1.4rem] md:text-[1.5rem] lg:text-[2.2rem] font-bold mb-4 font-sans">
          POROZMAWIAJMY O TWOIM{" "}
          <span className="text-customColor">PROJEKCIE</span>
        </h2>
        <p className="text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <CustomButton bgColor="#fff" textColor="#0077cc" text="Napisz do mnie!" link="/contact" />
      </div>
    </section>
  );
};

export default ContactBanner;
