import { useTranslation } from "react-i18next";
import { BaseSection } from "./BaseSection";
import { FadeIn } from "../utils/FadeIn";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Image } from "../ui/Image";
import ManifestImg from "../../assets/about/manifest-bg.png";

export function ManifestoBlock() {
  const { t } = useTranslation("about");

  return (
    <BaseSection 
      withGrid 
      spacing="large" 
      className="min-h-[80vh] flex flex-col justify-center pt-32 pb-24 border-b border-gray-200"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center w-full max-w-[100rem] mx-auto relative z-10">
        <div className="flex flex-col lg:col-span-7">
          <FadeIn>
            <Text className="text-[10px] sm:text-xs font-bold tracking-[0.4em] text-primary-500 uppercase mb-8 block">
              {t("ManifestoBlock.subtitle")}
            </Text>
          </FadeIn>
          
          <FadeIn delay={100}>
            <Heading 
              level={1} 
              className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black uppercase tracking-tighter text-gray-900 leading-[0.9] mb-12"
            >
              {t("ManifestoBlock.title1")}<br />
              {t("ManifestoBlock.title2")}
            </Heading>
          </FadeIn>

          <FadeIn delay={200} className="max-w-2xl md:pl-12 md:border-l-2 border-primary-500">
            <Text className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
              {t("ManifestoBlock.description")}
            </Text>
          </FadeIn>
        </div>

        <FadeIn delay={300} className="lg:col-span-5 relative w-full h-100 lg:h-150 mt-12 lg:mt-0">
          
          <div className="absolute top-4 -left-4 md:top-6 md:-left-6 w-full h-full border border-gray-300 pointer-events-none z-0" />
          
          <Image 
            src={ManifestImg} 
            alt="Infrastructure"
            aspectRatio="auto"
            containerClassName="relative z-10 w-full h-full"
            className="contrast-100"
          />
          
          <div className="absolute bottom-0 right-0 bg-gray-900 p-4 z-20">
             <Text className="text-[10px] font-bold tracking-[0.2em] text-white uppercase">
                Bereketli Horjun
             </Text>
          </div>

        </FadeIn>

      </div>
    </BaseSection>
  );
}