import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

// ─── Metric definition ────────────────────────────────────────
interface Metric {
  value: number;
  suffix: string;
  prefix?: string;
  translationKey: string;
}

const METRICS: Metric[] = [
  {
    prefix: "+",
    value: 300,
    suffix: "%",
    translationKey: "metrics.item1",
  },
  {
    prefix: "-",
    value: 40,
    suffix: "hrs",
    translationKey: "metrics.item2",
  },
  {
    value: 98.5,
    suffix: "%",
    translationKey: "metrics.item3",
  },
];

// ─── CountUp hook ─────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(parseFloat((target * eased).toFixed(1)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [target, duration, start]);

  return count;
}

// ─── MetricItem ───────────────────────────────────────────────
function MetricItem({ metric, animate }: { metric: Metric; animate: boolean }) {
  const { t } = useTranslation();
  const count = useCountUp(metric.value, 1800, animate);

  const display =
    metric.value % 1 === 0
      ? `${metric.prefix ?? ""}${Math.round(count)}${metric.suffix}`
      : `${metric.prefix ?? ""}${count.toFixed(1)}${metric.suffix}`;

  return (
    <div className="flex flex-col border-t border-outline-variant pt-stack-sm">
      <span className="font-display-lg-mobile text-display-lg-mobile text-primary mb-2 tabular-nums">
        {display}
      </span>
      <span className="font-headline-md text-headline-md text-on-surface mb-1">
        {t(`${metric.translationKey}.label`)}
      </span>
      <p className="font-body-md text-body-md text-on-surface-variant text-justify">
        {t(`${metric.translationKey}.description`)}
      </p>
    </div>
  );
}

/**
 * SolutionsMetrics
 *
 * Three-column ROI metrics section with count-up animation
 * triggered when the section scrolls into view.
 */
export function SolutionsMetrics() {
  const { t } = useTranslation();
  const [animate, setAnimate] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full pt-stack-lg pb-12 bg-surface-container border-t border-outline-variant"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section label */}
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-stack-md">
          {t("metrics.badge")}
        </span>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {METRICS.map((m) => (
            <MetricItem key={m.translationKey} metric={m} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
