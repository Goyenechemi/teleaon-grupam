import { useEffect, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, ArrowRight } from "lucide-react";
import type { SolutionModule } from "@/data/solutionModules";

interface SolutionModalProps {
  module: SolutionModule;
  open: boolean;
  onClose: () => void;
}

/**
 * SolutionModal
 *
 * Full-screen modal that opens with a cinematic clip-path + scale
 * animation. Displays the module's video at the top and a rich
 * case-study description below. Uses the native <dialog> element
 * for built-in focus trapping and Escape-to-close accessibility.
 */
export function SolutionModal({ module, open, onClose }: SolutionModalProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const Icon = module.icon;

  // ── Open / Close logic ──────────────────────────────────────
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open) {
      dialog.showModal();
      // Small delay to let the browser paint so the animation fires
      requestAnimationFrame(() => {
        dialog.classList.add("modal-visible");
      });
      // Auto-play video
      videoRef.current?.play().catch(() => {});
    } else {
      dialog.classList.remove("modal-visible");
      videoRef.current?.pause();
      // Wait for the exit animation before closing
      const timer = setTimeout(() => {
        dialog.close();
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // ── Handle native dialog close (Escape key) ────────────────
  const handleCancel = useCallback(
    (e: React.SyntheticEvent<HTMLDialogElement>) => {
      e.preventDefault();
      onClose();
    },
    [onClose],
  );

  // ── Click on backdrop closes modal ─────────────────────────
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDialogElement>) => {
      if (e.target === dialogRef.current) {
        onClose();
      }
    },
    [onClose],
  );

  // ── CTA → navigate to form ────────────────────────────────
  const handleCTA = () => {
    onClose();
    navigate("/#diagnostic");
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleBackdropClick}
      className="solution-modal"
      aria-label={t(`modules.${module.moduleId}.title`)}
    >
      {/* ─── Inner Panel (stops backdrop click propagation) ──── */}
      <div
        className="solution-modal__panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Header ─────────────────────────────────────────── */}
        <header className="solution-modal__header">
          <div className="solution-modal__header-left">
            <div className="solution-modal__icon-frame">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="solution-modal__title">
                {t(`modules.${module.moduleId}.title`)}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="solution-modal__close-btn"
            aria-label={t("modules.modalClose")}
          >
            <X className="w-5 h-5" />
          </button>
        </header>

        {/* ── Video ──────────────────────────────────────────── */}
        <div className="solution-modal__video-wrapper">
          <video
            ref={videoRef}
            src={module.videoSrc}
            controls
            muted
            playsInline
            preload="metadata"
            className="solution-modal__video"
          />
        </div>

        {/* ── Body ───────────────────────────────────────────── */}
        <div className="solution-modal__body">
          <p className="solution-modal__description">
            {t(`modules.${module.moduleId}.videoDescription`)}
          </p>

          {/* Tags */}
          <div className="solution-modal__tags">
            {module.tags.map((tag, idx) => (
              <span key={idx} className="solution-modal__tag">
                {tag}
              </span>
            ))}
          </div>

          {/* CTA */}
          <div className="solution-modal__cta-area">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCTA}
              className="group/cta"
            >
              <span>{t("modules.modalCta")}</span>
              <ArrowRight className="w-4 h-4 ml-2 transform group-hover/cta:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
