import { SolutionCard } from "./SolutionCard";
import { SOLUTION_MODULES } from "@/data/solutionModules";

/**
 * SolutionsGrid
 *
 * Responsive 3-column grid (1 col on mobile, 3 on md+) of
 * SolutionCard components. Each card represents one enterprise module.
 */
export function SolutionsGrid() {
  return (
    <section className="w-full py-stack-lg bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section header */}
        <div className="mb-stack-md">
          <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest">
            Module Library
          </span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface mt-2">
            Deploy the Right Architecture
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {SOLUTION_MODULES.map((module) => (
            <SolutionCard key={module.moduleId} module={module} />
          ))}
        </div>
      </div>
    </section>
  );
}
