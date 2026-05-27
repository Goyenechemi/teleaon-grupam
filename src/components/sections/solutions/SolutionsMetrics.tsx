import { useEffect, useRef, useState } from "react";

// ─── Metric definition ────────────────────────────────────────
interface Metric {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const METRICS: Metric[] = [
  {
    prefix: "+",
    value: 300,
    suffix: "%",
    label: "Efficiency Gain",
    description: "Average operational efficiency improvement across deployed modules.",
  },
  {
    prefix: "-",
    value: 40,
    suffix: "hrs",
    label: "Weekly Time Saved",
    description: "Hours recovered per week through end-to-end workflow automation.",
  },
  {
    value: 98.5,
    suffix: "%",
    label: "Uptime SLA",
    description: "Guaranteed system availability backed by enterprise-grade infrastructure.",
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
        {metric.label}
      </span>
      <p className="font-body-md text-body-md text-on-surface-variant">
        {metric.description}
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
      className="w-full py-stack-lg bg-surface-container border-t border-b border-outline-variant"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        {/* Section label */}
        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-widest block mb-stack-md">
          Proven Impact
        </span>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {METRICS.map((m) => (
            <MetricItem key={m.label} metric={m} animate={animate} />
          ))}
        </div>
      </div>
    </section>
  );
}
