import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChipGroup } from "./ChipGroup";
import type { FormData } from "@/types/form";
import { useTranslation } from "react-i18next";

// ─── Option Lists ─────────────────────────────────────────────
const AREA_OPTIONS = [
  "Ventas",
  "Marketing",
  "Operaciones",
  "RRHH",
  "Finanzas",
  "Atención al cliente",
  "Otra",
];

const STATUS_OPTIONS = [
  "Totalmente manual",
  "Hay herramientas pero sin integración",
  "Tenemos automatizaciones pero queremos mejorarlas",
  "Automatizado listo para alojar",
];

const FREQUENCY_OPTIONS = [
  "Varias veces al día",
  "Una vez al día",
  "Semanal",
  "Mensual",
  "Bajo demanda",
];

// ─── Props ────────────────────────────────────────────────────
interface FormStep1Props {
  data: Pick<FormData, "area" | "areaOther" | "status" | "frequency">;
  onChange: (field: keyof FormData, value: string | string[]) => void;
  onNext: () => void;
  isActive: boolean;
}

/**
 * Step 1 — Fase de Diagnóstico
 * Collects: process area, current automation status, execution frequency.
 */
export function FormStep1({ data, onChange, onNext, isActive }: FormStep1Props) {
  const { t } = useTranslation();

  return (
    <div id="step-1" className={`step-content ${isActive ? "active" : ""}`}>
      <h3 className="font-headline-md text-headline-md text-on-background mb-6">
        {t('form.step1.title')}
      </h3>

      <ChipGroup
        label={t('form.step1.area')}
        options={AREA_OPTIONS}
        value={data.area}
        onChange={(v) => onChange("area", v)}
      />

      {data.area === "Otra" && (
        <div className="mb-8 mt-[-1rem] animate-[fade-in_0.3s_ease-out]">
          <Input
            value={data.areaOther || ""}
            onChange={(e) => onChange("areaOther", e.target.value)}
            placeholder={t("form.otherPlaceholder")}
          />
        </div>
      )}

      <ChipGroup
        label={t('form.step1.status')}
        options={STATUS_OPTIONS}
        value={data.status}
        onChange={(v) => onChange("status", v)}
      />

      <ChipGroup
        label={t('form.step1.frequency')}
        options={FREQUENCY_OPTIONS}
        value={data.frequency}
        onChange={(v) => onChange("frequency", v)}
      />

      <div className="flex justify-end mt-12 border-t border-outline pt-6">
        <Button variant="outline" onClick={onNext}>
          {t('form.next')}
        </Button>
      </div>
    </div>
  );
}
