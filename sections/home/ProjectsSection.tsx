import React from "react";
import Link from "next/link";
import { FaArrowRight, FaArrowUpRightFromSquare } from "react-icons/fa6";

type Project = {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  description: string;
};

const ProjectsData: Project[] = [
  {
    id: 1,
    title: "Gypsys Bar",
    imageUrl: "/gypsys.jpg",
    link: "https://gypsysbar.pl/",
    description:
      "Nowoczesna strona dla mobilnego koktajlbaru, zaprojektowana tak, aby oddać klimat marki i budować zaufanie już od pierwszego wejścia.",
  },
  {
    id: 2,
    title: "Klub Fenix Tomaszów",
    imageUrl: "/aas.jpg",
    link: "https://fenixtomaszow.pl/",
    description:
      "Strona internetowa dla lokalnego klubu sportowego z przejrzystą prezentacją oferty treningowej.",
  },
  {
    id: 3,
    title: "Śnieżka na dłoni",
    imageUrl: "/sniezkamockup.jpg",
    link: "https://www.sniezkanadloni.pl/",
    description:
      "Wizytówka górskiego domku, gdzie design oddaje klimat miejsca i sprawnie prowadzi do rezerwacji.",
  },
  {
    id: 4,
    title: "Ogród za Grosze",
    imageUrl: "/instogrod.jpg",
    link: "https://www.ogrodzagrosze.pl/",
    description:
      "Landing page promujący ofertę firmy ogrodniczej z naciskiem na wysoką konwersję.",
  },
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group relative h-full">
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <article className="relative flex flex-col md:flex-row h-full bg-slate-50 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/40 hover:-translate-y-1 border border-slate-100">
          {/* Obszar obrazka */}
          <div className="relative w-full md:w-1/2 aspect-[4/3] md:aspect-auto overflow-hidden bg-slate-200">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Delikatny overlay na hoverze */}
            <div className="absolute inset-0 bg-blue-950/0 group-hover:bg-blue-950/10 transition-colors duration-500" />

            {/* Ikonka nowej karty w rogu obrazka */}
            <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
              <FaArrowUpRightFromSquare className="text-xs text-slate-700" />
            </div>
          </div>

          {/* Obszar tekstu */}
          <div className="relative w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            {/* Wielki rozmyty numer w tle */}
            <span className="absolute -top-4 -right-2 text-[120px] md:text-[150px] font-black text-slate-100 select-none pointer-events-none leading-none">
              0{project.id}
            </span>

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                {project.title}
              </h3>

              <p className="text-slate-500 mb-8 leading-relaxed text-base md:text-lg max-w-sm">
                {project.description}
              </p>

              <div className="flex items-center font-semibold text-slate-900 text-sm group-hover:gap-3 gap-2 transition-all duration-300">
                Odwiedź stronę
                <FaArrowRight className="text-xs text-blue-600 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="bg-white py-24 md:py-36 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 md:mb-20 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-3 block">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.05]">
              Wybrane
              <br className="hidden md:block" /> realizacje
            </h2>
          </div>
          <p className="text-slate-500 text-base md:text-lg max-w-sm leading-relaxed">
            Każdy projekt to wynik ścisłej współpracy i dbałości o detale
            techniczne oraz wizualne.
          </p>
        </header>

        {/* Siatka 2x2 dla dużych kafli */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* CTA na dole */}
        <div className="mt-20 md:mt-28 bg-slate-950 rounded-3xl p-8 md:p-16 text-center text-white flex flex-col items-center justify-center relative overflow-hidden group/cta">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-blue-600" />

          <h3 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Zastanawiasz się nad własną stroną?
          </h3>
          <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 max-w-2xl leading-relaxed">
            Porozmawiajmy o Twoim pomyśle. Pomogę Ci przejść od koncepcji do
            działającej strony internetowej.
          </p>

          <Link
            href="/kontakt"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 rounded-full hover:bg-blue-500 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-600/25"
          >
            Napisz do mnie
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
