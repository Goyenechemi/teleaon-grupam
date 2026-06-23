import React from "react";
import { Network, Blocks, Unplug, TrendingUp, Workflow, Sparkles } from "lucide-react";

interface BentoCardData {
  id: string;
  icon: string;
  title: string;
  description: string;
  className?: string;
}

interface AboutBentoCardProps {
  card: BentoCardData;
  index: number;
}

export function AboutBentoCard({ card, index }: AboutBentoCardProps) {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  const getIcon = (name: string) => {
    switch (name) {
      case "Network": return <Network className="w-7 h-7 text-primary animate-float" strokeWidth={1.5} />;
      case "Unplug": return <Unplug className="w-7 h-7 text-error animate-float-delayed" strokeWidth={1.5} />;
      case "Blocks": return <Blocks className="w-7 h-7 text-secondary animate-float" strokeWidth={1.5} />;
      case "TrendingUp": return <TrendingUp className="w-7 h-7 text-primary animate-float" strokeWidth={1.5} />;
      case "Workflow": return <Workflow className="w-7 h-7 text-tertiary animate-float-delayed" strokeWidth={1.5} />;
      case "Sparkles": return <Sparkles className="w-7 h-7 text-primary animate-float" strokeWidth={1.5} />;
      default: return <Blocks className="w-7 h-7 text-primary animate-float" strokeWidth={1.5} />;
    }
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className={`relative reveal rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-surface-container/50 to-surface-container-lowest border border-outline-variant/30 flex flex-col p-8 overflow-hidden group hover:-translate-y-1 transition-all duration-500 shadow-sm hover:shadow-xl ${card.className || ""}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Glassmorphism Hover Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,_50%)_var(--mouse-y,_50%),_rgba(203,233,217,0.15)_0%,_transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Icon Area */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="w-14 h-14 rounded-[20px] bg-gradient-to-tr from-secondary-container/40 to-surface-container border border-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
          {getIcon(card.icon)}
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10 flex-grow flex flex-col justify-end">
        <h3 className="font-headline-sm text-2xl md:text-3xl text-on-background mb-3 group-hover:text-primary transition-colors duration-300">
          {card.title}
        </h3>
        
        <p className="font-body-md text-secondary leading-relaxed flex-grow text-justify">
          {card.description}
        </p>
      </div>
    </div>
  );
}
