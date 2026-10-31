import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import ServicesBg from "../assets/services/services-bg.png"; 
import { PageHeroBlock } from "../components/blocks/PageHeroBlock";
import { ServicesListBlock } from "../components/blocks/ServicesListBlock";

export default function ServicesPage() {
  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.services"));

  return (
    <div className="flex flex-col">
      <PageHeroBlock imageSrc={ServicesBg} translationKey="services" />
      <ServicesListBlock />
    </div>
  );
}