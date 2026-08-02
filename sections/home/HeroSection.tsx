"use client";

import {
  HiOutlineGlobeAlt,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { HiSparkles, HiArrowRight, HiArrowUpRight } from "react-icons/hi2";

type HeroSectionProps = {
  buttonText: string;
  buttonUrl: string;
};

const FEATURES = [
  {
    title: "Klienci wiedzą, czym się zajmujesz",
    desc: "Prosty i zrozumiały przekaz ofertowy.",
    Icon: HiOutlineGlobeAlt,
    span: "",
  },
  {
    title: "Łatwiej Cię znaleźć",
    desc: "Tam, gdzie szukają Cię klienci.",
    Icon: HiOutlineLocationMarker,
    span: "",
  },
  {
    title: "Budujesz zaufanie",
    desc: "Profesjonalny wizerunek to podstawa.",
    Icon: HiOutlineChatAlt2,
    span: "",
  },
  {
    title: "Dostępne 24/7",
    desc: "Twoja oferta zawsze pod ręką.",
    Icon: HiOutlineLightningBolt,
    span: "",
  },
  {
    title: "Pomoc po publikacji",
    desc: "Nie zostawiam Cię samego ze stroną.",
    Icon: HiOutlineShieldCheck,
    span: "sm:col-span-2",
  },
];

const TARGET_GROUPS = [
  "Brak strony",
  "Stara strona",
  "Lokalna firma",
  "Rozwój biznesu",
];

const HeroSection = ({ buttonText, buttonUrl = "/" }: HeroSectionProps) => {
  return (
    <section className="relative bg-[#0f172a] text-white overflow-hidden selection:bg-blue-500/20 selection:text-blue-100 antialiased">
      {/* Tło z plamami światła (overflow-hidden na sekcji chroni przed scrollem na mobile) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] sm:w-[800px] sm:h-[600px] bg-blue-600/15 rounded-full blur-[120px] sm:blur-[160px] -translate-y-1/3 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] bg-indigo-600/10 rounded-full blur-[100px] sm:blur-[120px] translate-y-1/4 -translate-x-1/4" />

      {/* ZOPTYMALIZOWANE ODSTĘPY: Idealne pod Navbar (zostawia luźny margines, nie przytłacza) */}
      <div className="container mx-auto px-5 sm:px-6 max-w-6xl pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* LEWA STRONA */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-blue-300 bg-blue-500/10 border border-blue-500/20 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg backdrop-blur-sm">
              <HiSparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
              Dla lokalnych firm
            </span>

            <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4.5rem] xl:text-7xl font-black leading-[0.95] tracking-tighter">
              <span className="text-white">Buduję cyfrową</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                przyszłość
              </span>
              <br />
              <span className="text-white">Twojej firmy.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-lg font-light">
              Tworzę zaawansowane strony internetowe, sklepy na WooCommerce oraz
              dedykowane aplikacje webowe, które napędzają rozwój Twojego
              biznesu.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-2">
              <a
                href={buttonUrl}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-500 text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg text-[13px] font-bold tracking-wide transition-all duration-300 hover:bg-blue-400 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(59,130,246,0.4)]"
              >
                <span>{buttonText}</span>
                <HiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://wa.me/519668439?text=Cze%C5%9B%C4%87%2C%20chcia%C5%82bym%20dowiedzie%C4%87%20si%C4%99%20wi%C4%99cej%20o%20tworzeniu%20strony."
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-slate-700 text-slate-300 px-7 sm:px-8 py-3.5 sm:py-4 rounded-lg text-[13px] font-bold tracking-wide transition-all duration-300 hover:bg-white/5 hover:border-slate-500 hover:text-white hover:-translate-y-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="group-hover:scale-110 transition-transform duration-300"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>Napisz na WhatsApp</span>
              </a>
            </div>
          </div>

          {/* PRAWA STRONA - SZKLISTA SIEĆ */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5 lg:pt-4">
            <div className="flex flex-wrap gap-2 pl-1">
              {TARGET_GROUPS.map((group) => (
                <span
                  key={group}
                  className="text-[10px] font-bold uppercase tracking-widest text-slate-500 border border-slate-800/80 px-3 py-1.5 rounded-md bg-slate-900/30"
                >
                  {group}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className={`group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-xl p-5 hover:border-blue-500/30 hover:bg-blue-500/[0.07] hover:scale-[1.02] transition-all duration-500 cursor-default ${feature.span}`}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-500/10 text-blue-400 mb-4 group-hover:bg-blue-500/20 transition-colors duration-300">
                      <feature.Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-[14px] font-bold text-slate-200 mb-1 group-hover:text-white transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[12px] text-slate-500 leading-relaxed group-hover:text-slate-400 transition-colors">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* DOLNA LINIA I LINK */}
        <div className="mt-16 sm:mt-24 pt-8 border-t border-slate-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            Chcesz zobaczyć, co dokładnie wchodzi w skład pakietu?
          </p>
          <a
            href="/pakiet-dla-firm"
            className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors duration-200 group whitespace-nowrap"
          >
            Sprawdź szczegóły pakietu
            <HiArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
