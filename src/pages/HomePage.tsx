import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { HeroBlock } from "../components/blocks/HeroBlock";
import { MetricsBlock } from "../components/blocks/MetricsBlock";
import { ServicesBlock } from "../components/blocks/ServicesBlock";

export default function HomePage() {

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.home"));

  return (
    <div className="flex flex-col">
      <HeroBlock />
      <MetricsBlock />
      <ServicesBlock />
    </div>
  );
}