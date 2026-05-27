import { DiagnosticForm } from "@/components/form/DiagnosticForm";

/**
 * DiagnosticFormSection
 * Full-height section wrapping the DiagnosticForm.
 * Provides the anchor id="diagnostic-form" used by smooth-scroll CTAs.
 */
export function DiagnosticFormSection() {
  return (
    <section
      id="diagnostic-form"
      className="px-margin-mobile md:px-margin-desktop py-stack-lg min-h-screen"
    >
      <DiagnosticForm />
    </section>
  );
}
