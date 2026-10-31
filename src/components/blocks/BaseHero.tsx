import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../utils/FadeIn";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

interface BaseHeroProps {
    tags: string[];
    titleStart: string;
    titleAccent: string;
    description: string;
    ctaText?: string;
    ctaLink?: string;
    backgroundElements: ReactNode;
}

export function BaseHero({
    tags,
    titleStart,
    titleAccent,
    description,
    ctaText,
    ctaLink = "#",
    backgroundElements,
}: BaseHeroProps) {
    return (
        <section className="relative flex min-h-[75vh] md:min-h-[85vh] w-full items-center overflow-hidden bg-gray-100 pt-20">
            <div className="absolute inset-0 h-full w-full">
                {backgroundElements}
            </div>

            <div className="absolute inset-0 bg-linear-to-r from-white/95 via-white/80 to-transparent z-10 sm:via-white/70" />

            <div className="relative z-20 mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
                <div className="max-w-2xl lg:max-w-3xl">

                    <FadeIn direction="up" delay={0}>
                        <div className="mb-6 flex flex-wrap items-center gap-2 text-[10px] md:text-sm font-bold tracking-[0.2em] text-gray-900 uppercase">
                            {tags.map((tag, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <span>{tag}</span>
                                    {index < tags.length - 1 && (
                                        <span className="text-gray-400">|</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <FadeIn direction="up" delay={150}>
                        <Heading
                            className="mb-6 text-5xl font-black leading-[1.05] text-gray-900 sm:text-6xl md:text-7xl lg:text-[5.5rem] uppercase tracking-tighter"
                            style={{ viewTransitionName: 'hero-title' }}
                        >
                            {titleStart}{" "}
                            <span className="text-primary-500 block sm:inline">{titleAccent}</span>
                        </Heading>
                    </FadeIn>

                    <FadeIn direction="up" delay={300}>
                        <Text className="mb-10 text-base leading-relaxed text-gray-700 sm:text-lg md:text-xl max-w-xl font-medium">
                            {description}
                        </Text>
                    </FadeIn>

                    {ctaText && (
                        <FadeIn direction="up" delay={450}>
                            <Link
                                to={ctaLink}
                                className="group inline-flex items-center gap-3 border-b-2 border-primary-500 pb-2 text-sm font-bold tracking-widest text-gray-900 uppercase transition-all hover:text-primary-500 w-fit"
                            >
                                {ctaText}
                                <ArrowRight className="h-5 w-5 text-primary-500 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                        </FadeIn>
                    )}

                </div>
            </div>
        </section>
    );
}