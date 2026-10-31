import { useTranslation } from "react-i18next";
import { BaseHero } from "./BaseHero";
import HomeBg from "../../assets/home/home-bg.png";

export function HeroBlock() {
  const { t } = useTranslation("home");

  const staticBackground = (
    <div
      className="absolute inset-0 h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${HomeBg})` }}
    />
  );

  return (
    <BaseHero
      tags={[
        t("HeroBlock.tag1"), 
        t("HeroBlock.tag2"), 
        t("HeroBlock.tag3")
      ]}
      titleStart={t("HeroBlock.titleStart")}
      titleAccent={t("HeroBlock.titleAccent")}
      description={t("HeroBlock.description")}
      ctaText={t("HeroBlock.cta")}
      ctaLink="/services"
      backgroundElements={staticBackground}
    />
  );
}