"use client";

import React, { useState, ChangeEvent } from "react";
import {
  FaFacebookMessenger,
  FaCheck,
  FaRegLightbulb,
  FaRocket,
  FaPlus,
} from "react-icons/fa";
import {
  RiFilePaper2Line,
  RiBuilding4Line,
  RiPhoneLine,
  RiWhatsappLine,
  RiMailSendLine,
  RiPaletteLine,
  RiArrowRightLine,
  RiShoppingBag2Line,
  RiLayoutMasonryLine,
  RiUserVoiceLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";

type FormData = {
  "Nazwa firmy": string;
  "Adres e-mail": string;
  "Rodzaj projektu": string;
  "Opis działalności": string;
  "Grupa docelowa": string;
  "Unikalna przewaga": string;
  "Preferowany kontakt": string;
  "Szczegóły kontaktu": string;
  "Obecna sytuacja": string;
  "Status loga": string;
  "Status zdjęć": string;
  "Paleta kolorów": string;
  "Własny pomysł na kolory": string;
  "Atmosfera strony": string;
  "Domena i hosting": string;
};

const FormClient = () => {
  const [formData, setFormData] = useState<FormData>({
    "Nazwa firmy": "",
    "Adres e-mail": "",
    "Rodzaj projektu": "",
    "Opis działalności": "",
    "Grupa docelowa": "",
    "Unikalna przewaga": "",
    "Preferowany kontakt": "",
    "Szczegóły kontaktu": "",
    "Obecna sytuacja": "",
    "Status loga": "",
    "Status zdjęć": "",
    "Paleta kolorów": "",
    "Własny pomysł na kolory": "",
    "Atmosfera strony": "",
    "Domena i hosting": "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const palettes = [
    {
      value: "Biznesowy (Niebieski)",
      label: "Biznesowy",
      color: "bg-blue-600",
      ring: "ring-blue-600",
    },
    {
      value: "Energiczny (Pomarańczowy)",
      label: "Energiczny",
      color: "bg-orange-500",
      ring: "ring-orange-500",
    },
    {
      value: "Naturalny (Zielony)",
      label: "Naturalny",
      color: "bg-emerald-500",
      ring: "ring-emerald-500",
    },
    {
      value: "Elegancki (Ciemny)",
      label: "Elegancki",
      color: "bg-slate-800",
      ring: "ring-slate-800",
    },
    {
      value: "Kreatywny (Różowy)",
      label: "Kreatywny",
      color: "bg-pink-500",
      ring: "ring-pink-500",
    },
    {
      value: "Mój pomysł",
      label: "Własny",
      color: "bg-gradient-to-br from-slate-100 to-slate-200",
      ring: "ring-slate-400",
      isCustom: true,
      isDashed: true,
    },
  ];

  return (
    <div className="min-h-screen  text-slate-800 font-sans selection:bg-blue-100 selection:text-blue-900">
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10 pointer-events-none"></div>

      <form
        action="https://formspree.io/f/mjknqvgw"
        method="POST"
        className="max-w-5xl mx-auto px-4 py-12 md:py-20 space-y-14"
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/30">
              1
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Podstawowe informacje
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 block">
                  Nazwa Firmy
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="Nazwa firmy"
                    value={formData["Nazwa firmy"]}
                    onChange={handleChange}
                    placeholder="np. Restauracja Pod Klonem"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 shadow-inner"
                  />
                  <RiBuilding4Line className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors text-xl" />
                </div>
              </div>
              <div className="space-y-2 group">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 block">
                  Twój e-mail
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="Adres e-mail"
                    value={formData["Adres e-mail"]}
                    onChange={handleChange}
                    placeholder="kontakt@firma.pl"
                    required
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-5 text-slate-800 font-medium placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition-all duration-300 shadow-inner"
                  />
                  <RiMailSendLine className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-blue-500 transition-colors text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-600 text-white font-bold shadow-lg shadow-purple-500/30">
              2
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Jaki rodzaj strony Cię interesuje?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5">
            <label
              className={`group relative cursor-pointer rounded-3xl border-2 p-1 transition-all duration-300 hover:shadow-xl ${
                formData["Rodzaj projektu"] === "Szybka wizytówka"
                  ? "border-blue-500 bg-blue-50/40 shadow-[0_0_0_4px_rgba(37,99,235,0.1)]"
                  : "border-slate-200 bg-white hover:border-blue-200"
              }`}
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-[1.6rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
                <input
                  type="radio"
                  name="Rodzaj projektu"
                  value="Szybka wizytówka"
                  onChange={handleRadioChange}
                  className="sr-only"
                  checked={formData["Rodzaj projektu"] === "Szybka wizytówka"}
                />

                <div
                  className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center text-4xl transition-all duration-300 ${
                    formData["Rodzaj projektu"] === "Szybka wizytówka"
                      ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-100"
                      : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-500 scale-95 group-hover:scale-100"
                  }`}
                >
                  <RiFilePaper2Line />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      Szybka Wizytówka
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        formData["Rodzaj projektu"] === "Szybka wizytówka"
                          ? "bg-blue-600 text-white"
                          : "bg-slate-100"
                      }`}
                    >
                      <FaCheck className="text-sm opacity-0 group-hover:opacity-50 transition-opacity" />
                      {formData["Rodzaj projektu"] === "Szybka wizytówka" && (
                        <FaCheck className="text-sm text-white opacity-100" />
                      )}
                    </div>
                  </div>
                  <p className="text-slate-500 mb-4 leading-relaxed">
                    Idealna dla małych usług i lokalnych firm. Wszystkie
                    najważniejsze informacje na jednej stronie, bez zbędnego
                    klikania.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-blue-200" /> Szybkie
                      ładowanie
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-blue-200" /> Idealna
                      na mobile
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-blue-200" />{" "}
                      Wizytówka + Kontakt
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-blue-200" /> Mapa
                      dojazdu
                    </div>
                  </div>
                </div>
              </div>
            </label>

            <label
              className={`group relative cursor-pointer rounded-3xl border-2 p-1 transition-all duration-300 hover:shadow-xl ${
                formData["Rodzaj projektu"] === "Pełna strona firmowa"
                  ? "border-purple-500 bg-purple-50/40 shadow-[0_0_0_4px_rgba(147,51,234,0.1)]"
                  : "border-slate-200 bg-white hover:border-purple-200"
              }`}
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-[1.6rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
                <input
                  type="radio"
                  name="Rodzaj projektu"
                  value="Pełna strona firmowa"
                  onChange={handleRadioChange}
                  className="sr-only"
                  checked={
                    formData["Rodzaj projektu"] === "Pełna strona firmowa"
                  }
                />

                <div
                  className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center text-4xl transition-all duration-300 ${
                    formData["Rodzaj projektu"] === "Pełna strona firmowa"
                      ? "bg-purple-600 text-white shadow-xl shadow-purple-500/30 scale-100"
                      : "bg-slate-100 text-slate-400 group-hover:bg-purple-50 group-hover:text-purple-500 scale-95 group-hover:scale-100"
                  }`}
                >
                  <RiBuilding4Line />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      Strona Firmowa
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        formData["Rodzaj projektu"] === "Pełna strona firmowa"
                          ? "bg-purple-600 text-white"
                          : "bg-slate-100"
                      }`}
                    >
                      <FaCheck className="text-sm opacity-0 group-hover:opacity-50 transition-opacity" />
                      {formData["Rodzaj projektu"] ===
                        "Pełna strona firmowa" && (
                        <FaCheck className="text-sm text-white opacity-100" />
                      )}
                    </div>
                  </div>
                  <p className="text-slate-500 mb-4 leading-relaxed">
                    Dla firm, które chcą budować markę i autorytet. Rozbudowana
                    struktura z pełną ofertą.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-purple-200" />{" "}
                      Osobne podstrony
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-purple-200" />{" "}
                      Galeria realizacji
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-purple-200" />{" "}
                      Sekcja O nas
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-purple-200" />{" "}
                      Cennik usług
                    </div>
                  </div>
                </div>
              </div>
            </label>

            <label
              className={`group relative cursor-pointer rounded-3xl border-2 p-1 transition-all duration-300 hover:shadow-xl ${
                formData["Rodzaj projektu"] === "Sklep internetowy"
                  ? "border-emerald-500 bg-emerald-50/40 shadow-[0_0_0_4px_rgba(16,185,129,0.1)]"
                  : "border-slate-200 bg-white hover:border-emerald-200"
              }`}
            >
              <div className="bg-white/50 backdrop-blur-sm rounded-[1.6rem] p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-10">
                <input
                  type="radio"
                  name="Rodzaj projektu"
                  value="Sklep internetowy"
                  onChange={handleRadioChange}
                  className="sr-only"
                  checked={formData["Rodzaj projektu"] === "Sklep internetowy"}
                />

                <div
                  className={`shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center text-4xl transition-all duration-300 ${
                    formData["Rodzaj projektu"] === "Sklep internetowy"
                      ? "bg-emerald-500 text-white shadow-xl shadow-emerald-500/30 scale-100"
                      : "bg-slate-100 text-slate-400 group-hover:bg-emerald-50 group-hover:text-emerald-500 scale-95 group-hover:scale-100"
                  }`}
                >
                  <RiShoppingBag2Line />
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900">
                      Sklep Internetowy
                    </h3>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                        formData["Rodzaj projektu"] === "Sklep internetowy"
                          ? "bg-emerald-500 text-white"
                          : "bg-slate-100"
                      }`}
                    >
                      <FaCheck className="text-sm opacity-0 group-hover:opacity-50 transition-opacity" />
                      {formData["Rodzaj projektu"] === "Sklep internetowy" && (
                        <FaCheck className="text-sm text-white opacity-100" />
                      )}
                    </div>
                  </div>
                  <p className="text-slate-500 mb-4 leading-relaxed">
                    Do sprzedaży produktów online 24/7. Gotowy na przyjmowanie
                    zamówień i płatności.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-emerald-200" />{" "}
                      Panel produktów
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-emerald-200" />{" "}
                      Koszyk zakupowy
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-emerald-200" />{" "}
                      Płatności (BLIK/Karta)
                    </div>
                    <div className="flex items-center gap-2">
                      <RiCheckboxCircleFill className="text-emerald-200" />{" "}
                      Statusy zamówień
                    </div>
                  </div>
                </div>
              </div>
            </label>
          </div>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-2">
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-orange-500 text-white font-bold shadow-lg shadow-orange-500/30">
              3
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Szczegóły i styl
            </h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 space-y-10">
            <div>
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Gdzie teraz jesteś?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    val: "Start od zera",
                    desc: "Nie mam żadnej strony",
                    icon: <FaRocket className="text-2xl" />,
                  },
                  {
                    val: "Remont obecnej",
                    desc: "Mam starą stronę do wymiany",
                    icon: <FaRegLightbulb className="text-2xl" />,
                  },
                  {
                    val: "Brak efektów",
                    desc: "Mam stronę, ale nie działa",
                    icon: <RiUserVoiceLine className="text-2xl" />,
                  },
                ].map((item) => (
                  <label
                    key={item.val}
                    className={`cursor-pointer rounded-2xl border-2 p-6 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-lg ${
                      formData["Obecna sytuacja"] === item.val
                        ? "border-slate-900 bg-slate-900 text-white shadow-2xl shadow-slate-900/20"
                        : "border-slate-100 bg-white hover:border-slate-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="Obecna sytuacja"
                      value={item.val}
                      onChange={handleRadioChange}
                      className="sr-only"
                    />
                    <div
                      className={`mb-3 transition-transform duration-300 ${
                        formData["Obecna sytuacja"] === item.val
                          ? "scale-110"
                          : "scale-100"
                      }`}
                    >
                      {formData["Obecna sytuacja"] === item.val ? (
                        <span className="text-orange-400">{item.icon}</span>
                      ) : (
                        <span className="text-slate-400">{item.icon}</span>
                      )}
                    </div>
                    <span className="font-bold text-base block mb-1">
                      {item.val}
                    </span>
                    <span
                      className={`text-xs font-medium ${
                        formData["Obecna sytuacja"] === item.val
                          ? "text-slate-300"
                          : "text-slate-500"
                      }`}
                    >
                      {item.desc}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Opisy */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 block">
                  Opis działalności
                </label>
                <textarea
                  name="Opis działalności"
                  value={formData["Opis działalności"]}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Czym zajmuje się firma na co dzień? Im więcej, tym lepiej."
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all resize-none"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1 block">
                  Kto jest Twoim klientem?
                </label>
                <textarea
                  name="Grupa docelowa"
                  value={formData["Grupa docelowa"]}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Do kogo kierujesz ofertę? Kto kupuje najczęściej?"
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-slate-400 focus:bg-white transition-all resize-none"
                />
              </div>
            </div>

            {/* Atmosfera */}
            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Jaka atmosfera?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    val: "Prestiż",
                    label: "Elegancko i poważnie",
                    emoji: "🎩",
                  },
                  {
                    val: "Zaufanie",
                    label: "Przyjaznie i po ludzku",
                    emoji: "🤝",
                  },
                  {
                    val: "Nowoczesność",
                    label: "Dynamicznie i odważnie",
                    emoji: "⚡",
                  },
                ].map((item) => (
                  <label
                    key={item.val}
                    className={`cursor-pointer rounded-2xl border-2 p-5 flex items-center gap-4 transition-all hover:shadow-md ${
                      formData["Atmosfera strony"] === item.val
                        ? "border-blue-500 bg-blue-50/30 shadow-md"
                        : "border-slate-100 bg-white"
                    }`}
                  >
                    <input
                      type="radio"
                      name="Atmosfera strony"
                      value={item.val}
                      onChange={handleRadioChange}
                      className="sr-only"
                    />
                    <span className="text-3xl">{item.emoji}</span>
                    <div>
                      <span className="block font-bold text-slate-900">
                        {item.val}
                      </span>
                      <span className="block text-xs text-slate-500">
                        {item.label}
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* SEKCJA 4: MATERIAŁY I KONTAKT */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Kontakt */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 space-y-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <RiPhoneLine className="text-blue-500" /> Kontakt
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {["Telefon", "WhatsApp", "E-mail", "Messenger"].map((method) => (
                <label
                  key={method}
                  className={`cursor-pointer rounded-2xl border-2 p-5 flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                    formData["Preferowany kontakt"] === method
                      ? "border-blue-500 bg-blue-500 text-white shadow-lg scale-105"
                      : "border-slate-100 bg-white hover:bg-slate-50 text-slate-500 hover:border-blue-200"
                  }`}
                >
                  <input
                    type="radio"
                    name="Preferowany kontakt"
                    value={method}
                    onChange={handleRadioChange}
                    className="sr-only"
                  />
                  <div className="text-2xl">
                    {method === "Telefon" && <RiPhoneLine />}
                    {method === "WhatsApp" && <RiWhatsappLine />}
                    {method === "E-mail" && <RiMailSendLine />}
                    {method === "Messenger" && <FaFacebookMessenger />}
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wide">
                    {method}
                  </span>
                </label>
              ))}
            </div>
            <div className="space-y-2">
              <input
                type="text"
                name="Szczegóły kontaktu"
                value={formData["Szczegóły kontaktu"]}
                onChange={handleChange}
                placeholder="Nr telefonu lub inny szczegół..."
                className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Materiały + Paleta */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-xl shadow-slate-200/60 border border-slate-100 space-y-8">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <RiPaletteLine className="text-purple-500" /> Materiały
            </h3>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 block mb-2">
                  Domena / Hosting
                </label>
                <select
                  name="Domena i hosting"
                  value={formData["Domena i hosting"]}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-800 focus:outline-none focus:border-purple-500 appearance-none font-medium"
                >
                  <option value="" disabled>
                    Wybierz opcję...
                  </option>
                  <option value="Mam wszystko">Mam domenę i hosting</option>
                  <option value="Mam domenę, brak hostingu">
                    Mam tylko domenę
                  </option>
                  <option value="Nie mam nic, potrzebuję pomocy">
                    Nie mam nic
                  </option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 block mb-2">
                    Logo
                  </label>
                  <select
                    name="Status loga"
                    value={formData["Status loga"]}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-800 focus:outline-none focus:border-purple-500 appearance-none font-medium"
                  >
                    <option value="" disabled>
                      Stan
                    </option>
                    <option value="Mam logo">Mam pliki</option>
                    <option value="Nie mam, pomóż!">Projektujcie</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 block mb-2">
                    Zdjęcia
                  </label>
                  <select
                    name="Status zdjęć"
                    value={formData["Status zdjęć"]}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-slate-800 focus:outline-none focus:border-purple-500 appearance-none font-medium"
                  >
                    <option value="" disabled>
                      Stan
                    </option>
                    <option value="Mam własne">Mam własne</option>
                    <option value="Brak zdjęć">Brak zdjęć</option>
                  </select>
                </div>
              </div>
            </div>

            {/* PALETA KOLORÓW Z POPRAWKĄ */}
            <div className="pt-6 border-t border-slate-100">
              <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1 block mb-4">
                Podstawowy kolor
              </label>
              <div className="flex justify-between items-center">
                {palettes.map((p) => (
                  <label
                    key={p.value}
                    className="relative cursor-pointer group"
                  >
                    <input
                      type="radio"
                      name="Paleta kolorów"
                      value={p.value}
                      onChange={handleRadioChange}
                      className="sr-only"
                    />
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border-2 border-white shadow-sm 
                      ${
                        formData["Paleta kolorów"] === p.value
                          ? `ring-4 ring-offset-2 ${p.ring}/20 scale-110 shadow-lg`
                          : "group-hover:scale-105"
                      }
                      ${
                        p.isDashed
                          ? "border-2 border-dashed border-slate-400 bg-slate-50"
                          : ""
                      }
                      ${!p.isDashed ? p.color : ""}
                    `}
                    >
                      {p.isCustom && (
                        <FaPlus
                          className={`text-xl transition-colors ${
                            formData["Paleta kolorów"] === p.value
                              ? "text-slate-600"
                              : "text-slate-400"
                          }`}
                        />
                      )}

                      {!p.isCustom &&
                        formData["Paleta kolorów"] === p.value && (
                          <FaCheck className="text-white text-sm drop-shadow-md" />
                        )}
                    </div>
                  </label>
                ))}
              </div>
              {formData["Paleta kolorów"] === "Mój pomysł" && (
                <div className="mt-4 animate-in fade-in slide-in-from-top-2 duration-300">
                  <input
                    type="text"
                    name="Własny pomysł na kolory"
                    value={formData["Własny pomysł na kolory"]}
                    onChange={handleChange}
                    placeholder="np. Granatowy + Złoty akcent..."
                    className="w-full bg-slate-50 border-2 border-dashed border-slate-300 rounded-2xl px-6 py-3 text-sm focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* FOOTER / CTA */}
        <div className="pt-8 text-center">
          <button
            type="submit"
            className="group relative w-full md:w-auto inline-flex items-center justify-center px-12 py-5 bg-slate-900 hover:bg-slate-800 text-white text-lg font-bold rounded-2xl shadow-xl shadow-slate-900/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
          >
            <span>Wyślij zapytanie</span>
            <RiArrowRightLine className="ml-2 text-xl group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="mt-6 text-slate-400 text-sm max-w-lg mx-auto">
            Przesłanie formularza jest bezpieczne i niezobowiązujące. Odpiszemy
            w ciągu 24h roboczych.
          </p>
        </div>
      </form>
    </div>
  );
};

export default FormClient;
