import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import { FiClock, FiMail, FiSlash } from "react-icons/fi";

const CTA = () => {
  return (
    <section className="relative container mx-auto py-24 md:py-32 overflow-hidden rounded-3xl">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/laptopdesk.jpg')" }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:80px_80px]"></div>

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

      <div className="pointer-events-none absolute -top-28 -right-28 w-[380px] h-[380px] rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-6 md:px-10 text-left">
        <div className="max-w-xl md:max-w-2xl space-y-6 md:space-y-8">
          
          <span className="inline-block text-xs sm:text-sm font-bold uppercase tracking-widest text-customColor/90">
            krótki brief projektowy
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight">
            Wypełnij brief i odbierz
            <br />
            <span className="text-customColor">
              darmowy podgląd kierunku strony
            </span>
          </h2>

          <p className="text-sm sm:text-base md:text-[15px] lg:text-base text-gray-300 max-w-xl border-l-2 border-white/10 pl-4">
            Odpowiesz na kilka konkretnych pytań o biznes i cele. Na tej
            podstawie przygotuję <strong>kierunek projektu</strong>, strukturę
            strony i rekomendację dalszych działań. Bez spiny, bez zobowiązań.
          </p>

          <div className="flex flex-col gap-3 pt-2">
            <Link
              href="/formularz-briefu"
              className="group inline-flex items-center gap-4
              px-8 py-4
              bg-white text-black font-bold
              rounded-xl
              text-base sm:text-lg w-fit
              shadow-xl hover:shadow-2xl hover:-translate-y-1 
              transition-all duration-300"
            >
              Przejdź do briefu
              <FaArrowRight className="transition-transform group-hover:translate-x-1 text-customColor" />
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs sm:text-sm text-white/60 pt-2">
            <span className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <FiClock className="text-customColor" />
              5–7 minut
            </span>

            <span className="hidden sm:inline text-white/20">•</span>

            <span className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <FiMail className="text-customColor" />
              odpowiedź do 24h
            </span>

            <span className="hidden sm:inline text-white/20">•</span>

            <span className="inline-flex items-center gap-2 hover:text-white transition-colors">
              <FiSlash className="text-customColor" />
              bez zobowiązań
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;