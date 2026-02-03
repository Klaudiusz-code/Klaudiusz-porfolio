"use client";

import React, { useState, ChangeEvent } from "react";
import { FaFacebookMessenger, FaRocket } from "react-icons/fa";
import {
  RiFilePaper2Line,
  RiBuilding4Line,
  RiPhoneLine,
  RiWhatsappLine,
  RiMailSendLine,
  RiCheckLine,
  RiPaletteLine,
  RiLightbulbLine,
  RiServerLine,
  RiArrowRightLine,
} from "react-icons/ri";

// Typ danych teraz pasuje do polskich wartości
type FormData = {
  company_name: string;
  email: string;
  project_type: string;
  description: string;
  who_calls: string;
  unique_value: string;
  contact_method: string;
  contact_details: string;
  situation: string;
  logo: string;
  photos: string;
  color_palette: string;
  custom_color_idea: string;
  tone: string;
  domain_status: string;
};

const FormClient = () => {
  const [formData, setFormData] = useState<FormData>({
    company_name: "",
    email: "",
    project_type: "",
    description: "",
    who_calls: "",
    unique_value: "",
    contact_method: "",
    contact_details: "",
    situation: "",
    logo: "",
    photos: "",
    color_palette: "",
    custom_color_idea: "",
    tone: "",
    domain_status: "",
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
      class: "bg-blue-500",
      ring: "ring-blue-500",
    },
    {
      value: "Energiczny (Pomarańczowy)",
      label: "Energiczny",
      class: "bg-orange-500",
      ring: "ring-orange-500",
    },
    {
      value: "Naturalny (Zielony)",
      label: "Naturalny",
      class: "bg-green-500",
      ring: "ring-green-500",
    },
    {
      value: "Elegancki (Ciemny)",
      label: "Elegancki",
      class: "bg-gray-900",
      ring: "ring-gray-900",
    },
    {
      value: "Kreatywny (Różowy)",
      label: "Kreatywny",
      class: "bg-pink-500",
      ring: "ring-pink-500",
    },
    {
      value: "Mój pomysł",
      label: "Mój pomysł",
      class: "bg-gradient-to-br from-gray-200 to-gray-400",
      ring: "ring-gray-500",
      isCustom: true,
    },
  ];

  return (
    <form
      action="https://formspree.io/f/mjknqvgw"
      method="POST"
      className="space-y-8 max-w-6xl mx-auto pb-20"
    >
      {/* Header - Responsywny */}
      <div className="text-center space-y-3 mb-10 px-4">
        <span className="inline-block py-1 px-3 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest border border-blue-100 mb-2">
          Brief Projektowy
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Zaprojektujmy Twój sukces
        </h2>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Wypełnij formularz, a ja przygotuję propozycję idealnie dopasowaną do
          Twojej branży.
        </p>
      </div>

      {/* Sekcja 1: Podstawy - Mniej paddingu na mobile */}
      <div className="bg-white/80 backdrop-blur-sm p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100/80 space-y-6 md:space-y-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70"></div>

        <div className="relative z-10 flex items-center space-x-3 mb-2">
          <span className="bg-blue-600 text-white p-2 md:p-2.5 rounded-xl md:rounded-2xl shadow-lg shadow-blue-500/20">
            <RiFilePaper2Line />
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              1. Dane kontaktowe
            </h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              Bez tajemnic.
            </p>
          </div>
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
              Nazwa firmy
            </label>
            <input
              type="text"
              name="company_name"
              value={formData.company_name}
              onChange={handleChange}
              placeholder="np. Studio Design, Pizzeria Italia"
              required
              className="w-full rounded-2xl border border-gray-200 bg-white px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-base md:text-lg placeholder:text-gray-300 shadow-sm"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
              Twój e-mail
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="kontakt@firma.pl"
              required
              className="w-full rounded-2xl border border-gray-200 bg-white px-6 md:px-8 py-4 md:py-5 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-bold text-base md:text-lg placeholder:text-gray-300 shadow-sm"
            />
          </div>
        </div>
      </div>

      {/* Sekcja 2: Co budujemy + SYTUACJA */}
      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        <div className="md:col-span-2 bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100/80 space-y-6 md:space-y-8">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center space-x-3">
              <span className="bg-purple-600 text-white p-2 md:p-2.5 rounded-xl md:rounded-2xl shadow-lg shadow-purple-500/20">
                <RiBuilding4Line />
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                  2. Struktura strony
                </h3>
                <p className="text-xs md:text-sm text-gray-500 font-medium">
                  Jaka skala?
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Landing - Wartość po polsku */}
            <label
              className={`cursor-pointer relative rounded-2xl md:rounded-3xl border-2 p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                formData.project_type === "Szybka wizytówka"
                  ? "border-blue-500 bg-blue-50/30 ring-4 ring-blue-500/10 shadow-xl shadow-blue-500/10"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="project_type"
                value="Szybka wizytówka"
                onChange={handleRadioChange}
                className="sr-only"
                checked={formData.project_type === "Szybka wizytówka"}
              />
              <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 transition-colors ${
                  formData.project_type === "Szybka wizytówka"
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/40"
                    : "bg-gray-50 text-gray-400 border border-gray-100"
                }`}
              >
                <RiFilePaper2Line />
              </div>
              <span className="font-bold text-gray-900 text-lg md:text-xl mb-2">
                Szybka wizytówka
              </span>
              <span className="text-sm text-gray-500 leading-relaxed">
                Kompaktowa strona "One Page". Wystarczy, żeby pokazać ofertę,
                realizacje i numer telefonu.
              </span>
            </label>

            {/* Multi-page - Wartość po polsku */}
            <label
              className={`cursor-pointer relative rounded-2xl md:rounded-3xl border-2 p-6 md:p-8 flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                formData.project_type === "Pełna strona firmowa"
                  ? "border-purple-500 bg-purple-50/30 ring-4 ring-purple-500/10 shadow-xl shadow-purple-500/10"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="project_type"
                value="Pełna strona firmowa"
                onChange={handleRadioChange}
                className="sr-only"
                checked={formData.project_type === "Pełna strona firmowa"}
              />
              <div
                className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-4 md:mb-6 transition-colors ${
                  formData.project_type === "Pełna strona firmowa"
                    ? "bg-purple-600 text-white shadow-lg shadow-purple-500/40"
                    : "bg-gray-50 text-gray-400 border border-gray-100"
                }`}
              >
                <RiBuilding4Line />
              </div>
              <span className="font-bold text-gray-900 text-lg md:text-xl mb-2">
                Pełna strona firmowa
              </span>
              <span className="text-sm text-gray-500 leading-relaxed">
                Rozbudowana strona z menu, zakładkami "O nas", "Galeria" i
                "Cennik". Buduje dużą wiarygodność.
              </span>
            </label>
          </div>
        </div>

        {/* Sidebar: SYTUACJA */}
        <div className="bg-gray-900 text-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-2xl shadow-gray-900/40 space-y-6 md:space-y-8 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-5 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <div className="flex items-center space-x-2 text-blue-400 mb-4 md:mb-6">
              <FaRocket className="text-xl md:text-2xl" />
              <h3 className="text-base md:text-lg font-bold uppercase tracking-wide">
                Twoja sytuacja
              </h3>
            </div>
            <p className="text-gray-400 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">
              W jakim punkcie jesteśmy teraz?
            </p>

            <div className="space-y-3 md:space-y-4">
              <label
                className={`flex items-start p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all cursor-pointer hover:bg-gray-800 ${
                  formData.situation === "Start od zera"
                    ? "bg-blue-600 border-blue-500 shadow-lg shadow-blue-900/40 ring-1 ring-blue-400"
                    : "bg-gray-800/50 border-gray-700"
                }`}
              >
                <input
                  type="radio"
                  name="situation"
                  value="Start od zera"
                  onChange={handleRadioChange}
                  className="sr-only"
                />
                <div
                  className={`mr-3 md:mr-4 mt-1 w-4 h-4 rounded-full border flex items-center justify-center ${
                    formData.situation === "Start od zera"
                      ? "border-white"
                      : "border-gray-500"
                  }`}
                >
                  {formData.situation === "Start od zera" && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <span className="block font-bold text-xs md:text-sm">
                    Start od zera
                  </span>
                  <span className="text-xs text-gray-400 block mt-1 leading-relaxed">
                    Nie mam żadnej strony, zaczynamy na czysto.
                  </span>
                </div>
              </label>

              <label
                className={`flex items-start p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all cursor-pointer hover:bg-gray-800 ${
                  formData.situation === "Remont obecnej"
                    ? "bg-purple-600 border-purple-500 shadow-lg shadow-purple-900/40 ring-1 ring-purple-400"
                    : "bg-gray-800/50 border-gray-700"
                }`}
              >
                <input
                  type="radio"
                  name="situation"
                  value="Remont obecnej"
                  onChange={handleRadioChange}
                  className="sr-only"
                />
                <div
                  className={`mr-3 md:mr-4 mt-1 w-4 h-4 rounded-full border flex items-center justify-center ${
                    formData.situation === "Remont obecnej"
                      ? "border-white"
                      : "border-gray-500"
                  }`}
                >
                  {formData.situation === "Remont obecnej" && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <span className="block font-bold text-xs md:text-sm">
                    Remont obecnej
                  </span>
                  <span className="text-xs text-gray-400 block mt-1 leading-relaxed">
                    Mam stronę, ale jest przestarzała i brzydka.
                  </span>
                </div>
              </label>

              <label
                className={`flex items-start p-3 md:p-4 rounded-xl md:rounded-2xl border transition-all cursor-pointer hover:bg-gray-800 ${
                  formData.situation === "Brak efektów"
                    ? "bg-orange-600 border-orange-500 shadow-lg shadow-orange-900/40 ring-1 ring-orange-400"
                    : "bg-gray-800/50 border-gray-700"
                }`}
              >
                <input
                  type="radio"
                  name="situation"
                  value="Brak efektów"
                  onChange={handleRadioChange}
                  className="sr-only"
                />
                <div
                  className={`mr-3 md:mr-4 mt-1 w-4 h-4 rounded-full border flex items-center justify-center ${
                    formData.situation === "Brak efektów"
                      ? "border-white"
                      : "border-gray-500"
                  }`}
                >
                  {formData.situation === "Brak efektów" && (
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  )}
                </div>
                <div>
                  <span className="block font-bold text-xs md:text-sm">
                    Brak efektów
                  </span>
                  <span className="text-xs text-gray-400 block mt-1 leading-relaxed">
                    Mam stronę, ale nie przynosi nowych telefonów.
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100/80 space-y-8 md:space-y-12">
        <div className="grid md:grid-cols-2 gap-6 md:gap-12">
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
              Opis działalności
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={5}
              placeholder="Czym zajmuje się firma na co dzień?"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-6 md:px-8 py-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium resize-none placeholder:text-gray-300 shadow-inner"
            />
          </div>
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
              Kto jest Twoim klientem?
            </label>
            <textarea
              name="who_calls"
              value={formData.who_calls}
              onChange={handleChange}
              rows={5}
              placeholder="np. Młode rodziny, lokalne firmy..."
              className="w-full rounded-2xl border border-gray-200 bg-gray-50/50 px-6 md:px-8 py-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium resize-none placeholder:text-gray-300 shadow-inner"
            />
          </div>
        </div>

        {/* X Factor */}
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <RiLightbulbLine className="text-yellow-500 text-xl" />
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider">
              Twoja przewaga (X-Factor)
            </label>
          </div>
          <input
            type="text"
            name="unique_value"
            value={formData.unique_value}
            onChange={handleChange}
            placeholder="Czym wyróżniasz się na tle konkurencji?"
            className="w-full rounded-2xl border border-yellow-200 bg-yellow-50/50 px-6 md:px-8 py-4 md:py-6 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 focus:border-yellow-500 transition-all font-medium placeholder:text-yellow-400/60 shadow-inner"
          />
        </div>

        {/* Atmosfera - PL Values */}
        <div className="space-y-4">
          <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
            Atmosfera strony
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            <label
              className={`cursor-pointer border-2 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center transition-all hover:-translate-y-1 ${
                formData.tone === "Prestiż"
                  ? "border-gray-900 bg-gray-900 text-white shadow-xl shadow-gray-900/20"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="tone"
                value="Prestiż"
                onChange={handleRadioChange}
                className="sr-only"
                checked={formData.tone === "Prestiż"}
              />
              <span className="block text-2xl md:text-3xl mb-2 md:mb-3">
                🎩
              </span>
              <span className="font-bold text-xs md:text-sm">Prestiż</span>
              <span className="text-xs block mt-1 md:mt-2 opacity-70 leading-relaxed">
                Elegancko, poważnie
              </span>
            </label>

            <label
              className={`cursor-pointer border-2 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center transition-all hover:-translate-y-1 ${
                formData.tone === "Zaufanie"
                  ? "border-blue-600 bg-blue-600 text-white shadow-xl shadow-blue-600/20"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="tone"
                value="Zaufanie"
                onChange={handleRadioChange}
                className="sr-only"
                checked={formData.tone === "Zaufanie"}
              />
              <span className="block text-2xl md:text-3xl mb-2 md:mb-3">
                🤝
              </span>
              <span className="font-bold text-xs md:text-sm">Zaufanie</span>
              <span className="text-xs block mt-1 md:mt-2 opacity-70 leading-relaxed">
                Na luzie, po ludzku
              </span>
            </label>

            <label
              className={`cursor-pointer border-2 rounded-2xl md:rounded-3xl p-4 md:p-6 text-center transition-all hover:-translate-y-1 ${
                formData.tone === "Nowoczesność"
                  ? "border-orange-500 bg-orange-500 text-white shadow-xl shadow-orange-600/20"
                  : "border-gray-100 bg-white hover:border-gray-200"
              }`}
            >
              <input
                type="radio"
                name="tone"
                value="Nowoczesność"
                onChange={handleRadioChange}
                className="sr-only"
                checked={formData.tone === "Nowoczesność"}
              />
              <span className="block text-2xl md:text-3xl mb-2 md:mb-3">
                ⚡
              </span>
              <span className="font-bold text-xs md:text-sm">Nowoczesność</span>
              <span className="text-xs block mt-1 md:mt-2 opacity-70 leading-relaxed">
                Odważnie, dynamicznie
              </span>
            </label>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100/80 space-y-6 md:space-y-8">
        <div className="flex items-center space-x-3 mb-2">
          <span className="bg-green-600 text-white p-2 md:p-2.5 rounded-xl md:rounded-2xl shadow-lg shadow-green-500/20">
            <RiPhoneLine />
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              3. Komunikacja
            </h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              Gdzie najwygodniej Ci pracować?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          <label
            className={`cursor-pointer rounded-xl md:rounded-2xl border-2 p-3 md:p-5 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 hover:shadow-lg ${
              formData.contact_method === "Telefon"
                ? "border-green-500 bg-green-50"
                : "border-gray-100 bg-white"
            }`}
          >
            <input
              type="radio"
              name="contact_method"
              value="Telefon"
              onChange={handleRadioChange}
              className="sr-only"
              checked={formData.contact_method === "Telefon"}
            />
            <RiPhoneLine className="text-2xl md:text-3xl mb-1 md:mb-2 text-gray-600" />
            <span className="font-bold text-xs md:text-sm">Telefon</span>
          </label>
          <label
            className={`cursor-pointer rounded-xl md:rounded-2xl border-2 p-3 md:p-5 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 hover:shadow-lg ${
              formData.contact_method === "WhatsApp"
                ? "border-green-600 bg-green-50"
                : "border-gray-100 bg-white"
            }`}
          >
            <input
              type="radio"
              name="contact_method"
              value="WhatsApp"
              onChange={handleRadioChange}
              className="sr-only"
              checked={formData.contact_method === "WhatsApp"}
            />
            <RiWhatsappLine className="text-2xl md:text-3xl mb-1 md:mb-2 text-gray-600" />
            <span className="font-bold text-xs md:text-sm">WhatsApp</span>
          </label>
          <label
            className={`cursor-pointer rounded-xl md:rounded-2xl border-2 p-3 md:p-5 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 hover:shadow-lg ${
              formData.contact_method === "E-mail"
                ? "border-blue-500 bg-blue-50"
                : "border-gray-100 bg-white"
            }`}
          >
            <input
              type="radio"
              name="contact_method"
              value="E-mail"
              onChange={handleRadioChange}
              className="sr-only"
              checked={formData.contact_method === "E-mail"}
            />
            <RiMailSendLine className="text-2xl md:text-3xl mb-1 md:mb-2 text-gray-600" />
            <span className="font-bold text-xs md:text-sm">E-mail</span>
          </label>
          <label
            className={`cursor-pointer rounded-xl md:rounded-2xl border-2 p-3 md:p-5 flex flex-col items-center justify-center text-center transition-all hover:-translate-y-1 hover:shadow-lg ${
              formData.contact_method === "Messenger"
                ? "border-indigo-500 bg-indigo-50"
                : "border-gray-100 bg-white"
            }`}
          >
            <input
              type="radio"
              name="contact_method"
              value="Messenger"
              onChange={handleRadioChange}
              className="sr-only"
              checked={formData.contact_method === "Messenger"}
            />
            <FaFacebookMessenger className="text-2xl md:text-3xl mb-1 md:mb-2 text-gray-600" />
            <span className="font-bold text-xs md:text-sm">Messenger</span>
          </label>
        </div>

        <input
          type="text"
          name="contact_details"
          value={formData.contact_details}
          onChange={handleChange}
          placeholder="Dodatkowa uwaga do kontaktu (opcjonalne)..."
          className="w-full rounded-xl md:rounded-2xl border border-gray-200 px-6 md:px-8 py-3 md:py-4 text-sm focus:outline-none focus:border-gray-400 bg-gray-50/50"
        />
      </div>

      <div className="bg-white p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-gray-200/50 border border-gray-100/80 space-y-8 md:space-y-10">
        <div className="flex items-center space-x-3 mb-2">
          <span className="bg-pink-600 text-white p-2 md:p-2.5 rounded-xl md:rounded-2xl shadow-lg shadow-pink-500/20">
            <RiPaletteLine />
          </span>
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
              4. Materiały i Technika
            </h3>
            <p className="text-xs md:text-sm text-gray-500 font-medium">
              To, co masz na start.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 md:space-y-6">
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                Domena / Hosting
              </label>
              <select
                name="domain_status"
                value={formData.domain_status}
                onChange={handleChange}
                className="w-full rounded-xl md:rounded-2xl border border-gray-200 bg-white px-6 md:px-6 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-bold text-gray-700 shadow-sm"
              >
                <option value="" disabled>
                  Czy masz domenę / hosting?
                </option>
                <option value="Mam wszystko">Mam wszystko</option>
                <option value="Mam domenę, brak hostingu">
                  Mam domenę, brak hostingu
                </option>
                <option value="Nie mam nic, potrzebuję pomocy">
                  Nie mam nic, potrzebuję pomocy
                </option>
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3 md:gap-4">
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                  Logo
                </label>
                <select
                  name="logo"
                  value={formData.logo}
                  onChange={handleChange}
                  className="w-full rounded-xl md:rounded-2xl border border-gray-200 bg-white px-3 md:px-4 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-bold text-gray-700 shadow-sm"
                >
                  <option value="" disabled>
                    Logo
                  </option>
                  <option value="Mam logo">Mam logo</option>
                  <option value="Wyślę później">Wyślę później</option>
                  <option value="Nie mam, pomóż!">Nie mam, pomóż!</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
                  Zdjęcia
                </label>
                <select
                  name="photos"
                  value={formData.photos}
                  onChange={handleChange}
                  className="w-full rounded-xl md:rounded-2xl border border-gray-200 bg-white px-3 md:px-4 py-3 md:py-4 focus:outline-none focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all font-bold text-gray-700 shadow-sm"
                >
                  <option value="" disabled>
                    Zdjęcia
                  </option>
                  <option value="Mam własne">Mam własne</option>
                  <option value="Brak zdjęć">Brak zdjęć</option>
                </select>
              </div>
            </div>
          </div>

          {/* Prawa: Kolory */}
          <div className="space-y-4">
            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider ml-1">
              Klimat strony
            </label>
            <div className="flex flex-wrap gap-3 md:gap-5">
              {palettes.map((p) => (
                <label
                  key={p.value}
                  className="cursor-pointer flex flex-col items-center space-y-2 group"
                >
                  <div className="relative group-hover:scale-110 transition-transform duration-200">
                    <input
                      type="radio"
                      name="color_palette"
                      value={p.value}
                      onChange={handleRadioChange}
                      className="sr-only"
                      checked={formData.color_palette === p.value}
                    />
                    <div
                      className={`w-10 h-10 md:w-14 md:h-14 rounded-full border-4 border-white shadow-lg transition-all ${
                        formData.color_palette === p.value
                          ? `ring-4 ${p.ring}/30 scale-110`
                          : ""
                      } ${p.class}`}
                    ></div>
                    {formData.color_palette === p.value && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <RiCheckLine
                          className={`text-white drop-shadow-md text-lg md:text-2xl ${p.ring.replace(
                            "ring",
                            "text",
                          )}`}
                        />
                      </div>
                    )}
                  </div>
                  <span className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-wide group-hover:text-gray-900 transition-colors">
                    {p.label}
                  </span>
                </label>
              ))}
            </div>
            {formData.color_palette === "Mój pomysł" && (
              <input
                type="text"
                name="custom_color_idea"
                value={formData.custom_color_idea}
                onChange={handleChange}
                placeholder="Np. Złoto na czarnym, Neon, Pastele..."
                className="mt-4 w-full rounded-xl md:rounded-2xl border-dashed border-2 border-gray-300 px-4 md:px-6 py-3 text-sm focus:outline-none focus:border-pink-500 focus:bg-white transition-all font-medium"
              />
            )}
          </div>
        </div>
      </div>

      <div className="pt-8 md:pt-12">
        <button
          type="submit"
          className="w-full py-5 md:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white text-lg md:text-xl font-bold rounded-2xl md:rounded-3xl shadow-2xl shadow-blue-600/40 transition-all transform hover:-translate-y-1 active:scale-95 flex items-center justify-center space-x-3 group"
        >
          <span>Wyślij zapytanie</span>
          <RiArrowRightLine className="group-hover:translate-x-2 transition-transform text-xl md:text-2xl" />
        </button>
        <p className="text-sm text-center text-gray-400 mt-4 md:mt-6 max-w-lg mx-auto leading-relaxed px-4">
          Przesłanie formularza nie zobowiązuje do niczego. Jest to pierwsze
          spotkanie na drodze do Twojej nowej strony.
        </p>
      </div>
    </form>
  );
};

export default FormClient;
