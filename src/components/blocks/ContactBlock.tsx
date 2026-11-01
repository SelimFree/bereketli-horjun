import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
    Mail, Phone, MapPin, ArrowRight,
    CheckCircle2, Loader2, AlertCircle, X
} from "lucide-react";
import { BaseSection } from "./BaseSection";
import { FadeIn } from "../utils/FadeIn";
import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { Turnstile } from "@marsidev/react-turnstile";
import type { TurnstileInstance } from "@marsidev/react-turnstile";

export function ContactBlock() {
    const { t, i18n } = useTranslation("contact");
    const [turnstileToken, setTurnstileToken] = useState<string>("");
    const turnstileRef = useRef<TurnstileInstance>(null);

    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();

        setError(null);
        if (!formRef.current) return;

        if (!turnstileToken) {
            alert("Security check pending. Please wait a moment.");
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData(formRef.current);
        const data = Object.fromEntries(formData.entries());

        const payload = {
            ...data,
            user_lang: (i18n.language || "en").split('-')[0],
            captchaToken: turnstileToken
        };

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (!response.ok || !result.success) {
                turnstileRef.current?.reset();
                throw new Error(result.error || "Failed to send message");
            }

            setIsSubmitted(true);
            turnstileRef.current?.reset();
            formRef.current.reset();
        } catch (err) {
            console.error(err);
            turnstileRef.current?.reset();
            setError("ContactBlock.errorMessage");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex flex-col w-full bg-white">
            <BaseSection withGrid spacing="large" className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-visible!">
                <div className="max-w-[100rem] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-start relative z-10">

                    <div className="w-full lg:w-5/12 flex flex-col gap-10 lg:sticky lg:top-32">
                        <FadeIn>
                            <Text className="text-[10px] font-bold tracking-[0.4em] text-primary-500 uppercase mb-6 block">
                                {t("ContactBlock.subtitle")}
                            </Text>

                            <Heading level={1} className="text-5xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-gray-900 leading-[0.9] mb-8">
                                {t("ContactBlock.title1")}<br />
                                {t("ContactBlock.title2")}
                            </Heading>

                            <Text className="text-lg text-gray-600 font-medium leading-relaxed max-w-md border-l-2 border-primary-500 pl-6">
                                {t("ContactBlock.description")}
                            </Text>
                        </FadeIn>

                        <FadeIn delay={100}>
                            <div className="flex flex-col gap-6 mt-4 border-t-2 border-gray-900 pt-8">

                                <div className="flex items-start gap-4 group">
                                    <div className="bg-white border border-gray-200 p-3 rounded-none group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors duration-300 shadow-sm">
                                        <MapPin className="h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col mt-1">
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">{t("ContactBlock.info.addressLabel")}</span>
                                        <span className="text-gray-900 font-black uppercase tracking-widest text-sm">
                                            {t("ContactBlock.info.address")}
                                        </span>
                                        <Text className="text-xs font-bold text-gray-500 mt-2 max-w-50 leading-relaxed">
                                            {t("ContactBlock.info.addressDetails")}
                                        </Text>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group mt-2">
                                    <div className="bg-white border border-gray-200 p-3 rounded-none group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors duration-300 shadow-sm">
                                        <Phone className="h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col mt-1">
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">{t("ContactBlock.info.phoneLabel")}</span>
                                        <a href={`tel:${t("ContactBlock.info.phone").replace(/[^0-9+]/g, "")}`} className="text-gray-900 font-black tracking-widest text-sm hover:text-primary-500 transition-colors">
                                            {t("ContactBlock.info.phone")}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group mt-2">
                                    <div className="bg-white border border-gray-200 p-3 rounded-none group-hover:bg-primary-500 group-hover:border-primary-500 transition-colors duration-300 shadow-sm">
                                        <Mail className="h-6 w-6 text-gray-900 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div className="flex flex-col mt-1">
                                        <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400 mb-1">{t("ContactBlock.info.emailLabel")}</span>
                                        <a href={`mailto:${t("ContactBlock.info.email")}`} className="text-gray-900 font-black tracking-widest text-sm hover:text-primary-500 transition-colors">
                                            {t("ContactBlock.info.email")}
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </FadeIn>
                    </div>

                    <div className="w-full lg:w-7/12">
                        <FadeIn delay={200}>
                            <div className="bg-gray-900 p-8 md:p-12 relative overflow-hidden min-h-140 flex flex-col justify-center">

                                {!isSubmitted ? (
                                    <form ref={formRef} onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="flex flex-col gap-3">
                                                <Label htmlFor="firstName" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                                                    {t("ContactBlock.form.firstNameLabel")}
                                                </Label>
                                                <Input
                                                    id="firstName"
                                                    name="firstName"
                                                    required
                                                    placeholder={t("ContactBlock.form.firstNamePlaceholder")}
                                                    className="bg-transparent border-0 border-b-2 border-gray-700 text-white placeholder-gray-600 focus:border-primary-500 focus:ring-0 rounded-none px-1 py-3 text-sm font-bold"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-3">
                                                <Label htmlFor="lastName" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                                                    {t("ContactBlock.form.lastNameLabel")}
                                                </Label>
                                                <Input
                                                    id="lastName"
                                                    name="lastName"
                                                    required
                                                    placeholder={t("ContactBlock.form.lastNamePlaceholder")}
                                                    className="bg-transparent border-0 border-b-2 border-gray-700 text-white placeholder-gray-600 focus:border-primary-500 focus:ring-0 rounded-none px-1 py-3 text-sm font-bold"
                                                />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
                                            <div className="flex flex-col gap-3">
                                                <Label htmlFor="company" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                                                    {t("ContactBlock.form.companyLabel")}
                                                </Label>
                                                <Input
                                                    id="company"
                                                    name="company"
                                                    required
                                                    placeholder={t("ContactBlock.form.companyPlaceholder")}
                                                    className="bg-transparent border-0 border-b-2 border-gray-700 text-white placeholder-gray-600 focus:border-primary-500 focus:ring-0 rounded-none px-1 py-3 text-sm font-bold"
                                                />
                                            </div>

                                            <div className="flex flex-col gap-3">
                                                <Label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                                                    {t("ContactBlock.form.emailLabel")}
                                                </Label>
                                                <Input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    placeholder={t("ContactBlock.form.emailPlaceholder")}
                                                    className="bg-transparent border-0 border-b-2 border-gray-700 text-white placeholder-gray-600 focus:border-primary-500 focus:ring-0 rounded-none px-1 py-3 text-sm font-bold"
                                                />
                                            </div>
                                        </div>

                                        <div className="flex flex-col gap-3 mt-2">
                                            <Label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
                                                {t("ContactBlock.form.messageLabel")}
                                            </Label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                required
                                                rows={4}
                                                placeholder={t("ContactBlock.form.messagePlaceholder")}
                                                className="bg-transparent border-0 border-b-2 border-gray-700 text-white placeholder-gray-600 focus:border-primary-500 focus:ring-0 rounded-none px-1 py-3 text-sm font-bold resize-none"
                                            />
                                        </div>

                                        {error && (
                                            <div className="relative flex items-start gap-4 p-4 border-l-2 border-red-500 bg-red-500/10 mt-4">
                                                <AlertCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                                                <div className="flex-1 pr-6">
                                                    <Text className="text-[10px] font-bold tracking-widest text-red-400 uppercase mb-1">
                                                        Transmission Error
                                                    </Text>
                                                    <Text className="text-xs font-medium text-red-200">
                                                        {t(error)}
                                                    </Text>
                                                </div>
                                                <button
                                                    type="button"
                                                    onClick={() => setError(null)}
                                                    className="absolute top-4 right-4 text-red-400 hover:text-white transition-colors"
                                                >
                                                    <X className="h-4 w-4" />
                                                </button>
                                            </div>
                                        )}

                                        <Turnstile
                                            ref={turnstileRef}
                                            siteKey="0x4AAAAAAFvebx3x9zjgMVpc"
                                            onSuccess={(token) => setTurnstileToken(token)}
                                            options={{
                                                theme: "dark",
                                            }}
                                        />

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full md:w-auto self-start mt-6 bg-primary-500 hover:bg-white text-white hover:text-gray-900 rounded-none px-8 py-6 group transition-colors duration-300"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-3">
                                                    <Loader2 className="h-4 w-4 animate-spin" />
                                                    <span className="text-xs font-black tracking-[0.2em] uppercase">{t("ContactBlock.buttonSending")}</span>
                                                </span>
                                            ) : (
                                                <span className="flex items-center gap-3">
                                                    <span className="text-xs font-black tracking-[0.2em] uppercase">{t("ContactBlock.buttonSubmit")}</span>
                                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </span>
                                            )}
                                        </Button>

                                    </form>
                                ) : (
                                    <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 animate-in fade-in duration-500">
                                        <div className="h-20 w-20 bg-primary-500/10 border border-primary-500 rounded-none flex items-center justify-center mb-8">
                                            <CheckCircle2 className="h-8 w-8 text-primary-500" strokeWidth={2} />
                                        </div>

                                        <Heading level={3} className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-4">
                                            {t("ContactBlock.successTitle")}
                                        </Heading>

                                        <Text className="text-gray-400 text-sm font-medium max-w-sm mx-auto mb-10">
                                            {t("ContactBlock.successMessage")}
                                        </Text>

                                        <Button
                                            onClick={() => setIsSubmitted(false)}
                                            className="bg-white hover:bg-primary-500 text-gray-900 hover:text-white rounded-none px-8 py-6 text-xs font-black tracking-[0.2em] uppercase transition-colors duration-300"
                                        >
                                            {t("ContactBlock.successButton")}
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </BaseSection>
        </div>
    );
}