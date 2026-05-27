import { SolutionsCanvas } from "@/components/canvas/SolutionsCanvas";
import { useTranslation } from "react-i18next";

/**
 * SolutionsHeroSection
 *
 * Full-width hero with an advanced interactive canvas background representing
 * architectural grids and automated flows.
 *
 * Elements:
 * - "Enterprise Solutions" glassmorphic badge
 * - H1: "Structural Precision. Automated Flows."
 * - Descriptive body paragraph with subtle backdrop blur
 */
export function SolutionsHeroSection() {
  const { t } = useTranslation();
  
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest py-stack-lg border-b border-outline-variant">
      {/* Premium Canvas Background */}
      <SolutionsCanvas />

      {/* Subtle fade overlay to blend with the next section naturally */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface-container-lowest/80 pointer-events-none z-0" />

      {/* Content Layer */}
      <div className="relative z-10 max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-stack-lg pb-stack-md flex flex-col items-center text-center pointer-events-none">
        
        {/* Badge */}
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest mb-stack-sm border border-outline-variant/50 px-4 py-2 bg-surface-container-lowest/70 backdrop-blur-md shadow-sm">
          {t('solutionsHero.badge')}
        </span>

        {/* Headline */}
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary max-w-4xl mb-stack-sm drop-shadow-sm">
          {t('solutionsHero.title1')}
          <br />
          {t('solutionsHero.title2')}
        </h1>

        {/* Body */}
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl bg-surface-container-lowest/60 backdrop-blur-md py-4 px-6 rounded-lg border border-outline-variant/30 shadow-sm leading-relaxed">
          {t('solutionsHero.body')}
        </p>
      </div>
    </section>
  );
}
