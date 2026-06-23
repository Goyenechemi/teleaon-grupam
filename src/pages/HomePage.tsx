import { useTranslation } from "react-i18next";
import { HeroSection } from "@/components/sections/HeroSection";
import { SuccessStorySection } from "@/components/sections/SuccessStorySection";
import { DiagnosticFormSection } from "@/components/sections/DiagnosticFormSection";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { SEO } from "@/components/common/SEO";

/**
 * HomePage
 * Assembles the main landing page sections:
 * Hero → Success Story (Lixita) → Diagnostic Form
 */
export function HomePage() {
  useRevealAnimation();
  const { t } = useTranslation();

  return (
    <main className="w-full max-w-container-max mx-auto relative z-10">
      <SEO 
        title={t("seo.home.title")} 
        description={t("seo.home.description")} 
        keywords={t("seo.home.keywords")} 
        url="/"
      />
      <HeroSection />
      <SuccessStorySection />
      <DiagnosticFormSection />
    </main>
  );
}
