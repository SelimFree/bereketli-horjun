import { useTranslation } from "react-i18next";
import { FadeIn } from "../utils/FadeIn";
import { Heading } from "../ui/Heading";

export function MetricsBlock() {
  const { t } = useTranslation("home");

  const metrics = [
    { value: "20", label: t("MetricsBlock.years") },
    { value: "300", label: t("MetricsBlock.projects") },
    { value: "48", label: t("MetricsBlock.partners") },
    { value: "150+", label: t("MetricsBlock.fleet") },
  ];

  return (
    <section className="w-full bg-white relative z-10 border-y border-gray-200">
      <div className="w-full max-w-[100rem] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px">

          {metrics.map((metric, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div className="relative bg-white h-28 sm:h-32 md:h-36 lg:h-40 flex items-center justify-center overflow-hidden group cursor-default">

                <div
                  className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700"
                  style={{
                    backgroundImage: "repeating-linear-gradient(-45deg, #000 0, #000 1px, transparent 1px, transparent 8px)",
                    maskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)"
                  }}
                />

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[4.5rem] sm:text-[5.5rem] md:text-[6.5rem] lg:text-[7.5rem] font-black text-gray-100 group-hover:text-gray-200 transition-colors duration-700 pointer-events-none select-none tracking-tighter leading-none whitespace-nowrap z-0">
                  {metric.value}
                </div>

                <div className="relative z-10 flex items-center transition-transform duration-700 ease-out md:group-hover:translate-x-4 lg:group-hover:translate-x-6">

                  <div className="hidden md:block absolute right-full mr-3 lg:mr-4 w-4 lg:w-6 h-0.5 bg-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                  <Heading
                    level={3}
                    className="text-sm sm:text-base lg:text-lg font-black text-gray-900 uppercase tracking-widest leading-tight text-center"
                  >
                    {metric.label}
                  </Heading>

                </div>

              </div>
            </FadeIn>
          ))}

        </div>
      </div>
    </section>
  );
}