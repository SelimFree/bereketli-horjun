import { useTranslation } from "react-i18next";
import { BaseHero } from "./BaseHero";

export interface PageHeroProps {
  imageSrc: string;
  translationKey: string;
}

export function PageHeroBlock({ imageSrc, translationKey }: PageHeroProps) {
  const { t } = useTranslation(translationKey);

  const staticBackground = (
    <div
      className="absolute inset-0 h-full w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${imageSrc})` }}
    />
  );

  return (
    <BaseHero
      tags={[
        t("hero.tag1"), 
        t("hero.tag2"), 
        t("hero.tag3")
      ]}
      titleStart={t("hero.titleStart")}
      titleAccent={t("hero.titleAccent")}
      description={t("hero.description")}
      backgroundElements={staticBackground}
    />
  );
}