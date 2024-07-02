import React from "react";
import {
  FaSass,
  FaJs,
  FaNodeJs,
  FaReact,
  FaWordpress,
  FaHtml5,
  FaFigma,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

interface Props {
  title: string;
  description: string;
  charts: { text: string; icon: string }[];
}

function ToolsSection({ title, description, charts }: Props) {
  const iconMap: { [key: string]: JSX.Element | null } = {
    "FaHtml5: html": <FaHtml5 size={48} />,
    "FaSass: ScSS": <FaSass size={48} />,
    "SiTailwindcss: Tailwind": <SiTailwindcss size={48} />,
    "FaJs: JS": <FaJs size={48} />,
    "SiExpress: express": <SiExpress size={48} />,
    "FaNodeJs: nodejs": <FaNodeJs size={48} />,
    "FaReact: react": <FaReact size={48} />,
    "wordpress: FaWordpress": <FaWordpress size={48} />,
    "SiMongodb: MongoDb": <SiMongodb size={48} />,
    "FaFigma: figma": <FaFigma size={48} />,
    "SiTypescript: typescript": <SiTypescript size={48} />,
    "SiNextdotjs: next": <SiNextdotjs size={48} />,
  };

  const technologies = charts.map((chart) => ({
    name: chart.text,
    icon: iconMap[chart.icon] || null,
  }));

  return (
    <div className="container mx-auto mt-16 mb-8 text-center">
      <h2 className="text-3xl font-semibold text-blue-600 mt-8 tracking-wide">
        {title}
      </h2>
      <p className="max-w-full md:max-w-3xl mx-auto text-xl leading-7 text-gray-700 mt-4 font-[400]">
        {description}
      </p>
      <div className="mt-12 flex flex-wrap justify-center">
        {technologies.map((tech, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg m-4 w-[140px] h-[140px] p-4 flex flex-col items-center justify-center bg-[#ecf4ff]"
          >
            <div className="text-3xl mb-2 text-customColor">{tech.icon}</div>
            <h4 className="text-lg font-medium text-customColor">
              {tech.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolsSection;
