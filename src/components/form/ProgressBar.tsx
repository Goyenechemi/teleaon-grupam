import { cn } from "@/lib/utils";
import type { FormStep } from "@/types/form";

interface ProgressBarProps {
  currentStep: FormStep;
}

const STEPS: FormStep[] = [1, 2, 3];

const progressWidths: Record<FormStep, string> = {
  1: "33.33%",
  2: "66.66%",
  3: "100%",
};

/**
 * Horizontal progress bar with three step-indicator dots.
 * The filled bar width and dot states are driven by `currentStep`.
 * The active dot uses the `step-dot-active` CSS class for a pulse animation.
 */
export function ProgressBar({ currentStep }: ProgressBarProps) {
  return (
    <div className="reveal w-full h-[1px] bg-outline mb-12 relative">
      {/* Filled track */}
      <div
        id="progress-indicator"
        className="absolute top-0 left-0 h-full bg-primary transition-all duration-700"
        style={{ width: progressWidths[currentStep] }}
      />

      {/* Step dots */}
      <div className="absolute top-0 left-0 w-full flex justify-between transform -translate-y-1/2 px-2">
        {STEPS.map((step) => {
          const isPast = step <= currentStep;
          const isActive = step === currentStep;
          return (
            <div
              key={step}
              data-step={step}
              className={cn(
                "w-2 h-2 transition-colors duration-500",
                isPast ? "bg-primary" : "bg-outline",
                isActive && "step-dot-active"
              )}
            />
          );
        })}
      </div>
    </div>
  );
}
