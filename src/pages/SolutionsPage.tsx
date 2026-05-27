import { useEffect } from "react";
import { SolutionsHeroSection } from "@/components/sections/solutions/SolutionsHeroSection";
import { SolutionsGrid } from "@/components/sections/solutions/SolutionsGrid";
import { SolutionsMetrics } from "@/components/sections/solutions/SolutionsMetrics";
import { SolutionsCTA } from "@/components/sections/solutions/SolutionsCTA";

/**
 * SolutionsPage
 *
 * Assembles all Solutions sections in order:
 * Hero → Module Grid → ROI Metrics → CTA
 *
 * Scrolls to top on mount (route change).
 */
export function SolutionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <main className="w-full relative z-10">
      <SolutionsHeroSection />
      <SolutionsGrid />
      <SolutionsMetrics />
      <SolutionsCTA />
    </main>
  );
}
