import { useTranslation } from "react-i18next";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";
import { useAppContext } from "../context/AppContext";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import LegalPage from "./LegalPage";

interface PrivacyDataItem {
  label: string;
  desc: string;
}

export default function PrivacyPage() {
  const { t } = useTranslation("legal");
  const { companyName } = useAppContext();

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.privacy"));

  const dataList = t("privacyPolicy.section2.dataList", { returnObjects: true }) as PrivacyDataItem[];

  const content = (
    <div className="space-y-12">
      <section>
        <Heading level={3} className="mb-4 text-gray-900 uppercase font-bold tracking-wide text-xl">
          {t("privacyPolicy.section1.title")}
        </Heading>
        <Text className="leading-relaxed text-gray-600">
          {t("privacyPolicy.section1.text", { company: companyName })}
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-gray-900 uppercase font-bold tracking-wide text-xl">
          {t("privacyPolicy.section2.title")}
        </Heading>
        <Text className="mb-6 leading-relaxed text-gray-600">
          {t("privacyPolicy.section2.text")}
        </Text>

        <List className="space-y-4">
          {Array.isArray(dataList) && dataList.map((item, index) => (
            <ListItem key={index} icon={null} className="flex items-start">
              <div className="leading-relaxed text-gray-600">
                <span className="font-bold text-gray-900">{item.label}: </span>
                {item.desc}
              </div>
            </ListItem>
          ))}
        </List>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-gray-900 uppercase font-bold tracking-wide text-xl">
          {t("privacyPolicy.section3.title")}
        </Heading>
        <Text className="leading-relaxed text-gray-600">
          {t("privacyPolicy.section3.text")}
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage
      title={t("privacyPolicy.title")}
      lastUpdated={t("privacyPolicy.lastUpdated")}
      content={content}
    />
  );
}