import React from "react";

type AboutSectionProps = {
  title: string;
  description: string;
};

const AboutSection = ({ title, description }: AboutSectionProps) => {
  return (
    <section className="cnt flex flex-col mx-auto items-center text-center justify-center">
      <h2 className="text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] font-thin text-[#10152e] mt-12 tracking-wide">
        {title}
      </h2>
      <div className="w-full md:max-w-[70%] lg:max-w-[60%] text-center">
        <p className="text-[#4d4c4c] text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-[400] leading-7 tracking-wide mt-8 font-sans">
          {description}
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
