'use client'
import { FormEvent, useState } from "react";
import { IoPersonOutline, IoCallOutline, IoMailOutline } from "react-icons/io5";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/sendForm", {
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

      const data = await response.json();
      if (data.success) {
        setSubmitted(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }
  return (
    <div className="mt-2 mx-auto w-full">
      <form
        onSubmit={onSubmit}
        className="max-w-[700px] mx-auto rounded-md overflow-hidden bg-white lg:p-8 font-sans tracking-wide"
      >
        <h1 className="mb-8 text-[#10152e] font-bold font-mono text-2xl lg:text-3xl text-center">
          <span className="text-[#5568cf] font-semibold">Masz Pytanie?</span>
        </h1>
        <div className="mb-6">
          <div className="relative">
            <IoPersonOutline className="absolute top-1/2 transform -translate-y-1/2 left-3 text-gray-500 text-3xl" />
            <input
              type="text"
              id="name"
              name="name"
              className="input-field w-full bg-gray-100 pl-12 pr-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-customColor"
              placeholder="Imię i nazwisko"
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
              placeholder="Adres e-mail"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block text-gray-700 text-lg font-normal mb-2"
          >
            Wiadomość
          </label>
          <textarea
            id="message"
            name="message"
            className="input-field w-full bg-gray-100 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-customColor"
            placeholder="Wpisz swoją wiadomość"
            required
            rows={5}
          ></textarea>
        </div>
        <div className="w-full block mx-auto">
          <button
            type="submit"
            className="submit-button w-full bg-customColor text-white py-3 rounded-lg hover:bg-opacity-80 transition duration-300"
          >
            Wyślij wiadomość
          </button>
        </div>
        {submitted && (
          <p className="text-center mt-4 text-customColor font-semibold">
            Wiadomość została wysłana!
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
