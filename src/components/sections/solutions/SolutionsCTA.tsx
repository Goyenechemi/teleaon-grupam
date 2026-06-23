import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";

/**
 * SolutionsCTA
 *
 * Full-width call-to-action section at the bottom of the Solutions page.
 * Clicking "Start Your Diagnostic" navigates to Home and scrolls to the
 * diagnostic form after a short delay to allow page transition.
 */
export function SolutionsCTA() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCTA = () => {
    navigate("/");
    // Scroll after the page has mounted
    setTimeout(() => {
      document
        .getElementById("diagnostic-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <section className="w-full pt-8 pb-24 bg-surface-container-lowest border-t border-outline-variant">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center text-center gap-stack-md reveal">
        {/* Single line body */}
        <h2 className="font-headline-md text-headline-md text-on-surface">
          {t('modules.bottomCtaText')}
        </h2>

        {/* CTA button */}
        <Button
          variant="primary"
          size="lg"
          className="flex items-center gap-2 group whitespace-nowrap"
          onClick={handleCTA}
        >
          {t('modules.bottomCtaButton')}
          <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
        </Button>
      </div>
    </section>
  );
}
