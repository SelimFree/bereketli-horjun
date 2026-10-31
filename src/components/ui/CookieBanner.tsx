import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";
import { Button } from "./Button";
import { Text } from "./Text";
import { cn } from "../../lib/utils";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export function CookieBanner() {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useTranslation("common");

    useEffect(() => {
        const consent = localStorage.getItem("cookie-consent");
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const acceptCookies = () => {
        localStorage.setItem("cookie-consent", "accepted");
        setIsVisible(false);
    };

    return (
        <div
            className={cn(
                "fixed bottom-6 left-4 right-4 md:left-8 md:max-w-md z-50 transition-all duration-500 transform",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
            )}
        >
            <div className="bg-gray-900 p-6 shadow-2xl border-l-4 border-l-primary-500 flex flex-col gap-5 rounded-none">
                <div className="flex items-start gap-4">

                    <div className="shrink-0 mt-1">
                        <Cookie className="h-6 w-6 text-primary-500" />
                    </div>

                    <div className="space-y-2 pr-6">
                        <Text className="text-white uppercase font-bold tracking-[0.15em] text-xs">
                            {t("cookieBanner.title")}
                        </Text>
                        <Text className="text-gray-400 text-sm leading-relaxed">
                            {t("cookieBanner.body")}
                        </Text>
                    </div>

                    <button
                        onClick={() => setIsVisible(false)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <div className="flex items-center gap-4">
                    <Button
                        size="sm"
                        onClick={acceptCookies}
                        className="bg-primary-500 hover:bg-primary-600 text-white rounded-none px-8 font-bold tracking-widest uppercase text-xs"
                    >
                        {t("cookieBanner.accept")}
                    </Button>
                    <Link
                        to="/cookies"
                        onClick={() => setIsVisible(false)}
                        className="text-xs font-bold tracking-widest text-gray-400 hover:text-primary-500 uppercase transition-colors"
                    >
                        {t("cookieBanner.more")}
                    </Link>
                </div>
            </div>
        </div>
    );
}