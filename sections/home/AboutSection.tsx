import React from "react";
import ReactHtmlParser from "html-react-parser";

type AboutSectionProps = {
  title: string;
  description: string;
};

const AboutSection = ({ title, description }: AboutSectionProps) => {
  return (
    <section className="cnt flex flex-col mx-auto items-center text-center justify-center">
      <h2 className="uppercase text-[#4f7cf7] font-sans tracking-wide font-bold text-lg mt-12">
        {title}
      </h2>
      <div className="w-full md:max-w-[70%] lg:max-w-[60%] text-center font-roboto text-base md:text-lg  mt-6 text-gray-700">
        {ReactHtmlParser(description)}
      </div>
    </section>
  );
};

export default AboutSection;
