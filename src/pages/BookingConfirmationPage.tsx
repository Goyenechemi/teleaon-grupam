import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { CheckCircle } from "lucide-react";

/**
 * BookingConfirmationPage
 * Shown after the user successfully books a meeting via Cal.com.
 * Cal.com redirects here via the event's "Redirect URL" setting.
 */
export function BookingConfirmationPage() {
    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <main className="w-full min-h-screen flex items-center justify-center px-margin-mobile md:px-margin-desktop">
            <div className="max-w-lg w-full text-center py-stack-lg">
                {/* Icon */}
                <div className="flex justify-center mb-stack-md">
                    <CheckCircle className="w-16 h-16 text-primary" />
                </div>

                {/* Badge */}
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                    {t("confirmation.badge")}
                </span>

                {/* Title */}
                <h1 className="font-headline-lg text-headline-lg text-on-background mt-4 mb-4">
                    {t("confirmation.title")}
                </h1>

                {/* Subtitle */}
                <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
                    {t("confirmation.subtitle")}
                </p>

                {/* Back to home */}

                href="/"
                className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-colors duration-200"
                <a>
                    {t("confirmation.cta")}
                </a>
            </div>
        </main>
    );
}