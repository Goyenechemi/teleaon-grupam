import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { BOOKING_CONFIG, getCalPrefill } from "@/config/booking";
import { CheckCircle } from "lucide-react";

interface BookingSectionProps {
    name: string;
    email: string;
    company: string;
}

export function BookingSection({ name, email, company }: BookingSectionProps) {
    const { t } = useTranslation();
    const ref = useRef<HTMLElement>(null);
    const [booked, setBooked] = useState(false);

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, []);

    useEffect(() => {
        const prefill = getCalPrefill({ name, email, company });

        // Official Cal.com embed snippet
        (function (C: any, A: string, L: string) {
            let p = function (a: any, ar: any) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function (...args: any[]) {
                let cal = C.Cal;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (args[0] === L) {
                    const api: any = function (...ar: any[]) { p(api, ar); };
                    const namespace = args[1];
                    api.q = api.q || [];
                    if (typeof namespace === "string") {
                        cal.ns[namespace] = cal.ns[namespace] || api;
                        p(cal.ns[namespace], args);
                        p(cal, ["initNamespace", namespace]);
                    } else p(cal, args);
                    return;
                }
                p(cal, args);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        const cal = (window as any).Cal;

        cal("init", { origin: "https://cal.com" });

        cal("inline", {
            elementOrSelector: "#cal-embed",
            calLink: BOOKING_CONFIG.calUrl,
            config: {
                theme: BOOKING_CONFIG.theme,
                name: prefill.name,
                email: prefill.email,
                notes: prefill.notes,
            },
        });

        cal("on", {
            action: "bookingSuccessful",
            callback: () => setBooked(true),
        });
    }, [name, email, company]);

    return (
        <section
            ref={ref}
            className="px-margin-mobile md:px-margin-desktop py-stack-lg border-t border-outline-variant"
        >
            {!booked ? (
                <>
                    <div className="max-w-3xl mx-auto text-center mb-stack-md">
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                            {t("booking.badge")}
                        </span>
                        <h2 className="font-headline-lg text-headline-lg text-on-background mt-4 mb-2">
                            {t("booking.title")}
                        </h2>
                        <p className="font-body-md text-body-md text-on-surface-variant">
                            {t("booking.subtitle")}
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto border border-outline-variant overflow-hidden">
                        <div id="cal-embed" style={{ minHeight: 700 }} />
                    </div>
                </>
            ) : (
                <div className="max-w-lg mx-auto text-center py-stack-lg">
                    <div className="flex justify-center mb-stack-md">
                        <CheckCircle className="w-16 h-16 text-primary" />
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
                        {t("confirmation.badge")}
                    </span>
                    <h2 className="font-headline-lg text-headline-lg text-on-background mt-4 mb-2">
                        {t("confirmation.title")}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
                        {t("confirmation.subtitle")}
                    </p>

                    <a href="/" className="inline-flex items-center gap-2 font-label-sm text-label-sm uppercase tracking-widest text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-on-primary transition-colors duration-200">
                        {t("confirmation.cta")}
                    </a>
                </div>
            )}
        </section>
    );
}