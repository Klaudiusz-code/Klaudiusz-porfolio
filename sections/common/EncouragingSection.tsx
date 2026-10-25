
import { FaArrowRight } from "react-icons/fa";

interface Service {
  title: string;
  description: string;
}

interface EncouragingSectionProps {
  title: string;
  services: Service[];
}

const EncouragingSection = ({
  title,
  services,
}: EncouragingSectionProps) => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 max-w-3xl sm:mb-14">
          <p className="mb-4 text-sm font-semibold text-blue-600">
            Zakres usług
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            {title}
          </h2>

          <div className="mt-6 h-1 w-14 rounded-full bg-blue-600" />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={`${service.title}-${index}`}
              className="group flex min-h-56 flex-col border border-slate-200 bg-white p-6 transition-colors duration-200 hover:border-blue-300 sm:p-7"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-medium tabular-nums text-slate-400">
                  {String(index + 1).padStart(2)}
                </span>

                <FaArrowRight
                  aria-hidden="true"
                  className="text-sm text-blue-600 transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>

              <h3 className="text-xl font-semibold leading-snug tracking-tight text-slate-900">
                {service.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EncouragingSection;
