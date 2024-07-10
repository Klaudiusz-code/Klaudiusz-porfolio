import { Metadata } from "next";
import Link from "next/link";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Błąd - Strona nie istnieje!',
    description: 'Ta strona nie istnieje. Wróć do strony głównej lub sprawdź inne linki.', 
  }
}

const NotFoundPage = async () => (
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
    <div className="max-w-md text-center">
      <h1 className="text-5xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ups! Strona nie została znaleziona.</h2>
      <p className="text-lg text-gray-600 mb-8">
        Wygląda na to, że strona, której szukasz, nie istnieje. Sprawdź adres URL lub wróć na stronę główną.
      </p>
      <Link href="/">
        <button className="bg-customColor text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200">
          Wróć do strony głównej
        </button>
      </Link>
    </div>

  </div>
);

export default NotFoundPage;
