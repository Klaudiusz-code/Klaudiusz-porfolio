// app/oferta-dla-sniezka-na-dloni/page.tsx
import React from "react";
import { 
  FaServer, 
  FaPenFancy, 
  FaLayerGroup, 
  FaCheck
} from "react-icons/fa";
import Image from "next/image";

const packages = [
  {
    id: 1,
    name: "OPIEKA TECHNICZNA",
    price: "299 zł",
    period: "miesięcznie",
    description: "Zajmuję się pod maską. Aktualizacje, bezpieczeństwo i kopie zapasowe. Ty nie myślisz o awariach.",
    icon: FaServer,
    tagColor: "bg-sky-100 text-sky-700",
    features: [
      "Aktualizacje CMS",
      "Kopie zapasowe",
      "Monitoring bezpieczeństwa",
      "Naprawa błędów",
      "Wsparcie email"
    ]
  },
  {
    id: 2,
    name: "ADMINISTRACJA",
    price: "599 zł",
    period: "miesięcznie",
    description: "Obsługa panelu admina. Wgrywam zdjęcia, teksty i galerie, żebyś Ty nie musiał się tym zajmować.",
    icon: FaPenFancy,
    tagColor: "bg-indigo-100 text-indigo-700",
    features: [
      "Pełna Opieka Techniczna",
      "Wgrywanie zdjęć",
      "Aktualizacja treści",
      "Zarządzanie galeriami",
      "Kontakt bieżący"
    ]
  },
  {
    id: 3,
    name: "ROZWÓJ SYSTEMU",
    price: "899 zł",
    period: "miesięcznie",
    description: "Dokument i budowa. Dodaję nowe funkcje, podstrony i poprawiam strukturę strony w czasie.",
    icon: FaLayerGroup,
    tagColor: "bg-slate-800 text-white",
    features: [
      "Pełna Administracja",
      "Nowe podstrony",
      "Zmiany w layout",
      "Integracje",
      "Priorytetowe wsparcie"
    ]
  }
];

export default function SniezkaNaDloniOfferPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-gray-900 selection:text-white">
      
      {/* BACKGROUND: Subtelna siatka - "LAYOUTY" */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none opacity-[0.4]">
        <div className="absolute inset-0" 
          style={{ backgroundImage: 'radial-gradient(#d1d5db 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
        </div>
      </div>

      {/* HEADER: Elegancki, asymetryczny */}
      <header className="pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="text-left md:w-1/2">
          <div className="inline-block px-3 py-1 mb-4 border border-gray-200 bg-white text-xs font-bold uppercase tracking-widest text-gray-500 rounded-full">
            Oferta systemowa
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tight text-gray-900 mb-6">
            Utrzymanie <br />
            <span className="text-gray-400">Strony WWW</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            Przejmuję technikę. Ty masz pewność, że Twoja domena, hostowanie i wygląd są pod pełną kontrolą.
          </p>
        </div>

        {/* LOGO: Białe pudełko na pudełku */}
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white p-8 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)] border border-gray-100 rotate-2 hover:rotate-0 transition-transform duration-500">
             <Image 
              src="/sniezka.svg" 
              alt="Snieżka na dłoni" 
              width={200} 
              height={200}
              className="w-48 h-48 object-contain"
            />
          </div>
        </div>
      </header>

      {/* GRID: Bento Style */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={pkg.id} 
                // Styl karty: Czysto biała, delikatny cień
                className="group bg-white rounded-[2.5rem] border border-gray-200 p-8 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] transition-all duration-300 flex flex-col h-full"
              >
                {/* Layout: Top Bar */}
                <div className="flex items-center justify-between mb-8">
                  <div className={`p-3 rounded-2xl ${pkg.tagColor}`}>
                    <Icon className="text-xl" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-300">
                    0{pkg.id}
                  </span>
                </div>

                {/* Layout: Title & Desc */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{pkg.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed h-12 overflow-hidden">
                    {pkg.description}
                  </p>
                </div>

                {/* Layout: Price (Duży) */}
                <div className="mb-8 py-6 border-t border-b border-gray-100 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-gray-900">{pkg.price}</span>
                  <span className="text-sm font-medium text-gray-400">/ {pkg.period}</span>
                </div>

                {/* Layout: Features List */}
                <ul className="space-y-4 flex-grow mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-medium">
                      <div className="w-5 h-5 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:border-gray-400 transition-colors">
                        <FaCheck className="text-[10px] text-gray-900" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Dekoracja - kwadraty */}
                <div className="mt-auto pt-6 flex gap-2">
                  <div className="h-2 w-2 rounded-full bg-gray-200"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-200"></div>
                  <div className="h-2 w-full rounded-full bg-gray-100"></div>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* FOOTER: Minimalistyczny paski */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm font-bold uppercase tracking-widest text-gray-400">
            KlaudiuszDev
          </div>
          <div className="text-sm text-gray-600">
            Dla Snieżka-na-dłoni
          </div>
          <div className="text-xs text-gray-300">
            v 2026.1
          </div>
        </div>
      </footer>
    </div>
  );
}