// app/oferta-dla-smieszne-koszulki/page.tsx
import React from "react";
import { 
  FaShieldAlt, 
  FaTasks, 
  FaHandshake, 
  FaCheckCircle,
  FaTag
} from "react-icons/fa";

const packages = [
  {
    id: 1,
    name: "OPIEKA TECHNICZNA",
    price: "450 zł",
    period: "miesięcznie",
    description: "Podstawowa stabilność. Sklep działa, kopie się robią, Ty śpisz spokojnie.",
    icon: FaShieldAlt,
    // Zielony - stabilność
    accent: "shadow-emerald-500/20",
    textAccent: "text-emerald-400",
    features: [
      "Aktualizacje systemu i wtyczek",
      "Automatyczne kopie zapasowe",
      "Monitoring działania 24/7",
      "Reakcja na awarie i błędy",
      "Drobne poprawki techniczne"
    ]
  },
  {
    id: 2,
    name: "PROWADZENIE SKLEPU",
    price: "799 zł",
    period: "miesięcznie",
    description: "Kompleksowe wsparcie. Ty ogarniasz biznes, ja ogarniam panel i produkty.",
    icon: FaTasks,
    // Żółty - energia, działanie
    accent: "shadow-yellow-500/20",
    textAccent: "text-yellow-400",
    features: [
      "Pełna Opieka Techniczna",
      "Wgrywanie nowych produktów (do 10/mc)",
      "Konfiguracja cen i wariantów",
      "Przygotowanie promocji",
      "Utrzymanie porządku w ofercie"
    ]
  },
  {
    id: 3,
    name: "PARTNERSTWO SYSTEMOWE",
    price: "1150 zł",
    period: "miesięcznie",
    description: "Strategiczny sojusz. Nie tylko serwis, ale doradztwo i optymalizacja rozwoju.",
    icon: FaHandshake,
    // Biały/Ekspert - czystość, relacja
    accent: "shadow-white/20",
    textAccent: "text-white",
    features: [
      "Pełne Prowadzenie Sklepu",
      "Przygotowanie techniczne kampanii",
      "Optymalizacja UX i ścieżki zakupu",
      "Doradztwo strukturalne",
      "Stała dostępność (Fair use)"
    ]
  }
];

export default function SmieszneKoszulkiOfferPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
      {/* BACKGROUND: Eleganckie, wielowarstwowe gradienty */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-green-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMDI1Ii8+Cjwvc3ZnPg==')] opacity-20"></div>
      </div>

      {/* HEADER: Clean, Editorial */}
      <header className="pt-32 pb-20 px-6 text-center relative z-10">
        
        {/* Tag Brandowy */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
          <FaTag className="text-yellow-400 text-xs" />
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Oferta dla: Śmieszne-Koszulki.pl</span>
        </div>

        {/* Nagłówek */}
        <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">
          WSPÓŁPRACA
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed font-light">
          Trzy poziomy zaangażowania. Wybierz ten, który pasuje do Twojego rytmu biznesowego.
        </p>
      </header>

      {/* CARDS: Glassmorphism & Spacing */}
      <main className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg) => {
            const Icon = pkg.icon;
            return (
              <div 
                key={pkg.id} 
                className="group relative rounded-[2.5rem] bg-gradient-to-b from-white/5 to-white/[0.02] border border-white/10 p-10 transition-all duration-500 hover:-translate-y-2 hover:bg-white/10"
                style={{ backdropFilter: 'blur(20px)' }}
              >
                {/* Decorative Top Border */}
                <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-50 ${pkg.textAccent} rounded-full`}></div>

                {/* Icon Container */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-transparent flex items-center justify-center mb-8 shadow-inner ${pkg.accent} group-hover:scale-110 transition-transform duration-500`}>
                  <Icon className={`text-3xl ${pkg.textAccent}`} />
                </div>

                {/* Title & Price */}
                <h3 className={`text-2xl font-bold mb-2 ${pkg.textAccent}`}>
                  {pkg.name}
                </h3>
                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-4xl font-black text-white">{pkg.price}</span>
                  <span className="text-sm text-slate-500 font-medium">{pkg.period}</span>
                </div>

                {/* Description (Neutral) */}
                <p className="text-slate-400 leading-relaxed mb-10 text-sm border-b border-white/5 pb-8 min-h-[4rem]">
                  {pkg.description}
                </p>

                {/* Features List */}
                <ul className="space-y-5">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-300 text-sm font-medium">
                      <FaCheckCircle className={`text-xs ${pkg.textAccent} opacity-70`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </main>

      {/* FOOTER SECTION */}
      <section className="border-t border-white/5 bg-black/20 backdrop-blur-sm py-20">
        <div className="max-w-3xl mx-auto text-center px-6">
          <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-auto mb-8"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Zasada stałej opieki
          </h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            Po wdrożeniu sklepu zawsze pracujemy w modelu abonamentowym. 
            <br />
            <span className="text-slate-500">Różnica jest tylko w skali Twoich potrzeb.</span>
          </p>

          <div className="mt-12 text-xs uppercase tracking-[0.2em] text-slate-600 font-semibold">
            KlaudiuszDev • Kontakt: Messenger / Telefon
          </div>
        </div>
      </section>
    </div>
  );
}