import CharacteristicsSection from "@/components/CharacteristicsSection";
import CustomButton from "@/components/CustomButton";
import heroImg from "@/public/h.svg";

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
    <section
      className="bg-body-bg min-h-[450px] md:min-h-[500px] lg:min-h-[600px] py-6 flex flex-col items-center relative overflow-hidden bg-[#ecf4ff] pt-24 md:pt-20 lg:pt-16"
    >
      <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[80rem] h-[60rem] bg-blue-500 rounded-full mix-blend-overlay blur-lg opacity-[0.1]"></div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 relative z-20 mt-2">
        <div className="w-full hidden md:w-1/2 md:order-2 mb-8 md:mb-0 md:flex justify-center md:justify-end">
          <img
            src={heroImg.src}
            alt="Hero Image"
            className="w-full h-auto max-w-lg lg:max-w-2xl"
            loading="lazy"
          />
        </div>
        <div className="w-full mt-10 lg:mt-0 max-w-2xl md:w-3/5 md:order-1 text-center md:text-left">
          <span className="text-lg font-medium mb-2 tracking-wide font-roboto bg-gray-100 p-2 rounded-md text-blue-800 inline-block">
            <span className="border-l-2 border-blue-800 px-2 py-1">
              Klaudiusz Adamaszek
            </span>
          </span>
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-blue-900 tracking-wide mt-4 font-roboto mb-4">
            {title}
          </h1>
          <p className="text-gray-800 text-base md:text-lg lg:text-xl font-roboto tracking-wide font-light mb-6">
            {description}
          </p>
          <div className="flex justify-center md:justify-start">
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
