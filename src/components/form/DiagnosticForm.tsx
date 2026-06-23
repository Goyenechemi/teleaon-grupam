import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ProgressBar } from "./ProgressBar";
import { FormStep1 } from "./FormStep1";
import { FormStep2 } from "./FormStep2";
import { FormStep3 } from "./FormStep3";
import type { FormData, FormStep } from "@/types/form";
import { BookingSection } from "@/components/sections/BookingSection";

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
  const [showBooking, setShowBooking] = useState(false);

  // ── Handlers ─────────────────────────────────────────────────
  const handleFieldChange = (
    field: keyof FormData,
    value: string | string[]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const goToStep = (step: FormStep) => setCurrentStep(step);

  const handleSubmit = () => {
    setShowBooking(true);
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
      <div className="relative min-h-[500px] reveal rounded-[48px] bg-surface-container-lowest/80 backdrop-blur-2xl border border-outline-variant/50 overflow-hidden shadow-[0_0_80px_-15px_rgba(255,218,215,0.1)] p-8 md:p-12 mt-8">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_70%_30%,_rgba(203,233,217,0.15)_0%,_transparent_60%)] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_30%_70%,_rgba(255,218,215,0.15)_0%,_transparent_60%)] pointer-events-none" />
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

      {showBooking && (
        <BookingSection
          name={formData.name}
          email={formData.email}
          company={formData.company}
        />
      )}

    </div>
  );
}
