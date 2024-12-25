import CharacteristicsSection from "@/components/CharacteristicsSection";
import CustomButton from "@/components/CustomButton";

type HeroSectionProps = {
  title: string;
  description: string;
  buttonText: string;
  buttonUrl: string;
};

const HeroSection = ({
  title,
  description,
  buttonText,
  buttonUrl = "/",
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-[480px] md:min-h-[500px] lg:min-h-[600px] py-8 flex flex-col items-center overflow-hidden bg-white pt-6 md:pt-20 lg:pt-16 ">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-b from-[#6d88d3] to-transparent opacity-10"></div>
        <div className="absolute w-12 h-12 bg-[#6e92f2] rounded-full opacity-[0.5] top-[55%] left-[75%] animate-ping"></div>
        <div className="absolute w-8 h-8 bg-[#6e92f2] rounded-full opacity-[0.6] bottom-[17%] md:bottom-[27%] left-[30%] animate-bounce"></div>
      </div>
      <div className="container mx-auto flex flex-col mt-2 lg:mt-14 md:flex-row items-center justify-between px-4 relative z-20 bg-[url('/grid.svg')] bg-cover bg-center">
        <div className="w-full mt-10 lg:mt-0 text-center">
          <div className="max-w-8xl mx-auto">
            <h1 className="font-black text-4xl md:text-5xl xl:text-7xl py-2 text-[#6e92f2] tracking-wider mt-14 md:mt-24 font-monserat leading-[2rems] mb-4">
              {title}
            </h1>
            <p className="text-gray-500 max-w-[80%] mx-auto text-base mt-6 lg:text-2xl tracking-wider leading-relaxed font-monserat font-normal mb-6">
              {description}
            </p>
          </div>
          <div>
            <CustomButton
              text={buttonText}
              link={buttonUrl}
              bgColor="#0077cc"
              textColor="#fff"
            />
          </div>
        </div>
      </div>
      <CharacteristicsSection />
    </section>
  );
};

export default HeroSection;
