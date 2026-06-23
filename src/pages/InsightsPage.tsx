import { useTranslation } from "react-i18next";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { BookOpen, Cpu, Layers, ArrowRight, Sparkles } from "lucide-react";
import { SEO } from "@/components/common/SEO";

export function InsightsPage() {
  useRevealAnimation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("diagnostic-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  const insights = [
    {
      id: "art1",
      icon: Cpu,
      colorClass: "from-primary-container/40 to-surface-container border-primary/20",
      iconColor: "text-primary",
      glow: "bg-[radial-gradient(circle_at_30%_30%,_rgba(255,218,215,0.4)_0%,_transparent_60%)]",
    },
    {
      id: "art2",
      icon: Layers,
      colorClass: "from-secondary-container/40 to-surface-container border-secondary/20",
      iconColor: "text-secondary",
      glow: "bg-[radial-gradient(circle_at_70%_70%,_rgba(203,233,217,0.4)_0%,_transparent_60%)]",
    },
    {
      id: "art3",
      icon: BookOpen,
      colorClass: "from-primary/10 to-surface-container border-primary/20",
      iconColor: "text-primary",
      glow: "bg-[radial-gradient(circle_at_50%_20%,_rgba(255,218,215,0.3)_0%,_transparent_60%)]",
    },
  ];

  return (
    <main className="w-full max-w-container-max mx-auto relative z-10 px-margin-desktop py-24 md:py-32 flex flex-col gap-24">
      <SEO 
        title={t("seo.insights.title")} 
        description={t("seo.insights.description")} 
        keywords={t("seo.insights.keywords")}
        url="/insights" 
      />
      
      {/* ── Hero Section (SEO H1) ── */}
      <section className="reveal flex flex-col items-center text-center max-w-4xl mx-auto mt-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-label-md uppercase tracking-wider mb-8">
          <Sparkles className="w-4 h-4" />
          {t("insightsPage.hero.badge")}
        </div>
        
        <h1 className="font-headline-lg text-4xl md:text-6xl text-on-background tracking-tight mb-8">
          {t("insightsPage.hero.title")}
        </h1>
        
        <p className="font-body-lg text-lg md:text-xl text-secondary max-w-3xl leading-relaxed">
          {t("insightsPage.hero.description")}
        </p>
      </section>

      {/* ── Insights Grid ── */}
      <section className="reveal grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {insights.map((insight) => (
          <div 
            key={insight.id}
            onClick={() => navigate(`/insights/${insight.id}`)}
            className={`relative rounded-[32px] md:rounded-[48px] bg-gradient-to-br ${insight.colorClass} border flex flex-col p-8 md:p-10 overflow-hidden group cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-lg`}
          >
            <div className={`absolute inset-0 ${insight.glow} group-hover:scale-110 transition-transform duration-700 pointer-events-none`} />
            
            <div className="relative z-10 mb-8 flex items-center justify-between">
              <span className="font-label-sm text-xs uppercase tracking-wider text-secondary bg-surface-container px-3 py-1 rounded-full border border-outline-variant/50">
                {t(`insightsPage.articles.${insight.id}.tag`)}
              </span>
              <insight.icon className={`w-8 h-8 ${insight.iconColor} opacity-70`} strokeWidth={1.5} />
            </div>

            <h3 className="relative z-10 font-headline-sm text-2xl text-on-background mb-4 group-hover:text-primary transition-colors">
              {t(`insightsPage.articles.${insight.id}.title`)}
            </h3>
            
            <p className="relative z-10 font-body-md text-secondary leading-relaxed mb-12 flex-grow">
              {t(`insightsPage.articles.${insight.id}.excerpt`)}
            </p>

            <div className="relative z-10 flex items-center gap-2 text-primary font-label-md group-hover:gap-4 transition-all mt-auto">
              {t(`insightsPage.articles.${insight.id}.readMore`)}
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        ))}
      </section>

      {/* ── CTA Section ── */}
      <section className="reveal text-center max-w-3xl mx-auto py-16 px-8 rounded-[40px] bg-surface-container border border-outline-variant/50 relative overflow-hidden mt-8">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,218,215,0.2),_transparent_70%)]" />
        <h2 className="font-headline-md text-3xl md:text-4xl text-on-background mb-8 relative z-10">
          {t("insightsPage.cta.title")}
        </h2>
        <Button size="lg" variant="primary" className="relative z-10" onClick={handleGetStarted}>
          {t("insightsPage.cta.button")}
        </Button>
      </section>

    </main>
  );
}
