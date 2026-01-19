import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight, FaCheck, FaMobileAlt, FaFeather } from "react-icons/fa";

export default function LatestProjectSection() {
  return (
    <section className="relative w-full bg-white text-slate-800 py-32 overflow-hidden">
      
      <div className="absolute inset-0 opacity-[0.4] bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-16 relative z-10">
        
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Nowa realizacja
          </div>
          <h2 className="text-4xl md:text-5xl  font-bold text-slate-900 tracking-tight leading-[1.05] mb-6">
            Ogród 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Zagrosze
            </span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-xl">
            Strona zaprojektowana tak, by budować zaufanie od pierwszego wejrzenia. 
            Estetyka spotyka się z funkcjonalnością.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          
          <div className="lg:col-span-7 relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-[2.5rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 -z-10"></div>

            <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 bg-white">
              <Image
                src="/instogrod.jpg"
                alt="Projekt strony Ogród Zagrosze"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                priority
              />

              <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md border border-white/50 shadow-lg px-6 py-4 rounded-2xl flex items-center gap-4 animate-float">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center text-xl">
                  <FaCheck />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">Status</p>
                  <p className="text-base font-bold text-slate-900">Opublikowana</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
              Dlaczego ta strona <br />
              <span className="text-blue-600">działa tak dobrze?</span>
            </h3>

            <ul className="space-y-6 mb-12">
              {[
                {
                  icon: <FaMobileAlt />,
                  title: "Responsywność",
                  desc: "Idealna czytelność na każdym urządzeniu, od smartfona po dużą matrycę."
                },
                {
                  icon: <FaFeather />,
                  title: "Lekki Design",
                  desc: "Brak zbędnego hałasu. Klient skupia się na ofercie, nie na ozdobnikach."
                },
                {
                  icon: <FaCheck />,
                  title: "Szybki Kontakt",
                  desc: "Intuicyjne rozmieszczenie przycisków zwiększa szansę na telefon."
                }
              ].map((item, index) => (
                <li key={index} className="flex gap-5 group">
                  <div className="w-14 h-14 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    {item.icon}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-slate-500 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href="https://www.ogrodzagrosze.pl/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center w-full sm:w-auto px-10 py-5 bg-slate-900 text-white font-bold text-lg rounded-full hover:bg-blue-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-1"
            >
              Zobacz stronę klienta
              <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            
            <p className="mt-6 text-center sm:text-left text-sm text-slate-400 font-medium">
              Kliknij, aby zobaczyć projekt na żywo
            </p>

          </div>
        </div>

        

      </div>

   
    </section>
  );
}