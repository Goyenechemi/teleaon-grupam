import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { FormData } from "@/types/form";
import { useTranslation } from "react-i18next";

// ─── Option Lists ─────────────────────────────────────────────
const GOAL_OPTIONS = [
  "Flujo lineal",
  "Flujo con lógica condicional",
  "Agente con IA",
  "Flujo multi-agente",
  "Todavía no sé",
];

// ─── Props ────────────────────────────────────────────────────
interface FormStep3Props {
  data: Pick<
    FormData,
    "goal" | "name" | "company" | "email" | "whatsapp"
  >;
  onChange: (field: keyof FormData, value: string | string[]) => void;
  onPrev: () => void;
  onSubmit: () => void;
  isActive: boolean;
}

/**
 * Step 3 — Implementación + Contacto
 * Collects: flow type selection and contact information.
 */
export function FormStep3({ data, onChange, onPrev, onSubmit, isActive }: FormStep3Props) {
  const { t } = useTranslation();

  return (
    <div id="step-3" className={`step-content ${isActive ? "active" : ""}`}>
      <h3 className="font-headline-md text-headline-md text-on-background mb-6">
        {t('form.step3.title')}
      </h3>

      {/* Flow type selection */}
      <div className="mb-8">
        <Label className="mb-4">{t('form.step3.goal')}</Label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {GOAL_OPTIONS.map((option) => (
            <button
              key={option}
              type="button"
              role="option"
              aria-selected={data.goal === option}
              onClick={() => onChange("goal", option)}
              className="chip border border-outline px-4 py-2 font-body-md text-sm text-left hover:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {t(`form.options.${option}`, { defaultValue: option })}
            </button>
          ))}
        </div>
      </div>

      {/* Contact section */}
      <h3 className="font-headline-md text-headline-md text-on-background mb-8">
        {t('form.step3.contactTitle')}
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Nombre */}
        <div className="input-wrapper">
          <Label htmlFor="contact-name">{t('form.step3.name')}</Label>
          <Input
            id="contact-name"
            type="text"
            placeholder={t('form.step3.name')}
            value={data.name}
            onChange={(e) => onChange("name", e.target.value)}
          />
        </div>

        {/* Empresa */}
        <div className="input-wrapper">
          <Label htmlFor="contact-company">{t('form.step3.company')}</Label>
          <Input
            id="contact-company"
            type="text"
            placeholder={t('form.step3.company')}
            value={data.company}
            onChange={(e) => onChange("company", e.target.value)}
          />
        </div>

        {/* Email */}
        <div className="input-wrapper">
          <Label htmlFor="contact-email">{t('form.step3.email')}</Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="correo@empresa.com"
            value={data.email}
            onChange={(e) => onChange("email", e.target.value)}
          />
        </div>

        {/* WhatsApp */}
        <div className="input-wrapper">
          <Label htmlFor="contact-whatsapp">{t('form.step3.whatsapp')}</Label>
          <Input
            id="contact-whatsapp"
            type="tel"
            placeholder="+1 234 567 8900"
            value={data.whatsapp}
            onChange={(e) => onChange("whatsapp", e.target.value)}
          />
        </div>
      </div>

      <div className="flex justify-between mt-12 border-t border-outline pt-6">
        <Button variant="ghost" onClick={onPrev}>
          {t('form.prev')}
        </Button>
        <Button variant="primary" size="default" onClick={onSubmit}>
          {t('form.submit')}
        </Button>
      </div>
    </div>
  );
}
