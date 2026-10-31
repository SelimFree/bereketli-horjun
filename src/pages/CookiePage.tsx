import { Circle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Heading } from "../components/ui/Heading";
import { Text } from "../components/ui/Text";
import { List, ListItem } from "../components/ui/List";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import LegalPage from "./LegalPage";

interface CookieDataItem {
  label: string;
  desc: string;
}

export default function CookiePage() {
  const { t } = useTranslation("legal");

  const { t: tCommon } = useTranslation("common");
  useDocumentTitle(tCommon("navbar.cookie"));

  const Bullet = <Circle className="h-2 w-2 fill-current mt-2.5 text-gray-400" />;

  const cookieList = t("cookiePolicy.section2.list", { returnObjects: true }) as CookieDataItem[];

  const content = (
    <div className="space-y-12">
      <section>
        <Heading level={3} className="mb-4 text-gray-900 uppercase font-bold tracking-wide text-xl">
          {t("cookiePolicy.section1.title")}
        </Heading>
        <Text className="leading-relaxed text-gray-600">
          {t("cookiePolicy.section1.text")}
        </Text>
      </section>

      <section>
        <Heading level={3} className="mb-4 text-gray-900 uppercase font-bold tracking-wide text-xl">
          {t("cookiePolicy.section2.title")}
        </Heading>
        <Text className="mb-6 leading-relaxed text-gray-600">
          {t("cookiePolicy.section2.text")}
        </Text>

        <List className="space-y-4">
          {Array.isArray(cookieList) && cookieList.map((item, index) => (
            <ListItem key={index} icon={Bullet} className="flex items-start">
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
          {t("cookiePolicy.section3.title")}
        </Heading>
        <Text className="leading-relaxed text-gray-600">
          {t("cookiePolicy.section3.textBefore")}{" "}
          <a
            href="https://allaboutcookies.org"
            className="text-primary-500 font-bold hover:text-primary-600 transition-colors underline-offset-4 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("cookiePolicy.section3.linkText")}
          </a>
          .
        </Text>
      </section>
    </div>
  );

  return (
    <LegalPage
      title={t("cookiePolicy.title")}
      lastUpdated={t("cookiePolicy.lastUpdated")}
      content={content}
    />
  );
}