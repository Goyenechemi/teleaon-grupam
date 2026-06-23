import { useTranslation } from "react-i18next";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { AboutBentoCard } from "@/components/sections/about/AboutBentoCard";
import { AboutTechMarquee } from "@/components/sections/about/AboutTechMarquee";
import { AboutTimeline } from "@/components/sections/about/AboutTimeline";
import { AboutGlobalTalent } from "@/components/sections/about/AboutGlobalTalent";

export function AboutPage() {
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

  const bentoCards = t("aboutPage.bentoGrid", { returnObjects: true }) as Array<{
    id: string;
    icon: string;
    title: string;
    description: string;
    className: string;
  }>;

  return (
    <main className="w-full bg-background relative z-10 pt-32 pb-24 md:pb-32 overflow-hidden">
      <SEO 
        title={t("seo.about.title")} 
        description={t("seo.about.description")} 
        keywords={t("seo.about.keywords")} 
        url="/about"
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(203,233,217,0.05),_transparent_70%)] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">
        
        {/* ── Hero Section (SEO H1) ── */}
        <section className="reveal flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-label-md uppercase tracking-wider mb-8">
            <Sparkles className="w-4 h-4" />
            {t("aboutPage.hero.badge")}
          </div>
          
          <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-on-background tracking-tight mb-8">
            {t("aboutPage.hero.title")}
          </h1>
          
          <p className="font-body-lg text-lg md:text-xl text-secondary max-w-3xl leading-relaxed text-justify">
            {t("aboutPage.hero.description")}
          </p>
        </section>

        {/* ── Bento Grid ── */}
        <section className="w-full relative z-10 mb-24">
          <div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            style={{ gridAutoRows: 'minmax(280px, auto)' }}
          >
            {bentoCards.map((card, i) => (
              <AboutBentoCard key={card.id} card={card} index={i} />
            ))}
          </div>
        </section>
      </div>

      {/* ── Full Width Sections ── */}
      <AboutTechMarquee />
      <AboutTimeline />
      <AboutGlobalTalent />

      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-24 flex flex-col items-center">


        {/* ── CTA Section ── */}
        <section className="w-full reveal text-center max-w-3xl mx-auto py-16 px-8 rounded-[40px] bg-surface-container border border-outline-variant/50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,218,215,0.2),_transparent_70%)] pointer-events-none" />
          <h2 className="font-headline-md text-3xl md:text-4xl text-on-background mb-8 relative z-10">
            {t("aboutPage.cta.title")}
          </h2>
          <Button size="lg" variant="primary" className="relative z-10" onClick={handleGetStarted}>
            {t("aboutPage.cta.button")}
          </Button>
        </section>

      </div>
    </main>
  );
}
