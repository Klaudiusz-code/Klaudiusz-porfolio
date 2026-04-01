"use client";

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
    title: "Klub Fenix Tomaszów",
    imageUrl: "/aas.jpg",
    link: "https://fenixtomaszow.pl/",
    description:
      "Strona internetowa dla lokalnego klubu sportowego z prezentacją oferty treningowej.",
  },
  {
    id: 2,
    title: "Ogrod za Grosze",
    imageUrl: "/instogrod.jpg",
    link: "https://www.ogrodzagrosze.pl/",
    description:
      "Landing page promujący ofertę firmy ogrodniczej z naciskiem na konwersję.",
  },
  {
    id: 3,
    title: "Śnieżka na dłoni",
    imageUrl: "/sniezkamockup.jpg",
    link: "https://www.sniezkanadloni.pl/",
    description:
      "Wizytówka górskiego domku, gdzie design oddaje klimat miejsca i sprawnie prowadzi do rezerwacji.",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => {
  const projectNum = `0${project.id}`;

  return (
    <div className="group relative h-full">
      <Link
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        <article className="relative flex flex-col h-full bg-slate-50 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-slate-300/50 hover:-translate-y-2">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-200 transition-all duration-500 group-hover:-mb-4">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          <div className="relative z-10 p-6 md:p-8 flex flex-col flex-grow">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold text-slate-300 tracking-widest">
                {projectNum}
              </span>
              <FaArrowUpRightFromSquare className="text-xs text-slate-300 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight tracking-tight">
              {project.title}
            </h3>

            <p className="text-slate-500 mb-6 md:mb-8 flex-grow leading-relaxed text-sm md:text-base">
              {project.description}
            </p>

            <div className="flex items-center font-medium text-slate-900 text-sm group-hover:gap-3 gap-2 transition-all duration-300">
              Odwiedź stronę
              <FaArrowRight className="text-[10px] text-blue-600" />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

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
