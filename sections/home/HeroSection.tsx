"use client";

import { HiArrowRight } from "react-icons/hi";
import { FaWhatsapp } from "react-icons/fa";

type HeroSectionProps = {
  buttonText: string;
  buttonUrl?: string;
};

const HeroSection = ({
  buttonText,
  buttonUrl = "/kontakt",
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-[#0b1120] text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-blue-500/[0.08] blur-[120px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">
        <div className="mx-auto max-w-4xl py-24 text-center sm:py-32 lg:py-36 mt-12">
          <h1 className="text-4xl font-bold leading-[1.12] tracking-[-0.04em] sm:text-5xl lg:text-7xl">
            Dobra strona zaczyna się
            <span className="mt-1 block text-blue-400">
              od dobrego projektu.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
            Tworzę nowoczesne strony internetowe, sklepy WooCommerce i aplikacje
            webowe. Stawiam na dopracowany wygląd, sprawne działanie i łatwą
            obsługę.
          </p>

          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <a
              href={buttonUrl}
              className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-lg bg-blue-500 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/15 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-400 sm:min-w-[210px]"
            >
              {buttonText}
              <HiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="https://wa.me/519668439?text=Cze%C5%9B%C4%87%2C%20chcia%C5%82bym%20dowiedzie%C4%87%20si%C4%99%20wi%C4%99cej%20o%20tworzeniu%20strony"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-14 items-center justify-center gap-2.5 rounded-lg border border-[#25D366]/30 bg-[#25D366]/[0.08] px-7 py-4 text-sm font-semibold text-white transition-colors duration-200 hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.14] sm:min-w-[210px]"
            >
              <FaWhatsapp className="h-[18px] w-[18px] text-[#25D366]" />
              Porozmawiajmy
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
