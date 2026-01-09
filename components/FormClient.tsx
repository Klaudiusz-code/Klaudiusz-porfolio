"use client";

import React, { useState, ChangeEvent } from "react";

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

const FormClient = () => {
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
    <form
      action="https://formspree.io/f/mjknqvgw"
      method="POST"
      className="space-y-10"
    >
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
  );
};

export default FormClient;
