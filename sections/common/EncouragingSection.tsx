"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
}

interface EncouragingSectionProps {
  title: string;
  services: Service[];
}

const EncouragingSection = ({ title, services }: EncouragingSectionProps) => {
  return (
    <section className="py-24 bg-white">
      {/* ZWIĘKSZONY CONTAINER (Szerszy) */}
      <div className="container mx-auto px-4 max-w-[1400px]">
        
        {/* NAGŁÓWEK: DO LEWEJ */}
        <div className="mb-16 text-left">
          <span className="inline-block py-1 px-3 rounded bg-slate-200 text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-4">
            Dlaczego warto
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-none mb-6">
            {title}
          </h2>
          {/* Dekoracyjna kreska */}
          <div className="w-24 h-2 bg-[#6e92f2]"></div>
        </div>

        {/* SIATKA KART (Responsywna) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card = ({ service, index }: { service: Service; index: number }) => {
  return (
    <div className="group relative h-[270px] w-full overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-sm transition-all duration-500 hover:shadow-2xl hover:shadow-[#6e92f2]/30 hover:h-[300px]">
      
      {/* 1. TŁO ZMIENIA SIĘ (Z Białego na Gradient) */}
      <div className="absolute inset-0 bg-white transition-colors duration-500 group-hover:bg-gradient-to-br group-hover:from-[#6e92f2] group-hover:to-indigo-600 z-0" />
      
      {/* 2. NUMERKA (Z prawej góry) */}
      <div className="absolute top-6 right-6 z-10 opacity-50 font-black text-4xl text-slate-200 group-hover:text-white/20 transition-colors duration-500 select-none">
        0{index + 1}
      </div>

      {/* ZAWARTOŚĆ */}
      <div className="relative z-20 h-full flex flex-col p-8 justify-between">
        
        {/* GÓRA: Tytuł (Przesuwa się w górę przy hover) */}
        <div className="transform transition-all duration-500 group-hover:-translate-y-4">
          <h3 className="text-2xl font-bold text-slate-900 mb-2 leading-tight group-hover:text-white transition-colors duration-500">
            {service.title}
          </h3>
          <div className="h-1 w-12 bg-slate-200 group-hover:w-16 group-hover:bg-white transition-all duration-500"></div>
        </div>

        {/* DÓŁ: Opis i ikona (Wysuwa się z dołu przy hover) */}
        <div className="flex flex-col justify-end">
          
          {/* Stan Spoczynku: Ikona "Zobacz" */}
          <div className="transform translate-y-0 opacity-100 group-hover:translate-y-20 group-hover:opacity-0 transition-all duration-500 flex items-center gap-2 text-slate-400">
            <span className="text-xs font-bold uppercase tracking-widest">Zobacz</span>
            <FaArrowRight className="text-sm" />
          </div>

          {/* Stan Hover: Opis Tekstowy (Wychodzi z dołu) */}
          <div className="transform translate-y-20 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
            <p className="text-slate-400 leading-relaxed text-base group-hover:text-blue-50 mb-6">
              {service.description}
            </p>
            
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default EncouragingSection;