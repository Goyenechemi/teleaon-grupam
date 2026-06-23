import { useTranslation } from "react-i18next";
import { Search, BrainCircuit, Rocket, RefreshCw } from "lucide-react";

export function AboutTimeline() {
  const { t } = useTranslation();

  const steps = t("aboutPage.timeline.steps", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const icons = [Search, BrainCircuit, Rocket, RefreshCw];

  return (
    <section className="w-full relative z-10 py-24 bg-surface-container-lowest">
      <div className="max-w-3xl mx-auto px-6 reveal">
        <h2 className="font-headline-md text-3xl md:text-4xl text-on-background text-center mb-16">
          {t("aboutPage.timeline.title")}
        </h2>

        <div className="relative border-l-2 border-outline-variant/30 ml-8 md:ml-12 space-y-16">
          {steps.map((step, idx) => {
            const Icon = icons[idx];
            return (
              <div key={idx} className="relative pl-12 group reveal">
                {/* Glowing Node */}
                <div className="absolute -left-[25px] top-0 w-12 h-12 rounded-full bg-surface-container-lowest border-2 border-outline-variant group-hover:border-primary flex items-center justify-center transition-colors duration-500 z-10">
                  <Icon className="w-5 h-5 text-secondary group-hover:text-primary transition-colors duration-500" />
                  {/* Outer Glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                <div className="bg-surface-container/50 border border-outline-variant/30 rounded-2xl p-6 group-hover:border-primary/30 transition-colors duration-500 group-hover:-translate-y-1 transform">
                  <h3 className="font-headline-sm text-xl text-on-background mb-3 group-hover:text-primary transition-colors duration-300">
                    <span className="text-secondary font-mono text-sm mr-2 opacity-50">0{idx + 1}.</span>
                    {step.title}
                  </h3>
                  <p className="font-body-md text-secondary leading-relaxed text-justify">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
