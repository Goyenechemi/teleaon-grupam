import { cn } from "@/lib/utils";

interface ChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

/**
 * A single selectable chip. Handles both single-select and multi-select
 * modes by delegating the selection logic to the parent ChipGroup.
 * Uses `aria-selected` for accessibility, and the CSS `.chip` class
 * for micro-interaction animations.
 */
export function Chip({ label, selected, onClick, className }: ChipProps) {
  return (
    <button
      type="button"
      role="option"
      aria-selected={selected}
      onClick={onClick}
      className={cn(
        "chip border border-outline px-4 py-2",
        "font-body-md text-sm hover:border-primary",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
        className
      )}
    >
      {label}
    </button>
  );
}
