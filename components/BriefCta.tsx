import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiClock, FiMail, FiSlash } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="relative container mx-auto py-28 md:py-36 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/laptopdesk.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[2px] bg-gradient-to-r from-transparent via-customColor to-transparent"></div>
      <div
        className="pointer-events-none absolute -top-28 -right-28 
        w-[380px] h-[380px] rounded-full 
        bg-blue-500/20 blur-3xl"
      />

      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 
        w-[40%] h-[2px] 
        bg-gradient-to-r from-transparent via-customColor to-transparent"
      />
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-10">
        <div className="max-w-xl md:max-w-2xl space-y-6 md:space-y-8">
          <span className="inline-block text-xs sm:text-sm uppercase tracking-widest text-customColor/80">
            krótki brief projektowy
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-white leading-snug">
            Wypełnij brief i odbierz
            <br />
            <span className="text-customColor">
              darmowy podgląd kierunku strony
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-[15px] lg:text-base text-white/80 max-w-xl">
            Odpowiesz na kilka konkretnych pytań o biznes i cele. Na tej
            podstawie przygotuję <strong>kierunek projektu</strong>, strukturę
            strony i rekomendację dalszych działań. Bez spiny, bez zobowiązań.
          </p>

          <div className="flex flex-col gap-3">
            <Link
              href="/formularz-briefu"
              className="group inline-flex items-center gap-4
              px-7 sm:px-9 py-3.5 sm:py-4
              bg-white text-black font-semibold
              rounded-xl sm:rounded-2xl
              text-base sm:text-lg w-fit
              shadow-xl hover:shadow-2xl transition"
            >
              Przejdź do briefu
              <FaArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs sm:text-sm text-white/55">
            <span className="inline-flex items-center gap-1.5">
              <FiClock className="text-customColor/80" />
              5–7 minut
            </span>

            <span className="hidden sm:inline text-white/30">•</span>

            <span className="inline-flex items-center gap-1.5">
              <FiMail className="text-customColor/80" />
              odpowiedź do 48h
            </span>

            <span className="hidden sm:inline text-white/30">•</span>

            <span className="inline-flex items-center gap-1.5">
              <FiSlash className="text-customColor/80" />
              bez zobowiązań
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
