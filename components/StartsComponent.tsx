// import React from "react";

// // --- DANE KAFELKÓW ---
// const SERVICES_TILES = [
//   {
//     id: 1,
//     title: "Pakiet Start",
//     subtitle: "Szybki debiut w sieci",
//     iconPath:
//       "M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z",
//     colors: {
//       bg: "bg-sky-50",
//       text: "text-sky-600",
//       button: "bg-sky-600 hover:bg-sky-700 focus-visible:outline-sky-600",
//     },
//     features: [
//       "Szybka strona wizytówka",
//       "Podstawowa konfiguracja",
//       "Wizytówka Google",
//       "Firmowy e-mail",
//     ],
//     cta: "Zobacz co zawiera",
//     link: "/oferta/start",
//   },
//   {
//     id: 2,
//     title: "Pakiet Rozwój",
//     subtitle: "Budowanie marki i zasięgów",
//     iconPath:
//       "M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941",
//     colors: {
//       bg: "bg-indigo-50",
//       text: "text-indigo-600",
//       button:
//         "bg-indigo-600 hover:bg-indigo-700 focus-visible:outline-indigo-600",
//     },
//     features: [
//       "Indywidualny projekt graficzny",
//       "Zaawansowane pozycjonowanie (SEO)",
//       "Integracja z mediami społecznościowymi",
//       "Analiza ruchu na stronie",
//     ],
//     cta: "Poznaj szczegóły",
//     link: "/oferta/rozwoj",
//   },
//   {
//     id: 3,
//     title: "Pakiet Premium",
//     subtitle: "Kompleksowe rozwiązanie",
//     iconPath:
//       "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z",
//     colors: {
//       bg: "bg-amber-50",
//       text: "text-amber-600",
//       button: "bg-amber-500 hover:bg-amber-600 focus-visible:outline-amber-500",
//     },
//     features: [
//       "Rozbudowane aplikacje i funkcjonalności",
//       "Sklep internetowy / Panel klienta",
//       "Automatyzacja procesów",
//       "Dedykowany opiekun i szkolenie",
//     ],
//     cta: "Porozmawiajmy o projekcie",
//     link: "/kontakt",
//   },
// ];

// export default function ServicesTilesSection() {
//   return (
//     <section className="bg-white py-24">
//       <div className="mx-auto max-w-7xl px-6">
//         {/* NAGŁÓWEK */}
//         <div className="mx-auto max-w-2xl text-center mb-16">
//           <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
//             Jak mogę Ci pomóc?
//           </h2>
//           <p className="mt-4 text-lg text-slate-600">
//             Wybierz ścieżkę, która najlepiej odpowiada temu, gdzie jesteś teraz
//             ze swoim biznesem.
//           </p>
//         </div>

//         {/* GRID Z KAFELKAMI */}
//         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {SERVICES_TILES.map((tile) => (
//             <a
//               key={tile.id}
//               href={tile.link}
//               className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:ring-slate-200"
//             >
//               {/* GÓRNA SEKCJA Z IKONĄ (Pastelowe tło) */}
//               <div
//                 className={`flex flex-col items-center justify-center px-6 pt-10 pb-8 ${tile.colors.bg}`}
//               >
//                 <div
//                   className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 shadow-sm ${tile.colors.text}`}
//                 >
//                   <svg
//                     className="h-8 w-8"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={1.5}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d={tile.iconPath}
//                     />
//                   </svg>
//                 </div>
//                 <h3 className={`mt-5 text-2xl font-bold ${tile.colors.text}`}>
//                   {tile.title}
//                 </h3>
//                 <p className="mt-1 text-sm font-medium text-slate-500">
//                   {tile.subtitle}
//                 </p>
//               </div>

//               {/* DOLNA SEKCJA Z TREŚCIĄ */}
//               <div className="flex flex-1 flex-col p-6">
//                 <ul className="flex-1 space-y-3">
//                   {tile.features.map((feature) => (
//                     <li
//                       key={feature}
//                       className="flex items-start gap-3 text-slate-700"
//                     >
//                       <svg
//                         className="mt-0.5 h-5 w-5 shrink-0 text-slate-400"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         stroke="currentColor"
//                         strokeWidth={2}
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M9 5l7 7-7 7"
//                         />
//                       </svg>
//                       <span className="text-sm leading-relaxed">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 {/* PRZYCISK NA DOLE */}
//                 <div className="mt-8">
//                   <span
//                     className={`flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition-colors ${tile.colors.button}`}
//                   >
//                     {tile.cta}
//                     <svg
//                       className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       stroke="currentColor"
//                       strokeWidth={2.5}
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
//                       />
//                     </svg>
//                   </span>
//                 {/* </div */}
//               </div>
//             </a>
//           ))}
//         </div>

//         {/* STOPKA */}
//         <p className="mt-16 text-center text-sm text-slate-500">
//           Nie pasujesz do żadnego z tych kafelków? Żaden problem.{" "}
//           <a
//             href="/kontakt"
//             className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition-colors hover:decoration-slate-900"
//           >
//             Napisz do mnie
//           </a>
//           , a wspólnie wymyślimy coś na miarę.
//         </p>
//       </div>
//     </section>
//   );
// }
