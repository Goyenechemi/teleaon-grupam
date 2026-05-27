import { MessageSquare } from "lucide-react";

export function MockupCS() {
  return (
    <div className="w-full h-full p-6 flex flex-col justify-between bg-inverse-surface">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-surface-container-highest/20 pb-4">
        <div className="flex items-center gap-3">
          <MessageSquare className="w-5 h-5 text-primary" />
          <div className="text-inverse-on-surface font-label-sm uppercase tracking-wider">
            AI Support Agent
          </div>
        </div>
        <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded text-xs text-primary border border-primary/20">
          <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          Online
        </div>
      </div>

      {/* Main Content - Video */}
      <div className="flex-1 mt-4 relative rounded border border-surface-container-highest/20 overflow-hidden bg-black/50">
        <video 
          src="/videos/ContactSales.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        {/* Subtle overlay for styling */}
        <div className="absolute top-2 right-2 flex gap-1 items-center bg-black/40 px-2 py-1 rounded">
           <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
           <div className="text-[9px] text-primary/80 font-mono">LIVE</div>
        </div>
      </div>
    </div>
  );
}
