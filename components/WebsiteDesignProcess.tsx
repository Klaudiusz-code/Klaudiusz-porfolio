import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import ButtonContact from "./ButtonContact";

const WebsiteDesignProcess = () => {
  const data = [
    {
      num: 1,
      title: "Wstępna Kalkulacja",
      description:
        "Wycenę początkową przedstawiam w ciągu 30 minut od zapoznania się z wymaganiami.",
    },
    {
      num: 2,
      title: "Tworzę Koncepcję i Treści.",
      description:
        "Analizuję Twoją ofertę i dostosowuję treści oraz koncepcję do Twojej działalności, zapewniając zrozumienie Twojego produktu lub usługi.",
    },
    {
      num: 3,
      title: "Implementacja i Programowanie",
      description:
        "Stawiam na optymalizację i proste, skuteczne rozwiązania, aby stworzyć funkcjonalny i efektywny produkt.",
    },
    {
      num: 4,
      title: "Testowanie i Wdrożenie",
      description:
        "Przed udostępnieniem strony publicznie, dokładnie testuje ją na różnych urządzeniach i przeglądarkach. Otrzymasz link testowy do weryfikacji",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: i * 0.8,
        },
      }));
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className="container mx-auto mb-8 lg:mb-14 mt-8 lg:mt-14">
      <div className="max-w-[90%] mx-auto flex flex-col items-center justify-center">
        <h2 className="text-center bg-customColor rounded-lg p-3 text-[#fff] text-2xl lg:text-4xl xl:text-5xl font-bold mb-6 font-sans lg:mb-8">
          Twój Sukces Online Jest Moim Priorytetem
        </h2>
        <p className="text-center max-w-full  lg:max-w-[80%] mx-auto text-[1rem] lg:text-xl xl:text-1xl leading-7 text-gColor font-sans font-[400] mb-8 lg:mb-10">
          Zaangażowanie w Twój Projekt zaczynamy od gruntownego zrozumienia
          Twojej oferty. Kiedy zgłębię wszelkie szczegóły, jestem w stanie
          stworzyć teksty i projekt strony, który przyciągnie uwagę i zostanie
          zapamiętany
        </p>
        <div className="w-full mx-auto mt-">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {data.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                animate={controls}
                className="flex items-center flex-col flex-wrap mx-auto mt-6 text-center"
              >
                <div className="bg-customColor h-16 w-16 flex items-center justify-center rounded-full">
                  <span className="text-white font-sans font-[600] text-[1.3rem]">
                    {item.num}
                  </span>
                </div>
                <div>
                  <h2 className="text-white mt-2 font-sans text-[1.1rem] font-[600]">
                    {item.title}
                  </h2>
                  <p className="text-[#9b9b9b] text-[0.875rem] lg:text-[0.9rem] xl:text-[1rem] font-sans mt-2 mb-4 max-w-[90%] mx-auto">
                    {item.description}
                  </p>
                  {index === 0 && <ButtonContact buttonText="Darmowa Wycena" />}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebsiteDesignProcess;
