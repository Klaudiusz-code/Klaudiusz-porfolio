"use client";

import { ReactNode } from "react";

interface Tip {
  icon: ReactNode;     
  label: string;
  text: string;
}

interface QuickTipsProps {
  tips: Tip[];
  accentColor: string;
}

export default function QuickTips({ tips, accentColor }: QuickTipsProps) {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Nagłówek */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-20">
          Szybkie tipy branżowe
        </h2>

        {/* Układ */}
        <div className="flex flex-col md:flex-row justify-between gap-16">

          {tips.slice(0, 3).map((tip, i) => (
            <div
              key={i}
              className="
                flex-1 flex flex-col items-center md:items-start 
                text-center md:text-left
                gap-6 relative md:px-10
              "
            >
              {/* pionowa kreska na desktop */}
              {i !== 0 && (
                <div
                  className="hidden md:block absolute left-0 top-0 h-full w-[1px] bg-gray-200"
                />
              )}

              {/* ikona */}
              <div
                className="w-14 h-14 flex items-center justify-center rounded-full shrink-0"
                style={{
                  backgroundColor: accentColor + "20",
                  color: accentColor,
                  fontSize: "30px",
                }}
              >
                {tip.icon}
              </div>

              {/* tytuł */}
              <h3 className="text-2xl font-semibold text-gray-900">
                {tip.label}
              </h3>

              {/* opis */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-sm">
                {tip.text}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
