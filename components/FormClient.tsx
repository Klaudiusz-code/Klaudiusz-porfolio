"use client";

import React, { useState } from "react";
import {
  RiRocket2Line,
  RiBuilding4Line,
  RiShoppingBag3Line,
  RiHammerLine,
  RiScissorsCutLine,
  RiCarLine,
  RiHome5Line,
  RiHeartPulseLine,
  RiRestaurant2Line,
  RiCalculatorLine,
  RiComputerLine,
  RiMore2Fill,
  RiSmartphoneLine,
  RiSendPlaneFill,
  RiArrowRightLine,
  RiArrowLeftLine,
  RiMailLine,
  RiCheckLine,
  RiGift2Fill,
  RiLoader4Line,
  RiErrorWarningLine,
  RiPaletteLine,
  RiUserStarLine,
  RiLinksLine,
  RiBriefcase4Line,
} from "react-icons/ri";

interface FormData {
  name: string;
  industry: string;
  customIndustry: string;
  description: string;
  logoUrl: string;
  styleInspiration: string;
  brandColors: string;
  email: string;
  phone: string;
  projectType: string;
  expectations: string;
}

const industries = [
  { id: "budownictwo", label: "Remonty / Budowa", icon: RiHammerLine },
  { id: "motoryzacja", label: "Auto / Mechanika", icon: RiCarLine },
  { id: "fryzjer", label: "Fryzjer / Barber", icon: RiScissorsCutLine },
  { id: "silownia", label: "Fitness / Siłownia", icon: RiSmartphoneLine },
  { id: "uslugi", label: "Usługi Domowe", icon: RiHome5Line },
  { id: "medycyna", label: "Zdrowie / Uroda", icon: RiHeartPulseLine },
  { id: "gastronomia", label: "Jedzenie / Bar", icon: RiRestaurant2Line },
  { id: "finanse", label: "Usługi Finansowe", icon: RiCalculatorLine },
  { id: "it", label: "IT / Naprawa Sprzętu", icon: RiComputerLine },
  { id: "inne", label: "Inne...", icon: RiMore2Fill },
];

const services = [
  {
    id: "landing",
    title: "Landing Page",
    desc: "Jednostronicowa strona nastawiona na konkretną akcję. Szybka, skuteczna, bez rozpraszaczy.",
    icon: RiRocket2Line,
    color: "from-blue-500 to-cyan-400",
  },
  {
    id: "brand",
    title: "Strona pod markę",
    desc: "Wielostronicowa strona budująca wizerunek. Prezentuje pełną ofertę i historię firmy.",
    icon: RiBuilding4Line,
    color: "from-violet-500 to-purple-400",
  },
  {
    id: "corporate",
    title: "Strona firmowa",
    desc: "Solidna strona dla lokalnych usług (remonty, mechanika, beauty). Cennik, realizacje, szybki kontakt.",
    icon: RiBriefcase4Line,
    color: "from-amber-500 to-orange-400",
  },
  {
    id: "shop",
    title: "Sklep Internetowy",
    desc: "Pełnoprawny sklep online z płatnościami, koszykiem i zarządzaniem zamówieniami.",
    icon: RiShoppingBag3Line,
    color: "from-emerald-500 to-teal-400",
  },
  {
    id: "blog",
    title: "Blog",
    desc: "Przestrzeń na artykuły, treści i budowanie ekspertyzy. Świetne pod pozycjonowanie.",
    icon: RiLinksLine,
    color: "from-rose-500 to-pink-400",
  },
  {
    id: "webapp",
    title: "Aplikacja Webowa",
    desc: "Zaawansowane narzędzie online z logowaniem, panelem użytkownika i logiką biznesową.",
    icon: RiComputerLine,
    color: "from-slate-600 to-slate-400",
  },
];

// Etykiety dla animacji w nagłówku
const stepLabels: { [key: number]: string } = {
  1: "Podstawy",
  2: "Typ projektu",
  3: "Oczekiwania",
};

const FormClient: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState<{
    msg: string;
    type: "error" | "success";
  } | null>(null);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    industry: "",
    customIndustry: "",
    description: "",
    logoUrl: "",
    styleInspiration: "",
    brandColors: "",
    email: "",
    phone: "",
    projectType: "",
    expectations: "",
  });

  const showToast = (msg: string, type: "error" | "success" = "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const getServiceName = () =>
    services.find((s) => s.id === formData.projectType)?.title || "Usługa";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => {
    if (step === 1) {
      if (!formData.name) return showToast("Podaj nazwę firmy.");
      if (!formData.email) return showToast("Podaj adres email.");
      if (!formData.industry) return showToast("Wybierz branżę.");
      if (formData.industry === "inne" && !formData.customIndustry)
        return showToast("Wpisz nazwę branży.");
    }

    if (step === 2 && !formData.projectType)
      return showToast("Wybierz typ projektu.");

    if (step < 3) setStep((prev) => prev + 1);
    else handleSubmit();
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const industryLabel =
        industries.find((i) => i.id === formData.industry)?.label ||
        formData.customIndustry ||
        formData.industry;

      const emailPayload = {
        _subject: `Nowe zapytanie: ${getServiceName()} - ${formData.name}`,
        "Nazwa Firmy": formData.name,
        Branża: industryLabel,
        "Opis działalności": formData.description,
        "Link do Logo": formData.logoUrl || "Brak",
        "Kolory firmowe": formData.brandColors || "Brak",
        "Preferowany styl": formData.styleInspiration || "Brak",
        Email: formData.email,
        Telefon: formData.phone || "Brak",
        "Typ Projektu": getServiceName(),
        Oczekiwania: formData.expectations,
      };

      const response = await fetch("https://formspree.io/f/mjknqvgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (response.ok) {
        // Przekierowanie na stronę główną po udanym wysłaniu
        window.location.href = "https://klaudiuszdev.pl";
      } else {
        showToast("Błąd wysyłania.");
      }
    } catch {
      showToast("Błąd połączenia.");
    } finally {
      setLoading(false);
    }
  };

  // --- RENDER KROKÓW ---

  const renderStep1 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <div className="lg:col-span-7">
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50 h-full">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
              <RiUserStarLine size={20} className="sm:hidden" />
              <RiUserStarLine size={24} className="hidden sm:block" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
              O Twojej firmie
            </h3>
          </div>

          <div className="space-y-6 sm:space-y-8">
            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-700 mb-2">
                Nazwa Firmy <span className="text-rose-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="np. Warsztat Samochodowy Kowalski"
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 sm:px-6 sm:py-5 text-base sm:text-lg outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
              />
            </div>

            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-700 mb-2">
                Czym się zajmujecie?
              </label>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="np. Serwis opon i mechanika pojazdowa"
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 sm:px-6 sm:py-5 text-base sm:text-lg outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
              />
              <p className="text-xs sm:text-sm text-slate-400 mt-2 ml-1">
                Krótkie hasło reklamowe lub opis profilu działalności.
              </p>
            </div>

            <div>
              <label className="block text-sm sm:text-base font-bold text-slate-700 mb-3">
                Branża <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    type="button"
                    onClick={() =>
                      setFormData({ ...formData, industry: ind.id })
                    }
                    className={`flex flex-col items-center justify-center p-3 sm:p-4 rounded-xl sm:rounded-2xl border-2 transition-all h-24 sm:h-28 group relative ${
                      formData.industry === ind.id
                        ? "border-blue-600 bg-blue-50 shadow-md"
                        : "border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 text-slate-500"
                    }`}
                  >
                    <ind.icon
                      size={24}
                      className={`mb-2 transition-colors ${
                        formData.industry === ind.id
                          ? "text-blue-600"
                          : "text-slate-300 group-hover:text-blue-500"
                      }`}
                    />
                    <span className="font-medium text-[10px] sm:text-xs text-center leading-tight">
                      {ind.label}
                    </span>
                    {formData.industry === ind.id && (
                      <div className="absolute top-2 right-2 w-4 h-4 sm:w-5 sm:h-5 bg-blue-600 rounded-full flex items-center justify-center text-white">
                        <RiCheckLine size={10} className="sm:hidden" />
                        <RiCheckLine size={12} className="hidden sm:block" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {formData.industry === "inne" && (
                <div className="mt-4 animate-fade-in">
                  <input
                    type="text"
                    name="customIndustry"
                    value={formData.customIndustry}
                    onChange={handleChange}
                    placeholder="Wpisz nazwę swojej branży..."
                    className="w-full bg-white border-2 border-blue-600 rounded-xl px-4 py-3.5 sm:rounded-2xl sm:px-6 sm:py-5 outline-none font-bold text-base sm:text-lg shadow-sm"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5">
        <div className="bg-slate-800 text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-400/20 lg:sticky lg:top-8 space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-400/20 flex items-center justify-center text-purple-400 shrink-0">
                <RiPaletteLine size={20} />
              </div>
              <h3 className="text-lg font-bold">Styl i materiały</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">
                  Opisz styl, który lubisz
                </label>
                <input
                  type="text"
                  name="styleInspiration"
                  value={formData.styleInspiration}
                  onChange={handleChange}
                  placeholder="np. Minimalistyczny, elegancki..."
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-purple-400 transition-all text-sm sm:text-base placeholder-slate-500"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">
                    Kolory marki
                  </label>
                  <input
                    type="text"
                    name="brandColors"
                    value={formData.brandColors}
                    onChange={handleChange}
                    placeholder="np. Czerń, Złoto"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-purple-400 transition-all text-sm sm:text-base placeholder-slate-500"
                  />
                </div>
                <div>
                  <label className="block text-[10px] sm:text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">
                    Link do Logo
                  </label>
                  <input
                    type="text"
                    name="logoUrl"
                    value={formData.logoUrl}
                    onChange={handleChange}
                    placeholder="Opcjonalnie"
                    className="w-full bg-slate-700/50 border border-slate-600 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-purple-400 transition-all text-sm sm:text-base placeholder-slate-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-slate-700"></div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-400/20 flex items-center justify-center text-blue-400 shrink-0">
                <RiMailLine size={20} />
              </div>
              <h3 className="text-lg font-bold">Dane kontaktowe</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">
                  Adres Email <span className="text-rose-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="twoj@email.com"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-blue-400 transition-all text-base sm:text-lg placeholder-slate-500"
                />
              </div>
              <div>
                <label className="block text-[10px] sm:text-xs font-bold uppercase text-slate-400 mb-2 tracking-wider">
                  Numer Telefonu
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+48 123 456 789"
                  className="w-full bg-slate-700/50 border border-slate-600 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-blue-400 transition-all text-base sm:text-lg placeholder-slate-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-12 sm:mb-16 px-4">
        <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
          Krok 2 z 3
        </div>
        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-800 mb-4 tracking-tight leading-tight">
          Wybierz typ rozwiązania
        </h3>
        <p className="text-base sm:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          Dopasujmy technologię do celu, jaki chcesz osiągnąć.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((srv) => {
          const selected = formData.projectType === srv.id;
          return (
            <div
              key={srv.id}
              onClick={() => setFormData({ ...formData, projectType: srv.id })}
              className={`cursor-pointer group relative h-full`}
            >
              <div
                className={`h-full bg-white rounded-[2rem] border-2 p-8 sm:p-10 transition-all duration-500 flex flex-col relative overflow-hidden ${
                  selected
                    ? "border-blue-500 shadow-2xl shadow-blue-500/10 scale-[1.02]"
                    : "border-slate-100 hover:border-slate-200 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-2"
                }`}
              >
                {/* Subtelne tło za ikoną na hover */}
                <div
                  className={`absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 ${
                    selected
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-60"
                  } bg-gradient-to-tr ${srv.color}`}
                ></div>

                {/* Checkmark w rogu */}
                {selected && (
                  <div className="absolute top-5 right-5 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/30 animate-fade-in">
                    <RiCheckLine size={18} />
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Ikona */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-6 transition-all duration-500 shrink-0 ${
                      selected
                        ? `bg-gradient-to-br ${srv.color} text-white shadow-lg scale-110`
                        : "bg-slate-100 text-slate-400 group-hover:scale-105"
                    }`}
                  >
                    <srv.icon size={32} className="sm:hidden" />
                    <srv.icon size={40} className="hidden sm:block" />
                  </div>

                  {/* Treść */}
                  <h4 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                    {srv.title}
                  </h4>
                  <p className="text-slate-500 text-sm sm:text-base leading-relaxed flex-1">
                    {srv.desc}
                  </p>

                  {/* Stopka */}
                  <div
                    className={`mt-8 pt-5 border-t text-sm font-semibold flex items-center justify-between transition-all duration-300 ${
                      selected
                        ? "border-blue-100 text-blue-600"
                        : "border-slate-100 text-slate-400 group-hover:text-slate-600"
                    }`}
                  >
                    <span>{selected ? "Wybrano" : "Wybierz"}</span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                        selected
                          ? "bg-blue-500 text-white"
                          : "bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-600"
                      }`}
                    >
                      <RiArrowRightLine size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderStep3 = () => (
    <div className="w-full max-w-3xl mx-auto px-2">
      <div className="bg-white p-6 sm:p-10 lg:p-14 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/50 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600">
            <RiGift2Fill size={32} className="sm:hidden" />
            <RiGift2Fill size={40} className="hidden sm:block" />
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-3 tracking-tight">
          Czego oczekujesz od projektu?
        </h3>
        <p className="text-slate-500 text-sm sm:text-lg max-w-lg mx-auto leading-relaxed mb-8 sm:mb-10">
          Podziel się pomysłami, inspiracjami lub funkcjami, które są dla Ciebie
          ważne. Nie musisz być dokładny — to moja robota.
        </p>

        <textarea
          name="expectations"
          value={formData.expectations}
          onChange={handleChange}
          rows={5}
          placeholder="Np. Zależy mi na szybkiej stronie, gdzie klient od razu zobaczy cennik i będzie mógł łatwo zadzwonić. Lubię ciemne kolory i nowoczesny wygląd..."
          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl sm:rounded-3xl px-5 py-5 sm:px-8 sm:py-6 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none text-base sm:text-lg leading-loose text-slate-800 placeholder:text-slate-300 text-left mb-6"
        ></textarea>

        <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>
              Typ:{" "}
              <strong className="text-slate-700">{getServiceName()}</strong>
            </span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span>Bez zobowiązań</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 mt-4 text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900 overflow-x-hidden">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap");
        .font-sans {
          font-family: "Inter", sans-serif;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes stepSlide {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-step-slide {
          animation: stepSlide 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 md:py-12 lg:py-16">
        {toast && (
          <div
            className={`fixed top-4 sm:top-8 left-1/2 transform -translate-x-1/2 z-50 px-4 sm:px-8 py-3 sm:py-4 rounded-xl shadow-2xl flex items-center gap-2 sm:gap-3 w-[90%] sm:w-auto animate-fade-in justify-center ${
              toast.type === "error"
                ? "bg-rose-600 text-white"
                : "bg-blue-600 text-white"
            }`}
          >
            {toast.type === "error" ? (
              <RiErrorWarningLine size={20} className="sm:hidden" />
            ) : (
              <RiCheckLine size={20} className="sm:hidden" />
            )}
            {toast.type === "error" ? (
              <RiErrorWarningLine size={24} className="hidden sm:block" />
            ) : (
              <RiCheckLine size={24} className="hidden sm:block" />
            )}
            <span className="font-bold text-xs sm:text-base text-center">
              {toast.msg}
            </span>
          </div>
        )}

        <div className="bg-white rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-6 sm:mb-8 lg:mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 sm:gap-8">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-800 mb-2 sm:mb-4 tracking-tight leading-[1.1]">
                Stwórzmy <br />
                <span className="text-blue-600">coś świetnego.</span>
              </h1>
              <p className="text-sm sm:text-lg text-slate-500 max-w-2xl leading-relaxed">
                Wypełnij brief w 3 prostych krokach. Przygotuję bezpłatną wycenę
                i wstępną koncepcję.
              </p>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center bg-slate-50 rounded-2xl px-8 py-6 border border-slate-100 min-w-[180px] h-[110px] overflow-hidden">
              <div
                key={step}
                className="animate-step-slide flex flex-col items-center justify-center"
              >
                <div className="text-5xl font-black text-blue-600 select-none leading-none mb-2">
                  0{step}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500">
                  {stepLabels[step]}
                </div>
                <div className="w-8 h-1 bg-blue-100 rounded-full mt-3 overflow-hidden">
                  <div
                    className="h-full bg-blue-600 transition-all duration-500 ease-out"
                    style={{ width: `${(step / 3) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-8">
            <div className="h-2 sm:h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500 ease-out"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <main className="mb-8 sm:mb-12">
          <div key={step} className="animate-fade-in">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
          </div>
        </main>

        {step < 4 && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-slate-200">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className={`w-full md:w-auto px-4 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base transition-all flex items-center justify-center gap-2 ${
                step === 1
                  ? "invisible"
                  : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
              }`}
            >
              <RiArrowLeftLine /> Wstecz
            </button>

            <button
              onClick={nextStep}
              disabled={loading}
              className="w-full md:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2 min-w-[180px] sm:min-w-[200px]"
            >
              {loading ? (
                <>
                  <RiLoader4Line className="animate-spin text-lg sm:text-xl" />{" "}
                  Wysyłanie...
                </>
              ) : step === 3 ? (
                <>
                  Wyślij Brief <RiSendPlaneFill />
                </>
              ) : (
                <>
                  Dalej <RiArrowRightLine />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FormClient;
