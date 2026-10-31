import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BaseSection } from "./BaseSection";
import { FadeIn } from "../utils/FadeIn";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";

export function ServicesBlock() {
    const { t } = useTranslation("home");

    const services = [
        {
            id: "01",
            title: t("ServicesBlock.items.0.title"),
            desc: t("ServicesBlock.items.0.desc"),
            link: "/services#01",
            img: "https://images.unsplash.com/photo-1541888086225-f6404f4561a9?auto=format&fit=crop&q=80"
        },
        {
            id: "02",
            title: t("ServicesBlock.items.1.title"),
            desc: t("ServicesBlock.items.1.desc"),
            link: "/services#02",
            img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80"
        },
        {
            id: "03",
            title: t("ServicesBlock.items.2.title"),
            desc: t("ServicesBlock.items.2.desc"),
            link: "/services#03",
            img: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80"
        },
        {
            id: "04",
            title: t("ServicesBlock.items.3.title"),
            desc: t("ServicesBlock.items.3.desc"),
            link: "/services#04",
            img: "https://images.unsplash.com/photo-1605270631627-2c9383685e13?auto=format&fit=crop&q=80"
        },
        {
            id: "05",
            title: t("ServicesBlock.items.4.title"),
            desc: t("ServicesBlock.items.4.desc"),
            link: "/services#05",
            img: "https://images.unsplash.com/photo-1586528116311-ad8ed7c50a27?auto=format&fit=crop&q=80"
        },
        {
            id: "06",
            title: t("ServicesBlock.items.5.title"),
            desc: t("ServicesBlock.items.5.desc"),
            link: "/services#06",
            img: "https://images.unsplash.com/photo-1587293852726-70cdb56c28ea?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <BaseSection withGrid spacing="normal" className="bg-gray-50 border-t border-gray-200">

            <FadeIn className="flex flex-col mb-16 md:mb-24 text-center md:text-left items-center md:items-start">
                <Text className="text-[10px] font-bold tracking-[0.4em] text-primary-500 uppercase mb-6">
                    {t("ServicesBlock.subtitle")}
                </Text>
                <Heading
                    level={2}
                    className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-gray-900 leading-[0.9]"
                >
                    {t("ServicesBlock.title1")}<br />
                    {t("ServicesBlock.title2")}
                </Heading>
            </FadeIn>

            <FadeIn delay={100} className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200 border border-gray-200">
                {services.map((item) => (
                    <Link
                        key={item.id}
                        to={item.link}
                        className="group relative bg-white aspect-square md:aspect-auto md:min-h-88 p-8 md:p-10 flex flex-col justify-between overflow-hidden transition-colors duration-300 hover:bg-gray-900"
                    >
                        <Image
                            src={item.img}
                            alt=""
                            aspectRatio="auto"
                            containerClassName="absolute inset-0 z-0 pointer-events-none !bg-transparent opacity-20 duration-500"
                        />

                        <div className="relative z-10">
                            <Text className="text-[10px] font-bold tracking-[0.3em] text-gray-400 group-hover:text-primary-500 transition-colors duration-300">
                                {item.id}
                            </Text>
                        </div>

                        <div className="relative z-10 mt-auto flex flex-col w-full">
                            <Heading
                                level={3}
                                className="text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight text-gray-900 group-hover:text-white transition-colors duration-300 mb-4 truncate w-full"
                            >
                                {item.title}
                            </Heading>

                            <div className="flex items-end justify-between overflow-hidden w-full gap-4">
                                <Text className="text-xs md:text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300 w-[85%] h-16 line-clamp-3 overflow-hidden">
                                    {item.desc}
                                </Text>

                                <ArrowRight className="h-6 w-6 text-primary-500 md-text-gray-300 group-hover:text-primary-500 transition-colors duration-300 shrink-0" />
                            </div>
                        </div>

                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500 transition-colors duration-300 z-20 pointer-events-none" />
                    </Link>
                ))}
            </FadeIn>

        </BaseSection>
    );
}