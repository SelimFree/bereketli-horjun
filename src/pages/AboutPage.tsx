import { useTranslation } from "react-i18next";
import { useDocumentTitle } from "../hooks/useDocumentTitle";
import { PageHeroBlock } from "../components/blocks/PageHeroBlock";
import AboutBg from "../assets/about/about-bg.png";
import { ManifestoBlock } from "../components/blocks/ManifestoBlock";
import { TimelineBlock } from "../components/blocks/TimelineBlock";

export default function AboutPage() {
    const { t: tCommon } = useTranslation("common");
    useDocumentTitle(tCommon("navbar.about"));

    return (
        <div className="flex flex-col">
            <PageHeroBlock imageSrc={AboutBg} translationKey="about" />
            <ManifestoBlock />
            <TimelineBlock />
        </div>
    );
}