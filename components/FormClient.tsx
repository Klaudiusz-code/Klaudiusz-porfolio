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
  RiWhatsappLine,
  RiCheckLine,
  RiGift2Fill,
  RiLoader4Line,
  RiErrorWarningLine,
  RiPaletteLine,
  RiUserStarLine,
  RiInformationLine,
  RiStarFill,
  RiFlashlightLine,
  RiTrophyLine,
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
  contactMethod: "email" | "whatsapp";
  projectType: string;
  budget: string;
  clientAction: string;
  targetAudience: string;
  stylePreference: string;
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
    title: "Wizytówka",
    subtitle: "Projekt SPARK",
    desc: "Nowoczesna strona wizytówkowa dla lokalnej firmy. Klient szybko znajdzie ofertę i skontaktuje się jednym kliknięciem.",
    icon: RiRocket2Line,
    price: "1 300 zł",
    features: [
      "Mapa dojazdu Google",
      "Przycisk „Zadzwoń teraz”",
      "Galeria zdjęć",
      "Godziny otwarcia",
    ],
  },
  {
    id: "corporate",
    title: "Strona Firmowa",
    subtitle: "Projekt FORGE",
    desc: "Rozbudowana strona budująca profesjonalny wizerunek firmy i zaufanie klientów.",
    icon: RiBuilding4Line,
    price: "2 500 zł",
    features: [
      "Opis usług i cennik",
      "Sekcja O firmie",
      "Galeria realizacji",
      "Formularz kontaktowy",
    ],
  },
  {
    id: "shop",
    title: "Sklep Internetowy",
    subtitle: "Projekt FLOW",
    desc: "Pełny sklep online do sprzedaży produktów lub usług z płatnościami i zarządzaniem zamówieniami.",
    icon: RiShoppingBag3Line,
    price: "3 500 zł",
    features: [
      "Płatności online",
      "Koszyk zakupowy",
      "Panel klienta",
      "Zarządzanie produktami",
    ],
  },
];

const audiences = [
  "Mieszkańcy okolicy / lokalni klienci",
  "Osoby prywatne",
  "Firmy i przedsiębiorcy",
  "Młodzi klienci (18–35)",
  "Każdy, kto szuka mojej usługi",
];

const styles = [
  "Nowoczesny / Czysty",
  "Ciemny (Dark Mode)",
  "Kreatywny / Kolorowy",
  "Klasyczny / Elegancki",
  "Minimalistyczny",
];

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
    contactMethod: "whatsapp",
    projectType: "",
    budget: "",
    clientAction: "",
    targetAudience: "",
    stylePreference: "",
  });

  const showToast = (msg: string, type: "error" | "success" = "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const getBudgetOptions = () => {
    const custom = {
      id: "custom",
      name: "Na Wymiar",
      price: "Indywidualna wycena",
      desc: "Projekt dopasowany w 100% do Twoich potrzeb.",
      recommended: false,
    };

    if (formData.projectType === "landing")
      return [
        {
          id: "start",
          name: "Start",
          price: "1 300 – 2 500 zł",
          desc: "Strona wizytówkowa z podstawowymi informacjami i szybkim kontaktem.",
          recommended: false,
        },
        {
          id: "pro",
          name: "Pro",
          price: "2 500 – 4 000 zł",
          desc: "Lepszy design, animacje i rozbudowana prezentacja oferty.",
          recommended: true,
        },
        custom,
      ];

    if (formData.projectType === "corporate")
      return [
        {
          id: "start",
          name: "Standard",
          price: "2 500 – 4 000 zł",
          desc: "Profesjonalna strona firmy z kilkoma podstronami.",
          recommended: false,
        },
        {
          id: "pro",
          name: "Rozbudowany",
          price: "4 000 – 7 000 zł",
          desc: "Więcej podstron, blog, SEO i zaawansowane funkcje.",
          recommended: true,
        },
        custom,
      ];

    if (formData.projectType === "shop")
      return [
        {
          id: "start",
          name: "Start",
          price: "3 500 – 5 000 zł",
          desc: "Sklep do 30 produktów z podstawową konfiguracją.",
          recommended: false,
        },
        {
          id: "pro",
          name: "Pro",
          price: "5 000 – 8 000 zł",
          desc: "Rozbudowany sklep z integracjami i automatyzacją.",
          recommended: true,
        },
        custom,
      ];

    return [custom];
  };

  const getServiceName = () =>
    services.find((s) => s.id === formData.projectType)?.title || "Usługa";

  const getPackageName = () =>
    getBudgetOptions().find((o) => o.id === formData.budget)?.name || "";

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
      return showToast("Wybierz typ usługi.");

    if (step === 3 && !formData.budget) return showToast("Wybierz pakiet.");

    if (step === 4 && !formData.clientAction)
      return showToast("Opisz cel strony.");

    if (step < 4) setStep((prev) => prev + 1);
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
        "Preferowany kontakt":
          formData.contactMethod === "whatsapp" ? "WhatsApp" : "Email",
        "Typ Usługi": getServiceName(),
        "Wybrany Pakiet": getPackageName(),
        "Cel strony": formData.clientAction,
        "Grupa docelowa": formData.targetAudience,
        "Styl wizualny": formData.stylePreference,
      };

      const response = await fetch("https://formspree.io/f/mjknqvgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailPayload),
      });

      if (response.ok) setStep(5);
      else showToast("Błąd wysyłania.");
    } catch {
      showToast("Błąd połączenia.");
    } finally {
      setLoading(false);
    }
  };

  // --- RENDER KROKÓW ---

  const renderStep1 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
      <div className="lg:col-span-7 space-y-8">
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
          <div className="flex items-center gap-3 mb-6">
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
              <label className="block text-sm sm:text-base font-bold text-slate-700 mb-2 flex items-center gap-2">
                Nazwa Firmy <span className="text-rose-500 text-lg">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="np. Warsztat Samochodowy Kowalski"
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-xl px-4 py-3.5 sm:px-6 sm:py-5 text-base sm:text-lg outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
              />
              <p className="text-xs sm:text-sm text-slate-400 mt-2 ml-1">
                Podaj nazwę, pod którą jesteś rozpoznawalny.
              </p>
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
              <label className="block text-sm sm:text-base font-bold text-slate-700 mb-2">
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

        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
              <RiPaletteLine size={20} className="sm:hidden" />
              <RiPaletteLine size={24} className="hidden sm:block" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-800">
              Wygląd i Materiały
            </h3>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2">
                Link do Logo
              </label>
              <input
                type="text"
                name="logoUrl"
                value={formData.logoUrl}
                onChange={handleChange}
                placeholder="https://drive.google.com/..."
                className="w-full bg-slate-50 border-2 border-slate-200 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-blue-500 transition-all text-sm sm:text-base"
              />
              <p className="text-[10px] sm:text-xs text-slate-400 mt-2 flex items-center gap-1">
                <RiInformationLine /> Wklej link np. z Google Drive, Dropbox lub
                chmury.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2">
                  Kolory firmowe
                </label>
                <input
                  type="text"
                  name="brandColors"
                  value={formData.brandColors}
                  onChange={handleChange}
                  placeholder="np. Czerń i Złoto"
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-blue-500 transition-all text-sm sm:text-base"
                />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-bold text-slate-700 mb-2">
                  Opisz styl, który lubisz
                </label>
                <input
                  type="text"
                  name="styleInspiration"
                  value={formData.styleInspiration}
                  onChange={handleChange}
                  placeholder="np. Minimalistyczny, elegancki..."
                  className="w-full bg-slate-50 border-2 border-slate-200 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-blue-500 transition-all text-sm sm:text-base"
                />
              </div>
            </div>
            <p className="text-[10px] sm:text-xs text-slate-400 mt-2">
              Opisz słowami lub cechami styl, który Ci odpowiada.
            </p>
          </div>
        </div>
      </div>

      <div className="lg:col-span-5 space-y-8">
        {/* REMOVED STICKY ON MOBILE, ADDED LG:STICKY */}
        <div className="bg-slate-800 text-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-3xl shadow-2xl shadow-slate-400/20 lg:sticky lg:top-8">
          <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
            <RiMailLine /> Dane Kontaktowe
          </h3>

          <div className="mb-6 sm:mb-8">
            <p className="text-slate-400 text-xs sm:text-sm mb-3">
              Preferowana forma kontaktu:
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div
                onClick={() =>
                  setFormData({ ...formData, contactMethod: "email" })
                }
                className={`cursor-pointer rounded-lg sm:rounded-xl border p-3 sm:p-4 flex flex-col items-center justify-center gap-2 transition-all ${
                  formData.contactMethod === "email"
                    ? "border-blue-500 bg-blue-500/20 text-blue-400"
                    : "border-slate-600 bg-slate-700/50 hover:bg-slate-700"
                }`}
              >
                <RiMailLine size={20} className="sm:hidden" />
                <RiMailLine size={24} className="hidden sm:block" />
                <span className="font-medium text-xs sm:text-sm">Email</span>
              </div>
              <div
                onClick={() =>
                  setFormData({ ...formData, contactMethod: "whatsapp" })
                }
                className={`cursor-pointer rounded-lg sm:rounded-xl border p-3 sm:p-4 flex flex-col items-center justify-center gap-2 transition-all ${
                  formData.contactMethod === "whatsapp"
                    ? "border-green-500 bg-green-500/20 text-green-400"
                    : "border-slate-600 bg-slate-700/50 hover:bg-slate-700"
                }`}
              >
                <RiWhatsappLine size={20} className="sm:hidden" />
                <RiWhatsappLine size={24} className="hidden sm:block" />
                <span className="font-medium text-xs sm:text-sm">WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-5">
            <div>
              <label className="block text-[10px] sm:text-xs font-bold uppercase text-slate-400 mb-2">
                Adres Email <span className="text-rose-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="twoj@email.com"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-blue-500 transition-all text-base sm:text-lg placeholder-slate-500"
              />
            </div>
            <div>
              <label className="block text-[10px] sm:text-xs font-bold uppercase text-slate-400 mb-2">
                Numer Telefonu
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+48 123 456 789"
                className="w-full bg-slate-700 border border-slate-600 rounded-lg sm:rounded-xl px-4 py-3 sm:px-5 sm:py-4 outline-none focus:border-blue-500 transition-all text-base sm:text-lg placeholder-slate-500"
              />
              <p className="text-[10px] sm:text-xs text-slate-500 mt-2">
                Numer niezbędny do weryfikacji i szybkiego kontaktu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep2 = () => (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-800 mb-3 sm:mb-4 tracking-tight">
          Wybierz typ rozwiązania
        </h3>
        <p className="text-base sm:text-xl text-slate-500">
          Co najlepiej wspomoże Twój biznes?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {services.map((srv) => (
          <div
            key={srv.id}
            onClick={() =>
              setFormData({ ...formData, projectType: srv.id, budget: "" })
            }
            className={`cursor-pointer rounded-2xl sm:rounded-[2.5rem] border-2 p-5 sm:p-6 lg:p-10 transition-all duration-300 flex flex-col h-full relative overflow-hidden group ${
              formData.projectType === srv.id
                ? "border-blue-600 bg-white shadow-2xl shadow-blue-200 transform scale-[1.01] sm:scale-[1.02]"
                : "border-slate-100 bg-white hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2"
            }`}
          >
            {formData.projectType === srv.id && (
              <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white pointer-events-none" />
            )}

            <div className="relative z-10 flex flex-col h-full">
              <div
                className={`w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-8 shadow-sm transition-colors duration-300 shrink-0 ${
                  formData.projectType === srv.id
                    ? "bg-blue-600 text-white shadow-blue-200"
                    : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500"
                }`}
              >
                <srv.icon size={28} className="sm:hidden" />
                <srv.icon size={40} className="hidden sm:block" />
              </div>

              <h4 className="font-bold text-lg sm:text-2xl mb-1 sm:mb-2 text-slate-900">
                {srv.title}
              </h4>
              <span className="text-[10px] sm:text-xs font-bold uppercase text-slate-400 mb-3 sm:mb-6 block tracking-wider">
                {srv.subtitle}
              </span>

              <p className="text-slate-600 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-8 flex-1">
                {srv.desc}
              </p>

              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-8 border-t border-slate-100 pt-3 sm:pt-6">
                {srv.features.map((feat, i) => (
                  <li
                    key={i}
                    className="flex items-center text-xs sm:text-sm text-slate-600 font-medium"
                  >
                    <div
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center mr-2 sm:mr-3 shrink-0 ${
                        formData.projectType === srv.id
                          ? "bg-blue-100 text-blue-600"
                          : "bg-slate-100 text-slate-400"
                      }`}
                    >
                      <RiCheckLine size={10} className="sm:hidden" />
                      <RiCheckLine size={12} className="hidden sm:block" />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-2 sm:pt-4">
                <div className="flex justify-between items-end">
                  <span className="text-xs sm:text-sm text-slate-400 font-semibold">
                    Cena od:
                  </span>
                  <span className="text-xl sm:text-3xl font-black text-slate-900">
                    {srv.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderStep3 = () => {
    const options = getBudgetOptions();
    return (
      <div className="w-full max-w-5xl mx-auto px-2">
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-800 mb-2 sm:mb-3 tracking-tight">
            Wybierz wariant
          </h3>
          <p className="text-sm sm:text-lg text-slate-500">
            Dla usługi:{" "}
            <span className="font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full text-xs sm:text-base inline-block">
              {getServiceName()}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {options.map((opt) => (
            <div
              key={opt.id}
              onClick={() => setFormData({ ...formData, budget: opt.id })}
              className={`cursor-pointer rounded-2xl border-2 p-4 sm:p-6 flex flex-col h-full transition-all relative bg-white group ${
                formData.budget === opt.id
                  ? "border-blue-600 shadow-xl shadow-blue-200 scale-[1.01] sm:scale-[1.02] z-10"
                  : "border-slate-100 hover:border-blue-300 hover:shadow-lg"
              }`}
            >
              {opt.recommended && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-[8px] sm:text-[10px] font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1">
                  <RiTrophyLine size={10} className="sm:hidden" />
                  <RiTrophyLine size={12} className="hidden sm:block" />
                  <span>Polecany</span>
                </div>
              )}

              <div className="mb-3 sm:mb-4">
                <h5 className="font-bold text-lg sm:text-xl text-slate-800 mb-1 sm:mb-2">
                  {opt.name}
                </h5>
                <div className="text-blue-600 font-bold text-2xl sm:text-3xl mb-2 sm:mb-4 leading-none">
                  {opt.price}
                </div>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed h-8 sm:h-10">
                  {opt.desc}
                </p>
              </div>

              <div className="mt-auto pt-4 sm:pt-6">
                <div
                  className={`w-full py-2.5 sm:py-3.5 rounded-lg sm:rounded-xl font-semibold text-center transition-all text-xs sm:text-sm border-2 ${
                    formData.budget === opt.id
                      ? "bg-blue-600 border-blue-600 text-white shadow-md"
                      : "bg-white border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600"
                  }`}
                >
                  {formData.budget === opt.id
                    ? "Wybrano"
                    : "Wybierz ten pakiet"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderStep4 = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
      <div className="lg:col-span-2 space-y-6 sm:space-y-8 lg:space-y-10">
        <div className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 shadow-lg shadow-slate-200/50">
          <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
            <div className="p-2 sm:p-3 bg-blue-100 rounded-xl sm:rounded-2xl text-blue-600 mt-1 shrink-0">
              <RiFlashlightLine size={20} className="sm:hidden" />
              <RiFlashlightLine size={24} className="hidden sm:block" />
            </div>
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                Jaki jest główny cel?
              </h3>
              <p className="text-slate-500 text-sm sm:text-lg">
                Co konkretnie ma zrobić klient odwiedzający Twoją stronę?
              </p>
            </div>
          </div>

          <textarea
            name="clientAction"
            value={formData.clientAction}
            onChange={handleChange}
            rows={5}
            placeholder="Np. Klient ma zobaczyć cennik, kliknąć 'Zarezerwuj termin' i wpisać swoje dane. Albo: Klient ma zadzwonić po przeczytaniu opinii."
            className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl sm:rounded-3xl px-4 py-4 sm:px-8 sm:py-6 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all resize-none text-base sm:text-lg leading-loose text-slate-800 placeholder:text-slate-300"
          ></textarea>
          <div className="flex items-center gap-2 mt-3 sm:mt-4 text-xs sm:text-sm text-slate-400 bg-slate-50 p-3 sm:p-4 rounded-xl">
            <RiStarFill size={14} className="text-amber-400 sm:hidden" />
            <RiStarFill size={16} className="text-amber-400 hidden sm:block" />
            <span className="font-medium text-slate-500">
              Określ jedno główne działanie (Call to Action).
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">
              Grupa docelowa <span className="text-rose-500">*</span>
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {audiences.map((aud) => (
                <button
                  key={aud}
                  onClick={() =>
                    setFormData({ ...formData, targetAudience: aud })
                  }
                  className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border text-sm sm:text-base font-medium flex justify-between items-center transition-all ${
                    formData.targetAudience === aud
                      ? "border-blue-600 bg-blue-50 text-blue-800 shadow-md"
                      : "border-slate-100 text-slate-600 hover:border-blue-200 hover:bg-slate-50"
                  }`}
                >
                  {aud}
                  {formData.targetAudience === aud && (
                    <RiCheckLine className="text-blue-600 text-xl sm:text-2xl shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-slate-100 shadow-lg shadow-slate-200/50">
            <h4 className="text-lg sm:text-xl font-bold text-slate-900 mb-4 sm:mb-6">
              Styl wizualny
            </h4>
            <div className="space-y-2 sm:space-y-3">
              {styles.map((sty) => (
                <button
                  key={sty}
                  onClick={() =>
                    setFormData({ ...formData, stylePreference: sty })
                  }
                  className={`w-full text-left px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border text-sm sm:text-base font-medium flex justify-between items-center transition-all ${
                    formData.stylePreference === sty
                      ? "border-purple-500 bg-purple-50 text-purple-800 shadow-md"
                      : "border-slate-100 text-slate-600 hover:border-purple-200 hover:bg-slate-50"
                  }`}
                >
                  {sty}
                  {formData.stylePreference === sty && (
                    <RiCheckLine className="text-purple-600 text-xl sm:text-2xl shrink-0" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-1">
        {/* STATIC ON MOBILE, STICKY ON DESKTOP */}
        <div className="bg-slate-800 text-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 shadow-2xl lg:sticky lg:top-8">
          <div className="flex items-center gap-3 mb-6 sm:mb-8 text-blue-400">
            <div className="p-2 bg-blue-400/10 rounded-xl">
              <RiGift2Fill size={24} className="sm:hidden" />
              <RiGift2Fill size={28} className="hidden sm:block" />
            </div>
            <div>
              <span className="block text-[8px] sm:text-[10px] font-bold uppercase tracking-widest opacity-60">
                Oferta specjalna
              </span>
              <span className="block text-sm sm:text-lg font-bold">
                Darmowy projekt
              </span>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1 sm:mb-2">
                Usługa
              </span>
              <span className="text-base sm:text-xl font-bold block leading-tight">
                {getServiceName()}
              </span>
            </div>
            <div className="w-full h-px bg-slate-700"></div>
            <div>
              <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1 sm:mb-2">
                Wybrany pakiet
              </span>
              <span className="text-sm sm:text-lg font-bold block text-blue-400">
                {getPackageName()}
              </span>
            </div>

            {formData.stylePreference && (
              <>
                <div className="w-full h-px bg-slate-700"></div>
                <div>
                  <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1 sm:mb-2">
                    Styl
                  </span>
                  <span className="text-xs sm:text-base font-medium text-slate-300">
                    {formData.stylePreference}
                  </span>
                </div>
              </>
            )}
          </div>

          <div className="mt-6 sm:mt-10 pt-4 sm:pt-6 border-t border-slate-700 flex items-start gap-2 sm:gap-3">
            <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400 mt-0.5">
              <RiCheckLine size={14} className="sm:hidden" />
              <RiCheckLine size={18} className="hidden sm:block" />
            </div>
            <div>
              <span className="text-xs sm:text-sm text-white leading-snug block font-medium">
                Bez zobowiązań.
              </span>
              <span className="text-[10px] sm:text-xs text-slate-400 leading-snug">
                Przygotuję wstępny projekt i odezwę się.
              </span>
            </div>
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
                Wypełnij brief w kilku prostych krokach. Przygotuję bezpłatną
                wycenę i wstępną koncepcję projektu.
              </p>
            </div>

            <div className="hidden md:flex flex-col items-center justify-center bg-blue-50 rounded-2xl px-6 sm:px-8 py-4 sm:py-6 border border-blue-100 min-w-[120px] sm:min-w-[140px]">
              <div className="text-4xl sm:text-5xl font-black text-blue-200 select-none leading-none">
                0{step}
              </div>
              <div className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-blue-600 mt-1 sm:mt-2">
                Krok {step} z 4
              </div>
            </div>
          </div>

          <div className="mt-4 sm:mt-8">
            <div className="h-2 sm:h-2.5 w-full bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-600 transition-all duration-500 ease-out"
                style={{ width: `${(step / 4) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>

        <main className="mb-8 sm:mb-12">
          <div key={step} className="animate-fade-in">
            {step === 1 && renderStep1()}
            {step === 2 && renderStep2()}
            {step === 3 && renderStep3()}
            {step === 4 && renderStep4()}

            {step === 5 && (
              <div className="min-h-[300px] sm:min-h-[400px] flex flex-col items-center justify-center text-center bg-white rounded-2xl sm:rounded-[2.5rem] p-6 sm:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 animate-fade-in mx-auto">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-blue-100 rounded-full flex items-center justify-center mb-6 sm:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-xl shadow-blue-200">
                    <RiSendPlaneFill size={24} className="sm:hidden" />
                    <RiSendPlaneFill size={28} className="hidden sm:block" />
                  </div>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-3 sm:mb-4">
                  Dziękuję!
                </h2>
                <p className="text-sm sm:text-lg text-slate-500 max-w-2xl leading-relaxed px-4">
                  Otrzymałem brief dla firmy{" "}
                  <strong className="text-slate-800">{formData.name}</strong>.
                  <br className="hidden sm:block" />
                  Przygotuję projekt i odezwę się przez{" "}
                  <strong className="text-blue-600">
                    {formData.contactMethod === "whatsapp"
                      ? "WhatsApp"
                      : "Email"}
                  </strong>
                  .
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 bg-slate-800 text-white rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl"
                >
                  Wyślij kolejne zapytanie
                </button>
              </div>
            )}
          </div>
        </main>

        {step < 5 && (
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
              ) : step === 4 ? (
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
