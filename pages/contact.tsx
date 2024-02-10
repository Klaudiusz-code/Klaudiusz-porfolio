import React from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { ContactIcon, SocialIcons } from "@/data";
import CustomButton from "@/components/CustomButton";
import Link from "next/link";

const contact = () => {
  return (
    <section className="cnt mx-auto font-sans">
      <Head>
        <title>
          Kontakt - Strony Internetowe, Sklepy Internetowe, Seo | Lubycza
          Królewska, Tomaszów Lubelski, Zamość, Lublin | Klaudiusz Adamaszek -
          Web Developer
        </title>
      </Head>

      <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.7 }}
       className="bg-[#0077cc] rounded-2xl mt-8 px-6 py-12 lg:p-14">
        <h1 className="text-[1.5rem] lg:text-[2.6rem] font-[600] tracking-wide text-[#fff]">
          Gotowy na współpracę? Skontaktuj się ze mną już teraz!
        </h1>
        <p className="text-[#e7e7e7] mt-1 leading-8  mb-6 font-sans font-[400] text-[0.9rem] md:text-[1.1rem] lg:text-[1.2rem] w-full md:max-w-[80%] lg:max-w-[70%] tracking-wide">
          Wypełnij formularz kontaktowy poniżej, aby omówić Twoje potrzeby.
          Jestem tu, aby Ci pomóc w realizacji projektu. Zapoznaj się z moimi
          usługami i zaufaj mojemu doświadczeniu, abyśmy wspólnie stworzyli coś
          wyjątkowego dla Twojej marki!
        </p>
        <div className="mt-6 text-center md:text-left ">
          <CustomButton bgColor="#fff" textColor="#0077cc" text="Sprawdź Moje Usługi" link="/services" />
        </div>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 1.3 }} 
      className="flex flex-col lg:flex-row justify-between items-center mt-10 lg:mt-24 mb-24">
        <div className="ml-2 lg:ml-0">
          <h3 className="text-3xl text-bgColor font-extrabold">
            Napisz do mnie!
          </h3>
          <p className="mb-12 mt-4 text-gColor text-1xl max-w-[80%] lg:max-w-[60%]">
            Zapraszam do przejrzenia moich projektów i mam nadzieję, że będziemy
            mieli okazję współpracować. Dziękuję za odwiedzenie mojego
            portfolio!
          </p>
          <ul className="grid grid-cols-1 mt-4 gap-y-4">
            {ContactIcon.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.link}
                  className="self-center flex flex-row items-center gap-x-2 text-gColor text-1xl font-thin hover:text-gray-800 transition-all duration-200"
                >
                  <span className="flex items-center justify-center col-span-4 self-center bg-gray-700 text-white w-[3rem] h-[3rem] text-xl rounded-full">
                    {item.icon}
                  </span>
                  {item.desc}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ul className="flex gap-3">
              {SocialIcons.map((item, index) => (
                <li
                  key={index}
                  className="text-1xl bg-gray-700 p-4 rounded-full text-white hover:bg-customColor transition-all duration-400 cursor-pointer"
                >
                  <Link href={item.link}>{item.icon}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="min-w-full  lg:min-w-[50%] mt-16 lg:mt-0">
          <form className="max-w-full mx-auto border rounded-lg overflow-hidden shadow-md shadow-gray-200 p-6">
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Imię i nazwisko
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className=" bg-transparent w-full py-2 border-b shadow-gray-300"
                placeholder="Twoje imię i nazwisko"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Adres e-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-transparent w-full py-2 border-b shadow-gray-300"
                placeholder="Twój adres e-mail"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Wiadomość
              </label>
              <textarea
                id="message"
                name="message"
                className="bg-transparent w-full py-2 border-b shadow-gray-300"
                placeholder="Twoja wiadomość"
                required
              ></textarea>
            </div>

            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-customColor text-white px-4 py-3 rounded-md w-full"
              >
                Wyślij
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default contact;
