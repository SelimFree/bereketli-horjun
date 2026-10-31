import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { FadeIn } from "../utils/FadeIn";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";

import ConstructionImg from "../../assets/services/construction.png";
import EngineeringImg from "../../assets/services/engineering.png";
import FibcImg from "../../assets/services/fibc.png";
import PetrochemicalsImg from "../../assets/services/petrochemicals.png";
import LogisticsImg from "../../assets/services/logistics.png";
import RentalImg from "../../assets/services/rental.png";


const services = [
    { id: "01", key: "construction", img: ConstructionImg },
    { id: "02", key: "engineering", img: EngineeringImg },
    { id: "03", key: "fibc_production", img: FibcImg },
    { id: "04", key: "petrochemicals", img: PetrochemicalsImg },
    { id: "05", key: "logistics", img: LogisticsImg },
    { id: "06", key: "equipment_rental", img: RentalImg },
];

export function ServicesListBlock() {
    const { t } = useTranslation("services");
    const location = useLocation();
    const [activeSection, setActiveSection] = useState<string>("01");
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace("#", "");
            setTimeout(() => {
                const el = document.getElementById(id);
                if (el) {
                    el.scrollIntoView({ behavior: "smooth" });
                }
            }, 150);
        }
    }, [location.hash]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);

                        const mobileBtn = document.getElementById(`mobile-nav-${entry.target.id}`);
                        if (mobileBtn) {
                            mobileBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                        }
                    }
                });
            },
            { rootMargin: "-30% 0px -70% 0px" }
        );

        services.forEach((s) => {
            const el = document.getElementById(s.id);
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section className="relative w-full bg-gray-50 border-b border-gray-200">
            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-20"
                style={{
                    backgroundImage: "radial-gradient(#9ca3af 1.5px, transparent 1.5px)",
                    backgroundSize: "24px 24px",
                    maskImage: "radial-gradient(ellipse at 50% 40%, black 10%, transparent 75%)",
                    WebkitMaskImage: "radial-gradient(ellipse at 50% 40%, black 10%, transparent 75%)"
                }}
            />
            <div className="lg:hidden sticky top-20 z-20 w-full bg-white/95 backdrop-blur-md border-b border-gray-200 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none shadow-sm">
                <nav className="flex items-center min-w-max px-4 h-16">
                    {services.map((service) => (
                        <button
                            id={`mobile-nav-${service.id}`}
                            key={`mobile-${service.id}`}
                            onClick={() => {
                                scrollToSection(service.id);
                                document.getElementById(`mobile-nav-${service.id}`)?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
                            }}
                            className={`flex items-center gap-3 h-full px-4 border-b-2 transition-colors duration-300 whitespace-nowrap ${activeSection === service.id
                                ? "border-primary-500 text-gray-900"
                                : "border-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50"
                                }`}
                        >
                            <span className={`text-[10px] font-bold tracking-[0.2em] transition-colors duration-300 ${activeSection === service.id ? "text-primary-500" : "text-gray-400"
                                }`}>
                                {service.id}
                            </span>
                            <span className="text-xs font-black uppercase tracking-widest">
                                {t(`ServicesListBlock.${service.key}.title`)}
                            </span>
                        </button>
                    ))}
                </nav>
            </div>

            <div className="max-w-[100rem] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-16 items-start px-4 md:px-8 lg:px-12 relative z-10">

                <div className="hidden lg:flex flex-col col-span-4 sticky top-0 self-start max-h-screen overflow-y-auto py-32 border-r border-gray-200 pr-8">
                    <Text className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase mb-12">
                        Index / Capabilities
                    </Text>

                    <nav className="flex flex-col gap-6 relative">
                        <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-300 z-0" />

                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => scrollToSection(service.id)}
                                className="flex items-center text-left group relative z-10 w-full"
                            >
                                <div
                                    className={`absolute left-0 w-px h-full transition-all duration-300 ${activeSection === service.id ? "bg-primary-500 scale-y-100" : "bg-transparent scale-y-0"
                                        }`}
                                />

                                <div className="pl-6 flex items-baseline gap-4 transition-transform duration-300 group-hover:translate-x-2">
                                    <Text className={`text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${activeSection === service.id ? "text-primary-500" : "text-gray-400"
                                        }`}>
                                        {service.id}
                                    </Text>
                                    <Heading level={4} className={`text-sm md:text-base font-black uppercase tracking-widest transition-colors duration-300 ${activeSection === service.id ? "text-gray-900" : "text-gray-500 group-hover:text-gray-700"
                                        }`}>
                                        {t(`ServicesListBlock.${service.key}.title`)}
                                    </Heading>
                                </div>
                            </button>
                        ))}
                    </nav>
                </div>

                <div className="col-span-1 lg:col-span-8 flex flex-col pt-8 lg:pt-32 pb-32">
                    {services.map((service, index) => (
                        <div
                            id={service.id}
                            key={service.id}
                            className={`flex flex-col scroll-mt-24 lg:scroll-mt-32 w-full ${index !== 0 ? "mt-20 lg:mt-32 pt-20 lg:pt-32 border-t border-gray-200" : ""}`}
                        >
                            <FadeIn>
                                <Text className="lg:hidden text-[10px] font-bold tracking-[0.3em] text-primary-500 uppercase mb-4">
                                    {service.id} // {t(`ServicesListBlock.${service.key}.title`)}
                                </Text>

                                <Heading level={2} className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-gray-900 mb-6 lg:mb-8">
                                    {t(`ServicesListBlock.${service.key}.title`)}
                                </Heading>

                                <Text className="text-base lg:text-lg text-gray-600 leading-relaxed font-medium max-w-3xl mb-10 lg:mb-12">
                                    {t(`ServicesListBlock.${service.key}.description`)}
                                </Text>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 border border-gray-200 mb-10 lg:mb-12 shadow-sm">
                                    {[1, 2, 3, 4].map((specNum) => (
                                        <div key={specNum} className="bg-white p-5 lg:p-6 flex flex-col relative z-10">
                                            <Text className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mb-2">
                                                {t(`ServicesListBlock.${service.key}.specs.${specNum}.label`)}
                                            </Text>
                                            <Text className="text-sm lg:text-base font-bold text-gray-900">
                                                {t(`ServicesListBlock.${service.key}.specs.${specNum}.value`)}
                                            </Text>
                                        </div>
                                    ))}
                                </div>

                                <Image
                                    src={service.img}
                                    alt={t(`ServicesListBlock.${service.key}.title`)}
                                    aspectRatio="auto"
                                    containerClassName="w-full border border-gray-200 shadow-sm relative z-10"
                                />
                            </FadeIn>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}