"use client";
import { FormEvent, useState } from "react";
import { IoPersonOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.get("name"),
          phone: form.get("phone"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || "Nie udało się");
      }

      setSubmitted(true);
      setErrorMessage("");
    } catch (error) {
      console.error("Błąd podczas przesyłania formularza:", error);
    }
  }

  return (
    <div className="mt-2 mx-auto w-full">
      <form
        onSubmit={onSubmit}
        className="max-w-[700px] mx-auto rounded-md overflow-hidden bg-white lg:p-8 font-sans tracking-wide"
      >
        <h1 className="mb-8 text-[#10152e] font-bold font-sans text-2xl lg:text-3xl text-center">
          <span className="text-customColor font-semibold">Napisz do mnie</span>
        </h1>
        <div className="mb-6">
          <div className="relative">
            <IoPersonOutline className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500 text-3xl" />
            <input
              type="text"
              id="name"
              name="name"
              className="input-field w-full bg-gray-100 pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-customColor"
              placeholder="Tutaj wpisz Imię i Nazwisko"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="relative">
            <IoCallOutline className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500 text-3xl" />
            <input
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{9,15}"
              title="Numer telefonu powinien składać się z 9-15 cyfr"
              className="input-field w-full bg-gray-100 pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-customColor"
              placeholder="Numer telefonu"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="relative">
            <IoMailOutline className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500 text-3xl" />
            <input
              type="email"
              id="email"
              name="email"
              className="input-field w-full bg-gray-100 pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-customColor"
              placeholder="Adres email"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            id="message"
            className="input-field w-full bg-gray-100 p-4 border border-gray-300 rounded-md focus:outline-none focus:border-customColor"
            placeholder="Tutaj wpisz wiadomość"
            rows={5}
            required
          />
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="transition-all duration-300 bg-customColor hover:bg-opacity-70 text-white rounded-md py-3 px-8"
          >
            Wyślij
          </button>
        </div>
        {submitted && (
          <p className="text-green-500 mt-4 text-center">
            Wiadomość została wysłana!
          </p>
        )}
        {errorMessage && (
          <p className="text-red-500 mt-4 text-center">{errorMessage}</p>
        )}
      </form>
    </div>
  );
}
