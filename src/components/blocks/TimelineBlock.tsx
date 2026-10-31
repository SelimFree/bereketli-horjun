import { useTranslation } from "react-i18next";
import { BaseSection } from "./BaseSection";
import { FadeIn } from "../utils/FadeIn";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

export function TimelineBlock() {
    const { t } = useTranslation("about");

    const timeline = [
        {
            year: t("TimelineBlock.items.0.year"),
            title: t("TimelineBlock.items.0.title"),
            desc: t("TimelineBlock.items.0.desc"),
        },
        {
            year: t("TimelineBlock.items.1.year"),
            title: t("TimelineBlock.items.1.title"),
            desc: t("TimelineBlock.items.1.desc"),
        },
        {
            year: t("TimelineBlock.items.2.year"),
            title: t("TimelineBlock.items.2.title"),
            desc: t("TimelineBlock.items.2.desc"),
        },
        {
            year: t("TimelineBlock.items.3.year"),
            title: t("TimelineBlock.items.3.title"),
            desc: t("TimelineBlock.items.3.desc"),
        },
    ];

    return (
        <BaseSection spacing="large" className="bg-gray-50 border-b border-gray-200 overflow-hidden relative">

            <div
                className="absolute inset-0 z-0 pointer-events-none opacity-40"
                style={{
                    backgroundImage: "radial-gradient(circle, #9ca3af 2px, transparent 2px)",
                    backgroundSize: "32px 32px",
                    maskImage: "linear-gradient(to left, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 60%)",
                    WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 5%, rgba(0,0,0,0) 60%)"
                }}
            />

            <div className="w-full max-w-[100rem] mx-auto relative z-10">

                {/* Section Header */}
                <FadeIn className="flex flex-col mb-20 md:mb-32">
                    <Text className="text-[10px] font-bold tracking-[0.4em] text-primary-500 uppercase mb-6">
                        {t("TimelineBlock.subtitle")}
                    </Text>
                    <Heading
                        level={2}
                        className="text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tight text-gray-900 leading-[0.9]"
                    >
                        {t("TimelineBlock.title1")}<br />
                        {t("TimelineBlock.title2")}
                    </Heading>
                </FadeIn>

                {/* The Circuit Board Timeline */}
                <div className="relative w-full max-w-7xl ml-4 md:ml-12 lg:ml-24">

                    {/* Main Vertical Trunk */}
                    <div className="absolute top-0 bottom-0 left-0 w-px bg-gray-200 z-0" />

                    {timeline.map((item, idx) => (
                        <FadeIn
                            key={idx}
                            className="relative pl-10 md:pl-20 pb-24 md:pb-40 last:pb-0 w-full flex items-start justify-between group"
                        >

                            {/* The Branch Trace */}
                            <div className="absolute top-3 md:top-4 left-0 w-6 md:w-12 flex items-center z-10">
                                <div className="h-px bg-gray-300 grow transition-colors duration-500 group-hover:bg-primary-500" />
                                <div className="w-1.5 h-1.5 bg-primary-500 shrink-0" />
                            </div>

                            {/* The Data Node (Left Side) */}
                            <div className="flex flex-col relative z-10 max-w-3xl">
                                <Text className="text-[10px] sm:text-xs font-bold tracking-[0.3em] text-primary-500 uppercase mb-4 md:mb-6">
                                    {item.year}
                                </Text>

                                <Heading
                                    level={3}
                                    className="text-2xl md:text-4xl lg:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-4 md:mb-6"
                                >
                                    {item.title}
                                </Heading>

                                <Text className="text-base md:text-lg text-gray-600 leading-relaxed font-medium">
                                    {item.desc}
                                </Text>
                            </div>

                            {/* 
                THE GIANT WATERMARK (Right Side) 
                Now sits beautifully against both the solid bg-gray-50 and the faint dot matrix.
              */}
                            <div className="hidden lg:block absolute -top-8 right-0 text-[12rem] xl:text-[16rem] font-black text-gray-100 tracking-tighter leading-none pointer-events-none select-none z-0 transition-colors duration-500 group-hover:text-gray-200">
                                {item.year}
                            </div>

                        </FadeIn>
                    ))}

                </div>
            </div>
        </BaseSection>
    );
}