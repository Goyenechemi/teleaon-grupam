import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { ArrowLeft, Sparkles } from "lucide-react";
import { SEO } from "@/components/common/SEO";
import { Button } from "@/components/ui/button";
import { useRevealAnimation } from "@/hooks/useRevealAnimation";

export function ArticlePage() {
  useRevealAnimation();
  const { articleId } = useParams();
  const { t } = useTranslation();
  const navigate = useNavigate();

  // If the article title matches the key, it means translation was not found.
  const titleKey = `insightsPage.articles.${articleId}.title`;
  const articleTitle = t(titleKey);

  useEffect(() => {
    if (articleTitle === titleKey) {
      navigate("/insights");
    }
  }, [articleTitle, titleKey, navigate]);

  if (articleTitle === titleKey) {
    return null; // Will redirect
  }

  const excerpt = t(`insightsPage.articles.${articleId}.excerpt`);
  const tag = t(`insightsPage.articles.${articleId}.tag`);
  const content = t(`insightsPage.articles.${articleId}.content`, { returnObjects: true }) as string[];

  const handleGetStarted = () => {
    navigate("/");
    setTimeout(() => {
      document
        .getElementById("diagnostic-form")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <main className="w-full max-w-container-max mx-auto relative z-10 px-margin-mobile md:px-margin-desktop py-24 md:py-32 flex flex-col items-center">
      <SEO 
        title={articleTitle} 
        description={excerpt} 
        url={`/insights/${articleId}`} 
      />
      
      {/* Back to Insights */}
      <div className="w-full max-w-3xl mb-12">
        <button 
          onClick={() => navigate("/insights")}
          className="flex items-center gap-2 text-secondary hover:text-primary transition-colors font-label-md uppercase tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("insightsPage.title", "Insights")}
        </button>
      </div>

      {/* Article Header */}
      <article className="w-full max-w-3xl reveal">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-label-md uppercase tracking-wider mb-8">
          <Sparkles className="w-4 h-4" />
          {tag}
        </div>
        
        <h1 className="font-headline-lg text-4xl md:text-5xl lg:text-6xl text-on-background tracking-tight mb-8 leading-tight">
          {articleTitle}
        </h1>
        
        <p className="font-body-lg text-xl md:text-2xl text-secondary mb-16 leading-relaxed border-l-4 border-primary/20 pl-6 py-2">
          {excerpt}
        </p>

        {/* Article Content */}
        <div className="flex flex-col gap-8 font-body-md text-lg md:text-xl text-on-surface-variant leading-relaxed mb-24">
          {content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* CTA Section */}
      <section className="reveal text-center max-w-3xl w-full py-16 px-8 rounded-[40px] bg-surface-container border border-outline-variant/50 relative overflow-hidden">
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
