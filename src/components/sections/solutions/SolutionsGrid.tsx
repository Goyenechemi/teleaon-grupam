import { SolutionCard } from "./SolutionCard";
import { SOLUTION_MODULES } from "@/data/solutionModules";

/**
 * SolutionsGrid
 *
 * Responsive grid of SolutionCards. Cards with video appear first.
 * No generic "Module Library" header — the SolutionsHeroSection
 * already provides all context the user needs.
 */
export function SolutionsGrid() {
  return (
    <section className="w-full py-stack-md bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Cards grid — 3 columns on desktop, single on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SOLUTION_MODULES.map((module, i) => (
            <SolutionCard key={module.moduleId} module={module} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
