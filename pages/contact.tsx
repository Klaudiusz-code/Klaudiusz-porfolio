import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { ContactIcon, SocialIcons } from "@/data";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";

const contact = () => {
  return (
    <section>
      <Head>
        <title>
          Kontakt - Strony Internetowe, Sklepy Internetowe, Seo | Lubycza
          Królewska, Tomaszów Lubelski, Zamość, Lublin | Klaudiusz Adamaszek -
          Web Developer
        </title>
      </Head>

      <div className="max-w-[90%] lg:max-w-[80%] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.3 }}
          className="cnt p-10 rounded-lg grid grid-cols-1 gap-y-6 md:grid-cols-2 md:gap-x-12 lg:gap-x-28 mb-24"
        >
          <div className="lg:ml-10 w-full">
            <h2 className="text-3xl md:text-4xl lg:text-5xl mt-8 lg:mt-16 font-bold mb-4 text-[#10152e] leading-8 tracking-wide">
              Czy jesteś otwarty na nowe możliwości?
            </h2>
            <span className="text-2xl lg:text-5xl font-[400] mb-4 text-customColor mt-1 leading-8 tracking-wide]">
              Skorzystaj z formularza kontaktowego!
            </span>

            <p className="text-lg lg:text-lg mb-8 mt-4 leading-7  text-[#10152e]">
              Cieszę się, że chcesz się ze mną skontaktować! Wypełnij formularz,
              aby wysłać mi wiadomość, lub skorzystaj z alternatywnych sposobów
              kontaktu podane poniżej.
            </p>
            <ul className="flex flex-col gap-y-4">
              {ContactIcon.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.link}
                    className="flex items-center  text-lg lg:text-xl font-normal  transition-all duration-200"
                  >
                    <span className="flex items-center justify-center  text-[#0C75FF] ">
                      {item.icon}
                    </span>
                    <span className="ml-3 text-slate-600">{item.desc}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <ul className="flex gap-x-6 mt-12">
                {SocialIcons.map((item, index) => (
                  <li
                    key={index}
                    className="text-3xl lg:text-4xl  text-customColor hover:scale-110 transition-all duration-400 cursor-pointer"
                  >
                    <Link href={item.link}>{item.icon}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-2 mx-auto w-full">
            <form className="max-w-[700px] h-auto lg:h-[600px] mx-auto rounded-lg overflow-hidden shadow-md bg-slate-50 p-6 font-sans tracking-wide">
              <h1 className=" mb-8 text-[#10152e] font-bold  text-2xl lg:text-4xl">
                <span className="text-customColor font-[400]">Wypełnij </span>
                Formularz
              </h1>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-lg font-[400] mb-2"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="bg-transparent w-full py-2 border-b border-gray-300"
                  placeholder="Twoje imię i nazwisko"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-lg font-[400] mb-2"
                >
                  Numer Telefonu
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  pattern="[0-9]{9,15}"
                  title="Numer telefonu powinien składać się z 9-15 cyfr"
                  className="bg-transparent w-full py-2 border-b border-gray-300"
                  placeholder="Numer Telefonu"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-lg font-[400] mb-2"
                >
                  Adres e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="bg-transparent w-full py-2 border-b border-gray-300"
                  placeholder="Twój adres e-mail"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-lg font-[400] mb-2"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="bg-transparent w-full py-2 border-b border-gray-300"
                  placeholder="Twoja wiadomość"
                  required
                ></textarea>
              </div>
              <div className="w-full block mx-auto">
                <button
                  type="submit"
                  className="bg-customColor text-white font-[600] px-4 py-3 rounded-md w-full uppercase"
                >
                  wyślij wiadomosć
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default contact;
