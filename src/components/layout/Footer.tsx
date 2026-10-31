import { forwardRef, type ComponentProps } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";
import { cn } from "../../lib/utils";
import { Text } from "../ui/Text";
import { Button } from "../ui/Button";
import { Image } from "../ui/Image";
import type { NavLinkItem } from "./Layout";
import { useTranslation } from "react-i18next";
import { useAppContext } from "../../context/AppContext";

import Logo from "../../assets/logo.png";
import FooterCta from "../../assets/footer-cta.png";

export interface FooterProps extends ComponentProps<"footer"> {
  links: NavLinkItem[];
}

const SERVICE_IDS = [
  "construction",
  "engineering",
  "fibc-production",
  "petrochemicals",
];

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ links, className, ...props }, ref) => {
    const { t } = useTranslation("common");
    const { companyName } = useAppContext();

    return (
      <footer
        ref={ref}
        className={cn("w-full bg-gray-900 text-gray-300", className)}
        {...props}
      >
        <div className="relative border-b border-gray-800 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${FooterCta})` }}
          />          <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 to-gray-900/40" />

          <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 lg:flex-row lg:items-center lg:px-8">
            <div>
              <Text className="mb-2 text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
                {t("footer.ctaTag")}
              </Text>
              <h2 className="text-3xl font-black text-white sm:text-4xl uppercase tracking-tight">
                {t("footer.ctaTitle")}
              </h2>
            </div>
            <div className="flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:gap-8">
              <Text className="max-w-sm text-sm font-medium text-gray-400">
                {t("footer.ctaDesc")}
              </Text>
              <Button className="group flex shrink-0 items-center gap-3 bg-primary-500 px-8 py-6 text-sm font-bold text-white uppercase hover:bg-primary-600 transition-colors rounded-none">
                {t("footer.ctaButton")}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col items-center text-center gap-6 border-b border-gray-800 pb-10 md:flex-row md:items-center md:text-left md:gap-10 md:pb-12">
            <Link to="/" className="group shrink-0 inline-flex items-center justify-center outline-none">
              <Image
                src={Logo}
                aspectRatio="auto"
                alt={t("navbar.logoAlt")}
                className="h-14 sm:h-16 md:h-24 object-contain brightness-0 invert"
                containerClassName="bg-transparent"
              />
            </Link>

            <div className="h-px w-12 shrink-0 bg-gray-700 md:h-16 md:w-px" />

            <Text className="max-w-md text-sm sm:text-base font-medium leading-relaxed text-gray-400 md:max-w-xl md:text-lg">
              {t("footer.slogan")}
            </Text>
          </div>

          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3 lg:gap-8">
            <div className="lg:col-span-1">
              <Text className="mb-6 text-sm font-bold text-white uppercase tracking-wider">
                {t("footer.quickLinks")}
              </Text>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-gray-400 transition-colors hover:text-primary-500"
                    >
                      {t(`navbar.${link.label}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <Text className="mb-6 text-sm font-bold text-white uppercase tracking-wider">
                {t("footer.services")}
              </Text>
              <ul className="flex flex-col gap-3">
                {SERVICE_IDS.map((id, index) => (
                  <li key={id}>
                    <Link to={`/services#0${index + 1}`} className="text-sm font-medium text-gray-400 transition-colors hover:text-primary-500">
                      {t(`footer.servicesList.${id}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-1">
              <Text className="mb-6 text-sm font-bold text-white uppercase tracking-wider">
                {t("footer.contact")}
              </Text>
              <ul className="flex flex-col gap-4">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 shrink-0 text-gray-500" />
                  <span className="text-sm text-gray-400">{t("footer.address")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 shrink-0 text-gray-500" />
                  <span className="text-sm text-gray-400">{t("footer.phone")}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 shrink-0 text-gray-500" />
                  <span className="text-sm text-gray-400">{t("footer.email")}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <div className="border-t border-gray-800 bg-gray-900/50">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-xs text-gray-500 md:flex-row sm:px-6 lg:px-8">
            <Text className="text-xs font-medium text-gray-500">
              {t("footer.rights", { company: companyName, year: new Date().getFullYear() })}
            </Text>
            <div className="flex items-center gap-4">
              <Link to="/privacy" className="hover:text-gray-300 transition-colors">{t("footer.privacy")}</Link>
              <span className="text-gray-700">|</span>
              <Link to="/terms" className="hover:text-gray-300 transition-colors">{t("footer.terms")}</Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
);

Footer.displayName = "Footer";