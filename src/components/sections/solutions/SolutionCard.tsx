import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { SolutionModule } from "@/data/solutionModules";
import {
  MockupContractual,
  MockupWorkflow,
  MockupCompliance,
  MockupDocument,
  MockupAnalytics,
  MockupIntegration,
  MockupSales,
  MockupCS,
  MockupReports,
} from "@/components/canvas/mockups";

interface SolutionCardProps {
  module: SolutionModule;
}

/**
 * SolutionCard
 *
 * Individual enterprise solution module card. Features:
 * - Top-right module/version badge
 * - MaterialIcon in a framed square
 * - Title, description, tag chips
 * - "Explore Module" ghost button
 * - On hover: border turns primary + subtle dot-pattern background
 *
 * Uses CSS classes for the dot-pattern because Tailwind arbitrary
 * `[background-size:16px_16px]` and `hover:bg-[...]` require
 * inline style for the SVG gradient to work properly in React.
 */
export function SolutionCard({ module }: SolutionCardProps) {
  const { t } = useTranslation();
  const [hovered, setHovered] = useState(false);
  const Icon = module.icon;

  const renderMockup = () => {
    switch (module.moduleId) {
      case "MOD_01": return <MockupContractual />;
      case "MOD_02": return <MockupWorkflow />;
      case "MOD_03": return <MockupCompliance />;
      case "MOD_04": return <MockupDocument />;
      case "MOD_05": return <MockupAnalytics />;
      case "MOD_06": return <MockupIntegration />;
      case "MOD_07": return <MockupSales />;
      case "MOD_08": return <MockupCS />;
      case "MOD_09": return <MockupReports />;
      default: return null;
    }
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group perspective-1000 w-full h-[350px] relative"
    >
      {/* 3D Flip Wrapper */}
      <div 
        className={`w-full h-full transition-transform duration-700 transform-style-3d ${
          hovered ? "rotate-y-180" : ""
        }`}
      >
        {/* ─── Front Face ────────────────────────────────────────── */}
        <div className="absolute inset-0 backface-hidden border border-outline-variant p-stack-md bg-surface-container-lowest flex flex-col transition-colors duration-500 group-hover:border-primary">
          <div className="flex justify-between items-start mb-stack-md flex-shrink-0">
            {/* ID Tag */}
            <span className="font-mono text-label-sm text-secondary tracking-widest uppercase bg-surface-container px-2 py-1 rounded border border-outline-variant">
              {module.moduleId}
            </span>
            {/* Version Tag */}
            <span className="font-mono text-label-sm text-on-surface-variant tracking-wider">
              {module.version}
            </span>
          </div>

          {/* Icon frame */}
          <div className="mb-stack-sm h-14 w-14 flex items-center justify-center border border-outline-variant bg-surface-container-lowest p-2 transition-colors duration-300 group-hover:border-primary">
            <Icon className="w-8 h-8 text-secondary group-hover:text-primary transition-colors duration-300" />
          </div>

          {/* Title */}
          <h3 className="font-title-lg text-title-lg text-primary mb-stack-xs flex-shrink-0">
            {t(`modules.${module.moduleId}.title`)}
          </h3>

          {/* Description */}
          <p className="font-body-md text-body-md text-on-surface-variant flex-grow line-clamp-3">
            {t(`modules.${module.moduleId}.description`)}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-stack-sm mb-stack-sm flex-shrink-0">
            {module.tags.map((tag, idx) => (
              <span
                key={idx}
                className="font-label-sm text-label-sm text-secondary bg-surface-dim px-2 py-1 rounded-sm"
              >
                {/* Translating tags if they exist in a namespace, otherwise raw tag */}
                {tag}
              </span>
            ))}
          </div>

          {/* Action Area */}
          <div className="pt-stack-sm mt-auto border-t border-outline-variant flex-shrink-0">
            <Button
              variant="ghost"
              className="px-0 hover:bg-transparent text-primary group/btn w-fit"
            >
              <span className="font-label-sm text-label-sm uppercase tracking-wider">
                {t('modules.explore')}
              </span>
              <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>

        {/* ─── Back Face (Mockup) ─────────────────────────────────── */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 border border-primary bg-inverse-surface shadow-lg overflow-hidden flex flex-col pointer-events-none">
          {renderMockup()}
        </div>
      </div>
    </div>
  );
}
