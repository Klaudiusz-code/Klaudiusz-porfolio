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

const PACKAGE_FEATURES = [
  {
    title: "Klienci wiedzą, czym się zajmujesz",
    desc: "Pokazujemy Twoją ofertę w prosty i zrozumiały sposób.",
    Icon: HiOutlineGlobeAlt,
    span: "",
  },
  {
    title: "Łatwiej Cię znaleźć",
    desc: "Twoja firma może być tam, gdzie szukają jej klienci.",
    Icon: HiOutlineLocationMarker,
    span: "",
  },
  {
    title: "Budujesz zaufanie od wejścia",
    desc: "Profesjonalna strona robi dobre pierwsze wrażenie.",
    Icon: HiOutlineChatAlt2,
    span: "",
  },
  {
    title: "Informacje dostępne cały czas",
    desc: "Klient może sprawdzić Twoją ofertę kiedy chce.",
    Icon: HiOutlineLightningBolt,
    span: "",
  },
  {
    title: "Pomoc również po publikacji",
    desc: "Nie zostajesz sam po oddaniu strony.",
    Icon: HiOutlineShieldCheck,
    span: "lg:col-span-2",
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
    <section className="relative bg-white overflow-hidden selection:bg-blue-100 selection:text-blue-800">
      {/* Tło */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container mx-auto px-5 sm:px-6 max-w-[1200px] pt-20 pb-12 sm:pt-28 sm:pb-20 lg:pt-32 lg:pb-28 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          <div className="space-y-6 lg:self-center">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100">
              Strony dla lokalnych firm
            </span>

            <h1
              className="text-[2rem] sm:text-4xl lg:text-[3.5rem] font-extrabold text-[#1b3745]"
              style={{ lineHeight: 1 }}
            >
              <span className="block">Pomagam firmom</span>
              <span className="block">być widocznymi</span>
              <span className="block text-blue-600">w internecie.</span>
            </h1>
            <div className="h-px w-12 bg-slate-200" />

            <p className="max-w-md text-[15px] sm:text-base text-slate-500 leading-relaxed">
              Tworzę strony internetowe dla firm, które chcą pokazać swoją
              ofertę, zdobywać nowych klientów i wyglądać profesjonalnie w
              oczach odbiorców.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              {/* Główny przycisk */}
              <a
                href={buttonUrl}
                className="group relative inline-flex items-center gap-2.5 bg-blue-600 text-white px-6 py-3.5 sm:py-4 rounded-xl text-[12px] sm:text-[13px] font-bold tracking-wide transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-15px_rgba(37,99,235,0.4)] overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <HiSparkles className="w-4 h-4 sm:w-5 sm:h-5 relative z-10" />
                <span className="relative z-10">{buttonText}</span>
                <HiArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* NOWY PRZYCISK WHATSAPP - OD RAZU ZIELONY I KUSZĄCY */}
              <a
                href="https://wa.me/519668439?text=Cze%C5%9B%C4%87%2C%20chcia%C5%82bym%20dowiedzie%C4%87%20si%C4%99%20wi%C4%99cej%20o%20tworzeniu%20strony." /* <--- WSTAW SWÓJ NUMER BEZ SPACJI */
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 bg-[#25D366] text-white px-6 py-3.5 sm:py-4 rounded-xl text-[12px] sm:text-[13px] font-bold tracking-wide transition-all duration-300 hover:bg-[#20bd5a] hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-15px_rgba(37,211,102,0.5)] overflow-hidden relative"
              >
                {/* Świecąca poświata w tle przy najechaniu */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                {/* Ikona WhatsApp */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="relative z-10 group-hover:scale-110 transition-transform duration-300 drop-shadow-md"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>

                <span className="relative z-10">Napisz na WhatsApp</span>

                {/* Strzałka */}
                <HiArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
              <div className="lg:col-span-2 bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 relative overflow-hidden">
                <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent"></div>

                <span className="block text-[9px] font-bold uppercase tracking-[0.3em] text-slate-400 mb-2">
                  Dla Twojej firmy
                </span>
                <div className="flex flex-col sm:flex-row justify-between gap-4">
                  <h2 className="text-xl sm:text-2xl font-bold text-[#1b3745]">
                    Twoja firma w sieci
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {TARGET_GROUPS.map((group) => (
                      <span
                        key={group}
                        className="text-[10px] font-medium text-slate-500 bg-slate-50 border border-slate-100 px-3 py-1.5 rounded-lg whitespace-nowrap"
                      >
                        {group}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {PACKAGE_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className={`group bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-blue-100/50 hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300 cursor-default ${feature.span}`}
                >
                  <div className="flex gap-3.5">
                    <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <feature.Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-bold text-[#1b3745] mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-[13px] text-slate-400 leading-relaxed">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="lg:col-span-2 bg-[#1b3745] rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-lg">
                <div className="text-center sm:text-left">
                  <h3 className="text-base sm:text-lg font-bold text-white">
                    Chcesz zobaczyć, co dokładnie wchodzi w skład?
                  </h3>
                  <p className="text-sm text-white/40 mt-1">
                    Poznaj szczegóły pakietu i sprawdź, jak to działa.
                  </p>
                </div>
                <a
                  href="/pakiet-dla-firm"
                  className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 px-7 py-3.5 sm:py-4 rounded-xl text-[11px] font-bold uppercase tracking-[0.15em] text-white transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(37,99,235,0.5)] w-full sm:w-auto flex-shrink-0"
                >
                  Sprawdź pakiet
                  <HiArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
