import { useTranslation } from "react-i18next";
import { Globe, Code2, ShieldCheck } from "lucide-react";

export function AboutGlobalTalent() {
  const { t } = useTranslation();

  return (
    <section className="w-full relative z-10 py-24 bg-surface-container-lowest overflow-hidden">
      {/* Immersive radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,218,215,0.1),_transparent_60%)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center reveal relative z-10">
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-primary/20 to-surface-container border border-primary/30 flex items-center justify-center mb-8 shadow-[0_0_40px_rgba(255,218,215,0.4)]">
          <Globe className="w-10 h-10 text-primary animate-spin-slow" strokeWidth={1.5} />
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container border border-outline-variant text-secondary font-label-md uppercase tracking-wider mb-6">
          {t("aboutPage.globalTalent.badge")}
        </div>

        <h2 className="font-headline-md text-3xl md:text-5xl text-on-background mb-8 leading-tight">
          {t("aboutPage.globalTalent.title")}
        </h2>

        <p className="font-body-lg text-lg md:text-xl text-secondary max-w-3xl leading-relaxed text-justify mb-12">
          {t("aboutPage.globalTalent.description")}
        </p>

        {/* Feature row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl mx-auto">
          <div className="flex flex-col items-center p-6 rounded-2xl bg-surface-container/50 border border-outline-variant/30">
            <Code2 className="w-8 h-8 text-secondary mb-4" />
            <span className="font-title-md text-on-background">In-house Engineering</span>
          </div>
          <div className="flex flex-col items-center p-6 rounded-2xl bg-surface-container/50 border border-outline-variant/30">
            <ShieldCheck className="w-8 h-8 text-secondary mb-4" />
            <span className="font-title-md text-on-background">Enterprise Standards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
