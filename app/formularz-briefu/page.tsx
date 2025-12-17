"use client";

import React, { useState, ChangeEvent } from "react";
import { FaBuilding, FaLightbulb, FaRocket } from "react-icons/fa";

type FormData = {
  company_name: string;
  email: string;
  company_desc: string;
  logo: string;
  colors: string;
  budget: string;
  start: string;
  extra: string;
};

const Page = () => {
  const [formData, setFormData] = useState<FormData>({
    company_name: "",
    email: "",
    company_desc: "",
    logo: "",
    colors: "",
    budget: "",
    start: "",
    extra: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="bg-white text-black overflow-x-hidden">
      {/* ================= HERO ================= */}
      <section className="bg-white py-24 md:py-32 px-6 border-b border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-6 flex items-center gap-3 text-sm text-gray-400">
            <span className="h-px w-12 bg-[#4F7CFF]" />
            <span>Nowe projekty • 2025</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 max-w-4xl">
            Zrozumienie Twojej firmy <br />
            <span className="text-[#4F7CFF]">
              to pierwszy krok do dobrego projektu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mb-14">
            Ten brief pozwala mi poznać Twoją firmę, klientów i realne potrzeby.
            Dzięki temu projekt nie jest tylko ładny — jest użyteczny.
          </p>

          {/* ===== PODPUNKTY – MOBILE FRIENDLY ===== */}
          <div className="grid gap-6 md:gap-10 md:grid-cols-3 max-w-5xl">
            <div className="flex gap-4 items-start p-5 md:p-0 rounded-2xl border border-gray-100 md:border-none">
              <FaBuilding className="text-[#4F7CFF] text-3xl shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Twoja firma</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Branża, oferta i lokalni klienci
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 md:p-0 rounded-2xl border border-gray-100 md:border-none">
              <FaLightbulb className="text-[#4F7CFF] text-3xl shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Kierunek projektu</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Styl, charakter i oczekiwania
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start p-5 md:p-0 rounded-2xl border border-gray-100 md:border-none">
              <FaRocket className="text-[#4F7CFF] text-3xl shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-lg mb-1">Efekt końcowy</p>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Strona, która wspiera biznes
                </p>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-400 mt-12">
            ⏱ 5–7 minut • odpowiedź do 48h • bez zobowiązań
          </p>
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="max-w-5xl mx-auto mb-32 px-6">
        <h2 className="text-3xl md:text-4xl mt-16 font-bold text-center mb-6">
          Brief dla Twojej firmy
        </h2>
        <p className="text-gray-600 text-center mb-14 max-w-2xl mx-auto">
          Kilka prostych pytań, dzięki którym przygotuję sensowną i dopasowaną
          propozycję.
        </p>

        <form
          action="https://formspree.io/f/mjknqvgw"
          method="POST"
          className="space-y-10"
        >
          {/* DANE FIRMY */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200 space-y-6">
            <h3 className="text-xl font-semibold">Dane firmy</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="company_name"
                value={formData.company_name}
                onChange={handleChange}
                placeholder="Nazwa firmy"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Adres e-mail"
                required
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>
          </div>

          {/* O FIRMIE */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200 space-y-6">
            <h3 className="text-xl font-semibold">O firmie</h3>

            <textarea
              name="company_desc"
              value={formData.company_desc}
              onChange={handleChange}
              rows={4}
              placeholder="Czym zajmuje się firma i kim są klienci?"
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />

            <div className="grid md:grid-cols-2 gap-6">
              <select
                name="logo"
                value={formData.logo}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white"
              >
                <option value="">Czy masz logo?</option>
                <option>Mam logo</option>
                <option>Wyślę później</option>
                <option>Potrzebuję logo</option>
              </select>

              <input
                type="text"
                name="colors"
                value={formData.colors}
                onChange={handleChange}
                placeholder="Kolorystyka / styl"
                className="w-full rounded-xl border border-gray-300 px-4 py-3"
              />
            </div>
          </div>

          {/* SZCZEGÓŁY */}
          <div className="bg-gray-50 p-6 md:p-8 rounded-3xl border border-gray-200 space-y-6">
            <h3 className="text-xl font-semibold">Szczegóły projektu</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white"
              >
                <option value="">Budżet</option>
                <option>500 – 1 000 zł</option>
                <option>1 000 – 2 000 zł</option>
                <option>2 000 – 4 000 zł</option>
                <option>4 000 zł+</option>
              </select>

              <select
                name="start"
                value={formData.start}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 bg-white"
              >
                <option value="">Kiedy start?</option>
                <option>Jak najszybciej</option>
                <option>Styczeń</option>
                <option>Luty</option>
                <option>Marzec</option>
                <option>Jeszcze nie wiem</option>
              </select>
            </div>

            <textarea
              name="extra"
              value={formData.extra}
              onChange={handleChange}
              rows={4}
              placeholder="Dodatkowe informacje (opcjonalnie)"
              className="w-full rounded-xl border border-gray-300 px-4 py-3"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-[#4F7CFF] text-white text-lg font-semibold rounded-2xl"
          >
            Wyślij brief
          </button>

          <p className="text-xs text-gray-400 text-center">
            Wypełnienie briefu nie zobowiązuje do współpracy
          </p>
        </form>
      </section>
    </main>
  );
};

export default Page;
