import { HeroSection } from "@/components/sections/HeroSection";
import { SuccessStorySection } from "@/components/sections/SuccessStorySection";
import { DiagnosticFormSection } from "@/components/sections/DiagnosticFormSection";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

/**
 * HomePage
 * Assembles the main landing page sections:
 * Hero → Success Story (Lixita) → Diagnostic Form
 */
export function HomePage() {
  useRevealAnimation();

  return (
    <main className="w-full max-w-container-max mx-auto relative z-10">
      <HeroSection />
      <SuccessStorySection />
      <DiagnosticFormSection />
    </main>
  );
}
