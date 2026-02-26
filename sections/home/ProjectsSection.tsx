"use client";

import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

// --- Typy ---
type Project = {
  id: number;
  title: string;
  imageUrl: string;
  link: string;
  description: string;
};

// --- Dane (Zaktualizowane opisy) ---
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
    title: "Firma Lavato",
    imageUrl: "/lavatoforkdev.jpg",
    link: "https://www.lavato.eu/",
    description:
      "Elegancka wizytówka firmowa budująca wizerunek marki w branży usługowej.",
  },
  {
    id: 3,
    title: "Ogrod za Grosze",
    imageUrl: "/instogrod.jpg",
    link: "https://www.ogrodzagrosze.pl/",
    description:
      "Landing page promujący ofertę firmy ogrodniczej.",
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
        <article className="flex flex-col h-full bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-slate-300">
          <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
            <img
              src={project.imageUrl}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="p-6 md:p-8 flex flex-col flex-grow">
            <div className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-3">
              Web Design
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 leading-tight group-hover:text-blue-700 transition-colors">
              {project.title}
            </h3>

            <p className="text-slate-600 mb-6 md:mb-8 flex-grow leading-relaxed text-sm md:text-base">
              {project.description}
            </p>

            <div className="flex items-center font-semibold text-slate-900 group-hover:translate-x-1 transition-transform duration-300">
              Zobacz realizację
              <FaArrowRight className="ml-2 text-blue-600" />
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <section className="bg-white py-20 md:py-32 border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-7xl">
        <header className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-blue-600 font-bold tracking-wider uppercase text-xs md:text-sm mb-2 block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
              Wybrane realizacje
            </h2>
          </div>
          <p className="text-slate-500 text-base md:text-lg max-w-md leading-relaxed">
            Każdy projekt to wynik ścisłej współpracy i dbałości o detale
            techniczne oraz wizualne.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ProjectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 md:mt-24 bg-slate-900 rounded-3xl p-8 md:p-16 text-center text-white flex flex-col items-center justify-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 opacity-50" />

          <h3 className="text-2xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
            Masz pomysł na biznes?
          </h3>
          <p className="text-slate-400 text-base md:text-lg mb-8 md:mb-10 max-w-2xl">
            Pomogę Ci zamienić wizję w funkcjonalną stronę internetową.
          </p>

          <Link
            href="/kontakt"
            className="w-full sm:w-auto inline-flex items-center justify-center bg-white text-slate-900 font-bold text-base md:text-lg px-8 md:px-10 py-4 rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Porozmawiajmy o projekcie
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
