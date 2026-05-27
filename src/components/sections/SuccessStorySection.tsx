import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useState } from "react";

/**
 * VideoPlaceholder
 * Reusable video-card placeholder with play button and hover label.
 */
interface VideoPlaceholderProps {
  label: string;
  className?: string;
  iconSize?: string;
  videoSrc?: string;
}

function VideoPlaceholder({
  label,
  className = "",
  iconSize = "text-4xl",
  videoSrc,
}: VideoPlaceholderProps) {
  const [hasError, setHasError] = useState(false);

  if (videoSrc && !hasError) {
    return (
      <div className={`relative overflow-hidden bg-black ${className}`}>
        <video 
          src={videoSrc}
          controls
          preload="metadata"
          className="w-full h-full object-cover"
          onError={() => setHasError(true)}
        />
      </div>
    );
  }

  return (
    <div
      className={`bg-surface-container border border-outline relative flex items-center justify-center group cursor-pointer overflow-hidden ${className}`}
    >
      <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
      <Play className={`${iconSize} text-primary z-10 transform group-hover:scale-110 transition-transform duration-500`} />
      <div className="absolute bottom-4 left-4 font-label-sm text-label-sm text-secondary uppercase bg-background px-2 py-1 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        {label}
      </div>
    </div>
  );
}

/**
 * SuccessStorySection — "Caso de Éxito: Lixita"
 * Layout:
 * - Section header with title + metric badges
 * - 8-col main video + 4-col sidebar with description and before/after clips
 */
export function SuccessStorySection() {
  const { t } = useTranslation();

  return (
    <section className="px-margin-mobile md:px-margin-desktop py-stack-lg border-b border-outline">
      {/* Header row */}
      <div className="mb-stack-md flex justify-between items-end reveal">
        <div>
          <h2 className="font-label-sm text-label-sm text-secondary uppercase mb-2">
            {t('lixita.badge')}
          </h2>
          <h3 className="font-headline-lg text-headline-lg text-on-background">
            {t('lixita.title')}
          </h3>
        </div>

        {/* Metric badges */}
        <div className="hidden md:flex gap-4">
          <span className="font-label-sm text-label-sm border border-outline px-3 py-1 text-secondary hover:border-primary transition-colors cursor-default">
            {t('lixita.stat1')}
          </span>
          <span className="font-label-sm text-label-sm border border-outline px-3 py-1 text-secondary hover:border-primary transition-colors cursor-default">
            {t('lixita.stat2')}
          </span>
        </div>
      </div>

      {/* Content grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        {/* Main video */}
        <div
          className="reveal md:col-span-8"
          style={{ transitionDelay: "0.1s" }}
        >
          <VideoPlaceholder
            label={t('lixita.mainVideoLabel')}
            className="aspect-video"
            iconSize="text-4xl"
            videoSrc="/videos/lixita-main.mp4"
          />
        </div>

        {/* Sidebar */}
        <div className="md:col-span-4 flex flex-col justify-between">
          {/* Description */}
          <div className="reveal" style={{ transitionDelay: "0.2s" }}>
            <p className="font-body-md text-body-md text-secondary mb-stack-sm">
              {t('lixita.description')}
            </p>
          </div>

          {/* Before / After thumbnails */}
          <div
            className="grid grid-cols-2 gap-4 mt-8 md:mt-0 reveal"
            style={{ transitionDelay: "0.3s" }}
          >
            <VideoPlaceholder
              label={t('lixita.before')}
              className="aspect-square"
              iconSize="text-2xl"
              videoSrc="/videos/lixita-before.mp4"
            />
            <VideoPlaceholder
              label={t('lixita.after')}
              className="aspect-square"
              iconSize="text-2xl"
              videoSrc="/videos/lixita-after.mp4"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
