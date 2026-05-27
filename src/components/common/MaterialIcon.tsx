import { cn } from "@/lib/utils";

interface MaterialIconProps {
  icon: string;
  className?: string;
}

/**
 * Wrapper for Google Material Symbols Outlined icons.
 * Uses the ligature-based rendering: the icon name is the text content.
 */
export function MaterialIcon({ icon, className }: MaterialIconProps) {
  return (
    <span className={cn("material-symbols-outlined", className)}>{icon}</span>
  );
}
