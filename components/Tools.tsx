import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MySkills } from "@/data";

const Tools = () => {
  return (
    <div className="cnt mt-16 mb-4 text-center">
      <h2 className="text-[1.8rem] md:text-[2rem] lg:text-[2.4rem] font-thin text-[#10152e] mt-12 tracking-wide">
        <span className="text-customColor font-bold">Moje </span>
        Narzędzia i Technologie
      </h2>
      <p className="max-w-[90%] md:max-w-[70%] lg:max-w-[60%] mx-auto text-[#4d4c4c] text-[0.9rem] md:text-[1rem] lg:text-[1.1rem] font-[400] leading-7 tracking-wide mt-6 font-sans">
        Przedstawiam tutaj narzędzia, które wykorzystuję w mojej pracy jako web
        developer. W ciągu mojej kariery zebrałem doświadczenie w korzystaniu z
        różnorodnych technologii i narzędzi, które umożliwiają mi efektywne
        tworzenie wysokiej jakości aplikacji internetowych. Poniżej znajdziesz
        listę niektórych z nich..
      </p>{" "}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-x-24 justify-center">
        {MySkills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillItem = ({ skill }: { skill: { name: string; width: string } }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        width: skill.width,
        transition: {
          duration: 1,
        },
      });
    }
  }, [controls, inView, skill.width]);

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full items-center justify-between mb-1">
        <h2 className="text-[1rem] font-[500] text-bgColor">{skill.name}</h2>
        <span className="text-bgColor text-sm font-sans font-[500]">
          {skill.width}
        </span>
      </div>
      <div className="relative w-full h-[1.3rem] bg-[#f3f3f3] rounded-md overflow-hidden">
        <motion.div
          className="absolute top-0 left-0 h-full bg-customColor"
          initial={{ width: 0 }}
          animate={controls}
          ref={ref}
        />
      </div>
    </div>
  );
};

export default Tools;