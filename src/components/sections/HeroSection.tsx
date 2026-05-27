import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { FlowCanvas } from "@/components/canvas/FlowCanvas";
import { useTranslation } from "react-i18next";

/**
 * HeroSection
 * Full-viewport hero with:
 * - Animated FlowCanvas background (neural particle visualizer)
 * - Display headline + body copy
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
    <section className="px-margin-mobile md:px-margin-desktop pt-[153px] pb-[102px] min-h-[870px] flex flex-col justify-center border-b border-outline relative overflow-hidden">
      {/* Animated canvas background */}
      <FlowCanvas />

      {/* Foreground content */}
      <div className="max-w-4xl relative z-10 pointer-events-none">
        {/* Headline */}
        <h1
          className="reveal font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background mb-stack-md leading-tight"
          style={{ transitionDelay: "0.1s" }}
        >
          {t('hero.title1')} <br /> {t('hero.title2')}
        </h1>

        {/* Body copy */}
        <p
          className="reveal font-body-lg text-body-lg text-secondary mb-stack-lg max-w-2xl"
          style={{ transitionDelay: "0.2s" }}
        >
          {t('hero.subtitle')}
        </p>

        {/* CTA */}
        <div
          className="reveal"
          style={{ transitionDelay: "0.3s" }}
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
