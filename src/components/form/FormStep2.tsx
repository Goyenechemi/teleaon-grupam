import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChipGroup } from "./ChipGroup";
import type { FormData } from "@/types/form";
import { useTranslation } from "react-i18next";

// ─── Option Lists ─────────────────────────────────────────────
const SCALE_OPTIONS = ["Solo yo", "2 a 5", "5 a 20", "Más de 20"];

const TOOLS_OPTIONS = [
  "Google Sheets",
  "Excel",
  "Gmail/Outlook",
  "WhatsApp",
  "CRM",
  "ERP/SAP",
  "Slack/Teams",
  "Google Drive",
  "Otro",
];

const YES_NO_OPTIONS = ["Sí", "No"];

// ─── Props ────────────────────────────────────────────────────
interface FormStep2Props {
  data: Pick<FormData, "scale" | "tools" | "toolsOther" | "internalTools" | "internalToolsDetails" | "sensitiveData">;
  onChange: (field: keyof FormData, value: string | string[]) => void;
  onNext: () => void;
  onPrev: () => void;
  isActive: boolean;
}

/**
 * Step 2 — Alcance Operativo y Herramientas
 * Collects: number of users, current tools (multi-select),
 * internal tools usage, and sensitive data handling.
 */
export function FormStep2({ data, onChange, onNext, onPrev, isActive }: FormStep2Props) {
  const { t } = useTranslation();

  return (
    <div id="step-2" className={`step-content ${isActive ? "active" : ""}`}>
      <h3 className="font-headline-md text-headline-md text-on-background mb-6">
        {t('form.step2.title')}
      </h3>

      <ChipGroup
        label={t('form.step2.scale')}
        options={SCALE_OPTIONS}
        value={data.scale}
        onChange={(v) => onChange("scale", v)}
      />

      <ChipGroup
        label={t('form.step2.tools')}
        options={TOOLS_OPTIONS}
        value={data.tools}
        onChange={(v) => onChange("tools", v)}
        multi
      />

      {data.tools.includes("Otro") && (
        <div className="mb-8 mt-[-1rem] animate-[fade-in_0.3s_ease-out]">
          <Input
            value={data.toolsOther || ""}
            onChange={(e) => onChange("toolsOther", e.target.value)}
            placeholder={t("form.otherPlaceholder")}
          />
        </div>
      )}

      <ChipGroup
        label={t('form.step2.internalTools')}
        options={YES_NO_OPTIONS}
        value={data.internalTools}
        onChange={(v) => onChange("internalTools", v)}
      />

      {data.internalTools === "Sí" && (
        <div className="mb-8 mt-[-1rem] animate-[fade-in_0.3s_ease-out]">
          <Input
            value={data.internalToolsDetails || ""}
            onChange={(e) => onChange("internalToolsDetails", e.target.value)}
            placeholder={t("form.internalToolsPlaceholder")}
          />
        </div>
      )}

      <ChipGroup
        label={t('form.step2.sensitiveData')}
        options={YES_NO_OPTIONS}
        value={data.sensitiveData}
        onChange={(v) => onChange("sensitiveData", v)}
      />

      <div className="flex justify-between mt-12 border-t border-outline pt-6">
        <Button variant="ghost" onClick={onPrev}>
          {t('form.prev')}
        </Button>
        <Button variant="outline" onClick={onNext}>
          {t('form.next')}
        </Button>
      </div>
    </div>
  );
}
