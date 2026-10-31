import { Circle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";
import { useAppContext } from "../context/AppContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import LegalPage from "./LegalPage";

export default function TermsPage() {
  const { t } = useTranslation("legal");
  const { companyName, country } = useAppContext();

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.terms"));

  // Subtle gray bullet to match the new text colors
  const Bullet = <Circle className="h-2 w-2 fill-current mt-2.5 text-gray-400" />;

  const licenseList = t("termsOfService.section2.list", { returnObjects: true }) as string[];

  const content = (
    <div className="space-y-12">
      <section>
        <Heading level={3} className="mb-4 text-gray-900 uppercase font-bold tracking-wide text-xl">
          {t("termsOfService.section1.title")}
        </Heading>
        <Text className="leading-relaxed text-gray-600">
          {t("termsOfService.section1.text", { company: companyName })}
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-gray-900 uppercase font-bold tracking-wide text-xl">
          {t("termsOfService.section2.title")}
        </Heading>
        <Text className="mb-6 leading-relaxed text-gray-600">
          {t("termsOfService.section2.text")}
        </Text>

        <List className="space-y-4">
          {Array.isArray(licenseList) && licenseList.map((item, index) => (
            <ListItem key={index} icon={Bullet} className="flex items-start">
              <span className="leading-relaxed text-gray-600">
                {item}
              </span>
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-gray-900 uppercase font-bold tracking-wide text-xl">
          {t("termsOfService.section3.title")}
        </Heading>
        <Text className="leading-relaxed text-gray-600">
          {t("termsOfService.section3.text", { country: country })}
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage
      title={t("termsOfService.title")}
      lastUpdated={t("termsOfService.lastUpdated")}
      content={content}
    />
  );
}