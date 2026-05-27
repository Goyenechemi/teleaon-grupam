import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "./ProgressBar";
import { FormStep1 } from "./FormStep1";
import { FormStep2 } from "./FormStep2";
import { FormStep3 } from "./FormStep3";
import type { FormData, FormStep } from "@/types/form";

// ─── Initial State ────────────────────────────────────────────
const INITIAL_FORM_DATA: FormData = {
  area: "",
  areaOther: "",
  status: "",
  frequency: "Una vez al día", // pre-selected as in original HTML
  scale: "",
  tools: [],
  toolsOther: "",
  internalTools: "",
  internalToolsDetails: "",
  sensitiveData: "",
  goal: "Flujo multi-agente", // pre-selected as in original HTML
  name: "",
  company: "",
  email: "",
  whatsapp: "",
};

/**
 * DiagnosticForm
 * Orchestrates the three-step diagnostic form:
 * - Manages current step and form data state
 * - Renders ProgressBar and the active FormStep
 * - Handles field changes, step navigation, and final submission
 */
export function DiagnosticForm() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<FormStep>(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);

  // ── Handlers ─────────────────────────────────────────────────
  const handleFieldChange = (
    field: keyof FormData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goToStep = (step: FormStep) => setCurrentStep(step);

  const handleSubmit = () => {
    // TODO: wire up to a real API / email service
    console.log("Form submitted:", formData);
    alert("¡Propuesta solicitada! Nos pondremos en contacto pronto.");
  };

  // ── Render ────────────────────────────────────────────────────
  return (
    <div className="max-w-3xl mx-auto">
      {/* Section heading */}
      <div className="mb-stack-md text-center reveal">
        <h2 className="font-headline-lg text-headline-lg text-on-background mb-4">
          {t('form.title')}
        </h2>
        <p className="font-body-md text-body-md text-secondary">
          {t('form.subtitle')}
        </p>
      </div>

      {/* Progress indicator */}
      <ProgressBar currentStep={currentStep} />

      {/* Form steps container */}
      <div className="relative min-h-[500px] reveal">
        <FormStep1
          data={formData}
          onChange={handleFieldChange}
          onNext={() => goToStep(2)}
          isActive={currentStep === 1}
        />
        <FormStep2
          data={formData}
          onChange={handleFieldChange}
          onNext={() => goToStep(3)}
          onPrev={() => goToStep(1)}
          isActive={currentStep === 2}
        />
        <FormStep3
          data={formData}
          onChange={handleFieldChange}
          onPrev={() => goToStep(2)}
          onSubmit={handleSubmit}
          isActive={currentStep === 3}
        />
      </div>
    </div>
  );
}
