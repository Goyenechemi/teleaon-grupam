import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FlowCanvas } from "@/components/canvas/FlowCanvas";
import { useTranslation } from "react-i18next";

/**
 * HeroSection
 * Full-viewport hero with:
 * - Animated FlowCanvas background (neural particle visualizer)
 * - Eyebrow badge → H1 primary statement → secondary line → body copy
 * - CTA button that smooth-scrolls to the diagnostic form
 */
export function HeroSection() {
  const { t } = useTranslation();

  const scrollToDiagnostic = () => {
    document
      .getElementById("diagnostic-form")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-margin-mobile md:px-margin-desktop pt-[140px] pb-[100px] min-h-[900px] flex flex-col justify-center border-b border-outline relative overflow-hidden">
      {/* Animated canvas background */}
      <FlowCanvas />

      {/* Foreground content */}
      <div className="max-w-[780px] relative z-10 pointer-events-none">

        {/* Eyebrow badge */}
        <div
          className="reveal flex items-center gap-3 mb-8"
          style={{ transitionDelay: "0s" }}
        >
          <span className="inline-block w-6 h-px bg-primary opacity-60" />
          <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.18em] opacity-80">
            {t('hero.badge')}
          </span>
        </div>

        {/* Primary headline — the bold claim */}
        <h1
          className="reveal font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background leading-[1.08] tracking-tight mb-5"
          style={{ transitionDelay: "0.1s" }}
        >
          {t('hero.title1')}
        </h1>

        {/* Secondary line — softer, lighter weight */}
        <p
          className="reveal text-2xl md:text-[1.75rem] font-light text-secondary leading-snug mb-10 max-w-[680px]"
          style={{ transitionDelay: "0.18s" }}
        >
          {t('hero.title2')}
        </p>

        {/* Visual divider */}
        <div
          className="reveal w-10 h-px bg-outline-variant mb-8"
          style={{ transitionDelay: "0.24s" }}
        />

        {/* Body copy */}
        <p
          className="reveal font-body-lg text-body-lg text-secondary mb-stack-lg max-w-[600px] leading-relaxed"
          style={{ transitionDelay: "0.3s" }}
        >
          {t('hero.subtitle')}
        </p>

        {/* CTA */}
        <div
          className="reveal"
          style={{ transitionDelay: "0.38s" }}
        >
          <Button
            variant="primary"
            size="lg"
            className="flex items-center gap-2 group w-fit pointer-events-auto"
            onClick={scrollToDiagnostic}
          >
            {t('hero.ctaPrimary')}
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
}
