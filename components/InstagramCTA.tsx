import React from "react";
import { FaInstagram } from "react-icons/fa";

const InstagramCTA = () => {
  return (
    <section className="w-full py-16 px-1 flex justify-center items-center bg-white">
      <div className="w-full bg-gradient-to-r from-pink-500 to-yellow-500 rounded-lg shadow-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <FaInstagram className="text-white text-6xl" />
        </div>
        <h2 className="text-3xl font-bold text-white mb-4">
          Dołącz do mnie na Instagramie!
        </h2>
        <p className="text-white text-lg mb-6">
          Śledź moje najnowsze projekty, inspiracje i kulisy mojej pracy.
        </p>
        <a
          href="https://www.instagram.com/klaudiuszdev.pl"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-pink-500 font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
        >
          Obserwuj mnie na Instagramie
        </a>
      </div>
    </section>
  );
};

export default InstagramCTA;
