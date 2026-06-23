import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Clock, Play } from "lucide-react";
import type { SolutionModule } from "@/data/solutionModules";
import { SolutionModal } from "./SolutionModal";

interface SolutionCardProps {
  module: SolutionModule;
  index: number;
}

/**
 * SolutionCard
 *
 * Modern organic card with:
 * - Soft gradient glow blob that drifts on hover
 * - Prominent circular icon with gradient fill
 * - Clean typography with generous spacing
 * - Smooth, fluid hover state with elevation
 * - No grid lines, no diagonal lines, no boxy zones
 */
export function SolutionCard({ module, index }: SolutionCardProps) {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const Icon = module.icon;
  const hasVideo = Boolean(module.videoSrc);

  return (
    <>
      <article
        className="sc"
        style={{ "--i": index } as React.CSSProperties}
        data-has-video={hasVideo}
      >
        {/* Soft ambient glow — organic blob, not a grid */}
        <div className="sc__glow" aria-hidden="true" />
        <div className="sc__glow sc__glow--secondary" aria-hidden="true" />

        {/* Icon — large, circular, gradient-filled */}
        <div className="sc__icon-ring">
          <Icon className="sc__icon" strokeWidth={1.5} />
        </div>

        {/* Title */}
        <h3 className="sc__title">
          {t(`modules.${module.moduleId}.title`)}
        </h3>

        {/* Description */}
        <p className="sc__desc">
          {t(`modules.${module.moduleId}.description`)}
        </p>

        {/* Tags */}
        <div className="sc__tags">
          {module.tags.map((tag, idx) => (
            <span key={idx} className="sc__tag">{tag}</span>
          ))}
        </div>

        {/* Action */}
        <div className="sc__action">
          {hasVideo ? (
            <button
              className="sc__cta"
              onClick={() => setModalOpen(true)}
            >
              <span className="sc__cta-dot">
                <Play className="sc__cta-play" />
              </span>
              <span className="sc__cta-label">
                {t("modules.explore")}
              </span>
              <ArrowRight className="sc__cta-arrow" />
            </button>
          ) : (
            <div className="sc__soon">
              <Clock className="sc__soon-icon" />
              <span className="sc__soon-label">
                {t("modules.comingSoon")}
              </span>
            </div>
          )}
        </div>
      </article>

      {/* Modal */}
      {hasVideo && (
        <SolutionModal
          module={module}
          open={modalOpen}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
