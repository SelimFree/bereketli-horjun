import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import ContactBg from "../assets/contact/contact-bg.png"; 
import { PageHeroBlock } from "../components/blocks/PageHeroBlock";
import { ContactBlock } from "../components/blocks/ContactBlock";

export default function ContactPage() {
  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.contact"));

  return (
    <div className="flex flex-col">
      <PageHeroBlock imageSrc={ContactBg} translationKey="contact" />
      <ContactBlock />
    </div>
  );
}