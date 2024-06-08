'use client';

import CustomButton from "@/components/CustomButton";

import { motion } from "framer-motion"

type HeroSectionProps = {
  data: {
    title: string;
    description: string;
    button: {
      label: string;
      url: string;
    };
  };
};

const HeroSection = ({ data }: HeroSectionProps) => {
  return (
    <section className="bg-customColor">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="cnt relative mx-auto py-8 md:py-10 lg:py-16 min-h-[450px] md:min-h-[500px] lg:min-h-[700px]  flex items-center justify-center text-center flex-col bg-body-bg"
      >
        <div className="w-full h-full  py-6 xl:mt-4 ">
          <h1
            className="mx-auto font-[700] text-white w-full font-source text-[1.8rem] mt-2  md:max-w-[80%] sm:text-[2rem] lg:text-[2.9rem] mb-3 tracking-wide"
          >
            {data.title}
          </h1>
          <div
            className="flex flex-col"
          >
            <h2 className="mx-auto max-w-[95%] md:max-w-[70%] mt-6 mb-5 text-[#f8f8f8] font-medium text-[0.9rem] leading-7 lg:leading-9 md:text-[1rem] lg:text-[1.1rem] font-sans">
              {data.description}
            </h2>
            <div>
              <CustomButton
                text={data.button.label}
                link={data.button.url}
                bgColor="#fff"
                textColor="#0077cc"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default HeroSection;
