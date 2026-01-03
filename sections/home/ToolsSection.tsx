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
    "FaHtml5: html": <FaHtml5 size={16} />,
    "FaSass: ScSS": <FaSass size={16} />,
    "SiTailwindcss: Tailwind": <SiTailwindcss size={16} />,
    "FaJs: JS": <FaJs size={16} />,
    "SiExpress: express": <SiExpress size={16} />,
    "FaNodeJs: nodejs": <FaNodeJs size={16} />,
    "FaReact: react": <FaReact size={16} />,
    "wordpress: FaWordpress": <FaWordpress size={16} />,
    "SiMongodb: MongoDb": <SiMongodb size={16} />,
    "FaFigma: figma": <FaFigma size={16} />,
    "SiTypescript: typescript": <SiTypescript size={16} />,
    "SiNextdotjs: next": <SiNextdotjs size={16} />,
  };

  const technologies = charts.map((chart) => ({
    name: chart.text,
    icon: iconMap[chart.icon] || null,
  }));

  return (
    <section className="py-24 bg-white border-b border-slate-100">
      <div className="container mx-auto px-4">
        {/* Góra: Nagłówek w linii */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6 border-b border-slate-100 pb-8">
          <div className="text-left max-w-xl">
            <h2 className="text-xs md:text-sm font-bold text-[#6e92f2] tracking-[0.2em] uppercase mb-2">
              {title}
            </h2>
            <p className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">
              {description}
            </p>
          </div>
          {/* Dekoracja po prawej */}
        
        </div>

        {/* Dół: Horyzontalna wstęga kapsułek */}
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-y-6 gap-x-4">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group flex items-center gap-3 px-4 py-3 bg-slate-50 border border-slate-100 rounded-lg hover:border-[#6e92f2] hover:bg-[#6e92f2] transition-all duration-300 cursor-default"
            >
              <span className="text-slate-400 group-hover:text-white transition-colors">
                {tech.icon}
              </span>
              <span className="text-xs md:text-sm font-mono font-medium text-slate-600 group-hover:text-white">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsSection;