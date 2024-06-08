import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Błąd - Strona nie istnieje!',
    description: '...',
  }
}

const NotFoundPage = async () => <div className="bg-red-400 w-full">Strona nie istnieje!</div>;

export default NotFoundPage;
