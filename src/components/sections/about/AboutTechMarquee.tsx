import { useTranslation } from "react-i18next";
import { Database, Cloud, Network, Bot, Cpu, Layers } from "lucide-react";

export function AboutTechMarquee() {
  const { t } = useTranslation();

  const technologies = [
    { name: "OpenAI", icon: Bot },
    { name: "Anthropic", icon: Cpu },
    { name: "Salesforce", icon: Network },
    { name: "SAP", icon: Layers },
    { name: "AWS", icon: Cloud },
    { name: "Meta API", icon: Database },
    { name: "HubSpot", icon: Network },
    { name: "PowerBI", icon: Layers },
    { name: "Make", icon: Cpu },
    { name: "Zapier", icon: Network },
  ];

  // Double the array to ensure smooth infinite scrolling
  const marqueeItems = [...technologies, ...technologies];

  return (
    <section className="w-full relative z-10 py-16 overflow-hidden bg-surface-container-lowest border-y border-outline-variant/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(203,233,217,0.1),_transparent_70%)] pointer-events-none" />
      
      <div className="max-w-container-max mx-auto px-6 mb-8 text-center reveal">
        <h2 className="font-label-lg text-primary uppercase tracking-widest">
          {t("aboutPage.marquee.title")}
        </h2>
      </div>

      <div className="relative flex overflow-x-hidden group">
        {/* Left gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-surface-container-lowest to-transparent z-10" />
        
        {/* Marquee Track */}
        <div className="flex space-x-8 animate-marquee group-hover:pause py-4">
          {marqueeItems.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <div 
                key={idx} 
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-surface-container border border-outline-variant/50 shadow-sm backdrop-blur-md hover:border-primary/50 transition-colors cursor-default"
              >
                <Icon className="w-5 h-5 text-secondary" />
                <span className="font-headline-sm text-on-surface whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </div>

        {/* Right gradient mask */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-surface-container-lowest to-transparent z-10" />
      </div>
    </section>
  );
}
