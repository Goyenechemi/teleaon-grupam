import { Label } from "@/components/ui/label";
import { Chip } from "./Chip";
import { useTranslation } from "react-i18next";

interface ChipGroupProps {
  /** Accessible label shown above the chip group */
  label: string;
  /** All available option strings */
  options: string[];
  /** Currently selected value(s) */
  value: string | string[];
  /** Called when the selection changes */
  onChange: (value: string | string[]) => void;
  /** If true, multiple chips can be selected simultaneously */
  multi?: boolean;
}

/**
 * A labeled group of selectable chips.
 * - Single-select (default): clicking a chip deselects all others.
 * - Multi-select: clicking toggles each chip independently.
 */
export function ChipGroup({
  label,
  options,
  value,
  onChange,
  multi = false,
}: ChipGroupProps) {
  const { t } = useTranslation();

  const handleClick = (option: string) => {
    if (multi) {
      const current = value as string[];
      if (current.includes(option)) {
        onChange(current.filter((v) => v !== option));
      } else {
        onChange([...current, option]);
      }
    } else {
      onChange(option === value ? "" : option);
    }
  };

  const isSelected = (option: string): boolean => {
    if (multi) return (value as string[]).includes(option);
    return value === option;
  };

  return (
    <div className="mb-8">
      <Label className="mb-4">{label}</Label>
      <div
        role="listbox"
        aria-multiselectable={multi}
        className="flex flex-wrap gap-2"
      >
        {options.map((option) => (
          <Chip
            key={option}
            label={t(`form.options.${option}`, { defaultValue: option })}
            selected={isSelected(option)}
            onClick={() => handleClick(option)}
          />
        ))}
      </div>
    </div>
  );
}
