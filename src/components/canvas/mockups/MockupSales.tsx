import { TrendingUp, UserCheck, ArrowRight } from "lucide-react";

export function MockupSales() {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between bg-inverse-surface">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-surface-container-highest/20 pb-4">
        <TrendingUp className="w-5 h-5 text-primary" />
        <div className="text-inverse-on-surface font-label-sm uppercase tracking-wider">
          Sales Pipeline Automation
        </div>
      </div>

      {/* Main Content - Kanban Board style */}
      <div className="flex-1 mt-4 grid grid-cols-2 gap-4">
        {/* Column 1 - Incoming */}
        <div className="flex flex-col gap-3">
          <div className="text-xs text-inverse-on-surface/60 font-mono mb-1">
            QUALIFIED LEADS (3)
          </div>
          <div className="bg-surface-container-highest/10 border border-surface-container-highest/30 rounded p-3 relative overflow-hidden animate-[pulse_3s_ease-in-out_infinite]">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary/80" />
            <div className="flex items-center gap-2 mb-2">
              <UserCheck className="w-4 h-4 text-primary/70" />
              <div className="text-xs text-inverse-on-surface">Auto-Scoring: 92%</div>
            </div>
            <div className="h-1 w-full bg-surface-container-highest/20 rounded mt-2">
              <div className="h-full bg-primary/50 w-[92%] rounded" />
            </div>
          </div>
          
          <div className="bg-surface-container-highest/10 border border-surface-container-highest/30 rounded p-3 relative overflow-hidden opacity-50">
             <div className="absolute top-0 left-0 w-1 h-full bg-primary/40" />
             <div className="text-xs text-inverse-on-surface">Lead: Contact Form</div>
          </div>
        </div>

        {/* Column 2 - Automated Contact */}
        <div className="flex flex-col gap-3 border-l border-surface-container-highest/20 pl-4 relative">
          <div className="text-xs text-inverse-on-surface/60 font-mono mb-1">
            AI ENGAGEMENT
          </div>
          <div className="bg-surface-container-highest/10 border border-primary/30 rounded p-3 transform transition-transform duration-500 hover:translate-x-1 hover:-translate-y-1">
            <div className="flex justify-between items-center mb-2">
              <div className="text-xs text-inverse-on-surface">Email Drafted</div>
              <ArrowRight className="w-3 h-3 text-primary" />
            </div>
            <div className="text-[10px] text-inverse-on-surface/70 line-clamp-2">
              "Hi there, noticed your interest in our solutions. Are you free for a 10 min sync on..."
            </div>
          </div>
          <div className="text-xs text-primary/80 flex items-center gap-2 mt-auto pb-2">
             <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
             Awaiting Human Approval
          </div>
        </div>
      </div>
    </div>
  );
}
